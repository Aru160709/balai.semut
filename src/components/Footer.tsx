import { Link } from 'react-router-dom';
import { navItems, contact, tagline } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-name">
              BALAI<span style={{ color: 'var(--color-accent)' }}>.</span>SEMUT
            </div>
            <p className="footer-tagline">{tagline}</p>
          </div>

          <div className="footer-col">
            <div className="footer-heading">Navigasi</div>
            <div className="footer-list">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-heading">Kontak</div>
            <div className="footer-list">
              <span>📍 {contact.address}</span>
              <span>📱 {contact.phone}</span>
              <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer">
                ◎ {contact.instagram.label}
              </a>
              <a href={contact.tiktok.url} target="_blank" rel="noopener noreferrer">
                ♪ {contact.tiktok.label}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Balai.semut</span>
          <span>Made with memories.</span>
        </div>
      </div>
    </footer>
  );
}
