import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

export default function ContactFooterMessage() {
  return (
    <motion.p
      variants={fadeIn("", "", 0.2, 1)}
      className="mt-10 text-center text-sm leading-relaxed text-gray-500"
    >
      포트폴리오에 관심 가져주셔서 감사합니다.
      <br />
      궁금한 점이나 제안하고 싶은 프로젝트가 있다면 <br />
      언제든지 편하게 연락해주세요 🍀
    </motion.p>
  );
}
