import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Milestone } from "lucide-react";

import GradientText from "../Animation/Bits/GradientText";
import RecentPosts from "./RecentPost";
import { useRouter } from "next/router";
import { useState } from "react";

const Main = () => {
  return (
    <div className="mb-32 flex h-screen flex-col justify-center gap-20 text-white md:-mt-10">
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
        <div className="mb-4 ml-2 flex items-center">
          <hr className="mr-1 mt-4 w-3 border-teal-300 md:w-20" />
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={4}
            className="custom-class"
          >
            who is he?
          </GradientText>
        </div>

        <h1 className="mb-4 break-keep text-4xl font-semibold text-white md:mb-8 md:text-6xl">
          김민준
          <br />
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={4}
            className="custom-class"
          >
            FRONTEND DEVELOPER
          </GradientText>
        </h1>

        <span className="text-md md:text-xl">
          "할 줄 아는 것보다, 할 수 있게 되는 과정을 즐기는 개발자"
        </span>

        <p className="mb-10 text-sm leading-loose text-[#b0b3c6] md:text-lg">
          <br />
          작은 불편을 기술로 해결하고, 더 나은 제품을 만들어가는 과정에 관심이
          많습니다.
          <br />
          ‘처음이라서 못 한다’는 말보단, ‘필요하니 해본다’는 태도를 지향합니다.
        </p>
      </div>
    </div>
  );
};

const PostToggleButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const router = useRouter();

  const togglePost = () => setIsOpen((prev) => !prev);

  const handleMoveClick = () => {
    setIsFlying(true);

    setTimeout(() => {
      router.push("/about");
    }, 800);
  };

  const buttonClassName = `
    flex w-full rounded-lg border border-white/90 md:px-8 md:py-7 items-center px-2
    text-sm font-semibold text-white/90 transition hover:scale-105 
    animate-glowPulse sm:w-[360px] hover:text-teal-400
  `;

  return (
    <div className="flex flex-col pb-20">
      <div className="space-y-2">
        <div className="relative">
          <div className="flex gap-12">
            {/* 블로그 토글 버튼 */}
            <button className={buttonClassName} onClick={togglePost}>
              <Milestone size={20} className="mr-2" />
              주요 블로그 포스팅 보기
              <ChevronRight
                size={15}
                className="text-foreground/30 ml-auto mt-1 opacity-50 transition-all group-hover:opacity-100"
              />
            </button>

            {/* 비행기 이동 버튼 */}
            <motion.span
              animate={
                isFlying ? { x: 1300, y: -800, opacity: 1, rotate: -25 } : {}
              }
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* 반짝이는 불빛 */}
              <div className="absolute bottom-6 left-1/2 z-0 h-7 w-7 -translate-x-1/2 animate-glowPulse rounded-full bg-teal-400 blur-sm"></div>

              {/* 로켓 */}
              <div
                className="relative z-10 flex cursor-pointer rounded-full border-none px-4 py-5 text-3xl transition hover:scale-125"
                onClick={handleMoveClick}
              >
                🚀
              </div>
            </motion.span>
          </div>

          {/* 블로그 포스트 토글 영역 */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-full z-10 mt-8 w-full"
              >
                <RecentPosts />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Main;
