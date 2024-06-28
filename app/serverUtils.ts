import { cookies } from "next/headers"

export function getLanguageCookie() {
  const cookieStore = cookies()
  const cookie = cookieStore.get("language")

  if (!cookie) {
    return "en"
  }

  return cookie.value
}
