# Fonts

Headings use **Agrandir** (PangramPangram — commercial font, not on Google Fonts),
so the files must be self-hosted here. Drop the WOFF2 files with exactly these names:

- `Agrandir-Regular.woff2` (weight 400)
- `Agrandir-Medium.woff2` (weight 500)
- `Agrandir-Bold.woff2` (weight 700)

The `@font-face` rules are already wired up in `src/styles/global.css`, and the
heading stack in `tailwind.config.mjs` is `Agrandir → Space Grotesk → system`.
So as soon as the files are here, all headings + the name switch to Agrandir
automatically. Until then they fall back to Space Grotesk (no error, just a 404
for the missing font files).

If your Agrandir files have different names or weights (e.g. "Agrandir Wide",
"Agrandir Grand Heavy", `.otf`/`.woff`), just drop them in and tell me the exact
filenames — I'll adjust the `@font-face` rules.
