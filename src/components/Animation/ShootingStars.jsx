import { useEffect, useRef } from "react";

const ShootingStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // 내부 해상도와 스타일 모두 맞추기
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1;
        this.speed = Math.random() * 0.2 + 0.1;
      }
      update() {
        this.y += this.speed;
        if (this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class ShootingStar {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 5 + 2;
        this.alpha = 1;
      }
      update() {
        this.x += this.speed;
        this.y += this.speed;
        this.alpha -= 0.01;
        if (this.alpha <= 0 || this.x > canvas.width || this.y > canvas.height)
          this.reset();
      }
      draw() {
        ctx.fillStyle = `rgba(255, 255, 200, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const stars = Array(150)
      .fill()
      .map(() => new Star());

    const shootingStars = Array(4)
      .fill()
      .map(() => new ShootingStar());

    function animate() {
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      shootingStars.forEach((star) => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    // 리사이즈 대응
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed left-0 top-0 -z-10 h-screen w-screen bg-black"
      style={{ display: "block" }}
    />
  );
};

export default ShootingStars;
