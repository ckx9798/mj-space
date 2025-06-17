import { fadeIn, staggerContainer } from "@/utils/motion";

import Contact from "@/components/Contact/Contact";
import ContactFooterMessage from "@/components/Contact/ContactFooterMessage";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactIntro from "@/components/Contact/ContactIntro";
import ResumeDownloadButton from "@/components/Contact/ResumeDownloadButton";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <Contact />

      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mb-20 h-screen bg-inherit"
      >
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="sticky top-52 flex w-full max-w-lg animate-glowPulse flex-col items-center rounded-3xl bg-gray-800/30 p-4 text-white shadow-2xl backdrop-blur-lg hover:scale-105 md:p-10"
        >
          <ContactIntro />
          <ContactInfo />
          <ResumeDownloadButton />
          <ContactFooterMessage />
        </motion.div>
      </motion.section>
    </>
  );
}
