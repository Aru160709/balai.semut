import { useCallback, useEffect, useRef, useState } from 'react';
import type { GalleryPhoto } from '../types';
import { galleryCategoryLabels } from '../data/gallery';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useKeydown } from '../hooks/useKeydown';

interface LightboxProps {
  /** Foto yang sedang terlihat (sesuai filter) */
  items: GalleryPhoto[];
  /** Index foto yang dibuka, atau null kalau lightbox tertutup */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;
  const closeRef = useRef<HTMLButtonElement>(null);

  // Simpan foto terakhir yang ditampilkan supaya isinya tidak hilang saat animasi tutup
  const [shownIndex, setShownIndex] = useState(0);
  if (index !== null && index !== shownIndex) setShownIndex(index);

  const total = items.length;
  const next = useCallback(() => {
    if (index !== null && total) onNavigate((index + 1) % total);
  }, [index, total, onNavigate]);
  const prev = useCallback(() => {
    if (index !== null && total) onNavigate((index - 1 + total) % total);
  }, [index, total, onNavigate]);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    },
    [onClose, next, prev],
  );
  useKeydown(onKey, isOpen);
  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen]);

  const photo = items[shownIndex] ?? items[0];
  if (!photo) return null;

  return (
    <div
      className={`lightbox${isOpen ? ' is-open' : ''}`}
      aria-hidden={!isOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lightbox-inner" role="dialog" aria-modal="true" aria-labelledby="lightboxTitle">
        <button type="button" className="lightbox-close" ref={closeRef} aria-label="Tutup lightbox" onClick={onClose}>
          ✕
        </button>
        <button type="button" className="lightbox-nav lightbox-prev" aria-label="Foto sebelumnya" onClick={prev}>
          ‹
        </button>
        <button type="button" className="lightbox-nav lightbox-next" aria-label="Foto berikutnya" onClick={next}>
          ›
        </button>

        <div className="lightbox-media">
          <img src={photo.src} alt={`${photo.title} - Balai.semut`} />
        </div>
        <div className="lightbox-info">
          <span className="lightbox-category">{galleryCategoryLabels[photo.category]}</span>
          <h3 className="lightbox-title" id="lightboxTitle">
            {photo.title}
          </h3>
          <span className="lightbox-date">{photo.date}</span>
          <p className="lightbox-desc">{photo.desc}</p>
        </div>
      </div>
    </div>
  );
}
