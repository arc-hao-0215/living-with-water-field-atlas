# Living with Water

An interactive field atlas by Hao Chang, developed from SOM Foundation Fellowship research in the Netherlands in September 2026.

## Design approach

The interface combines four useful ideas from architectural research websites while correcting their common weaknesses:

- **Out of the Desert:** map-first navigation and spatial discovery. The atlas keeps that immediacy, but adds a persistent record panel so visitors never lose context.
- **MIT Senseable City Lab:** data-led spatial reading and movement across scales. The first version uses a lightweight SVG system rather than a heavy 3D scene, improving loading, accessibility and mobile use.
- **Forensic Architecture:** research material is structured as connected evidence. Each record separates verified context, field reading and research insight to prevent claims from blending together.
- **Goa Water Stories:** fieldwork becomes a narrative rather than a catalogue. The atlas retains its layered storytelling while avoiding desktop-only audio and interaction requirements.

The visual language draws on architectural drawings and academic publications: near-black ground, fine rules, monospaced metadata, an editorial display scale and a restrained water-blue accent.

## Included interactions

- Map, timeline and index views
- Filters for six research lenses
- Eight linked field records
- Keyboard-accessible map markers and controls
- Responsive layouts for desktop, tablet and mobile
- Reduced-motion support
- Source links and a research-method dialog

## Publish on GitHub Pages

This repository includes a GitHub Actions workflow. After pushing it to a GitHub repository:

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main`, or manually run **Deploy to GitHub Pages** under Actions.

No package installation or build step is required. The published site is the contents of `dist/`.

## Content updates

Research records are stored at the beginning of `dist/assets/script.js`. Replace edited field readings with Hao's final notes and add only quotations or interview material cleared for public use.
