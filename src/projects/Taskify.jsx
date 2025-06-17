import ReactMarkdown from "react-markdown";
import markdown from "@/md/taskify.md";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function Taskify() {
  return (
    <div className="prose prose-invert max-w-none text-white/90 prose-code:text-sm prose-pre:rounded-xl prose-pre:bg-[#1e1e1e] prose-pre:p-0">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
