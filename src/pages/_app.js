import "@/styles/globals.css";
import "highlight.js/styles/github-dark.css";

import EarthGlobe from "@/components/Animation/EarthGlobe";
import Navbar from "@/components/Navbar";
import ShootingStars from "@/components/Animation/ShootingStars";
import SubNav from "@/components/SubNav";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <div className="relative">
      {/* 별똥별 배경 (최하단) */}
      <ShootingStars />

      {/* 콘텐츠 레이어 */}
      <div className="relative z-10">
        <Navbar />
        <div className="flex justify-center md:px-10 lg:gap-40 lg:px-0">
          {!isHome && (
            <div className="hidden px-4 md:block lg:px-0">
              <SubNav />
            </div>
          )}
          <main
            className={`w-full px-4 md:px-10 ${
              isHome ? "lg:w-[1700px]" : "py-14 lg:w-[900px]"
            }`}
          >
            <Component {...pageProps} />
            <EarthGlobe />
          </main>
        </div>
      </div>
    </div>
  );
}
