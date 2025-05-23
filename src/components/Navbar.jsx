import React, { useState } from "react";

import Link from "next/link";

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

  return (
    <nav
      className={`xxs:h-[12vh] z-20 flex w-full items-center bg-flashWhite py-2 sm:opacity-[0.97]`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-2 text-black"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          MJ` Portfolio
        </Link>
        <ul className="mt-2 flex flex-row gap-14">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-french" : "text-eerieBlack"
              } nav-links cursor-pointer text-2xl font-semibold uppercase tracking-[3px] hover:text-taupe`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
