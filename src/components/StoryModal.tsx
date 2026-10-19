import { useCallback, useEffect, useRef, useState } from 'react';
import type { Kegiatan } from '../types';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useKeydown } from '../hooks/useKeydown';

interface StoryModalProps {
  /** Kegiatan yang dibuka, atau null kalau modal tertutup */
  item: Kegiatan | null;
  onClose: () => void;
}

export default function StoryModal({ item, onClose }: StoryModalProps) {
  const isOpen = item !== null;
  const closeRef = useRef<HTMLButtonElement>(null);

  // Simpan kegiatan terakhir supaya isi modal tidak hilang saat animasi tutup
  const [shown, setShown] = useState<Kegiatan | null>(item);
  if (item && item !== shown) setShown(item);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );
  useKeydown(onKey, isOpen);
  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen]);

  if (!shown) return null;

  return (
    <div
      className={`story-modal${isOpen ? ' is-open' : ''}`}
      aria-hidden={!isOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="story-modal-panel" role="dialog" aria-modal="true" aria-labelledby="storyModalTitle">
        <button type="button" className="story-modal-close" ref={closeRef} aria-label="Tutup detail kegiatan" onClick={onClose}>
          ✕
        </button>
        <div className="story-modal-hero">
          <img src={shown.image} alt={shown.title} />
        </div>
        <div className="story-modal-body">
          <div className="story-modal-meta">
            <span>{shown.storyCategory}</span>
            <span>{shown.date}</span>
            <span>{shown.location}</span>
          </div>
          <h3 className="story-modal-title" id="storyModalTitle">
            {shown.title}
          </h3>
          <div className="story-modal-desc">
            {shown.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="story-modal-gallery">
            {shown.gallery.map((src) => (
              <img key={src} src={src} alt={shown.title} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
