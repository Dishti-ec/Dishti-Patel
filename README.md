# Dishti Patel — one identity, three worlds

A dependency-free portfolio built with HTML, CSS and JavaScript. Open `index.html` directly in a browser or serve this folder with any static web server.

## The three modes

- **Archive** (`#/`) — the professional landing page, academic profile, roles, event records, project cards and contact section.
- **Workshop** (`#/workshop`) — a responsive project explorer. Select a project and its documents to navigate the case-study outline.
- **Observatory** (`#/observatory`) — a full-screen vertical thought archive with 11 story sections, category filters, wheel/touch navigation, keyboard controls and a timed, pause-to-advance slideshow.

Project and story content and route behavior live in `app.js`; visual tokens, responsive layouts and mode-specific styling live in `styles.css`. The Archive theme preference is saved in local storage.

The Observatory loads GSAP 3.15 and its Observer plugin from jsDelivr. If the CDN is unavailable, it logs a warning and retains wheel/touch navigation with CSS transitions. Respect for reduced-motion preferences disables automatic slide advancement.

## Content to verify before publishing

- Supply a real portrait and a verified résumé file.
- Confirm role titles and descriptions.
- Verify event names, years, results and evidence before describing an award or placement.
- Add project screenshots, implementation details and actual public demo/source links.
- Add a verified contact address or configure a form-delivery endpoint. The current form validates input but explicitly does not send it.
- Publish only reviewed Observatory articles with accurate dates and reading times.
- Add the supplied Observatory image assets before replacing the clearly marked image placeholders.

No contact details, social URLs, résumé, portrait, project links or article content were provided for this draft, so they are not fabricated here.
