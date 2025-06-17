import { memo, useEffect, useRef, useState } from "react";

// 조건부 클래스 함수 정의
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const observerOptions = {
  threshold: 0.1,
};

const FadeInAnimation = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const slideHandler = (entries) => {
    if (entries[0].isIntersecting) {
      setVisible(true);
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    const view = ref.current;
    const io = new IntersectionObserver(slideHandler, observerOptions);
    io.observe(view);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "w-full opacity-0 transition-all duration-700",
        visible && "animate-bottom-in opacity-100",
      )}
    >
      {children}
    </div>
  );
};

export default memo(FadeInAnimation);
