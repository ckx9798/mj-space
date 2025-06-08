import Link from "next/link";
import cn from "@/utils/cn";
import { useRouter } from "next/router";

const NAV_ITEMS = [
  {
    label: "About",
    description: "Developer Profile",
    href: "/about",
    number: "01",
    isExternal: false,
  },
  {
    label: "Projects",
    description: "Recent Works",
    href: "/projects",
    number: "02",
    isExternal: false,
  },
  {
    label: "Contact",
    description: "to MJ",
    href: "/contact",
    number: "03",
    isExternal: false,
  },
  {
    label: "Github",
    description: "move",
    href: "https://github.com/ckx9798/",
    number: "04",
    isExternal: true,
  },
  {
    label: "Blog",
    description: "move",
    href: "https://velog.io/@ckx9798/posts",
    number: "05",
    isExternal: true,
  },
];

export default function SubNav() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="sticky top-52 hidden space-y-7 self-start opacity-100 transition-all md:block">
      {NAV_ITEMS.map(({ label, description, href, number, isExternal }) => {
        // isActive: 현재 경로가 href와 일치하거나, href로 시작하면서 바로 뒤에 '/'가 오는 경우
        const isActive =
          !isExternal && (pathname === href || pathname.startsWith(href + "/"));

        const linkContent = (
          <>
            {isActive && (
              <div className="absolute inset-0 -z-10 rounded-md bg-gradient-to-r from-indigo-300/20 via-indigo-400/20 to-transparent blur-md"></div>
            )}
            <div
              className={cn(
                "text-white/60 transition-colors duration-300",
                isActive && "font-bold text-teal-500",
              )}
            >
              {number}
            </div>
            <div>
              <div
                className={cn(
                  "mt-2 text-base font-medium transition-colors duration-300",
                  isActive ? "text-white" : "text-white/60",
                )}
              >
                {label}
              </div>
              <div className="mt-1 text-xs text-white opacity-40">
                {description}
              </div>
            </div>
          </>
        );

        return isExternal ? (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "relative flex cursor-pointer gap-2 transition-all duration-300",
              "opacity-40 hover:opacity-100",
            )}
          >
            {linkContent}
          </a>
        ) : (
          <Link
            key={label}
            href={href}
            className={cn(
              "relative flex cursor-pointer gap-2 transition-all duration-300",
              isActive ? "opacity-100" : "opacity-40 hover:opacity-100",
            )}
          >
            {linkContent}
          </Link>
        );
      })}
    </div>
  );
}
