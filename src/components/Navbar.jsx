import { Menu, X } from "lucide-react";
import React, { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const handleNavClick = () => {
    setToggle(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="z-50 w-screen bg-black py-4 text-white shadow-md sm:opacity-95">
      <div className="mx-auto flex w-full items-center justify-between px-4 md:px-16">
        {/* 로고 */}
        <Link
          href="/"
          className="text-xl font-bold md:text-2xl"
          onClick={handleNavClick}
        >
          🌍 MJ` Portfolio
        </Link>

        {/* 데스크탑 메뉴 */}
        <DesktopMenu pathname={pathname} />

        {/* 모바일 햄버거 버튼 */}
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
      <MobileMenu
        toggle={toggle}
        onClose={handleNavClick}
        pathname={pathname}
      />
    </nav>
  );
};

const DesktopMenu = ({ pathname }) => {
  return (
    <ul className="hidden gap-10 sm:flex">
      {navLinks.map((nav) => {
        const isActive = pathname?.startsWith(`/${nav.id}`);
        return (
          <li
            key={nav.id}
            className={`relative cursor-pointer pb-4 text-lg font-semibold uppercase tracking-widest transition-colors duration-300 ${
              isActive ? "text-french" : "text-gray-400"
            } hover:text-teal-500`}
          >
            <Link href={`/${nav.id}`}>{nav.title}</Link>
            <img
              src="/nav_active.svg"
              alt="nav-active"
              className={`absolute -bottom-1 left-1/2 hidden -translate-x-1/2 transition-opacity duration-300 md:block ${
                isActive ? "md:opacity-100" : "md:opacity-0"
              }`}
              style={{ width: 100, height: 20 }}
            />
          </li>
        );
      })}
    </ul>
  );
};

const MobileMenu = ({ toggle, onClose, pathname }) => {
  return (
    <div
      className={`absolute right-6 z-50 mt-2 w-28 overflow-hidden rounded-lg bg-black px-6 py-4 shadow-lg transition-all duration-300 ease-in-out sm:hidden ${
        toggle ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <ul className="space-y-4">
        {navLinks.map((nav) => {
          const isActive = pathname?.startsWith(`/${nav.id}`);
          return (
            <li
              key={nav.id}
              className={`cursor-pointer text-lg font-semibold tracking-wide transition-colors duration-300 ${
                isActive ? "text-teal-400" : "text-white"
              } hover:text-teal-500`}
              onClick={onClose}
            >
              <Link href={`/${nav.id}`}>{nav.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
