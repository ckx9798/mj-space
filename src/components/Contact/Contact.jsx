import { FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

export default function Contact() {
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
      className="mb-8"
    >
      <motion.div variants={textVariant()}>
        <FolderGit2 size={40} className="mb-2 text-teal-300" />
        <p className="text-sm text-gray-400">Minjun</p>
        <h2 className="text-4xl font-extrabold leading-relaxed text-white">
          Contact Me
        </h2>
      </motion.div>
    </motion.section>
  );
}
