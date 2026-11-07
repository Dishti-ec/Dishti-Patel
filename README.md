# Dishti Patel — one identity, three worlds

A dependency-free portfolio built with HTML, CSS and JavaScript. Open `index.html` directly in a browser or serve this folder with any static web server.

## The three modes

- **Archive** (`#/`) — the professional landing page, exploration index, interactive project desktop, roles, event records and contact section.
- **Workshop** (`#/workshop`) — a spacious nine-project directory with custom folder identities, search/domain filters and grid/list views. Opening a project creates a temporary multi-project workspace with a project explorer, document tabs and a shared 13-module documentation map. Documentation targets are shown separately from supplied project evidence; missing source material is not fabricated.
- **Observatory** (`#/observatory`) — a full-screen vertical thought archive with 11 story sections, category filters, wheel/touch navigation, keyboard controls and a timed, pause-to-advance slideshow.

The Workshop remains part of this dependency-free portfolio rather than a separate React application. Its registry, project themes, documentation module definitions and route behavior live in `app.js`; visual tokens, responsive layouts and mode-specific styling live in `styles.css`. The Archive theme preference is saved in local storage.

The Workshop registry order is NexTerra, CloudForge, Carbon Credits Ecosystem, PRAVAHA, Urvara and Triology as featured projects, followed by Kanochi, Cognivault and Retra 038 / Suraksha in the archive. The directory is the landing page; its explorer starts empty. Projects opened from the directory are held only in in-memory session state, retained while navigating within the Workshop and cleared on exit, reload or browser back-forward cache restoration. Registry metadata and project notes are kept in separate `projectRegistry` and `projectDocuments` data structures. Every project exposes the same 13 documentation modules, from Overview through Media Assets. Carbon Credits Ecosystem, NexTerra, CloudForge and Triology summaries are grounded in the supplied project ZIPs. Their demonstrations, mock data, unconnected integrations, source limitations and unverified outcomes are distinguished from production services or measured results. The displayed file lists remain documentation targets and do not imply that those individual documentation files, deployments or project outcomes have been supplied.

The homepage project desktop shows four featured projects at once in an asymmetrical two-row grid. Its toolbar arrows advance or reverse one project at a time; the folders animate between positions, and the next featured folder enters from below. When the section is visible, the page is active, and the user is not interacting with it, the carousel advances automatically every 10 seconds. Autoplay is disabled for reduced-motion preferences and pauses while the section is off-screen, the page is hidden, or the user hovers or focuses within it. Triology is included in the featured sequence and the homepage Workshop preview. The full nine-project registry remains available in the Workshop.

## Field Notes

The Archive's **Field Notes** section is driven by the `fieldNotes` array in `app.js`. The homepage presents five featured entries in a continuously gliding Polaroid carousel; pause it to browse manually. `#/field-notes/archive` opens the complete filtered collection. Each record uses a stable `id`, an explicit `status` (`draft`, `needs-verification` or `verified`), and a separate `visibility` setting (`public` by default). It also supports optional case-study fields and empty `gallery`, `documents`, and `externalLinks` arrays until real materials are available. Keep historical result claims in `historicalClaim`; they remain visibly unverified until evidence supports changing the status to `verified` and adding a `result`. Do not replace the clearly marked homepage photo placeholders with stock or generated event imagery.

To add a competition, add a record to `fieldNotes` with a unique id, event name, category, summary and appropriate status. Populate the `sections`, `timeline`, and resource arrays only with confirmed information. Add photographs under `assets/field-notes/<record-id>/gallery/` and PPT/PDF files under `assets/field-notes/<record-id>/documents/`, then add their actual relative paths to that record. The page only renders usable resource links and images; do not add paths for files that do not exist.

The Archive navigation has a hanging badge made from `assets/dangling.png`. Its checkerboard background is removed in `assets/dangling-transparent.png`, and cursor movement adds a subtle sway and wave distortion.

The Observatory loads GSAP 3.15 and its Observer plugin from jsDelivr. If the CDN is unavailable, it logs a warning and retains wheel/touch navigation with CSS transitions. Respect for reduced-motion preferences disables automatic slide advancement.

## Content to verify before publishing

- Supply a verified résumé file.
- Confirm role titles and descriptions.
- Verify event names, years, results and evidence before describing an award or placement.
- Add project screenshots, implementation details and actual public demo/source links.
- Add a verified contact address or configure a form-delivery endpoint. The current form validates input but explicitly does not send it.
- Publish only reviewed Observatory articles with accurate dates and reading times.
- Add the supplied Observatory image assets before replacing the clearly marked image placeholders.

No contact details, social URLs, résumé, project links or article content were provided for this draft, so they are not fabricated here.
