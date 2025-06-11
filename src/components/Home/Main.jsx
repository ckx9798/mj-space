import { ChevronRight, Milestone } from "lucide-react";

import RecentPosts from "./RecentPost";
import { useState } from "react";

const Main = () => {
  return (
    <div className="flex h-screen flex-col justify-center gap-20 text-white md:-mt-10">
      <div className="flex flex-col gap-5">
        <IntroSection />
        <PostToggleButton />
      </div>
    </div>
  );
};

const IntroSection = () => {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="w-full max-w-3xl">
        <div className="ml-2 flex items-center">
          <hr className="mr-1 w-6 border-teal-300 md:w-20" />
          <h4 className="mb-3 block text-sm text-teal-300 md:text-lg">
            who is he?
          </h4>
        </div>

        <h1 className="mb-4 break-keep text-4xl font-semibold text-white md:text-6xl">
          김민준
          <br />
          <span className="my-4 inline-block text-teal-400 md:ml-2">
            FRONTEND DEVELOPER
          </span>
        </h1>

        <span>"새로움에 도전하는 프론트엔드 개발자."</span>

        <p className="mb-10 text-sm leading-loose text-[#b0b3c6] md:text-xl">
          <br />
          직관적이고 아름다운 UI/UX를 구현하며, 최신 웹 트렌드와 기술을 빠르게
          습득합니다.
          <br />
          기술과 소통의 균형을 통해 차별화된 경험을 만듭니다.
        </p>
      </div>
    </div>
  );
};

const PostToggleButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePost = () => setIsOpen((prev) => !prev);

  const buttonClassName = `
    flex w-full rounded-lg border border-white/90 px-8 py-5 
    text-sm font-semibold text-white/90 transition hover:scale-105 
    hover:animate-glowPulse sm:w-[360px]
  `;

  return (
    <div className="flex flex-col pb-20">
      <div className="space-y-2">
        <div className="relative">
          <button className={buttonClassName} onClick={togglePost}>
            <Milestone size={20} className="mr-2" />
            주요 블로그 포스팅 보기
            <ChevronRight
              size={15}
              className="text-foreground/30 ml-auto mt-1 opacity-50 transition-all group-hover:opacity-100"
            />
          </button>

          {isOpen && (
            <div className="absolute left-0 top-full z-10 mt-8 w-full">
              <RecentPosts />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
