import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "@/utils/motion";

import { FolderGit2 } from "lucide-react";
import ProjectItem from "@/components/ProjectItem";
import React from "react";
import { motion } from "framer-motion";

export const PROJECT_LIST = [
  {
    id: 1,
    img: "/project/SaveLinks.svg",
    title: "SaveLinks",
    tech: [
      "React",
      "TypeScript",
      "TanStack-Query",
      "Chorom-storage",
      "Tailwind-CSS",
    ],
    duration: "2024.01 ~ 2024.05",
    type: "personal",
    description:
      "유튜브, 인스타 등 숏폼 영상을 저장하여 한 페이지에서 관리하는 크롬 익스텐션",
    site: "https://www.savelinks.xyz",
    github: "https://github.com/ckx9798/SaveLinks",
  },
  {
    id: 2,
    img: "/project/momodal.svg",
    title: "momodal-library",
    tech: ["React", "TypeScript", "TanStack-Query", "NPM"],
    duration: "2024.01 ~ 2024.05",
    type: "personal",
    description:
      "알림 모달, 디자인 모달 등 다양한 모달 컴포넌트를 제공하는 React UI 라이브러리",
    // "재사용성을 고려한 기본 모달, Toast 알림 모달, 디자인 모달 등 다양한 모달 컴포넌트를 제공하는 React UI 라이브러리",
    site: "https://www.npmjs.com/package/momodal-library",
    github: "https://github.com/ckx9798/momodal-library",
  },
  {
    id: 3,
    img: "/project/GlobalNomad.svg",
    title: "GlobalNomad",
    tech: ["Next.js", "TypeScript", "TanStack-Query", "Zustand"],
    duration: "2024.01 ~ 2024.05",
    type: "team",
    members: 4,
    description:
      "원데이클래스, 액티비티 등 각종 체험을 등록하고 예약기능을 제공하는 웹사이트",
    site: "https://globalnomad.vercel.app/",
    github: "https://github.com/mungyun/globalnomad",
  },
  {
    id: 4,
    img: "/project/Taskify.svg",
    title: "Taskify",
    tech: ["Next.js", "TypeScript", "TanStack-Query"],
    duration: "2024.11 ~ 2025.01",
    type: "team",
    members: 4,
    description:
      "원데이클래스, 액티비티 등 각종 체험을 등록하고 예약기능을 제공하는 웹사이트",
    site: "https://taskify-sepia.vercel.app/login",
    github: "https://github.com/FE9-4Tential/Taskify",
  },
  {
    id: 5,
    img: "/project/FandomK.svg",
    title: "FandomK",
    tech: ["React", "JavaScript", "Vite"],
    duration: "2024.08 ~ 2024.09",
    type: "team",
    members: 5,
    description:
      "크레딧으로 좋아하는 아이돌에게 인기투표, 후원하고 실시간 차트를 확인 할 수 있는 웹사이트",
    site: "https://fandom-k-9-4.netlify.app/",
    github: "https://github.com/ChungO5/Fandom-K",
  },
];

export default function ProjectPage() {
  return (
    <div>
      <motion.section
        variants={staggerContainer()}
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
            서비스 개발 프로세스를 경험하며 역할 간 커뮤니케이션과 협업 방법을
            익히고,{" "}
          </span>
          <span>개인 프로젝트를 통해</span>
          <span>
            프로젝트 기획부터 개발, 배포까지 End-to-End 경험을 쌓으며 서비스
            전체 흐름 이해하며,
            <br />
            <strong className="text-blue-300">
              스스로 성장하고 문제를 해결하는 역량을 꾸준히 키워오고 있습니다
            </strong>
          </span>
        </motion.p>
      </motion.section>

      {PROJECT_LIST.map((project) => (
        <ProjectItem project={project} key={project.title} />
      ))}
    </div>
  );
}
