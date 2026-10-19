export interface Stat {
  number: string;
  label: string;
}

export interface Moment {
  id: number;
  size: 'lg' | 'md' | 'wide';
  image: string;
  alt: string;
  date: string;
  name: string;
  width: number;
  height: number;
}

export interface Activity {
  id: number;
  image: string;
  alt: string;
  badge: string;
  date: string;
  title: string;
  desc: string;
}

export interface PreviewImage {
  id: number;
  image: string;
  alt: string;
  tall: boolean;
  width: number;
  height: number;
}

export const introParagraphs: string[] = [
  'Balai.semut lahir dari kumpulan orang-orang yang percaya bahwa kebersamaan tidak harus dibangun oleh struktur formal. Berawal dari pertemuan sederhana, kami berbagi cerita, tawa, dan pengalaman yang perlahan menjadi bagian dari perjalanan bersama. Setiap orang membawa warna yang berbeda, menciptakan ruang untuk tumbuh, saling mengenal, dan menikmati setiap momen tanpa perlu menjadi orang lain.',
  'Bagi kami, kebersamaan bukan sekadar tentang seberapa sering kami bertemu, tetapi tentang kenangan yang tercipta di setiap kesempatan. Dari obrolan kecil hingga perjalanan yang tidak direncanakan, semuanya menjadi cerita yang layak untuk dikenang. Balai.semut adalah tentang orang-orang, pengalaman, dan perjalanan yang terus tumbuh, karena kami percaya bahwa hal-hal sederhana bisa menjadi sesuatu yang berarti ketika dijalani bersama.',
];

export const stats: Stat[] = [
  { number: '20+', label: 'Memories' },
  { number: '10+', label: 'Activities' },
  { number: '2026', label: 'Since' },
];

export const moments: Moment[] = [
  {
    id: 1,
    size: 'lg',
    image: 'assets/images/moment1.jpeg',
    alt: 'Momen liburan bersama Balai.semut',
    date: '15 Maret 2026',
    name: 'Liburan Bersama',
    width: 1200,
    height: 1500,
  },
  {
    id: 2,
    size: 'md',
    image: 'assets/images/moment2fix.jpeg',
    alt: 'SOTR bersama Balai.semut',
    date: '10 Maret 2026',
    name: 'SOTR 2026',
    width: 800,
    height: 600,
  },
  {
    id: 3,
    size: 'md',
    image: 'assets/images/moment3.jpeg',
    alt: 'Nongkrong santai Balai.semut',
    date: '2 Maret 2026',
    name: 'Malam Nongkrong',
    width: 800,
    height: 600,
  },
  {
    id: 4,
    size: 'wide',
    image: 'assets/images/moment4.jpeg',
    alt: 'Bagi takjil bersama Balai.semut',
    date: '20 Maret 2026',
    name: 'Tertangkap Pulici',
    width: 800,
    height: 800,
  },
];

export const latestActivities: Activity[] = [
  {
    id: 1,
    image: 'assets/images/activity1.jpeg',
    alt: 'Kegiatan SOTR Balai.semut',
    badge: 'Social',
    date: '15 Maret 2026',
    title: 'SOTR 2026',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    id: 2,
    // Foto aslinya (activity2.jpeg) belum ada di folder assets/images, jadi sementara pakai placeholder.
    image: 'assets/images/activity2.jpg',
    alt: 'Kegiatan bagi takjil Balai.semut',
    badge: 'Social',
    date: '20 Maret 2026',
    title: 'Bagi Takjil',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  },
  {
    id: 3,
    image: 'assets/images/activity3.jpg',
    alt: 'Liburan bersama Balai.semut',
    badge: 'Travel',
    date: '2 Februari 2026',
    title: 'Liburan Bersama',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
  {
    id: 4,
    image: 'assets/images/activity4.PNG',
    alt: 'Olahraga Bersama Balai.semut',
    badge: 'Sport',
    date: '28 Januari 2026',
    title: 'Olahraga Bersama',
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
  },
];

export const galleryPreview: PreviewImage[] = [
  { id: 1, image: 'assets/images/galleryp1.jpg', alt: 'Kenangan Balai.semut 1', tall: true, width: 800, height: 1000 },
  { id: 2, image: 'assets/images/galleryp2.jpeg', alt: 'Kenangan Balai.semut 2', tall: false, width: 800, height: 600 },
  { id: 3, image: 'assets/images/galleryp3.jpg', alt: 'Kenangan Balai.semut 3', tall: false, width: 800, height: 800 },
  { id: 4, image: 'assets/images/galleryp4.jpg', alt: 'Kenangan Balai.semut 4', tall: true, width: 800, height: 600 },
];
