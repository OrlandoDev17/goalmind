'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  color: string;
}

export default function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const colors = ['#0077FF', '#2C2C2C', '#00FF99'];

  // Función para determinar la cantidad de partículas según el tamaño de pantalla
  const getParticleCount = () => {
    const screenWidth = window.innerWidth;
    return screenWidth > 1200 ? 125 : screenWidth > 800 ? 80 : 40;
  };

  const createParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const count = getParticleCount();
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 3,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    particlesRef.current = particles;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles(); // Se asegura de que createParticles esté definida antes de llamarla
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Llamar al iniciar

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        // Rebote en los bordes
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute w-full h-[60vh] object-cover z-10"
    />
  );
}
