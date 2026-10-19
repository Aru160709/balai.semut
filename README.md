# Balai.semut — Website

**"Not just a circle. It's a collection of memories."**

Website Balai.semut, sekarang dibangun dengan **React + TypeScript + Vite** (jalan di atas **Node.js**).
Website ini murni frontend, tidak ada backend. Node hanya dipakai sebagai tooling untuk
menjalankan dan membangun project.

---

## 1. Cara Menjalankan

Syarat: [Node.js](https://nodejs.org) versi 18 atau lebih baru.

```bash
npm install        # sekali saja, untuk mengunduh library
npm run dev        # jalankan website di http://localhost:5173
npm run build      # cek tipe TypeScript + build ke folder dist/
npm run preview    # coba hasil build secara lokal
npm run typecheck  # cek tipe TypeScript saja
```

Isi folder `dist/` setelah `npm run build` adalah website final yang siap di-upload
(GitHub Pages, Netlify, Vercel, dll).

---

## 2. Struktur Project

```
balai-semut/
├── index.html              → pintu masuk Vite (font, favicon, <div id="root">)
├── package.json
├── vite.config.ts
├── tsconfig.json
│
├── public/
│   └── assets/             → foto, video, ikon (dilayani apa adanya)
│       ├── images/
│       ├── videos/
│       └── icons/
│
└── src/
    ├── main.tsx            → titik awal aplikasi + router
    ├── App.tsx             → daftar halaman (rute)
    ├── types.ts            → tipe data (GalleryPhoto, Kegiatan, dll)
    │
    ├── pages/              → satu file = satu halaman
    │   ├── Home.tsx        (#/)
    │   ├── About.tsx       (#/tentang)
    │   ├── Kegiatan.tsx    (#/kegiatan)
    │   ├── Galeri.tsx      (#/galeri) → section Foto di atas, Video di bawah
    │   └── NotFound.tsx
    │
    ├── components/         → potongan UI yang dipakai ulang
    │   ├── Layout.tsx, Navbar.tsx, Footer.tsx
    │   ├── Lightbox.tsx, StoryModal.tsx, VideoCard.tsx
    │   ├── FilterBar.tsx, PageHero.tsx, FinalCta.tsx, Reveal.tsx
    │   └── BackToTop.tsx, ScrollProgress.tsx, WipBadge.tsx, ValueIcon.tsx
    │
    ├── data/               → ISI website (teks, daftar foto, dll). Edit di sini!
    │   ├── site.ts         (menu, kontak, tagline)
    │   ├── home.ts, about.ts
    │   ├── gallery.ts      (foto + video galeri)
    │   └── kegiatan.ts
    │
    ├── hooks/              → logika kecil yang dipakai ulang (scroll, keyboard, dll)
    └── styles/style.css    → semua styling (sama seperti versi HTML lama)
```

Konsepnya: **tampilan ada di `pages/` dan `components/`, isi/konten ada di `data/`**.
Untuk mengganti teks atau menambah foto, biasanya cukup edit file di `src/data/`.

---

## 3. Menambah Foto Galeri

1. Taruh foto di `public/assets/images/`.
2. Buka `src/data/gallery.ts`, tambah satu objek di array `galleryPhotos`:

```ts
{
  id: 25,                              // harus unik
  src: 'assets/images/fotoku.jpg',
  title: 'SOTR Bareng Warga',
  category: 'sotr',                    // sotr | takjil | travel | hangout | event
  year: 2026,
  date: '9 April 2026',
  desc: 'Cerita singkat tentang foto ini.',
},
```

Filter dan lightbox otomatis ikut. Kalau ingin kategori baru, tambahkan di tipe
`GalleryCategory` (`src/types.ts`), `galleryCategoryLabels`, dan `galleryFilters`.

## 4. Menambah Video Galeri

1. Taruh file `.mp4` di `public/assets/videos/` (sebaiknya dikompres dulu).
2. Tambah satu objek di array `galleryVideos` pada `src/data/gallery.ts`:

```ts
{
  id: 4,
  title: 'Judul Video',
  category: 'event',
  date: '1 Januari 2026',
  src: 'assets/videos/nama-file.mp4',
  poster: 'assets/images/gambar-sampul.jpeg',
},
```

Kalau file video belum ada, kartu menampilkan label "Video belum tersedia".
Saat satu video diputar, video lain otomatis dijeda.

## 5. Menambah Kegiatan

Tambah satu objek di array `kegiatanList` pada `src/data/kegiatan.ts`. Bagian `story`
adalah daftar paragraf di modal "Lihat Selengkapnya", dan `gallery` adalah foto tambahan di modal.

---

## 6. Hal Lain

- **Badge "Website in Progress"**: hapus `<WipBadge />` di `src/components/Layout.tsx` kalau website sudah final.
- **Mengganti logo**: edit `Link` dengan class `nav-logo` di `src/components/Navbar.tsx`.
- **Warna & font**: edit variabel `:root` di paling atas `src/styles/style.css`.
- **Alamat halaman** memakai `HashRouter`, jadi bentuknya `/#/galeri`. Dengan begitu website bisa
  di-host di mana saja (termasuk GitHub Pages) tanpa pengaturan server. Kalau hosting-mu mendukung
  rewrite (Netlify/Vercel), ganti `HashRouter` jadi `BrowserRouter` di `src/main.tsx`.
- **Path gambar** di file data ditulis tanpa awalan `/`, contoh `assets/images/foto.jpg`
  (file fisiknya ada di `public/assets/images/foto.jpg`).
