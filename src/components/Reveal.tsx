import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** true = anak-anaknya muncul bergantian (efek stagger) */
  stagger?: boolean;
}

/**
 * Membungkus elemen agar muncul halus saat di-scroll.
 * Animasinya diatur CSS lewat atribut [data-reveal] / [data-reveal-stagger] + class .is-visible.
 */
export default function Reveal({ children, className, stagger = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    // threshold 0: elemen yang sangat tinggi (mis. galeri di HP) tetap bisa terdeteksi
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [className, visible ? 'is-visible' : ''].filter(Boolean).join(' ');

  return (
    <div
      ref={ref}
      className={classes || undefined}
      data-reveal={stagger ? undefined : ''}
      data-reveal-stagger={stagger ? '' : undefined}
    >
      {children}
    </div>
  );
}
