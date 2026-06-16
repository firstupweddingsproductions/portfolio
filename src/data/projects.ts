// ─────────────────────────────────────────────────────────────────────────────
//  PORTFOLIO DATA — single source of truth for categories and projects.
//
//  To add / edit a project: copy a block in PROJECTS below and fill it in.
//  • video: { type: 'vimeo', id: '123456789' }                → opens Vimeo player
//  • video: { type: 'drive',  id: '1AbCdEf...' }              → opens Google Drive player
//      (the Drive file must be shared "anyone with the link")
//  • video: { type: 'none' }                                  → no player (e.g. a still / WIP)
//  • link:  'https://...'                                     → for 'weiteres' web projects
//      (card opens the link in a new tab instead of a video)
//  • thumbnail: '/thumbs/my-project.jpg'  (drop the file in  public/thumbs/ )
//      → if omitted, a styled placeholder with the title is shown.
// ─────────────────────────────────────────────────────────────────────────────

export type Lang = 'de' | 'en';
export type CategoryKey = 'film' | 'corporate' | 'interviews' | 'visuelle' | 'weiteres';

export interface Category {
  key: CategoryKey;
  de: string;
  en: string;
  blurb: { de: string; en: string };
}

export const CATEGORIES: Category[] = [
  {
    key: 'film',
    de: 'Kurzfilm',
    en: 'Short Films',
    blurb: {
      de: 'Eigene filmische Arbeiten — Regie, Drehbuch, Kamera, Schnitt, Atmosphäre.',
      en: 'Original films — directing, writing, camera, editing, atmosphere.',
    },
  },
  {
    key: 'corporate',
    de: 'Corporate',
    en: 'Corporate',
    blurb: {
      de: 'Unternehmens-, Lern- und Projektvideos. Klare Informationsvermittlung.',
      en: 'Corporate, learning and project videos. Clear communication.',
    },
  },
  {
    key: 'interviews',
    de: 'Interviews & Events',
    en: 'Interviews & Events',
    blurb: {
      de: 'Interviewformate und Event-Recaps mit klarer Story und sauberem Schnitt.',
      en: 'Interview formats and event recaps with a clear story and clean edit.',
    },
  },
  {
    key: 'visuelle',
    de: 'Visuelle Arbeiten',
    en: 'Visual Work',
    blurb: {
      de: 'Social-Media-Visuals, Motion Design und visuelle Kommunikation.',
      en: 'Social media visuals, motion design and visual communication.',
    },
  },
  {
    key: 'weiteres',
    de: 'Weiteres',
    en: 'Other',
    blurb: {
      de: 'Web-, Studien- und sonstige Projekte außerhalb der Hauptnische.',
      en: 'Web, academic and other projects beyond the core niche.',
    },
  },
];

export type VideoSource =
  | { type: 'vimeo'; id: string }
  | { type: 'drive'; id: string }
  | { type: 'none' };

