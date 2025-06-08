import { Download, Mail, PhoneForwarded } from "lucide-react";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";

import { motion } from "framer-motion";
import { useState } from "react";

const PHONE_NUMBER = "010-9798-3108";
const EMAIL = "ckx9798@gmail.com";

const ContactPage = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_NUMBER);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 1200);
    } catch (err) {
      alert("복사에 실패했습니다.");
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 1200);
    } catch (err) {
      alert("복사에 실패했습니다.");
    }
  };

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="h-screen bg-inherit"
    >
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="sticky top-40 flex w-full max-w-lg flex-col items-center rounded-3xl border border-white/60 bg-white/90 p-10 shadow-2xl backdrop-blur-lg hover:scale-105 hover:animate-glowPulse"
      >
        {/* 타이틀 영역 */}
        <motion.div variants={textVariant()} className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center">
            <PhoneForwarded
              size={46}
              className="text-teal-400 drop-shadow-lg"
            />
          </div>
          <p className="letter-spacing-[0.1em] mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Contact Me
          </p>
          <h2 className="mb-1 text-4xl font-bold tracking-tight text-gray-900">
            Let’s Talk
          </h2>
          <p className="text-sm font-light text-gray-500">
            빠른 연락을 원하신다면 아래 정보를 활용해 주세요.
          </p>
        </motion.div>

        {/* 연락처 정보 */}
        <div className="mb-8 w-full space-y-6">
          {/* 전화번호 */}
          <button
            type="button"
            onClick={handleCopyPhone}
            className="group flex w-full items-center gap-4 rounded-xl bg-gradient-to-r from-blue-50 to-white px-6 py-3 shadow transition hover:shadow-md focus:outline-none"
            aria-label="전화번호 복사"
          >
            <PhoneForwarded
              size={22}
              className="text-blue-400 transition group-hover:text-teal-400"
            />
            <span className="font-mono text-base tracking-wider text-gray-800 underline transition group-hover:text-teal-500">
              {PHONE_NUMBER}
            </span>
            {copiedPhone && (
              <span className="animate-fade-in ml-auto text-xs text-teal-500">
                복사됨!
              </span>
            )}
          </button>
          {/* 이메일 */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="group flex w-full items-center gap-4 rounded-xl bg-gradient-to-r from-blue-50 to-white px-6 py-3 shadow transition hover:shadow-md focus:outline-none"
            aria-label="이메일 복사"
          >
            <Mail
              size={22}
              className="text-blue-400 transition group-hover:text-teal-400"
            />
            <span className="font-mono text-base tracking-wider text-gray-800 underline transition group-hover:text-teal-500">
              {EMAIL}
            </span>
            {copiedEmail && (
              <span className="animate-fade-in ml-auto text-xs text-teal-500">
                복사됨!
              </span>
            )}
          </button>
          {/* 이력서 다운로드 */}
          <a
            href="/resume.pdf"
            download
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-teal-400 to-blue-400 px-6 py-3 font-semibold text-white shadow transition hover:scale-[1.03] hover:shadow-lg"
          >
            <Download size={20} />
            이력서 다운로드
          </a>
        </div>

        {/* 안내 메시지 */}
        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className="text-center text-sm leading-relaxed text-gray-500"
        >
          포트폴리오에 관심 가져주셔서 감사합니다.
          <br />
          궁금한 점이나 제안하고 싶은 프로젝트가 있다면 <br />
          언제든지 편하게 연락해주세요 🍀
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default ContactPage;
