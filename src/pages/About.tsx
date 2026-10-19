import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import FinalCta from '../components/FinalCta';
import ValueIcon from '../components/ValueIcon';
import { usePageMeta } from '../hooks/usePageMeta';
import { philosophyText, storyBlocks, timeline, values } from '../data/about';

export default function About() {
  usePageMeta('Tentang — Balai.semut (In Progress)', 'Cerita awal mula, makna, dan filosofi kebersamaan Balai.semut.');

  return (
    <>
      <PageHero
        image="assets/images/about-hero.jpeg"
        alt="Kebersamaan Balai.semut"
        title="About Balai.semut"
        sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cerita tentang bagaimana kebersamaan ini tumbuh dari waktu ke waktu."
      />

      {/* ============================== STORY ============================== */}
      <section aria-labelledby="story-1-title">
        <div className="container">
          {storyBlocks.map((block, index) => (
            <div key={block.id}>
              {index > 0 && <div className="story-gap" />}
              <Reveal className={`story-block${block.reverse ? ' reverse' : ''}`}>
                <div className="story-media">
                  <img src={block.image} alt={block.alt} loading="lazy" width={block.width} height={block.height} />
                </div>
                <div className="story-text">
                  <span className="eyebrow">{block.eyebrow}</span>
                  <h2 id={index === 0 ? 'story-1-title' : undefined}>{block.title}</h2>
                  {block.paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ============================== TIMELINE ============================== */}
      <section className="section-alt" aria-labelledby="timeline-title">
        <div className="container">
          <Reveal className="section-header text-center">
            <span className="eyebrow">Perjalanan Kami</span>
            <h2 id="timeline-title" className="section-title">
              Sedikit cerita dari waktu ke waktu
            </h2>
          </Reveal>

          <Reveal className="timeline">
            {timeline.map((entry) => (
              <div className="timeline-item" key={entry.title}>
                <div className="timeline-year">{entry.title}</div>
                <p className="timeline-desc">{entry.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============================== FILOSOFI ============================== */}
      <section aria-labelledby="philosophy-title">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">Filosofi Kebersamaan</span>
            <h2 id="philosophy-title" className="section-title">
              Yang kami percaya dan yang biasa kami lakukan
            </h2>
          </Reveal>
          <Reveal>
            <p className="section-desc">{philosophyText}</p>
          </Reveal>
        </div>
      </section>

      {/* ============================== OUR VALUES ============================== */}
      <section className="section-alt" aria-labelledby="values-title">
        <div className="container">
          <Reveal className="section-header text-center">
            <span className="eyebrow">Our Values</span>
            <h2 id="values-title" className="section-title">
              Nilai yang kami pegang
            </h2>
          </Reveal>

          <Reveal stagger className="values-grid">
            {values.map((value) => (
              <div className="value-card" key={value.title}>
                <ValueIcon name={value.icon} />
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
