import { useEffect } from 'react';

/** Memasang listener keyboard di document hanya saat `active` bernilai true. */
export function useKeydown(handler: (event: KeyboardEvent) => void, active: boolean): void {
  useEffect(() => {
    if (!active) return;
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [handler, active]);
}
