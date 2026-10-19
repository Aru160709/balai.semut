import { useEffect, useState } from 'react';

/** Posisi scroll vertikal halaman saat ini. */
export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(() => window.scrollY);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollY;
}
