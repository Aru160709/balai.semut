import { useEffect, useRef, useState } from 'react';
import type { GalleryVideo } from '../types';
import { galleryCategoryLabels } from '../data/gallery';

interface VideoCardProps {
  video: GalleryVideo;
  /** true kalau ini video yang sedang diputar; video lain otomatis dijeda */
  isActive: boolean;
  onPlay: () => void;
}

export default function VideoCard({ video, isActive, onPlay }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    if (!isActive) videoRef.current?.pause();
  }, [isActive]);

  const markMissing = () => setMissing(true);

  return (
    <article className={`video-card${missing ? ' is-missing' : ''}`}>
      <div className="video-frame">
        <video
          ref={videoRef}
          controls
          preload="metadata"
          playsInline
          poster={video.poster}
          aria-label={`Video ${video.title}`}
          onPlay={onPlay}
          onError={markMissing}
        >
          <source src={video.src} type="video/mp4" onError={markMissing} />
          Browser kamu tidak mendukung pemutaran video.
        </video>
        <div className="video-missing" aria-hidden="true">
          Video belum tersedia
        </div>
      </div>
      <div className="video-body">
        <div className="video-meta">
          <span>{galleryCategoryLabels[video.category]}</span>
          <span>{video.date}</span>
        </div>
        <h3 className="video-title">{video.title}</h3>
      </div>
    </article>
  );
}
