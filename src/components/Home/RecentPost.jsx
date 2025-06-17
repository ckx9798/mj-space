import { BLOG_POST_LIST } from "./constants";

export default function RecentPosts() {
  return (
    <div className="mb-20 grid gap-7 text-white md:grid-cols-3">
      {BLOG_POST_LIST.map((blogPost, idx) => (
        <a
          key={`post:${blogPost.post_id}:${idx}`}
          href={blogPost.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[220px] cursor-pointer flex-col gap-2 rounded-2xl border border-indigo-400/30 bg-gray-800/30 p-6 shadow-[0_4px_24px_0_rgba(80,200,255,0.15)] transition-all duration-300 hover:scale-[1.04] hover:border-cyan-400/60 hover:shadow-[0_0_40px_10px_rgba(80,200,255,0.30)]"
        >
          <h4 className="my-2 flex items-center gap-2 text-base font-bold tracking-tight group-hover:text-cyan-300 md:text-xl">
            <svg width="16" height="16" fill="none" className="text-cyan-300">
              <circle
                cx="8"
                cy="8"
                r="7"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle cx="8" cy="8" r="2" fill="currentColor" />
            </svg>
            {blogPost.post_title}
          </h4>
          <p className="mb-2 line-clamp-2 text-xs text-gray-300 md:text-lg">
            {blogPost.post_description}
          </p>
          <div className="mt-auto flex items-center gap-3">
            <span className="md:text-md rounded-full bg-gradient-to-r from-cyan-100 to-indigo-100 px-3 py-1 text-xs text-cyan-900 shadow-sm">
              {blogPost.sub_group_name}
            </span>
            <span className="text-xs text-gray-400 md:text-lg">
              {new Date(blogPost.created_at).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </span>

            {Date.now() - new Date(blogPost.created_at).getTime() <
              1000 * 60 * 60 * 24 * 7 && (
              <span className="ml-1 animate-pulse text-[11px] font-bold text-pink-400">
                NEW
              </span>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
