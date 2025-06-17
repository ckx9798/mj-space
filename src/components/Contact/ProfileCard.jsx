import React from "react";

const ProfileCard = ({
  avatar = "https://randomuser.me/api/portraits/men/75.jpg",
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact",
}) => {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-blue-700 via-purple-700 to-teal-400">
    <div className="relative w-80 max-w-xs overflow-hidden rounded-3xl border border-white/30 bg-white/20 shadow-2xl backdrop-blur-lg transition-transform duration-500 hover:scale-105">
      {/* Glassmorphism background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-200/40 via-white/30 to-blue-200/40" />

      {/* 프로필 이미지 */}
      <div className="mt-6 flex justify-center">
        <img
          src={avatar}
          alt={name}
          className="z-10 h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg"
        />
      </div>

      {/* 사용자 정보 */}
      <div className="relative z-10 mb-6 mt-4 flex flex-col items-center">
        <h3 className="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent text-white">
          {name}
        </h3>
        <p className="text-base font-semibold text-white/80">{title}</p>
        <span className="text-sm text-white/60">@{handle}</span>
        <span className="mt-1 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs text-white/80">
          {status}
        </span>
      </div>

      {/* Contact 버튼 */}
      <div className="mb-6 flex justify-center">
        <button className="rounded-full border border-white/30 bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-2 font-semibold text-white shadow-md backdrop-blur-sm transition hover:scale-105">
          {contactText}
        </button>
      </div>
    </div>
    // </div>
  );
};

export default ProfileCard;
