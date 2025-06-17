export default function ProjectDetailMeta({ project }) {
  return (
    <div className="flex flex-col items-start gap-6 border-t border-gray-200/60">
      <div className="text-xs font-medium text-black sm:text-sm">
        <span className="font-semibold">📅 기간: </span>
        {project.duration}
      </div>
      <div className="flex flex-wrap gap-3">
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
  );
}
