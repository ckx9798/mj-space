import { ChevronRight, Milestone, UserCheck2 } from "lucide-react";

import RecentPosts from "./RecentPost";

const Main = () => {
  return (
    <div className="flex h-screen max-w-7xl flex-col items-center justify-center gap-20">
      <div className="mb-10 flex w-full flex-col items-start gap-5">
        <UserCheck2 className="size-9 text-teal-300" />
        <h1 className="w-full break-keep text-5xl font-semibold md:text-6xl">
          김민준,
          <span className="mb-4 inline-block text-teal-200">FRONTEND</span>
          <br />
          DEVELOPER
        </h1>

        <p className="mt-5 text-sm leading-relaxed text-gray-600 md:text-base">
          전문성 있는 프론트엔드 개발자로 성장하고자 합니다! <br />
          트랜디 한 기술을 파악하고, 익숙해지는 것에 전념하고 있습니다. <br />
        </p>

        <div className="flex gap-8">
          <button
            className="mt-4 flex w-[140px] items-center justify-between rounded-full border border-indigo-200 p-3 text-xs"
            onClick={() => window.open("https://github.com/ckx9798", "_blank")}
          >
            GitHub
            <ChevronRight size={12} />
          </button>
          <button
            className="mt-4 flex w-[140px] items-center justify-between rounded-full border border-indigo-200 p-3 text-xs"
            onClick={() =>
              window.open("https://velog.io/@ckx9798/posts", "_blank")
            }
          >
            Blog
            <ChevronRight size={12} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-10 pb-20">
        <div className="mt-5 space-y-2">
          <h3 className="mb-3 flex items-center gap-2 pb-2 text-sm font-medium tracking-wider">
            <Milestone size={20} />
            <span className="text text-shadow-[0_5px_30px_rgba(99,102,241,0.25)] text-foreground/80 flex gap-2 text-[11px]">
              블로그 포스팅
            </span>
            <ChevronRight
              size={15}
              className="text-foreground/30 ml-auto opacity-50 transition-all group-hover:opacity-100"
            />
          </h3>

          <RecentPosts />
        </div>
      </div>
    </div>
  );
};

export default Main;
