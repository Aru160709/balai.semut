import { useEffect } from 'react';

/** Mengatur <title> dan meta description untuk halaman yang sedang tampil. */
export function usePageMeta(title: string, description: string): void {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description);
  }, [title, description]);
}
