import { fadeIn, textVariant } from "@/utils/motion";

import { UserRoundSearch } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <UserRoundSearch size={40} className="mb-2 text-teal-300" />
        <p className="text-sm text-gray-400">김민준 FRONTEND</p>
        <h2 className="text-4xl font-extrabold leading-relaxed text-white">
          ABOUT MJ
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mb-12 mt-2 text-sm leading-loose text-white"
      >
        <span>
          만든 것을 직접 사용하게 하는 경험까지가{" "}
          <strong className="text-blue-300">‘개발’</strong>이라고 생각합니다.
          <br />
          작은 불편을 기술로 해결하고, 더 나은 제품으로 연결해 나가는 과정에
          깊은 관심을 가지고 있습니다.
          <br />
        </span>
        <br />
        <span>
          당연한 것에도 <strong className="text-blue-300">질문</strong>을
          던지고, 지나치지 않는 태도로 꾸준히 배우고 성장하려고 합니다. <br />
          그런 성장의 기반 위에서
          <strong className="text-blue-300">
            {" "}
            질문을 통해 함께 배우고 성장하는 문화를 만드는 개발자
          </strong>
          가 되겠습니다.
        </span>
      </motion.p>
    </>
  );
}
