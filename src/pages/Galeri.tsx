import { useMemo, useState } from 'react';
import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import FilterBar from '../components/FilterBar';
import Lightbox from '../components/Lightbox';
import VideoCard from '../components/VideoCard';
import { usePageMeta } from '../hooks/usePageMeta';
import { galleryFilters, galleryPhotos, galleryVideos } from '../data/gallery';

export default function Galeri() {
  usePageMeta('Galeri — Balai.semut (In Progress)', 'Kumpulan kenangan dan momen Balai.semut dalam galeri foto dan video.');

  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  // Filter tahun dicocokkan dengan `year`, filter lainnya dengan `category`
  const visiblePhotos = useMemo(
    () =>
      galleryPhotos.filter(
        (photo) => filter === 'all' || filter === String(photo.year) || filter === photo.category,
      ),
    [filter],
  );

  return (
    <>
      <PageHero
        image="assets/images/about-hero.jpeg"
        alt="Kenangan Balai.semut"
        title="Memories"
        sub="Kumpulan momen yang sudah kami lewati bersama. Klik salah satu foto untuk melihat lebih detail."
        minHeight="46vh"
      />

      {/* ============================== FOTO ============================== */}
      <section className="gallery-photos" aria-labelledby="galeri-list-title">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">Foto</span>
            <h2 id="galeri-list-title" className="section-title">
              Momen dalam foto
            </h2>
          </Reveal>

          <FilterBar options={galleryFilters} active={filter} onChange={setFilter} label="Filter galeri" />

          <Reveal className="gallery-masonry">
            {visiblePhotos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                className="gallery-tile"
                aria-label={`Lihat ${photo.title}`}
                onClick={() => setLightboxIndex(index)}
              >
                <img src={photo.src} alt={`${photo.title} - Balai.semut`} loading="lazy" />
                <span className="gallery-tile-overlay">
                  <span>{photo.title}</span>
                </span>
              </button>
            ))}
          </Reveal>

          <p className={`no-results${visiblePhotos.length === 0 ? ' is-visible' : ''}`}>
            Belum ada foto untuk filter ini. Coba filter lain.
          </p>
        </div>
      </section>

      {/* ============================== VIDEO ============================== */}
      <section className="section-alt gallery-videos" aria-labelledby="galeri-video-title">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">Video</span>
            <h2 id="galeri-video-title" className="section-title">
              Momen dalam video
            </h2>
            <p className="section-desc">Potongan-potongan momen yang lebih hidup. Tekan play untuk menonton.</p>
          </Reveal>

          <Reveal className="video-grid">
            {galleryVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                isActive={playingVideoId === video.id}
                onPlay={() => setPlayingVideoId(video.id)}
              />
            ))}
          </Reveal>
        </div>
      </section>

      <Lightbox
        items={visiblePhotos}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
