import { PROJECT_LIST } from "@/components/Project/constants";
import ProjectDetailExtra from "@/components/Detail/ProjectDetailExtra";
import ProjectDetailHeader from "@/components/Detail/ProjectDetailHeader";
import ProjectDetailMeta from "@/components/Detail/ProjectDetailMeta";
import { useRouter } from "next/router";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== "string") return null;

  const project = PROJECT_LIST.find((p) => String(p.id) === id);
  const isTeam = project?.type === "team";

  if (!project) return <p>존재하지 않는 프로젝트입니다.</p>;

  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-800/30 p-2 shadow-md transition hover:shadow-xl md:p-8">
      <div className="relative w-full animate-glowPulse overflow-hidden rounded-3xl border border-white/20 bg-white/90 p-0 shadow-2xl backdrop-blur-xl">
        {/* 카드 내용 */}
        <div className="relative z-10 flex flex-col gap-2 p-6 md:gap-6">
          <ProjectDetailHeader project={project} isTeam={isTeam} />
          <ProjectDetailMeta project={project} />
        </div>
      </div>

      {/* 프로젝트마다 다른 설명 */}
      <ProjectDetailExtra id={id} />
    </div>
  );
}
