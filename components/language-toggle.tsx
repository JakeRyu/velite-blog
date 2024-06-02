"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { Globe } from "lucide-react"
import { Language, useLanguage } from "@/context/language-context"

export function LanguageToggle() {
  const { selectLanguage } = useLanguage()

  const setLanguage = (lang: Language) => {
    selectLanguage(lang)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-10 px-0">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("kr")}>
          Korean
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
