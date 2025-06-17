import { ExternalLink, FolderGit2 } from "lucide-react";

export default function ProjectDetailHeader({ project, isTeam }) {
  return (
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
          {isTeam ? `팀 프로젝트 (${project.members}인)` : "개인 프로젝트"}
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
  );
}
