import { useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";

// 래퍼 컴포넌트를 동적 임포트
const Globe = dynamic(() => import("./GlobeWrapper"), {
  ssr: false,
});

export default function EarthGlobe() {
  const globeRef = useRef();
  const [globeReady, setGlobeReady] = useState(false);

  useEffect(() => {
    // globeReady 상태가 true가 되어야 controls에 접근 가능
    if (!globeRef.current || !globeReady) return;

    const globe = globeRef.current;

    // controls() 메서드가 정상 작동
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
    globe.controls().enableZoom = false;
    globe.controls().enablePan = false;

    // 초기 시점 설정
    globe.pointOfView(
      {
        lat: 137.5665,
        lng: 126.978,
        altitude: 2.5,
      },
      1000,
    );
  }, [globeReady]); // globeReady를 의존성으로 추가

  return (
    <div className="fixed bottom-1 right-1 -z-10 h-[250px] w-[300px] overflow-hidden shadow-xl transition-transform hover:scale-110 md:h-[400px] md:w-[400px]">
      <Globe
        forwardRef={globeRef} // ref 대신 forwardRef 사용
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl={null}
        backgroundColor="rgba(0,0,0,0)"
        width={600}
        height={600}
        onGlobeReady={() => setGlobeReady(true)}
        animateIn={false}
      />
    </div>
  );
}
