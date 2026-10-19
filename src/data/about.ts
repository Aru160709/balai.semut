export interface StoryBlock {
  id: number;
  eyebrow: string;
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  paragraphs: string[];
  reverse?: boolean;
}

export interface TimelineEntry {
  title: string;
  desc: string;
}

export type ValueIconName = 'people' | 'sun' | 'heart' | 'check' | 'smile';

export interface Value {
  icon: ValueIconName;
  title: string;
  desc: string;
}

/** GANTI CERITA DUMMY DI BAWAH INI DENGAN CERITA ASLI */
export const storyBlocks: StoryBlock[] = [
  {
    id: 1,
    eyebrow: 'Awal Mula',
    title: 'Berawal dari kumpul-kumpul biasa',
    image: 'assets/images/aboutstory1.PNG',
    alt: 'Awal mula Balai.semut',
    width: 900,
    height: 1100,
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ],
  },
  {
    id: 2,
    eyebrow: 'Makna Balai.semut',
    title: 'Kecil, tapi selalu bergerak bersama',
    image: 'assets/images/aboutstory2.jpg',
    alt: 'Makna nama Balai.semut',
    width: 900,
    height: 700,
    reverse: true,
    paragraphs: [
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    title: '2026 — Awal Terbentuk',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: '2026 — Kegiatan Pertama',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
  },
  {
    title: '2026 — Semakin Solid',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
  },
  {
    title: '2026 — Terus Berlanjut',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
  },
];

export const philosophyText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kami percaya bahwa kebersamaan tidak butuh struktur yang rumit — cukup niat untuk terus meluangkan waktu, saling mendukung, dan menikmati proses. Dari liburan singkat, olahraga bareng, nongkrong santai, hingga kegiatan sosial seperti SOTR dan bagi takjil, semuanya kami lakukan dengan cara yang sama: bersama-sama.';

export const values: Value[] = [
  { icon: 'people', title: 'Togetherness', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: 'sun', title: 'Positive Energy', desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { icon: 'heart', title: 'Good Memories', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  { icon: 'check', title: 'Helping Others', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
  { icon: 'smile', title: 'Enjoy The Moment', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
];
