import { Download } from "lucide-react";

export default function ResumeDownloadButton() {
  return (
    <a
      href="/resume.pdf"
      download
      className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-teal-400 to-blue-400 px-6 py-3 font-semibold text-white shadow transition hover:scale-[1.03] hover:shadow-lg"
    >
      <Download size={20} />
      이력서 다운로드
    </a>
  );
}
