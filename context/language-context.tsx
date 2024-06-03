"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { CookiesProvider, useCookies } from "react-cookie"

export type Language = "en" | "kr"

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
    window.location.reload()
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
