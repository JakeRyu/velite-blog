import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { siteConfig } from "@/config/site"
import { Metadata } from "next"
import Link from "next/link"
import { getLanguageCookie } from "../serverUtils"

export const metadata: Metadata = {
  title: "About | REFINED fullstack",
  description: "Information about me",
}

function calculateYears(startYear: number): number {
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
}

export default async function AboutPage() {
  const language = getLanguageCookie()

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
        <div className="text-muted-foreground text-lg">
          {language === "en" ? (
            <div>
              <h2 className="text-black text-2xl font-bold mb-2">
                Hello there! Nice to meet you 😊
              </h2>
              <p className="mb-5">
                My name is Jake Ryu. I was born and raised in South Korea, where
                I began my journey as a software developer. It's been{" "}
                {`${calculateYears(2000)}`} years since I started. After gaining
                six years of experience in Korea, I moved to the UK to help
                build the local systems for Hyundai Motor Company. I have since
                settled here and am currently working as a Lead Developer at{" "}
                <a
                  className="font-semibold"
                  href="https://www.barnett-waddingham.co.uk/"
                  target="_blank"
                >
                  Barnett Waddingham
                </a>
                , a financial services company specializing in workplace
                pensions. I primarily work with{" "}
                <span className="font-bold">.NET</span> and{" "}
                <span className="font-bold">React</span> to create amazing
                projects.
              </p>
              <h2 className="text-black text-2xl font-bold mb-2">
                Interests and Philosophy
              </h2>
              <p className="mb-5">
                I have a keen interest in web and solution architecture. When
                designing backends, a solid architecture is crucial for
                providing stable services. The world of software presented
                through the browser also fascinates me. While the web has made
                tremendous strides in the past, it continues to evolve rapidly.
                For instance, the choice of Next.js to overcome some of React’s
                limitations is a testament to the fast pace of web development.
                In this ever-growing field, I strive to stay current with the
                latest technology trends and best practices.
              </p>
              <p className="mb-5">
                I believe that developers have a responsibility to implement
                requirements accurately and efficiently. We all know the
                importance of tests in enhancing code quality and minimizing
                errors. This is why I frequently utilise methodologies like{" "}
                <span className="font-bold">Clean Architecture</span> and{" "}
                <span className="font-bold">Domain-Driven Design (DDD)</span>.
                Clean Architecture simplifies testing by managing dependencies
                in a single direction, while DDD enhances the verification of
                business logic through clear domain models. These approaches
                help me write robust and maintainable code.
              </p>
              <h2 className="text-black text-2xl font-bold mb-2">
                Beyond Development
              </h2>
              <p className="mb-5">
                When I’m not coding, I enjoy watching English Premier League
                (EPL) matches. I also love reading novels and self-improvement
                books.
              </p>
              <h2 className="text-black text-2xl font-bold mb-2">
                Welcome to My Blog!
              </h2>
              <p className="mb-5">
                Through this blog, I aim to provide useful information and tips
                for everyone, from novice developers to seasoned professionals.
                If you have any questions or feedback, please feel free to reach
                out via email. I hope this space becomes a place where we can
                learn and grow together.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-black text-2xl font-bold mb-2">
                안녕하세요! 반갑습니다 😊
              </h2>
              <p className="mb-5">
                류지형 입니다. 대한민국에서 태어나고 자라며 소프트웨어
                개발자로서의 여정을 시작했습니다. 벌써 시작한 지{" "}
                {`${calculateYears(2000)}`}년이 되었네요. 한국에서 6년의 경험을
                하고 현대자동차의 현지법인 시스템 구축을 위해 영국에 와서
                정착하게 됐습니다. 현재는 직장연금을 주 상품으로 하는 금융
                서비스 회사{" "}
                <a href="https://www.barnett-waddingham.co.uk/">
                  Barnett Waddingham
                </a>
                에서 리드 개발자로 일하고 있어요. 주로{" "}
                <span className="font-bold">닷넷</span>과{" "}
                <span className="font-bold">리액트</span>를 사용하여 멋진
                프로젝트들을 만들어가고 있습니다.
              </p>
              <h2 className="text-black text-2xl font-bold mb-2">
                관심 분야와 철학
              </h2>
              <p className="mb-5">
                저는 웹과 솔루션 아키텍쳐에 관심이 많아요. 백엔드를 구성할 때,
                안정적인 서비스를 제공하기 위해선 아키텍쳐가 중요하죠. 브라우저
                안에서 표현하는 소프트웨어 세상도 흥미롭습니다. 과거에도 웹의
                발전은 눈부셨지만 근래에도 리액트의 단점을 보완하기 위해
                Nextjs를 선택하는 이유와 과정을 보면 웹 개발은 정말 빠르게
                발전하고 있다고 느낍니다. 이렇게 빨리 성장하는 분야에서 최신
                기술 트렌드와 베스트 프랙티스를 따라가며 꾸준이 성장하려고
                노력하고 있습니다.
              </p>
              <p className="mb-5">
                개발자는 요구사항을 정확하고 효율적으로 구현해야 하는 책임이
                있다고 생각해요. 코드 품질을 높이고 오류를 최소화하는 데
                테스트가 얼마나 중요한지는 누구나 알고 있죠. 그래서 저는{" "}
                <span className="font-bold">
                  클린 아키텍처(Clean Architecture)
                </span>
                와{" "}
                <span className="font-bold">
                  도메인 주도 설계(DDD, Domain-Driven Design)
                </span>
                와 같은 방법론을 많이 사용하고 있습니다. 클린 아키텍처는
                의존성을 한 방향으로 관리하여 테스트를 쉽게 하고, DDD는 명확한
                도메인 모델을 통해 비즈니스 로직을 더 잘 검증할 수 있도록
                합니다. 이 두 가지 방법론을 통해 저는 더 견고하고 유지보수하기
                쉬운 코드를 작성하려고 노력하고 있습니다.
              </p>
              <h2 className="text-black text-2xl font-bold mb-2">
                개발 외 이야기
              </h2>
              <p className="mb-5">
                코딩을 하지 않을 때는 잉글리시 프리미어리그(EPL) 경기를 보는
                것을 좋아합니다. 소설이나 자기 계발서를 읽는 것도 좋아합니다.
              </p>
              <h2 className="text-black text-2xl font-bold mb-2">
                블로그에 오신 것을 환영합니다!
              </h2>
              <p className="mb-5">
                이 블로그를 통해 초보 개발자부터 숙련된 개발자까지 모두에게
                도움이 될 수 있는 유용한 정보와 팁을 제공하고자 합니다. 질문이나
                의견이 있으시면 언제든지 이메일로 연락 주세요. 함께 배우고
                성장하는 공간이 되었으면 좋겠습니다.
              </p>
            </div>
          )}
          <p className="pt-5 text-black text-end">
            <Link
              className="mr-5"
              href="https://portfolio.jakeryu.com"
              target="_blank"
            >
              My Portfolio →
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
