import FadeInAnimation from "../Animation/FadeInAnimation";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProjectItem({ project }) {
  const { id, img, title, tech = [], duration, description } = project;

  const router = useRouter();
  const handleClick = () => {
    router.push(`/projects/${id}`);
  };

  return (
    <FadeInAnimation>
      <div
        onClick={handleClick}
        className="mb-6 flex cursor-pointer flex-col gap-4 rounded-3xl border border-gray-900 bg-gray-800/30 px-2 py-4 shadow-md transition hover:scale-105 hover:animate-glowPulse md:flex-row md:gap-6 md:px-4 md:py-8"
      >
        {/* 이미지 섹션 */}
        <div className="relative h-[230px] w-full flex-shrink-0 overflow-hidden rounded-3xl bg-flashWhite md:h-[200px] md:w-[200px]">
          <Image
            src={img}
            alt="프로젝트 대표 이미지"
            fill
            className="rounded-lg object-none px-2 md:object-contain md:px-4"
            sizes="(max-width: 768px) 100vw, 200px"
          />
        </div>

        {/* 텍스트 섹션 */}
        <div className="flex w-full flex-col justify-between text-flashWhite">
          <div className="flex flex-col">
            <h2 className="w-full text-lg font-bold md:w-[400px] md:text-2xl">
              {title}
            </h2>
            <div className="my-2 text-sm md:text-base">🌱{description}</div>
          </div>

          <div className="flex flex-col gap-4">
            {/* 기술 스택 태그 */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tech.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-gray-600 bg-gray-700 px-1 py-1 font-mono text-[10px] text-blue-400 md:px-3 md:text-sm"
                >
                  {`#${skill}`}
                </span>
              ))}
            </div>

            {/* 진행 기간 */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md border border-gray-600 bg-gray-700 px-1 py-1 font-mono text-[10px] text-purple-300 md:px-3 md:text-sm">
                {`<${duration}>`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </FadeInAnimation>
  );
}
