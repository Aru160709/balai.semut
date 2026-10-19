import { useMemo, useState } from 'react';
import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import FilterBar from '../components/FilterBar';
import StoryModal from '../components/StoryModal';
import { usePageMeta } from '../hooks/usePageMeta';
import { kegiatanCategoryLabels, kegiatanFilters, kegiatanList } from '../data/kegiatan';
import type { Kegiatan as KegiatanItem } from '../types';

export default function Kegiatan() {
  usePageMeta(
    'Kegiatan — Balai.semut (In Progress)',
    'Kumpulan kegiatan Balai.semut: SOTR, bagi takjil, liburan, nongkrong, olahraga, dan event kecil lainnya.',
  );

  const [filter, setFilter] = useState('all');
  const [activeStory, setActiveStory] = useState<KegiatanItem | null>(null);

  const visible = useMemo(
    () => kegiatanList.filter((item) => filter === 'all' || item.category === filter),
    [filter],
  );

  return (
    <>
      <PageHero
        image="assets/images/activityliburan.jpeg"
        alt="Kegiatan Balai.semut"
        title="Our Activities"
        sub="Dari SOTR, bagi takjil, liburan, nongkrong, sampai event kecil — semua kegiatan kami ada di sini."
        minHeight="46vh"
      />

      {/* ============================== FILTER + GRID ============================== */}
      <section aria-labelledby="kegiatan-list-title">
        <div className="container">
          <h2 id="kegiatan-list-title" className="visually-hidden">
            Daftar Kegiatan
          </h2>

          <FilterBar options={kegiatanFilters} active={filter} onChange={setFilter} label="Filter kategori kegiatan" />

          <Reveal stagger className="kegiatan-grid">
            {visible.map((item) => (
              <article className="kegiatan-card" key={item.id}>
                <div className="kegiatan-thumb">
                  <img src={item.image} alt={item.alt} loading="lazy" width={item.thumbWidth} height={item.thumbHeight} />
                </div>
                <div className="kegiatan-body">
                  <div className="kegiatan-meta">
                    <span>{kegiatanCategoryLabels[item.category]}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="kegiatan-title">{item.title}</h3>
                  <p className="kegiatan-desc">{item.shortDesc}</p>
                  <button type="button" className="activity-more" onClick={() => setActiveStory(item)}>
                    Lihat Selengkapnya
                  </button>
                </div>
              </article>
            ))}
          </Reveal>

          <p className={`no-results${visible.length === 0 ? ' is-visible' : ''}`}>
            Belum ada kegiatan untuk kategori ini. Coba pilih kategori lain.
          </p>
        </div>
      </section>

      <StoryModal item={activeStory} onClose={() => setActiveStory(null)} />
    </>
  );
}