export interface Project {
  slug: string;
  title: string;
  category: CategoryKey;
  year: string;
  featured?: boolean;
  role: { de: string; en: string };
  description: { de: string; en: string };
  video: VideoSource;
  thumbnail?: string;
  link?: string; // external link (used for 'weiteres' web projects)
  pdf?: string; // opens a PDF (project documentation / screenshots) in a new tab
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────
// Film/Corporate/Interviews/Visuelle entries mirror the Google Drive portfolio
// folder (exact names + counts). Each video file gets its Drive id once available:
//   video: { type: 'drive', id: '<file-id>' }   ← paste the Drive file id here
// Until then the id is empty and the player shows a "preview coming soon" panel.
export const PROJECTS: Project[] = [
  // ── Kurzfilm (Drive: "Kurzfilme", 2) ──
  {
    slug: 'glow-horror-kurzfilm',
    title: 'Glow — Horror-Kurzfilm',
    category: 'film',
    year: '2026',
    featured: true,
    role: { de: 'Drehbuch · Kamera · Regie · Postproduktion', en: 'Script · Camera · Directing · Post' },
    description: {
      de: 'Eigener Horror-Kurzfilm „Glow" — Drehbuch, Kamera, Regie und Postproduktion.',
      en: 'Original horror short “Glow” — script, camera, directing and post-production.',
    },
    video: { type: 'drive', id: '12BJ6MXDBx1GffQm6svH7jz60543XVGUm' },
    thumbnail: '/thumbs/glow-horror-kurzfilm.jpg',
  },
  {
    slug: 'nachdreh-spur-des-falken',
    title: 'Nachdreh: "Die Spur des Falken" (1941)',
    category: 'film',
    year: '2025', // TODO: Jahr aus Drive prüfen (war im Dateinamen abgeschnitten)
    role: { de: 'Studienprojekt · Kamera · Regie · Postproduktion', en: 'Student project · Camera · Directing · Post' },
    description: {
      de: 'Studentische Übung / Hommage (nicht-kommerziell): Nachdreh einer Szene aus „Die Spur des Falken" (1941).',
      en: 'Student exercise / homage (non-commercial): re-shoot of a scene from “The Maltese Falcon” (1941).',
    },
    video: { type: 'drive', id: '1XeZqIZldnDd0p6TU_KutQ8wtVT8bV3WD' },
    thumbnail: '/thumbs/nachdreh-spur-des-falken.jpg',
  },

  // ── Corporate (Drive: "Corporate", 4) ──
  {
    slug: 'dataport-produktvorstellung',
    title: 'Dataport — Produktvorstellung',
    category: 'corporate',
    year: '2026',
    featured: true,
    role: { de: 'Konzeption · Kamera · Postproduktion', en: 'Concept · Camera · Post' },
    description: {
      de: 'Produktvorstellung für Dataport — Konzeption, Kamera und Postproduktion.',
      en: 'Product presentation for Dataport — concept, camera and post-production.',
    },
    video: { type: 'drive', id: '1iA7N8Bp8I5JEjHMMzFCFPxmOPSod6ca7' },
    thumbnail: '/thumbs/dataport-produktvorstellung.jpg',
  },
  {
    slug: 'dataport-produktguide',
    title: 'Dataport — Produktguide',
    category: 'corporate',
    year: '2026',
    role: { de: 'Konzeption · Kamera · Postproduktion', en: 'Concept · Camera · Post' },
    description: {
      de: 'Produktguide-Video für Dataport.',
      en: 'Product guide video for Dataport.',
    },
    video: { type: 'drive', id: '1mlSEHJOCDliu8IkDudCAVeZeRY3UftXD' },
    thumbnail: '/thumbs/dataport-produktguide.jpg',
  },
  {
    slug: 'dataport-produktguide-2',
    title: 'Dataport — Produktguide 2',
    category: 'corporate',
    year: '2026',
    role: { de: 'Konzeption · Kamera · Postproduktion', en: 'Concept · Camera · Post' },
    description: {
      de: 'Produktguide-Video (Teil 2) für Dataport.',
      en: 'Product guide video (part 2) for Dataport.',
    },
    video: { type: 'drive', id: '1d6EVb6CEJCh2kX3fqNzDwiMTippJjoh3' },
    thumbnail: '/thumbs/dataport-produktguide-2.jpg',
  },
  {
    slug: 'dataport-produktguide-3',
    title: 'Dataport — Produktguide 3',
    category: 'corporate',
    year: '2026',
    role: { de: 'Konzeption · Kamera · Postproduktion', en: 'Concept · Camera · Post' },
    description: {
      de: 'Produktguide-Video (Teil 3) für Dataport.',
      en: 'Product guide video (part 3) for Dataport.',
    },
    video: { type: 'drive', id: '1voK3r9lnJ10NlxuIZj-RvOPNrhb-DWDQ' },
    thumbnail: '/thumbs/dataport-produktguide-3.jpg',
  },

  // ── Interviews & Events (Drive: "Interviews / Event Recaps", 3) ──
  {
    slug: 'dataport-bereichsmeeting-recap',
    title: 'Dataport — Bereichsmeeting Recap',
    category: 'interviews',
    year: '2025',
    featured: true,
    role: { de: 'Konzept · Kamera · Postproduktion', en: 'Concept · Camera · Post' },
    description: {
      de: 'Event-Recap eines Bereichsmeetings für Dataport.',
      en: 'Event recap of a divisional meeting for Dataport.',
    },
    video: { type: 'drive', id: '1yLfcrA17K9wav_HrqMgqj08tfrHJh9Oy' },
    thumbnail: '/thumbs/dataport-bereichsmeeting-recap.jpg',
  },
  {
    slug: 'dataport-interview-blog',
    title: 'Dataport — Interview Blog',
    category: 'interviews',
    year: '2025',
    role: { de: 'Konzept · Kamera · Postproduktion', en: 'Concept · Camera · Post' },
    description: {
      de: 'Interview-Format („Interview Blog") für Dataport.',
      en: 'Interview format (“Interview Blog”) for Dataport.',
    },
    video: { type: 'drive', id: '1nLwY7j9DH6-bopf_tp4h5zwIMAxvHF4S' },
    thumbnail: '/thumbs/dataport-interview-blog.jpg',
  },
  {
    slug: 'dataport-hausmesse-recap',
    title: 'Dataport — Hausmesse Recap',
    category: 'interviews',
    year: '2024',
    role: { de: 'Kamera · Postproduktion', en: 'Camera · Post' },
    description: {
      de: 'Recap der Dataport-Hausmesse.',
      en: 'Recap of the Dataport in-house expo.',
    },
    video: { type: 'drive', id: '1wou9Px-6CCWyXGUXPecRc28RrrmccQfC' },
    thumbnail: '/thumbs/dataport-hausmesse-recap.jpg',
  },

  // ── Visuelle Arbeiten (Drive: "Visuelle Arbeit", 2) ──
  {
    slug: 'verlobung-trailer-ilayda-emin',
    title: 'First Up Weddings — Ilayda & Emin Can',
    category: 'visuelle',
    year: '2025',
    featured: true,
    role: { de: 'Verlobungstrailer · Kamera · Schnitt · Farblook', en: 'Engagement Trailer · Camera · Edit · Color' },
    description: {
      de: 'Cinematischer Verlobungs-Trailer für First Up Weddings (meine eigene Hochzeitsfilm-Marke).',
      en: 'Cinematic engagement trailer for First Up Weddings (my own wedding-film brand).',
    },
    video: { type: 'drive', id: '1jx4qZH5h1kL95DwWBBqK_nrJsekVbXvb' },
  },
  {
    slug: 'mustafa-yaren-verlobungstrailer',
    title: 'First Up Weddings — Mustafa & Yaren',
    category: 'visuelle',
    year: '2025', // TODO: Jahr prüfen
    role: { de: 'Verlobungstrailer · Kamera · Schnitt · Farblook', en: 'Engagement Trailer · Camera · Edit · Color' },
    description: {
      de: 'Cinematischer Verlobungs-Trailer für First Up Weddings.',
      en: 'Cinematic engagement trailer for First Up Weddings.',
    },
    video: { type: 'drive', id: '' }, // TODO: Drive file-ID
  },
  {
    slug: 'a-second-life-trailer',
    title: 'A Second Life — Trailer',
    category: 'visuelle',
    year: '2024',
    role: { de: 'Postproduktion', en: 'Post-production' },
    description: {
      de: 'Trailer-Schnitt „A Second Life".',
      en: 'Trailer edit “A Second Life”.',
    },
    video: { type: 'drive', id: '1-1Dw7spji40S8wD_cgSnZweJIHbtG87B' },
  },

  // ── Weiteres (web / study / off-niche) ──
  {
    slug: 'first-up-weddings',
    title: 'First Up Weddings',
    category: 'weiteres',
    year: '2026',
    role: { de: 'Eigene Marke · Konzept · Design · Web', en: 'Own brand · Concept · Design · Web' },
    description: {
      de: 'Meine eigene Marke für cinematische Hochzeits- und Eventfilme — von mir gegründet und gestaltet. Zweisprachige Website komplett selbst umgesetzt (Astro + Tailwind).',
      en: 'My own brand for cinematic wedding and event films — founded and designed by me. Bilingual website built entirely by myself (Astro + Tailwind).',
    },
    video: { type: 'none' },
    link: 'https://firstupweddings.de',
  },
  {
    slug: 'first-up-productions',
    title: 'First Up Productions',
    category: 'weiteres',
    year: '2026',
    role: { de: 'Eigene Marke · Konzept · Design · Web', en: 'Own brand · Concept · Design · Web' },
    description: {
      de: 'Meine eigene Marke für Corporate-Videoproduktion — Markenaufbau, Copy und technische Umsetzung in Eigenregie.',
      en: 'My own brand for corporate video production — brand building, copy and implementation, all done by me.',
    },
    video: { type: 'none' },
    link: 'https://firstupproductions.de',
  },
  {
    slug: 'smart-blindenstock',
    title: 'Smarter Blindenstock (3D-Druck)',
    category: 'weiteres',
    year: '2024',
    role: { de: '3D-Druck · Programmierung · Sensorik', en: '3D Printing · Programming · Sensors' },
    description: {
      de: 'Studienprojekt: ein 3D-gedruckter, smart programmierter Blindenstock mit Sensorik zur Hinderniserkennung und Feedback.',
      en: 'University project: a 3D-printed, smart-programmed white cane with sensors for obstacle detection and feedback.',
    },
    video: { type: 'none' },
    pdf: '/docs/blindenstock.pdf',
    // thumbnail: '/thumbs/blindenstock.jpg',
  },
  {
    slug: 'vr-spielprojekt',
    title: 'VR-Spielprojekt',
    category: 'weiteres',
    year: '2023',
    role: { de: 'Game Design · VR · 3D', en: 'Game Design · VR · 3D' },
    description: {
      de: 'Interaktives VR-Spielprojekt aus dem Studium — Konzeption, 3D-Umgebung und Interaktionsdesign.',
      en: 'Interactive VR game project from university — concept, 3D environment and interaction design.',
    },
    video: { type: 'none' },
    pdf: '/docs/vr-spielprojekt.pdf',
    // thumbnail: '/thumbs/vr.jpg',
  },
  {
    slug: 'bachelorthesis-dune',
    title: 'Bachelorthesis — Set-Design in Dune',
    category: 'weiteres',
    year: '2026',
    role: { de: 'Forschung · Analyse', en: 'Research · Analysis' },
    description: {
      de: 'B.Eng.-Thesis: Architektonisches Set-Design in Dune (2021) und Dune: Part Two (2024).',
      en: 'B.Eng. thesis: architectural set design in Dune (2021) and Dune: Part Two (2024).',
    },
    video: { type: 'none' },
    // pdf: nur eine BEREINIGTE Version (ohne urheberrechtlich geschützte Dune-Filmstills) verlinken — siehe RECHTE-CHECKLISTE.md
  },
];

// ─── helpers ─────────────────────────────────────────────────────────────────
export function catLabel(cat: Category, lang: Lang): string {
  return lang === 'en' ? cat.en : cat.de;
}

export function getCategory(key: CategoryKey): Category | undefined {
  return CATEGORIES.find((c) => c.key === key);
}
