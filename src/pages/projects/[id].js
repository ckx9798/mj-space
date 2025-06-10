import { ExternalLink, FolderGit2 } from "lucide-react";

import GlobalNomad from "@/projects/GlobalNomad";
import Image from "next/image";
import MomodalLibrary from "@/projects/MomodalLibrary";
import { PROJECT_LIST } from ".";
import SaveLinks from "@/projects/SaveLinks";
import { useRouter } from "next/router";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== "string") return null;

  const project = PROJECT_LIST.find((p) => String(p.id) === id);
  const isTeam = project.type === "team";

  if (!project) return <p>존재하지 않는 프로젝트입니다.</p>;

  // 🔽 id에 따라 추가 컴포넌트 결정
  const renderExtraComponent = () => {
    switch (id) {
      case "1":
        return <SaveLinks />;
      case "2":
        return <MomodalLibrary />;
      case "3":
        return <GlobalNomad />;
      case "4":
        return <MomodalLibrary />;
      case "5":
        return <MomodalLibrary />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-800/30 p-2 shadow-md transition hover:shadow-xl md:p-8">
      <div className="relative w-full overflow-hidden rounded-3xl border border-white/20 bg-white/70 p-0 shadow-2xl backdrop-blur-xl hover:animate-glowPulse md:hover:scale-105">
        {/* 배경 이미지 */}
        {project.img && (
          <div className="absolute inset-0 z-0">
            <Image
              src={project.img}
              alt={`${project.title} 대표 이미지`}
              fill
              className="h-full w-full object-contain opacity-15"
              //
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white to-white/30" />
            {/* via-white/70 */}
          </div>
        )}

        {/* 카드 내용 */}
        <div className="relative z-10 flex flex-col gap-2 p-6 sm:p-12 md:gap-6">
          {/* 제목 + 타입 + 링크 */}
          <div className="flex flex-wrap items-start justify-between gap-2 md:gap-4">
            <div className="space-y-1">
              <div className="mb-3 flex items-center gap-2">
                <FolderGit2 size={28} className="text-teal-400" />
                <h1
                  className="text-2xl font-bold tracking-tight text-gray-900 drop-shadow-sm sm:text-3xl"
                  style={{ fontFamily: "SF Pro, sans-serif" }}
                >
                  {project.title}
                </h1>
              </div>
              <p className="text-xs font-medium text-gray-500 sm:text-sm">
                {isTeam
                  ? `팀 프로젝트 (${project.members}인)`
                  : "개인 프로젝트"}
              </p>
            </div>
            <div className="flex gap-3">
              {project.site && (
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-blue-400 bg-white/30 px-3 py-1.5 text-xs font-semibold text-blue-600 shadow transition hover:bg-blue-50/60 sm:text-sm"
                >
                  <ExternalLink size={16} /> Live Site
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-gray-400 bg-white/30 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow transition hover:bg-gray-100/60 sm:text-sm"
                >
                  <FolderGit2 size={16} /> GitHub
                </a>
              )}
            </div>
          </div>

          {/* 설명 */}
          <p className="text-sm font-semibold leading-relaxed text-black drop-shadow-sm md:text-lg">
            {project.description}
          </p>

          {/* 기간 + 기술스택 */}
          <div className="flex flex-col items-start gap-4 border-t border-gray-200/60 pt-4">
            <div className="text-xs font-medium text-black sm:text-sm">
              <span className="font-semibold">📅 기간: </span>
              {project.duration}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-gradient-to-tr from-[#14b8a6] to-[#6366f1] px-2 py-1 text-xs font-semibold text-white shadow sm:text-sm md:px-3"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 프로젝트마다 다른 설명 */}
      <div className="mt-16">{renderExtraComponent()}</div>
    </div>
  );
}
