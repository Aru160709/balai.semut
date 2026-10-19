import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import FinalCta from '../components/FinalCta';
import CountUp from '../components/CountUp';
import { usePageMeta } from '../hooks/usePageMeta';
import { galleryPreview, introParagraphs, latestActivities, moments, stats } from '../data/home';

export default function Home() {
  usePageMeta(
    "Balai.semut — Not Just a Circle. It's a Collection of Memories. (In Progress)",
    'Balai.semut adalah circle pertemanan tempat berkumpul, membuat kenangan, dan melakukan kegiatan positif bersama.',
  );

  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="hero">
        {/* Untuk ganti background dengan video, ganti <img> di bawah dengan <video autoplay muted loop playsInline poster="..."> */}
        <div className="hero-media">
          <img src="assets/images/about-hero.jpeg" alt="Momen kebersamaan Balai.semut" width={1920} height={1080} />
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow">Sebuah circle pertemanan</p>
          <h1 className="hero-title">
            BALAI<span className="dot">.</span>SEMUT
          </h1>
          <p className="hero-tagline">
            Not just a circle.
            <br />
            It's a collection of memories.
          </p>

          <div className="hero-actions">
            <Link to="/galeri" className="btn btn-primary">
              Explore Memories
            </Link>
            <Link to="/tentang" className="btn btn-ghost">
              Our Stories
            </Link>
          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          Scroll
        </div>
      </section>

      {/* ============================== INTRODUCTION ============================== */}
      <section aria-labelledby="intro-title">
        <div className="container">
          <div className="intro-grid">
            <Reveal className="intro-media">
              <img src="assets/images/intro.jpeg" alt="Kebersamaan anggota Balai.semut" loading="lazy" width={800} height={1000} />
            </Reveal>

            <Reveal className="intro-text">
              <span className="eyebrow">A Little About Us</span>
              <h2 id="intro-title" className="section-title">
                Tumbuh dari kebersamaan, bukan struktur.
              </h2>

              {introParagraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}

              <div className="stats-row">
                {stats.map((stat) => (
                  <div className="stat-item" key={stat.label}>
                    <div className="stat-number">
                      <CountUp value={stat.number} />
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================== FEATURED MOMENTS ============================== */}
      <section className="section-alt" aria-labelledby="moments-title">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">Featured Moments</span>
            <h2 id="moments-title" className="section-title">
              Beberapa momen favorit kami
            </h2>
          </Reveal>

          <Reveal stagger className="moments-grid">
            {moments.map((moment) => (
              <Link key={moment.id} to="/kegiatan" className={`moment-item size-${moment.size}`}>
                <img src={moment.image} alt={moment.alt} loading="lazy" width={moment.width} height={moment.height} />
                <div className="moment-overlay">
                  <span className="moment-date">{moment.date}</span>
                  <h3 className="moment-name">{moment.name}</h3>
                  <span className="moment-link">View Story</span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============================== LATEST ACTIVITIES ============================== */}
      <section aria-labelledby="activities-title">
        <div className="container">
          <Reveal className="section-header-row">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Latest Activities</span>
              <h2 id="activities-title" className="section-title">
                Kegiatan terbaru
              </h2>
            </div>
            <Link to="/kegiatan" className="btn btn-ghost btn-sm">
              Lihat Semua Kegiatan
            </Link>
          </Reveal>

          <Reveal stagger className="activities-grid">
            {latestActivities.map((activity) => (
              <article className="activity-card" key={activity.id}>
                <div className="activity-thumb">
                  <img src={activity.image} alt={activity.alt} loading="lazy" width={800} height={600} />
                  <span className="activity-badge">{activity.badge}</span>
                </div>
                <div className="activity-body">
                  <span className="activity-date">{activity.date}</span>
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-desc">{activity.desc}</p>
                  <Link to="/kegiatan" className="activity-more">
                    Lihat Selengkapnya
                  </Link>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============================== BIG QUOTE ============================== */}
      <section className="quote-section section-alt">
        <div className="container">
          <Reveal>
            <p className="quote-text font-display">{'"Some moments are too good to be forgotten."'}</p>
          </Reveal>
        </div>
      </section>

      {/* ============================== GALLERY PREVIEW ============================== */}
      <section aria-labelledby="gallery-preview-title">
        <div className="container">
          <Reveal className="section-header text-center">
            <span className="eyebrow">Gallery Preview</span>
            <h2 id="gallery-preview-title" className="section-title">
              Sebagian kecil dari kenangan kami
            </h2>
          </Reveal>

          <Reveal stagger className="gallery-preview-grid">
            {galleryPreview.map((item) => (
              <div className={`gp-item${item.tall ? ' tall' : ''}`} key={item.id}>
                <img src={item.image} alt={item.alt} loading="lazy" width={item.width} height={item.height} />
              </div>
            ))}
          </Reveal>

          <div className="gallery-preview-cta">
            <Link to="/galeri" className="btn btn-primary">
              View All Memories
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
