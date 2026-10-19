import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  /** Teks angka, mis. "20+". Angka di depan dihitung naik, sisanya (mis. "+") ditempel di belakang. */
  value: string;
  duration?: number;
}

/** Angka yang menghitung naik dari 0 saat muncul di layar. Angka besar seperti tahun (2026) tidak dihitung. */
export default function CountUp({ value, duration = 1400 }: CountUpProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const animate = match !== null && target < 1000;

  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(animate ? 0 : target);

  useEffect(() => {
    if (!animate) return;
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setCurrent(target);
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setCurrent(Math.round(target * (1 - Math.pow(1 - progress, 3)))); // melambat di akhir
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [animate, target, duration]);

  if (!match) return <>{value}</>;

  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  );
}
