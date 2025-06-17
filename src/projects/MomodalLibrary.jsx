import ReactMarkdown from "react-markdown";
import markdown from "@/md/momodal.md";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function MomodalLibrary() {
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
