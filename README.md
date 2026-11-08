# Find a home

A single-page introduction for shared-home applications, built with React, TypeScript, and Vite. The fridge collage uses local portraits, polaroid frames, and translated word magnets.

## Development

Use Node.js 22.12+ (or 24+).

```sh
npm ci
npm run dev
npm run build
```

## Structure

```text
src/
  components/
    FridgeMagnet/
    LanguageToggle/
    MagnetText/
    OpenFridge/
    Polaroid/
  context/LanguageContext.tsx
  i18n/{da,en,types}.ts
  pages/Home/{Home.tsx,Home.css,homeContent.ts}
public/images/
```

Every component has its own directory and styles. Each page has its own directory. There is one page, with no router or backend required.

## Personalise the fridge

- Edit the introductory copy in `src/i18n/da.ts` and `src/i18n/en.ts`. The current copy is a starting point; add your personal introduction before sharing.
- Add photo files to `public/images/`, then add a `photo` entry in `src/pages/Home/homeContent.ts`. Caption and alt-text keys belong in both dictionaries. Photos fill the square polaroid window without gaps or stretching, cropping only the overflow. Set each photo's `focalPoint: { x: 50, y: 50 }` to adjust its crop: values range from 0 (left/top) to 100 (right/bottom). For example, `{ x: 50, y: 20 }` favors the top of a portrait, and `{ x: 80, y: 50 }` favors the right of a landscape. The default is centered. Only the axis with overflow moves; square photos already fit exactly.
- Add text by defining matching keys in both dictionaries and adding a `text` entry to `fridgeBlocks` in `homeContent.ts`. Words automatically become separate magnets; `\n` starts a new line. Blocks flow through the responsive grid. Optional `board-item--<id>` styles in `Home.css` control rotation and placement.
- Add empty space with `{ kind: "spacer", id: "space-1", height: 80 }` anywhere in `fridgeBlocks`. Use a unique id for each spacer. Height is in pixels and defaults to 80 when omitted. A spacer occupies one grid slot (one column on desktop, one row on mobile); the normal grid gaps still apply, and a neighboring block can make the desktop row taller. No translation keys are needed.
- The footer invites people to reply through the channel where they received the link. Replace `home.contact` in both dictionaries if you prefer to share contact details.

Danish is the default. The language choice is saved in a one-year, first-party cookie. The switch updates all visible copy, photo descriptions, the document language, and page metadata.

## Opening the fridge

Click or keyboard-activate the handle to open the fridge. A full-screen view reveals the interior with a single portrait anchored to the bottom of the screen. Close it with the close button or Escape. Keyboard focus returns to the handle, and reduced-motion preferences disable the opening animation.

The portrait uses `public/images/Welcome.png`. Its original desk is cropped out through CSS in `src/components/OpenFridge/OpenFridge.css`; the source photo is unchanged. When replacing it with a full-body photo, adjust the portrait image height and positioning there.

## Deployment

`npm run build` outputs a static site in `dist/`. Serve that folder with any static host, or build the included Dockerfile to serve it through nginx.
