import React, { useRef, useEffect } from "react";

const SnowfallBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const flakes = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const FLAKE_COUNT = 250;

    class Snowflake {
      constructor() {
        this.reset();
      }

      reset() {
        this.depth = Math.random(); // 0 (far) to 1 (near)

        this.x = Math.random() * width;
        this.y = Math.random() * -height;

        this.size = 1 + this.depth * 4; // near flakes larger
        this.speed = 0.5 + this.depth * 2; // near flakes faster

        this.windOffset = Math.random() * 1000;
        this.windStrength = 0.5 + Math.random() * 1;

        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;

        this.opacity = 0.3 + this.depth * 0.7;
      }

      update(time) {
        this.y += this.speed;

        // Gentle sway using sin wave
        this.x += Math.sin(time * 0.001 + this.windOffset) * 0.5 * this.windStrength;

        this.rotation += this.rotationSpeed;

        if (this.y > height) {
          this.reset();
          this.y = -10;
        }

        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;

        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        ctx.restore();
      }
    }

    // Initialize flakes
    flakes.current = [];
    for (let i = 0; i < FLAKE_COUNT; i++) {
      flakes.current.push(new Snowflake());
    }

    const animate = (time) => {
      ctx.clearRect(0, 0, width, height);

      flakes.current.forEach((flake) => {
        flake.update(time);
        flake.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom, #0b1d3a, #000814)",
        zIndex: -1,
      }}
    />
  );
};

export default SnowfallBackground;