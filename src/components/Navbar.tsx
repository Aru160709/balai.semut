import { useCallback, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navItems, contact } from '../data/site';
import { useScrollY } from '../hooks/useScrollY';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useKeydown } from '../hooks/useKeydown';

export default function Navbar() {
  const scrollY = useScrollY();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Tutup menu mobile setiap pindah halaman
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useBodyScrollLock(menuOpen);

  const closeOnEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setMenuOpen(false);
  }, []);
  useKeydown(closeOnEscape, menuOpen);

  const linkClass =
    (base: string) =>
    ({ isActive }: { isActive: boolean }) =>
      isActive ? `${base} is-active` : base;

  return (
    <>
      <header className={`navbar${scrollY > 40 ? ' is-solid' : ''}`}>
        <div className="container">
          <Link to="/" className="nav-logo">
            BALAI<span>.</span>SEMUT
          </Link>

          <nav className="nav-menu" aria-label="Navigasi utama">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass('nav-link')}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <Link to="/galeri" className="btn btn-ghost btn-sm desktop-only">
              BALAI
            </Link>
            <button
              type="button"
              className="hamburger"
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={menuOpen}
              aria-controls="mobileMenu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="hamburger-box">
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`} id="mobileMenu">
        <nav className="mobile-menu-list" aria-label="Navigasi mobile">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass('mobile-menu-link')}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <Link to="/galeri" className="btn btn-primary">
            BALAI
          </Link>
          <div className="mobile-menu-social">
            <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={contact.tiktok.url} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
