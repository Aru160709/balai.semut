# Balai.semut — Website

**"Not just a circle. It's a collection of memories."**

Website ini dibuat untuk Balai.semut, sebuah circle/pertemanan di lingkungan
perumahan. Website dibangun dengan **HTML5, CSS3, dan Vanilla JavaScript**
tanpa framework besar, sehingga ringan dan mudah diedit sendiri, termasuk
oleh pelajar yang baru belajar web development.

Semua teks masih menggunakan **Lorem Ipsum** dan semua data (nomor telepon,
lokasi, Instagram, TikTok, tanggal, dll) masih berupa **data dummy**. Silakan
ganti sesuai kebutuhan kamu mengikuti panduan di bawah.

---

## 1. Cara Menjalankan Website

Website ini murni HTML/CSS/JS, jadi kamu bisa langsung membukanya tanpa
server:

1. Extract file ZIP ini.
2. Buka folder `balai-semut` di VS Code (`File > Open Folder`).
3. Klik dua kali file `index.html`, atau klik kanan `index.html` lalu
   pilih **"Open with Live Server"** jika kamu punya extension
   [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
   di VS Code (disarankan, supaya perubahan langsung terlihat).

Tidak perlu `npm install` atau server tambahan apa pun.

---

## 2. Struktur Folder

```
balai-semut/
│
├── index.html              → Halaman Beranda
├── about.html               → Halaman Tentang
├── kegiatan.html             → Halaman Kegiatan (dengan filter kategori)
├── galeri.html                → Halaman Galeri (masonry + filter + lightbox)
│
├── css/
│   └── style.css            → Semua styling website (1 file, sudah dikomentari per bagian)
│
├── js/
│   └── script.js             → Semua interaksi JavaScript (navbar, filter, lightbox, modal, dll)
│
├── assets/
│   ├── images/                → Semua gambar placeholder (format .svg, mudah diganti)
│   ├── videos/                 → Folder untuk video (kosong, ada catatan cara pakai)
│   └── icons/                   → Folder untuk logo/icon asli kamu
│
└── README.md                 → File ini
```

---

## 3. Cara Mengganti Logo

Saat ini logo berupa **text logo** ("BALAI.SEMUT") yang ditulis langsung di
HTML, bukan gambar.

Untuk mengganti dengan logo gambar:

1. Taruh file logo kamu (misal `logo.svg` atau `logo.png`) di folder
   `assets/icons/`.
2. Buka setiap file HTML (`index.html`, `about.html`, `kegiatan.html`,
   `galeri.html`), cari bagian dengan class `nav-logo`:
   ```html
   <a href="index.html" class="nav-logo">BALAI<span>.</span>SEMUT</a>
   ```
3. Ganti menjadi:
   ```html
   <a href="index.html" class="nav-logo">
     <img src="assets/icons/logo.svg" alt="Balai.semut" style="height:32px;">
   </a>
   ```

Favicon (icon di tab browser) ada di `assets/icons/favicon.svg`, bisa
diganti dengan file sejenis (ganti juga link `<link rel="icon" ...>` di
setiap `<head>` jika ganti nama file/format).

---

## 4. Cara Mengganti Foto

Semua foto placeholder ada di `assets/images/` dalam format `.svg` (gambar
vektor sederhana dengan label nama file, supaya mudah tahu foto mana yang
dipakai di mana).

Cara mengganti:

1. Siapkan foto asli kamu (format `.jpg`, `.png`, atau `.webp` disarankan,
   ukuran sudah dikompres supaya website tetap ringan).
2. Taruh foto tersebut di `assets/images/`.
3. Buka file HTML terkait, cari tag `<img src="assets/images/NAMA-FILE.svg" ...>`
4. Ganti `src` sesuai nama file foto baru kamu, contoh:
   ```html
   <img src="assets/images/hero-bg.jpg" alt="...">
   ```
5. Ulangi untuk gambar lain yang ingin diganti.

Tips: nama file placeholder sudah dibuat deskriptif (contoh: `hero-bg.svg`,
`activity-sotr.svg`, `gallery-01.svg`) supaya kamu tahu itu dipakai di
bagian mana.

Ingin pakai video di background hero? Baca catatan di
`assets/videos/PLACEHOLDER.md` dan komentar `<!-- HERO BACKGROUND -->` di
`index.html`.

---

## 5. Cara Mengganti Teks

Hampir semua teks Lorem Ipsum ada langsung di file HTML masing-masing
halaman. Cukup buka file HTML dengan text editor / VS Code, cari teks yang
ingin diganti (gunakan `Ctrl+F` / `Cmd+F`), lalu ganti langsung.

Contoh: untuk mengganti deskripsi di section "A Little About Us" di
`index.html`, cari:

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
```

lalu ganti isi di dalam tag `<p>...</p>` dengan cerita asli kamu.

Statistik (`20+ Memories`, `10+ Activities`, `2026 Since`) ada di section
`.stats-row` pada `index.html`, tinggal ganti angka dan labelnya langsung.

---

## 6. Cara Mengganti Instagram

Cari komentar `<!-- GANTI USERNAME INSTAGRAM DI SINI (data dummy) -->` di
file `index.html`, `about.html`, `kegiatan.html`, dan `galeri.html`
(ada di navbar mobile dan footer), lalu ganti:

```html
<a href="https://instagram.com/balai.semut" target="_blank" rel="noopener">◎ @balai.semut</a>
```

Ganti `balai.semut` pada `href` dan teks `@balai.semut` dengan username
Instagram asli kamu.

---

## 7. Cara Mengganti TikTok

Sama seperti Instagram, cari:

```html
<a href="https://tiktok.com/@balai.semut" target="_blank" rel="noopener">♪ @balai.semut</a>
```

Ganti `@balai.semut` pada `href` dan teks dengan username TikTok asli kamu.

---

## 8. Cara Mengganti Nomor

Cari komentar `<!-- GANTI NOMOR TELEPON DI SINI (data dummy) -->` di
bagian footer setiap halaman:

```html
<span>📱 08xxxxxxxxxx</span>
```

Ganti `08xxxxxxxxxx` dengan nomor telepon/WhatsApp asli (kalau mau dibuat
bisa diklik untuk buka WhatsApp, ganti jadi:
`<a href="https://wa.me/62xxxxxxxxxx">📱 08xxxxxxxxxx</a>`).

---

## 9. Cara Mengganti Lokasi

Cari komentar `<!-- GANTI LOKASI DI SINI (data dummy) -->` di footer:

```html
<span>📍 Graha Laksana Tidar, Malang</span>
```

Ganti teks lokasi sesuai lokasi asli kamu. Lokasi dummy juga muncul pada
beberapa `data-story-location` di `kegiatan.html` — cari dan ganti sesuai
kebutuhan.

---

## 10. Cara Menambah Kegiatan

Buka `kegiatan.html`, cari komentar:

```html
<!-- CARA MENAMBAH KEGIATAN BARU: ... -->
```

Langkahnya:

1. Copy salah satu blok `<article class="kegiatan-card" ...> ... </article>`.
2. Tempel di bagian bawah blok terakhir (masih di dalam `<div class="kegiatan-grid">`).
3. Ganti `data-category` sesuai kategori: `sotr`, `takjil`, `travel`,
   `hangout`, `sport`, `event`, atau `others` (harus huruf kecil, harus
   sama persis dengan `data-filter` pada tombol filter di atasnya).
4. Ganti gambar (`src`), judul, tanggal, dan deskripsi singkat.
5. Untuk tombol "Lihat Selengkapnya", ganti atribut:
   - `data-story-hero` → path foto utama
   - `data-story-title` → judul kegiatan
   - `data-story-date` → tanggal
   - `data-story-location` → lokasi
   - `data-story-category` → kategori (teks bebas)
   - `data-story-desc` → cerita/deskripsi, pisahkan tiap paragraf dengan `||`
   - `data-story-gallery` → daftar path foto tambahan, dipisah koma (`,`)

Filter kegiatan otomatis berjalan dengan JavaScript, tidak perlu reload
halaman dan tidak perlu edit file JS sama sekali — cukup pastikan nilai
`data-category` sama dengan `data-filter` pada tombol filter.

Jika ingin menambah kategori baru (misal "Kuliner"), tambahkan juga satu
tombol baru di `.filter-bar`:

```html
<button class="filter-btn" data-filter="kuliner">Kuliner</button>
```

---

## 11. Cara Menambah Foto Galeri

Buka `galeri.html`, cari komentar:

```html
<!-- CARA MENAMBAH FOTO GALERI BARU: ... -->
```

Langkahnya:

1. Taruh foto baru di `assets/images/`.
2. Copy salah satu blok `<button class="gallery-tile" ...> ... </button>`
   di dalam `<div class="gallery-masonry">`.
3. Ganti `src` gambar.
4. Ganti `data-tags` (isi tahun + kategori dipisah spasi, contoh:
   `"2026 travel"`) — ini dipakai oleh filter di atas galeri.
5. Ganti `data-category`, `data-title`, `data-date`, dan `data-desc` sesuai
   foto (akan muncul di lightbox saat foto diklik).

Filter dan lightbox galeri otomatis mendeteksi elemen baru ini tanpa perlu
mengedit file JavaScript.

---

## Catatan Tambahan

- Semua bagian penting di HTML sudah diberi komentar `<!-- ... -->` supaya
  mudah ditemukan.
- `css/style.css` dibagi menjadi 23 bagian dengan judul komentar besar
  (Navbar, Hero, Gallery, dll) — gunakan `Ctrl+F` untuk lompat ke bagian
  yang ingin diedit.
- `js/script.js` dibagi menjadi 10 bagian dengan fungsi yang jelas.
- Warna utama website bisa diganti dengan mudah lewat CSS variable di
  paling atas `style.css`, di dalam blok `:root { ... }` (contoh:
  `--color-bg`, `--color-accent`, dll).
- Website sudah dites secara konsep untuk lebar layar 320px sampai 1920px,
  termasuk hamburger menu di mobile, grid yang menyesuaikan, dan teks yang
  tidak overflow.
- Animasi sudah menghormati pengaturan "Reduce Motion" di sistem operasi
  pengguna (`prefers-reduced-motion`).

Selamat mengedit! 🐜
