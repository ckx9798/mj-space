import Image from "next/image";
import { SKILLS } from "./constants";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

export default function AboutSkills() {
  return (
    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 w-full text-[18px] leading-[30px] text-flashWhite"
    >
      {SKILLS.map((skill, sIdx) => (
        <div key={sIdx} className="mb-6 w-full rounded-2xl bg-gray-800/30 p-6">
          <div className="mb-6 flex items-center gap-3">
            <Image src={skill.icon} alt={skill.title} width={30} height={30} />
            <h3 className="text-xl font-semibold">{skill.title}</h3>
          </div>

          <div className="w-full space-y-6 px-7">
            {skill.categories.map((cat, cIdx) => (
              <div key={cIdx}>
                <div className="-ml-2 mb-3 flex items-center">
                  <span className="mr-2 inline-block rounded-full bg-blue-300 px-1.5 py-0.5 text-xs font-medium text-gray-800">
                    {cIdx + 1}
                  </span>
                  <h4 className="text-base font-semibold text-blue-200">
                    {cat.name}
                  </h4>
                </div>

                <ul className="text-secondary-foreground/90 ml-5 w-full list-inside list-disc space-y-1 text-xs">
                  {cat.items.map((item, iIdx) => (
                    <li
                      key={iIdx}
                      className="flex items-start gap-2 transition-colors hover:text-white"
                    >
                      <span className="font-mono text-blue-200">
                        {cIdx + 1}.{iIdx + 1}
                      </span>
                      <span
                        className="flex-1"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
