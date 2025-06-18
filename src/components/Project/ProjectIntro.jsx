import { fadeIn, textVariant } from "@/utils/motion";

import { FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectIntro() {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div variants={textVariant()}>
        <FolderGit2 size={40} className="mb-2 text-teal-300" />
        <p className="text-sm text-gray-400">Recent Works</p>
        <h2 className="text-4xl font-extrabold leading-relaxed text-white">
          Projects
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mb-12 mt-2 text-sm leading-loose text-white"
      >
        <span>
          부트캠프 / 인턴 프로젝트에서 백엔드, 디자이너와 협업을 통해 실제
          서비스 개발 프로세스를 경험하며 <br />
          역할 간 커뮤니케이션과 협업 방법을 익히고,
        </span>
        <br />
        <span>개인 프로젝트를 통해</span>
        <span>
          프로젝트 기획부터 개발, 배포까지 End-to-End 경험을 쌓으며 서비스 전체
          흐름 이해하며,
          <br />
          <br />
          <strong className="text-blue-300">
            스스로 성장하고 문제를 해결하는 역량
          </strong>
          <span>을 꾸준히 키워오고 있습니다.</span>
        </span>
      </motion.p>
    </motion.section>
  );
}
