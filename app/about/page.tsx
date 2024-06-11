import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { siteConfig } from "@/config/site"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About | REFINED fullstack",
  description: "Information about me",
}

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div>
        <div className="text-muted-foreground text-lg py-4">
          <p className="mb-3">
            I was born and raised in South Korea, where I got my education and
            started my journey as a web developer. An exciting project with
            Hyundai Motor brought me to the UK, and now I happily live and work
            here as a full-stack developer.
          </p>

          <p className="mb-3">
            I&apos;ve been in web programming since 2000, and it&apos;s been
            amazing to see and be part of the evolution of web applications. My
            career has taken me through a variety of projects, from large-scale
            ERP systems to mobile investment apps for startups, with a strong
            focus on .NET-based projects.
          </p>

          <p className="mb-3">
            In my work, I love using{" "}
            <span className="italic font-medium">Clean Architecture</span> and{" "}
            <span className="italic font-medium">
              Domain-Driven Design (DDD)
            </span>{" "}
            principles. <span className="italic font-medium">Clean coding</span>{" "}
            and{" "}
            <span className="italic font-medium">
              Test-Driven Development (TDD)
            </span>{" "}
            are very important to me — they help me create reliable and
            maintainable software.
          </p>

          <p className="mb-3">
            When I&apos;m not coding, I enjoy watching English Premier League
            (EPL) matches. I also love attending developer conferences and
            diving into a good book, whether it&apos;s a novel or a
            self-improvement guide.
          </p>
          <p className="text-xl mt-9 text-blue-400">
            <Link href="https://portfolio.jakeryu.com" target="_blank">
              PORTFOLIO →
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
