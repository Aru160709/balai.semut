import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="final-cta-media">
        <img src="assets/images/cta-bg.svg" alt="Kenangan Balai.semut" loading="lazy" width={1920} height={1080} />
      </div>
      <Reveal className="final-cta-content">
        <h2 className="final-cta-title font-display">More stories are waiting.</h2>
        <Link to="/galeri" className="btn btn-accent">
          Explore The Gallery
        </Link>
      </Reveal>
    </section>
  );
}
