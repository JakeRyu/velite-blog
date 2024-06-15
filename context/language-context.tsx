"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { CookiesProvider, useCookies } from "react-cookie"
import {
  getLastPathSegment,
  isAboutUrl,
  isBlogPageUrl,
  isBlogUrl,
  isHomeUrl,
  isTagPageUrl,
  isTagsUrl,
  stripQueryParameters,
} from "@/lib/utils"

export type Language = "en" | "ko"

type LanguageContextProviderProps = {
  children: React.ReactNode
}

type LanguageContextType = {
  language: Language
  selectLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [cookies, setCookie] = useCookies(["language"])
  const [language, setLanguage] = useState<Language>("en")

  const selectLanguage = (lang: Language) => {
    setCookie("language", lang, {
      path: "/",
      expires: new Date("Fri, 31 Dec 9999 23:59:59 GMT"),
    })
    setLanguage(lang)

    reload(lang)
  }

  const reload = (lang: Language) => {
    const url = window.location.href

    if (isBlogUrl(url)) {
      const urlWithoutQuery = stripQueryParameters(url)
      if (urlWithoutQuery == null) {
        console.error("Failed to strip query parameters")
        return
      }

      window.location.href = urlWithoutQuery
      return
    }

    if (
      isTagsUrl(url) ||
      isTagPageUrl(url) ||
      isHomeUrl(url) ||
      isAboutUrl(url)
    ) {
      window.location.reload()
      return
    }

    if (isBlogPageUrl(url)) {
      const currentUrl = window.location.href
      const lastPathSegment = getLastPathSegment(currentUrl)

      if (lastPathSegment == null) {
        console.error("Failed to get last path segment")
        return
      }

      let redirectUrl = ""
      if (lang === "en") {
        // strip off '-ko'
        const koRemoved = lastPathSegment.replace("-ko", "")
        redirectUrl = currentUrl.replace(lastPathSegment, koRemoved)
      } else if (lang === "ko") {
        // add '-kr'
        const koAdded = lastPathSegment + "-ko"
        redirectUrl = currentUrl.replace(lastPathSegment, koAdded)
      }

      window.location.href = redirectUrl
    }
  }

  const setDefaultLanguage = () => {
    setCookie("language", "en", {
      path: "/",
      expires: new Date("Fri, 31 Dec 9999 23:59:59 GMT"),
    })
    setLanguage("en")
  }

  useEffect(() => {
    const localLanguage = cookies.language as Language | null

    if (localLanguage) {
      setLanguage(localLanguage)
    } else {
      setDefaultLanguage()
    }
  }, [])

  return (
    <CookiesProvider>
      <LanguageContext.Provider
        value={{
          language,
          selectLanguage,
        }}
      >
        {children}
      </LanguageContext.Provider>
    </CookiesProvider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider")
  }

  return context
}
