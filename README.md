# Dishti Patel — one identity, three worlds

A dependency-free portfolio built with HTML, CSS and JavaScript. Open `index.html` directly in a browser or serve this folder with any static web server.

## The three modes

- **Archive** (`#/`) — the professional landing page, exploration index, interactive project desktop, roles, event records and contact section.
- **Workshop** (`#/workshop`) — a spacious nine-project directory with custom folder identities, search/domain filters and grid/list views. Opening a project creates a temporary multi-project workspace with a project explorer and concise case-study sections. Sections without source-backed content are omitted rather than shown as empty documentation templates.
- **Observatory** (`#/observatory`) — a full-screen vertical thought archive with 11 story sections, category filters, wheel/touch navigation, keyboard controls and a timed, pause-to-advance slideshow.

The Workshop remains part of this dependency-free portfolio rather than a separate React application. Its registry, project themes, case-study content and route behavior live in `app.js`; visual tokens, responsive layouts and mode-specific styling live in `styles.css`. The Archive theme preference is saved in local storage.

The Workshop registry order is NexTerra, CloudForge, Carbon Credits Ecosystem, PRAVAHA, Urvara and Triology as featured projects, followed by Kanadshield, Cognivault and TETRA 038 / FasalRaksha in the archive. The directory is the landing page; its explorer starts empty. Projects opened from the directory are held only in in-memory session state, retained while navigating within the Workshop and cleared on exit, reload or browser back-forward cache restoration. Registry metadata and project notes are kept in separate `projectRegistry` and `projectDocuments` data structures. Project pages use a compact case-study/reference-sheet structure (introduction, demonstration, features, problem/context, contribution, technologies/concepts, architecture, implementation, results/limitations, and links) and omit sections with no supplied evidence. Source-backed summaries are distinguished from user-described concepts; simulations, mock data, unconnected integrations and unverified outcomes are not presented as production services or measured results.

The homepage project desktop shows four featured projects at once in an asymmetrical two-row grid. Its toolbar arrows advance or reverse one project at a time; the folders animate between positions, and the next featured folder enters from below. When the section is visible, the page is active, and the user is not interacting with it, the carousel advances automatically every 10 seconds. Autoplay is disabled for reduced-motion preferences and pauses while the section is off-screen, the page is hidden, or the user hovers or focuses within it. Triology is included in the featured sequence and the homepage Workshop preview. The full nine-project registry remains available in the Workshop. Supplied local HTML animations are embedded as lazy-loaded previews in matching project cards and case studies; the reference ZIPs do not include standalone video files. Public demo links are included where supplied; local previews and product concepts are labeled separately from live services.

## Field Notes

The Archive's **Field Notes** section is driven by the `fieldNotes` array in `app.js`. Only public records marked `verified` with a confirmed `result` and at least one evidence item (gallery photo, document or external link) are rendered on the homepage or archive. Draft and needs-verification records remain private to the data source. Add only confirmed organizer, year, result, role, team and evidence; never infer or fabricate missing details.

To add a competition, add a record to `fieldNotes` with a unique id, event name, category, summary and appropriate status. Populate the `sections`, `timeline`, and resource arrays only with confirmed information. Add photographs under `assets/field-notes/<record-id>/gallery/` and PPT/PDF files under `assets/field-notes/<record-id>/documents/`, then add their actual relative paths to that record. The page only renders usable resource links and images; do not add paths for files that do not exist.

## Contact form delivery

The static site uses Formspree for message delivery. The endpoint `https://formspree.io/f/mkjrwjpv` is configured in `app.js`; the Formspree account must have `dishti.271@gmail.com` set as its recipient and that address must be verified:

1. In [Formspree](https://formspree.io/), confirm this endpoint belongs to your form and set its recipient to `dishti.271@gmail.com`.
2. Verify the recipient address and any first-submission confirmation requested by Formspree.
3. Deploy the site over HTTPS, submit a test message, and confirm it arrives in the recipient inbox (including spam).

The endpoint ID is public and belongs in the static client; do not put a private API key in `app.js`. If the endpoint or recipient is not active, the form reports delivery errors and visitors can use the direct email link instead.

The Archive navigation has a hanging badge made from `assets/dangling.png`. Its checkerboard background is removed in `assets/dangling-transparent.png`, and cursor movement adds a subtle sway and wave distortion.

The Observatory loads GSAP 3.15 and its Observer plugin from jsDelivr. If the CDN is unavailable, it logs a warning and retains wheel/touch navigation with CSS transitions. Respect for reduced-motion preferences disables automatic slide advancement.

## Content to verify before publishing

- Confirm each personal project contribution before adding it to a case study.
- Verify event names, years, results and evidence before describing an award or placement.
- Add verified project source/demo URLs and evidence screenshots where available.
- The résumé is available in `assets/DISHTI PATEL_CV.pdf`; public contact links are in the homepage contact panel.
- Configure and verify the Formspree endpoint using the steps above before using the contact form.
- Publish only reviewed Observatory articles with accurate dates and reading times.
- Add the supplied Observatory image assets before replacing the clearly marked image placeholders.
