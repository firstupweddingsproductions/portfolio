// UI chrome strings (nav, buttons, footer). Longer page prose lives in the page files.
// Category labels live in src/data/projects.ts (single source of truth).
import type { Lang } from './routes';

const ui: Record<Lang, Record<string, string>> = {
  de: {
    'site.role': 'Film · Video · Visuelle Gestaltung',
    'nav.work': 'Arbeiten',
    'nav.menu': 'Mehr',
    'filter.featured': 'Ausgewählt',
    'filter.all': 'Alle Projekte',
    'nav.about': 'Über mich',
    'nav.contact': 'Kontakt',
    'lang.de': 'DE',
    'lang.en': 'EN',
    'lang.aria': 'Sprache wechseln',
    'card.watch': 'Ansehen',
    'card.external': 'Ansehen',
    'lightbox.close': 'Schließen',
    'work.empty': 'Bald mehr.',
    'footer.loc': 'Kiel, Deutschland',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'mobile.menu': 'Menü',
    'legal.impressum': 'Impressum',
    'legal.datenschutz': 'Datenschutz',
  },
  en: {
    'site.role': 'Film · Video · Visual Design',
    'nav.work': 'Work',
    'nav.menu': 'More',
    'filter.featured': 'Selected',
    'filter.all': 'All Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'lang.de': 'DE',
    'lang.en': 'EN',
    'lang.aria': 'Switch language',
    'card.watch': 'Watch',
    'card.external': 'Visit',
    'lightbox.close': 'Close',
    'work.empty': 'More soon.',
    'footer.loc': 'Kiel, Germany',
    'footer.rights': 'All rights reserved.',
    'mobile.menu': 'Menu',
    'legal.impressum': 'Imprint',
    'legal.datenschutz': 'Privacy',
  },
};

export function t(lang: Lang, key: string): string {
  return ui[lang][key] ?? ui.de[key] ?? key;
}
