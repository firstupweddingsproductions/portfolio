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
}

// ─── PLACEHOLDER PROJECTS ────────────────────────────────────────────────────
// These are real-ish stand-ins based on your CV/Arbeitsproben so you can see the
// structure. Swap titles / add video ids / thumbnails as the real material lands.
export const PROJECTS: Project[] = [
  // ── Kurzfilm ──
  {
    slug: 'horror-kurzfilm',
    title: 'Horror-Kurzfilm',
    category: 'film',
    year: '2026',
    featured: true,
    role: { de: 'Regie · Drehbuch · Schnitt', en: 'Director · Writer · Editor' },
    description: {
      de: 'Eigener Kurzfilm mit Fokus auf Spannung, Timing und Atmosphäre. Festival-Einreichung 2026, Entscheidung ausstehend.',
      en: 'Original short film focused on suspense, timing and atmosphere. Festival submission 2026, decision pending.',
    },
    video: { type: 'none' }, // TODO: { type: 'vimeo', id: '...' }
  },
  {
    slug: 'comedy-kurzfilm',
    title: 'Comedy-Kurzfilm',
    category: 'film',
    year: '2025',
    featured: true,
    role: { de: 'Drehbuch · Regie · Schnitt', en: 'Writer · Director · Editor' },
    description: {
      de: 'Fiktionales Studienprojekt — Figurenführung, komödiantisches Timing und Low-Budget-Produktion im kleinen Team.',
      en: 'Fictional student project — character work, comedic timing and low-budget production in a small team.',
    },
    video: { type: 'none' },
  },

  // ── Corporate ──
  {
    slug: 'dataport-lernvideo',
    title: 'Dataport — Lernvideo-Reihe',
    category: 'corporate',
    year: '2025',
    featured: true,
    role: { de: 'Konzept · Schnitt · Motion', en: 'Concept · Edit · Motion' },
    description: {
      de: 'Lern- und Informationsvideos für interne/externe Kommunikation: Konzeption, Schnitt, Motion Design, Untertitel und Export.',
      en: 'Learning and information videos for internal/external communication: concept, editing, motion design, subtitles and export.',
    },
    video: { type: 'none' },
  },
  {
    slug: 'dataport-projektvideo',
    title: 'Dataport — Projektvideo',
    category: 'corporate',
    year: '2025',
    role: { de: 'Drehvorbereitung · Postproduktion', en: 'Pre-production · Post' },
    description: {
      de: 'Projektkommunikation mit Stakeholder-Abstimmung, plattformgerechter Aufbereitung und Qualitätssicherung.',
      en: 'Project communication with stakeholder alignment, platform-ready delivery and quality assurance.',
    },
    video: { type: 'none' },
  },

  // ── Interviews & Events ──
  {
    slug: 'interview-format',
    title: 'Interview-Format',
    category: 'interviews',
    year: '2025',
    role: { de: 'Kamera · Schnitt · Ton', en: 'Camera · Edit · Audio' },
    description: {
      de: 'Interviewformat mit klarer Storystruktur, natürlichem Schnitt und sauberer Ton- und Bildbearbeitung.',
      en: 'Interview format with a clear story structure, natural editing and clean audio/picture work.',
    },
    video: { type: 'none' },
  },
  {
    slug: 'event-recap',
    title: 'Event Recap',
    category: 'interviews',
    year: '2024',
    role: { de: 'Kamera · Schnitt', en: 'Camera · Edit' },
    description: {
      de: 'Eventzusammenfassung mit dynamischem Schnitt, der die Atmosphäre des Tages einfängt.',
      en: 'Event recap with a dynamic edit that captures the atmosphere of the day.',
    },
    video: { type: 'none' },
  },

  // ── Visuelle Arbeiten ──
  {
    slug: 'social-visuals',
    title: 'Social-Media-Visuals',
    category: 'visuelle',
    year: '2025',
    role: { de: 'Design · Layout', en: 'Design · Layout' },
    description: {
      de: 'Social-Media-Visuals und Layouts — gestalterisches Verständnis und sichere visuelle Content-Aufbereitung.',
      en: 'Social media visuals and layouts — strong visual sense and confident content design.',
    },
    video: { type: 'none' },
  },
  {
    slug: 'motion-reel',
    title: 'Motion Design Reel',
    category: 'visuelle',
    year: '2025',
    role: { de: 'Animation · After Effects', en: 'Animation · After Effects' },
    description: {
      de: 'Kurzes Motion-Design-Reel: Typografie in Bewegung, Logo-Animation und Transitions.',
      en: 'Short motion design reel: kinetic typography, logo animation and transitions.',
    },
    video: { type: 'none' },
  },

  // ── Weiteres (web / study / off-niche) ──
  {
    slug: 'first-up-weddings',
    title: 'First Up Weddings — Website',
    category: 'weiteres',
    year: '2026',
    role: { de: 'Konzept · Design · Web (Astro)', en: 'Concept · Design · Web (Astro)' },
    description: {
      de: 'Zweisprachige Marken-Website für meine Hochzeitsfilm-Marke. Konzeption, Design und Umsetzung in Astro + Tailwind.',
      en: 'Bilingual brand website for my wedding-film brand. Concept, design and build in Astro + Tailwind.',
    },
    video: { type: 'none' },
    link: 'https://firstupweddings.de',
  },
  {
    slug: 'first-up-productions',
    title: 'First Up Productions — Website',
    category: 'weiteres',
    year: '2026',
    role: { de: 'Konzept · Design · Web (Astro)', en: 'Concept · Design · Web (Astro)' },
    description: {
      de: 'Business-Website für Corporate-Videoproduktion. Markenaufbau, Copy und technische Umsetzung.',
      en: 'Business website for corporate video production. Brand build, copy and technical implementation.',
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
  },
];

// ─── helpers ─────────────────────────────────────────────────────────────────
export function catLabel(cat: Category, lang: Lang): string {
  return lang === 'en' ? cat.en : cat.de;
}

export function getCategory(key: CategoryKey): Category | undefined {
  return CATEGORIES.find((c) => c.key === key);
}
