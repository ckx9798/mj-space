import AboutCertifications from "@/components/About/AboutCertifications";
import AboutEducation from "@/components/About/AboutEducation";
import AboutIntro from "@/components/About/AboutIntro";
import AboutSkills from "@/components/About/AboutSkills";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

export default function AboutPage() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <AboutIntro />
      <AboutSkills />
      <div className="mt-20 flex flex-wrap gap-10">
        <AboutEducation />
        <AboutCertifications />
      </div>
    </motion.section>
  );
}
