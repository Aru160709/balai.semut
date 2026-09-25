/* =========================================================
   BALAI.SEMUT — MAIN JAVASCRIPT
   =========================================================
   Daftar isi:
   1. Navbar scroll + solid state
   2. Hamburger / mobile menu
   3. Scroll progress bar
   4. Back to top button
   5. Scroll reveal (IntersectionObserver)
   6. Kegiatan filter (kegiatan.html)
   7. Galeri filter (galeri.html)
   8. Lightbox (galeri.html)
   9. Story modal (kegiatan.html & index.html)
   10. Active nav link
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* =========================================================
     1. NAVBAR SCROLL STATE
     ========================================================= */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const toggleNavSolid = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('is-solid');
      } else {
        navbar.classList.remove('is-solid');
      }
    };
    toggleNavSolid();
    window.addEventListener('scroll', toggleNavSolid, { passive: true });
  }

  /* =========================================================
     2. HAMBURGER / MOBILE MENU
     ========================================================= */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  function closeMobileMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function openMobileMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMobileMenu() : openMobileMenu();
    });

    // Tutup menu saat link mobile diklik
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Tutup menu dengan ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMobileMenu();
    });
  }

  /* =========================================================
     3. SCROLL PROGRESS BAR
     ========================================================= */
  const scrollProgress = document.querySelector('.scroll-progress');
  if (scrollProgress) {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgress.style.width = progress + '%';
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
  }

  /* =========================================================
     4. BACK TO TOP BUTTON
     ========================================================= */
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    const toggleBackToTop = () => {
      if (window.scrollY > 600) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    };
    toggleBackToTop();
    window.addEventListener('scroll', toggleBackToTop, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* =========================================================
     5. SCROLL REVEAL (IntersectionObserver)
     ========================================================= */
  const revealEls = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (revealEls.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    // Jika reduced motion aktif atau observer tidak didukung, langsung tampilkan semua
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* =========================================================
     6. KEGIATAN FILTER (kegiatan.html)
     ========================================================= */
  const kegiatanFilterBar = document.querySelector('[data-kegiatan-filters]');
  const kegiatanCards = document.querySelectorAll('[data-kegiatan-card]');
  const kegiatanNoResults = document.querySelector('[data-kegiatan-empty]');

  if (kegiatanFilterBar && kegiatanCards.length) {
    kegiatanFilterBar.addEventListener('click', function (e) {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      kegiatanFilterBar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      kegiatanCards.forEach((card) => {
        const category = card.dataset.category;
        const show = filter === 'all' || category === filter;
        card.classList.toggle('is-hidden', !show);
        if (show) visibleCount++;
      });

      if (kegiatanNoResults) {
        kegiatanNoResults.classList.toggle('is-visible', visibleCount === 0);
      }
    });
  }

  /* =========================================================
     7. GALERI FILTER (galeri.html)
     ========================================================= */
  const galeriFilterBar = document.querySelector('[data-galeri-filters]');
  const galeriTiles = document.querySelectorAll('[data-galeri-tile]');
  const galeriNoResults = document.querySelector('[data-galeri-empty]');

  if (galeriFilterBar && galeriTiles.length) {
    galeriFilterBar.addEventListener('click', function (e) {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      galeriFilterBar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      galeriTiles.forEach((tile) => {
        const tags = (tile.dataset.tags || '').split(' ');
        const show = filter === 'all' || tags.includes(filter);
        tile.classList.toggle('is-hidden', !show);
        if (show) visibleCount++;
      });

      if (galeriNoResults) {
        galeriNoResults.classList.toggle('is-visible', visibleCount === 0);
      }
    });
  }

  /* =========================================================
     8. LIGHTBOX (galeri.html)
     ========================================================= */
  const lightbox = document.querySelector('[data-lightbox]');

  if (lightbox && galeriTiles.length) {
    const lightboxImg = lightbox.querySelector('[data-lightbox-img]');
    const lightboxCategory = lightbox.querySelector('[data-lightbox-category]');
    const lightboxTitle = lightbox.querySelector('[data-lightbox-title]');
    const lightboxDate = lightbox.querySelector('[data-lightbox-date]');
    const lightboxDesc = lightbox.querySelector('[data-lightbox-desc]');
    const lightboxClose = lightbox.querySelector('[data-lightbox-close]');
    const lightboxPrev = lightbox.querySelector('[data-lightbox-prev]');
    const lightboxNext = lightbox.querySelector('[data-lightbox-next]');

    let currentTiles = [];
    let currentIndex = 0;

    function getVisibleTiles() {
      return Array.from(galeriTiles).filter((t) => !t.classList.contains('is-hidden'));
    }

    function renderLightbox(index) {
      const tile = currentTiles[index];
      if (!tile) return;
      const img = tile.querySelector('img');

      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || '';
      lightboxCategory.textContent = tile.dataset.category || '';
      lightboxTitle.textContent = tile.dataset.title || '';
      lightboxDate.textContent = tile.dataset.date || '';
      lightboxDesc.textContent = tile.dataset.desc || '';
      currentIndex = index;
    }

    function openLightbox(tile) {
      currentTiles = getVisibleTiles();
      const index = currentTiles.indexOf(tile);
      renderLightbox(index === -1 ? 0 : index);
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      lightboxClose.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    function showNext() {
      if (!currentTiles.length) return;
      renderLightbox((currentIndex + 1) % currentTiles.length);
    }

    function showPrev() {
      if (!currentTiles.length) return;
      renderLightbox((currentIndex - 1 + currentTiles.length) % currentTiles.length);
    }

    galeriTiles.forEach((tile) => {
      tile.addEventListener('click', () => openLightbox(tile));
      tile.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(tile);
        }
      });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', showNext);
    if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    });
  }

  /* =========================================================
     9. STORY MODAL ("Lihat Selengkapnya")
     ========================================================= */
  const storyModal = document.querySelector('[data-story-modal]');
  const storyTriggers = document.querySelectorAll('[data-story-trigger]');

  if (storyModal && storyTriggers.length) {
    const storyHeroImg = storyModal.querySelector('[data-story-hero]');
    const storyTitle = storyModal.querySelector('[data-story-title]');
    const storyDate = storyModal.querySelector('[data-story-date]');
    const storyLocation = storyModal.querySelector('[data-story-location]');
    const storyCategory = storyModal.querySelector('[data-story-category]');
    const storyDesc = storyModal.querySelector('[data-story-desc]');
    const storyGallery = storyModal.querySelector('[data-story-gallery]');
    const storyClose = storyModal.querySelector('[data-story-close]');

    function openStoryModal(trigger) {
      const data = trigger.dataset;

      if (storyHeroImg) {
        storyHeroImg.src = data.storyHero || '';
        storyHeroImg.alt = data.storyTitle || '';
      }
      if (storyTitle) storyTitle.textContent = data.storyTitle || '';
      if (storyDate) storyDate.textContent = data.storyDate || '';
      if (storyLocation) storyLocation.textContent = data.storyLocation || '';
      if (storyCategory) storyCategory.textContent = data.storyCategory || '';

      if (storyDesc) {
        storyDesc.innerHTML = '';
        const paragraphs = (data.storyDesc || '').split('||');
        paragraphs.forEach((p) => {
          if (p.trim()) {
            const el = document.createElement('p');
            el.textContent = p.trim();
            storyDesc.appendChild(el);
          }
        });
      }

      if (storyGallery) {
        storyGallery.innerHTML = '';
        const imgs = (data.storyGallery || '').split(',').filter(Boolean);
        imgs.forEach((src) => {
          const el = document.createElement('img');
          el.src = src.trim();
          el.alt = data.storyTitle || 'Galeri kegiatan';
          el.loading = 'lazy';
          storyGallery.appendChild(el);
        });
      }

      storyModal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      if (storyClose) storyClose.focus();
    }

    function closeStoryModal() {
      storyModal.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    storyTriggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        openStoryModal(trigger);
      });
    });

    if (storyClose) storyClose.addEventListener('click', closeStoryModal);

    storyModal.addEventListener('click', (e) => {
      if (e.target === storyModal) closeStoryModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && storyModal.classList.contains('is-open')) {
        closeStoryModal();
      }
    });
  }

  /* =========================================================
     9b. WEBSITE IN PROGRESS BADGE
     ========================================================= */
  const wipBadge = document.querySelector('[data-wip-badge]');
  const wipClose = document.querySelector('[data-wip-close]');

  if (wipBadge && wipClose) {
    // Jika sebelumnya sudah ditutup oleh user, tetap sembunyikan (disimpan di browser saja)
    try {
      if (localStorage.getItem('balaisemut_wip_dismissed') === '1') {
        wipBadge.classList.add('is-hidden');
      }
    } catch (err) {
      // localStorage tidak tersedia, badge tetap tampil seperti biasa
    }

    wipClose.addEventListener('click', function () {
      wipBadge.classList.add('is-hidden');
      try {
        localStorage.setItem('balaisemut_wip_dismissed', '1');
      } catch (err) {
        // abaikan jika localStorage tidak tersedia (mis. mode private/incognito)
      }
    });
  }

  /* =========================================================
     10. ACTIVE NAV LINK (highlight menu sesuai halaman aktif)
     ========================================================= */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-menu-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('is-active');
    }
  });

});
