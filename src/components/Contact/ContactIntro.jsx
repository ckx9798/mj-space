import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

export default function ContactIntro() {
  return (
    <motion.div variants={textVariant()} className="mb-10 text-center">
      <div className="relative w-80 max-w-xs overflow-hidden rounded-3xl transition-transform duration-500">
        <div className="pointer-events-none absolute inset-0" />

        {/* 프로필 이미지 */}
        <div className="mt-6 flex justify-center">
          <img
            src="/김민준.webp"
            alt="프로필"
            className="z-10 h-56 w-56 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* 사용자 정보 */}
        <div className="relative z-10 mb-6 mt-4 flex flex-col items-center">
          <h3 className="mb-2 bg-gradient-to-r from-teal-300 via-blue-300 to-blue-400 bg-clip-text text-2xl font-bold text-transparent text-white">
            김 민 준
          </h3>
          <p className="text-base font-semibold text-white/80">
            FrontEnd Developer
          </p>
        </div>
      </div>
    </motion.div>
  );
}
