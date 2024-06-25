import Image from "next/image"
import * as runtime from "react/jsx-runtime"
import { Callout } from "./callout"
import { cn } from "@/lib/utils"
import ExtLink from "./ext-link"

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

const components = {
  Image,
  Callout,
  ExtLink,
}

interface MdxProps {
  code: string
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
