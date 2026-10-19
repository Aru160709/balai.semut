import { useEffect } from 'react';

/** Mengunci scroll halaman selama `locked` bernilai true (menu mobile, lightbox, modal). */
export function useBodyScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [locked]);
}
