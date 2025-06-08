import { Menu, X } from "lucide-react";
import React, { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="z-20 w-screen bg-black py-2 text-white shadow-md sm:opacity-95">
      <div className="mx-auto flex w-full items-center justify-between px-6 md:px-16">
        {/* 로고 */}
        <Link
          href="/"
          className="text-2xl font-bold"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          MJ` Portfolio
        </Link>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden gap-10 sm:flex">
          {navLinks.map((nav) => {
            // 현재 pathname이 nav의 href로 시작하면 active
            const isActive = pathname.startsWith(`/${nav.id}`);

            return (
              <li
                key={nav.id}
                className={`relative cursor-pointer text-lg font-semibold uppercase tracking-widest hover:text-teal-500 ${isActive ? "text-french" : "text-gray-400"} pb-4 transition-colors duration-300`}
              >
                <Link href={`/${nav.id}`}>{nav.title}</Link>
                {/* 활성화된 메뉴에만 체크 이미지 표시 */}
                <img
                  src="/nav_active.svg"
                  alt="nav-active"
                  className={`absolute -bottom-1 left-1/2 hidden -translate-x-1/2 transition-opacity duration-300 md:block ${isActive ? "md:opacity-100" : "md:opacity-0"} `}
                  style={{ width: 100, height: 20 }}
                />
              </li>
            );
          })}
        </ul>

        {/* 모바일 햄버거 메뉴 버튼 */}
        <div className="sm:hidden">
          {toggle ? (
            <X
              size={28}
              onClick={() => setToggle(false)}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setToggle(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`absolute right-6 mt-2 w-28 overflow-hidden rounded-lg bg-black px-6 py-4 shadow-lg transition-all duration-300 ease-in-out sm:hidden ${
          toggle ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="cursor-pointer text-lg font-semibold tracking-wide text-white hover:text-teal-500"
              onClick={() => {
                setActive(nav.title);
                setToggle(false);
              }}
            >
              <Link href={`${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
