import { Mail, PhoneForwarded } from "lucide-react";

import { useState } from "react";

const PHONE_NUMBER = "010-9798-3108";
const EMAIL = "ckx9798@gmail.com";

export default function ContactInfo() {
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
    </div>
  );
}
