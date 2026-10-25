const projects = [
  {
    slug: 'nexterra',
    accent: '#79c9c1',
    name: 'NexTerra',
    folder: '01_NexTerra',
    category: 'Geospatial · Environmental intelligence',
    tagline: 'Exploring how geospatial data can make environmental risk easier to understand.',
    concept: 'A proposed geospatial environmental intelligence project. Data sources, analysis and validated capabilities need confirmation.',
    files: [
      ['overview.md', 'Project overview', 'A geospatial environmental intelligence concept: connect environmental context with a map-based way to explore risk. The exact user need, current feature set and project status should be confirmed against the working prototype.'],
      ['research.md', 'Research & discovery', 'A useful next step is to document the target users, data provenance, hazard definitions and evidence behind each proposed insight. No interviews, datasets or findings are claimed in this portfolio draft.'],
      ['architecture.md', 'Architecture', 'A potential workflow is data inputs → processing and analysis → map-based presentation. This is a discussion outline, not a claim about a deployed or validated pipeline.'],
      ['prototype.md', 'Prototype & evidence', 'Add real interface captures, a caption for each image and a clear label distinguishing a working build from a design prototype. No product screenshots or live demo have been supplied yet.'],
      ['decisions.md', 'Limitations & decisions', 'Document uncertainty, data freshness, geographic coverage and how people should interpret risk. Validation and implementation details remain to be verified.']
    ]
  },
  {
    slug: 'pravaha',
    accent: '#9ad5b2',
    name: 'PRAVAHA',
    folder: '02_PRAVAHA',
    category: 'Circular economy · E-waste',
    tagline: 'A project direction around more transparent e-waste collection and valuation.',
    concept: 'A proposed e-waste collection and circular-economy workflow. User research and implemented capabilities need confirmation.',
    files: [
      ['overview.md', 'Project overview', 'PRAVAHA is framed around e-waste collection, fair valuation and circular-economy workflows. Confirm the intended users, project scope and current prototype before publishing stronger claims.'],
      ['problem.md', 'Problem & motivation', 'Describe the specific collection or valuation problem this project addresses, who experiences it, and what evidence informed the idea. This draft does not claim interviews or validated demand.'],
      ['workflows.md', 'Workflows & design', 'A case study could map the real collector, recycler and material-verification journeys, then show the prototype screens that support each step. Those workflows are not yet documented here.'],
      ['architecture.md', 'Architecture', 'Record the services, data model and integrations that exist in the implementation. No particular backend, material-recognition model or traceability system is assumed.'],
      ['impact-and-limitations.md', 'Limitations & next steps', 'Separate demonstrated prototype behaviour from intended impact. Add field validation, pricing evidence and traceability limits only after they have been researched.']
    ]
  },
  {
    slug: 'cloudforge',
    accent: '#c4a9f3',
    name: 'CloudForge',
    folder: '03_CloudForge',
    category: 'Cloud · Learning experience',
    tagline: 'Exploring a more hands-on path into cloud concepts and developer tools.',
    concept: 'A proposed gamified cloud-learning environment. Simulated scenarios and any real AWS integrations need confirmation.',
    files: [
      ['overview.md', 'Project overview', 'CloudForge is framed as a gamified cloud-learning environment. Confirm the learner audience, completed challenges and current project status before describing it as a working product.'],
      ['learning-design.md', 'Learning design', 'Show how a learner progresses from a concept to an exercise and useful feedback. Label planned exercises separately from scenarios that have actually been built.'],
      ['system-design.md', 'System design', 'Document the implementation and distinguish simulated cloud scenarios from any real AWS integration. This draft does not imply that cloud resources are provisioned.'],
      ['build-notes.md', 'Build notes & reflection', 'Add the hardest implementation problem, what was tried, and the trade-offs or limitations observed. No performance or learning outcomes are claimed here.']
    ]
  },
  {
    slug: 'carbon-credits',
    accent: '#b4c690',
    name: 'Carbon Credits Ecosystem',
    folder: '04_Carbon_Credits',
    category: 'Climate · Verification & traceability',
    tagline: 'A systems concept for land registration and environmental evidence.',
    concept: 'A proposed carbon-credit registration and verification concept. Verification methods, data and implementation need confirmation.',
    files: [
      ['overview.md', 'Project overview', 'This project is framed around land registration, environmental verification and traceability. The stakeholder workflow and implemented scope still need to be verified.'],
      ['verification.md', 'Verification approach', 'Explain what evidence is collected, its source, and the limits of any geospatial or satellite verification. No verification accuracy or environmental impact is claimed.'],
      ['implementation.md', 'Implementation & next steps', 'Record implemented roles, data structures and integrations separately from planned work. Add evidence and limitations from the actual build before publication.']
    ]
  }
];

const observatoryPosts = [
  {
    slug: 'midnight-fragments',
    date: '2025-11-22',
    category: 'Thoughts',
    title: 'Midnight Fragments',
    excerpt: 'Half sentences worth keeping.',
    context: 'Some thoughts arrive without an introduction. A line in the margin, a question before sleep, a feeling that makes more sense once it has been written down.',
    cta: 'A small note from the quieter hours',
    motif: '✳'
  },
  {
    slug: 'the-day-i-won',
    date: '2026-04-20',
    category: 'Reflections',
    title: 'The Day I Won Without Expecting It',
    excerpt: 'That Independence Day essay and everything it quietly changed.',
    context: 'A reflection on writing an Independence Day essay, an unexpected win and the quiet confidence that can follow a moment you never planned to have.',
    cta: 'A moment that stayed after the applause',
    motif: '01'
  },
  {
    slug: 'a-day-that-felt-bigger',
    date: '2026-04-20',
    category: 'Moments',
    title: 'A Day That Felt Bigger Than Me',
    excerpt: 'A photograph, a full day, and the feeling of being part of something larger.',
    context: 'Some days are easiest to remember as a single frame. This moment deserves its own photograph and the story behind it.',
    cta: 'The photograph for this story has not been added yet',
    motif: '▧',
    image: 'blog-biggerday.jpeg'
  },
  {
    slug: 'uttarakhand-silence',
    date: '2026-04-20',
    category: 'Journeys',
    title: 'Uttarakhand, and the Silence I Needed',
    excerpt: 'Mountains, distance, and thoughts that finally made sense.',
    context: 'A journey through mountain quiet, a little distance from the everyday, and thoughts that found room to settle.',
    cta: 'A travel note, told at a gentler pace',
    motif: '⌁',
    image: 'blog-uttarakhand.jpeg'
  },
  {
    slug: 'a-phase-called-iit-roorkee',
    date: '2026-04-20',
    category: 'Milestones',
    title: 'A Phase Called IIT Roorkee',
    excerpt: 'Not just an event, but a shift in how I saw things.',
    context: 'Looking back on an IIT Roorkee experience as more than an event: a point in time that changed the way the next possibilities looked.',
    cta: 'A milestone, remembered as a turning point',
    motif: 'Ⅱ'
  },
  {
    slug: 'walking-through-charusat',
    date: '2026-04-20',
    category: 'Journeys',
    title: 'Walking Through CHARUSAT',
    excerpt: 'A visit that made the future feel a little more real.',
    context: 'A campus visit, the little details along the way, and a future that began to feel closer and more tangible.',
    cta: 'A visit, kept as a field note',
    motif: '⌁'
  },
  {
    slug: 'first-time-i-stood-and-spoke',
    date: '2026-04-20',
    category: 'Thoughts',
    title: 'The First Time I Stood and Spoke',
    excerpt: 'My first presentation and the nerves I couldn’t hide.',
    context: 'The first presentation, the nerves that showed up before the first sentence, and what it felt like to stand there anyway.',
    cta: 'A first, with all its honest nerves',
    motif: '↗'
  },
  {
    slug: 'two-degrees-one-brain',
    date: '2026-04-20',
    category: 'Milestones',
    title: 'Two Degrees, One Brain',
    excerpt: 'Engineering and English, and the chaos of choosing both.',
    context: 'Two different ways of looking at the world, the puzzle of choosing both, and the unexpected ways technical thinking and literature meet.',
    cta: 'A milestone about choosing more than one path',
    motif: 'Ⅱ'
  },
  {
    slug: 'finished-a-book-in-one-sitting',
    date: '2026-04-20',
    category: 'Milestones',
    title: 'The Night I Finished a Book in One Sitting',
    excerpt: 'When a story refuses to let you sleep.',
    context: 'The rare kind of night when one more page becomes the whole book, and sleep can wait until the last line.',
    cta: 'A reading memory, cover to cover',
    motif: '▤'
  },
  {
    slug: 'books-id-recommend',
    date: '2026-04-20',
    category: 'Reflections',
    title: 'Books I’d Recommend Without Thinking Twice',
    excerpt: 'The ones that stayed longer than expected.',
    context: 'A gathering of books that lingered after the last page, and the feeling or idea each one left behind.',
    cta: 'The reading list image has not been added yet',
    motif: '▤',
    image: 'blog-books.jpg'
  },
  {
    slug: 'songs-that-feel-like-breathing',
    date: '2026-04-20',
    category: 'Thoughts',
    title: 'Songs That Feel Like Breathing',
    excerpt: '“The kind of music you don’t just hear—you sit with.”',
    context: 'A note for the songs that make a little room around a feeling: music less like background and more like a place to rest.',
    cta: 'The listening image has not been added yet',
    motif: '♫',
    image: 'blog-song.jpg'
  }
];

const icons = {
  moon: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.4 15.4A8.3 8.3 0 0 1 8.6 3.6 8.4 8.4 0 1 0 20.4 15.4Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
};

function getRoute() {
  const path = location.hash.replace(/^#\/?/, '').split('/');
  if (path[0] === 'workshop') return { mode: 'workshop', project: path[1] || 'home', file: path[2] || '' };
  if (path[0] === 'observatory') return { mode: 'observatory' };
  if (path[0] === 'contact') return { mode: 'archive', anchor: 'contact' };
  return { mode: 'archive' };
}

function navLink(mode, label, href, active) {
  return `<a class="nav-link" href="${href}" ${active === mode ? 'aria-current="page"' : ''}>${label}</a>`;
}

function header(active) {
  const theme = localStorage.getItem('portfolio-theme') || 'light';
  return `<header class="site-header">
    <div class="header-inner">
      <a class="wordmark" href="#/" aria-label="Dishti Patel — Archive"><span class="mark" aria-hidden="true">✳</span><span class="wordmark-name">Dishti Patel</span></a>
      <nav class="mode-nav" id="mode-nav" aria-label="Portfolio modes">
        ${navLink('archive', 'Archive', '#/', active)}
        ${navLink('workshop', 'Workshop', '#/workshop', active)}
        ${navLink('observatory', 'Observatory', '#/observatory', active)}
      </nav>
      <div class="header-actions">
        <a class="text-link resume-shortcut" href="${active === 'archive' ? '#contact' : '#/contact'}">Contact</a>
        <button class="icon-button theme-button" type="button" aria-label="${theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}" title="Toggle theme">${theme === 'dark' ? icons.sun : icons.moon}</button>
        <button class="icon-button menu-button" type="button" aria-expanded="false" aria-controls="mode-nav" aria-label="Open navigation">${icons.menu}</button>
      </div>
    </div>
  </header>`;
}

function footer(active) {
  return `<footer class="site-footer"><div class="shell footer-inner">
    <span>© ${new Date().getFullYear()} Dishti Patel <span aria-hidden="true">·</span> One identity, three ways to explore.</span>
    <nav class="footer-links" aria-label="Footer navigation">
      ${active !== 'archive' ? '<a href="#/">Archive</a>' : ''}
      ${active !== 'workshop' ? '<a href="#/workshop">Workshop</a>' : ''}
      ${active !== 'observatory' ? '<a href="#/observatory">Observatory</a>' : ''}
      <a href="${active === 'archive' ? '#contact' : '#/contact'}">${active === 'archive' ? 'Contact details pending' : 'Contact · Archive'}</a>
    </nav>
  </div></footer>`;
}

function projectCard(project) {
  const number = String(projects.indexOf(project) + 1).padStart(2, '0');
  const motif = project.slug === 'nexterra' ? '<i class="project-contour" aria-hidden="true"></i>' : project.slug === 'pravaha' ? '<i class="workflow-nodes" aria-hidden="true"><b>01</b><b>02</b><b>03</b></i>' : project.slug === 'cloudforge' ? '<i class="cloud-path" aria-hidden="true"><b>LEARN</b><b>BUILD</b><b>DEPLOY</b></i>' : '<i class="forest-map" aria-hidden="true"><b>VERIFY</b><b>TRACE</b></i>';
  return `<article class="project-card project-${project.slug}">
    <div class="project-art ${project.slug}" role="img" aria-label="Concept visual for ${project.name}, not a project screenshot"><span class="project-art-index" aria-hidden="true">${number} / 04</span><span class="project-art-mark" aria-hidden="true">${project.name === 'Carbon Credits Ecosystem' ? 'CC' : project.name === 'PRAVAHA' ? 'P' : project.name.slice(0, 1)}</span>${motif}<small aria-hidden="true">Concept visual · not a screenshot</small></div>
    <div class="project-info">
      <span class="eyebrow">${project.category}</span>
      <h3>${project.name}</h3>
      <p>${project.tagline}</p>
      <div class="project-card-foot"><span class="project-status">STORY IN PROGRESS</span><a class="project-open" href="#/workshop/${project.slug}">Explore <span aria-hidden="true">↗</span></a></div>
    </div>
  </article>`;
}

function archive() {
  return `${header('archive')}
    <main id="main" class="archive-main">
      <div class="shell">
        <section class="hero" aria-labelledby="hero-title">
          <div class="hero-copy">
            <p class="eyebrow">Computer Science &amp; Engineering <span aria-hidden="true">·</span> GSFC University</p>
            <h1 id="hero-title">Dishti Patel</h1>
            <p class="hero-lede">I'm a Computer Science student who enjoys building thoughtful software, exploring systems and turning ambitious ideas into useful digital experiences.</p>
            <p class="interest-line">Software · Cloud · AI/ML · Research · Creative Computing</p>
            <div class="actions">
              <a class="button" href="#projects">Explore projects <span aria-hidden="true">→</span></a>
              <button class="button secondary resume-unavailable" type="button" disabled aria-describedby="resume-status" title="A résumé file has not been supplied">Download résumé</button>
              <a class="button secondary" href="#contact">Get in touch</a>
              <a class="text-link" href="#/observatory">Read my notes ↗</a>
            </div>
            <p class="sr-only" id="resume-status">The résumé download is unavailable because no verified résumé file has been supplied.</p>
            <div class="currently-exploring"><span class="eyebrow">CURRENTLY EXPLORING</span><strong>Building at the intersection of code and curiosity.</strong><div class="exploring-tags"><span>Cloud</span><span>Open source</span><span>Research</span></div><small>A snapshot of ongoing interests · update as they evolve</small></div>
          </div>
          <div class="hero-visual">
            <span class="hero-coordinate" aria-hidden="true">22°18′N / 73°11′E</span>
            <span class="hero-orbit-path" aria-hidden="true"></span>
            <div class="portrait-dossier" aria-label="Portrait placeholder">
            <div class="portrait-art"><span class="portrait-crosshair" aria-hidden="true">✳</span><span class="portrait-monogram" aria-hidden="true">DP</span></div>
            <p class="portrait-note"><span>Portrait to be supplied</span><span>Notebook / 2026</span></p>
            <span class="portrait-caption">A space for the real portrait</span>
            </div>
            <span class="hero-note hero-note-top">currently building <i>↗</i></span>
            <span class="hero-note hero-note-bottom">semester 03 · curiosity index: high</span>
            <span class="hero-dot" aria-hidden="true">✳</span>
          </div>
        </section>

        <section class="section" aria-labelledby="academic-title">
          <div class="section-heading"><h2 id="academic-title">Academic profile</h2><span class="section-index">01 / CURRENTLY LEARNING</span></div>
          <div class="academic-spread">
            <article class="academic-score"><span class="eyebrow">CUMULATIVE CGPA</span><strong>8.36</strong><span class="score-denominator">/ 10</span><p>After Semester 2 · update when results change</p><div class="semester-track" aria-label="Semester 1 and 2 complete; currently in semester 3"><span class="done">01</span><i></i><span class="done">02</span><i></i><span class="current">03</span></div><small>ACADEMIC PATH · CURRENT SGPA NOT PUBLISHED</small></article>
            <div class="academic-details">
              <article class="academic-detail programme"><span class="eyebrow">PROGRAMME</span><strong>B.Tech CSE</strong><span>GSFC University</span><i aria-hidden="true">⌁</i></article>
              <article class="academic-detail stage"><span class="eyebrow">CURRENT STAGE</span><strong>Semester 3</strong><span>Academic snapshot</span><i aria-hidden="true">03</i></article>
              <article class="academic-detail focus"><span class="eyebrow">CURRENT FOCUS</span><strong>Learning by building</strong><span>Projects, systems and experimentation</span><i aria-hidden="true">✳</i></article>
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="roles-title">
          <div class="section-heading"><h2 id="roles-title">Roles &amp; current work</h2><span class="section-index">02 / COMMUNITY</span></div>
          <div class="role-spread">
            <article class="role-card role-cloud"><div class="role-illustration" aria-hidden="true"><span class="role-star">✳</span><span class="role-orbit"></span><span class="role-planet"></span><span class="role-coordinate">AWS / BUILD</span></div><div class="role-copy"><span class="eyebrow">CLOUD · COMMUNITY · TECHNICAL LEADERSHIP</span><h3>AWS Student Builder Group</h3><p class="role">Technical Lead</p><p>Cloud learning, technical exploration and student building initiatives.</p><div class="role-tags"><span>Cloud</span><span>Learning</span><span>Community</span></div></div></article>
            <article class="role-card role-literature"><div class="role-illustration" aria-hidden="true"><span class="book-mark">Aa</span><span class="book-line"></span><span class="role-coordinate">WORDS / IDEAS</span><span class="book-star">✳</span></div><div class="role-copy"><span class="eyebrow">LITERATURE · LEADERSHIP · CREATIVITY</span><h3>University Literature Club</h3><p class="role">President</p><p>Literary initiatives, student participation and creative expression.</p><div class="role-tags"><span>Literature</span><span>Leadership</span><span>Community</span></div></div></article>
          </div>
        </section>

        <section class="section" aria-labelledby="milestones-title">
          <div class="section-heading"><h2 id="milestones-title">Milestones &amp; events</h2><span class="section-index">03 / VERIFY BEFORE PUBLISHING</span></div>
          <p class="section-intro">These event names are included as portfolio records, not as claims of a placement or award. Results, years, categories and supporting evidence should be confirmed before adding accolades.</p>
          <div class="milestone-timeline">
            <article class="milestone"><span class="milestone-pin"></span><span class="milestone-number">01</span><div><span class="eyebrow">EVENT · YEAR TO CONFIRM</span><h3>IIT Roorkee</h3><p>Event, category and result need verification before publication.</p></div><span class="verification">RESULT<br>TO VERIFY</span></article>
            <article class="milestone"><span class="milestone-pin"></span><span class="milestone-number">02</span><div><span class="eyebrow">EVENT · YEAR TO CONFIRM</span><h3>NUV</h3><p>Event, category and result need verification before publication.</p></div><span class="verification">RESULT<br>TO VERIFY</span></article>
            <article class="milestone"><span class="milestone-pin"></span><span class="milestone-number">03</span><div><span class="eyebrow">CYBER SECURITY AHMEDABAD</span><h3>KanadShield</h3><p>Category and result need verification before publication.</p></div><span class="verification">RESULT<br>TO VERIFY</span></article>
            <article class="milestone"><span class="milestone-pin"></span><span class="milestone-number">04</span><div><span class="eyebrow">HACKATHON · 2025</span><h3>Smart India Hackathon</h3><p>Participation and outcome need verification before publication.</p></div><span class="verification">RESULT<br>TO VERIFY</span></article>
            <article class="milestone"><span class="milestone-pin"></span><span class="milestone-number">05</span><div><span class="eyebrow">HACKATHON · 2026</span><h3>Smart India Hackathon</h3><p>Participation and outcome need verification before publication.</p></div><span class="verification">RESULT<br>TO VERIFY</span></article>
          </div>
        </section>

        <section class="section" aria-labelledby="build-title">
          <div class="section-heading"><h2 id="build-title">What I build</h2><span class="section-index">04 / AREAS OF INTEREST</span></div>
          <div class="build-grid">
            <article class="build-item build-software"><span class="eyebrow">01 · MAKE</span><div class="build-visual software-diagram" aria-hidden="true"><i>Idea</i><b>→</b><i>Interface</i></div><h3>Software &amp; web</h3><p>Thoughtful interfaces and useful digital experiences.</p></article>
            <article class="build-item build-cloud"><span class="eyebrow">02 · CONNECT</span><div class="build-visual cloud-diagram" aria-hidden="true"><i>Learn</i><b>→</b><i>Build</i><b>→</b><i>Deploy</i></div><h3>Cloud &amp; tooling</h3><p>Exploring cloud systems and tools that support builders.</p></article>
            <article class="build-item build-data"><span class="eyebrow">03 · EXPLORE</span><div class="build-visual data-diagram" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div><h3>AI/ML &amp; data</h3><p>Learning through data-led questions and prototypes.</p></article>
            <article class="build-item build-climate"><span class="eyebrow">04 · OBSERVE</span><div class="build-visual map-diagram" aria-hidden="true"><i></i><i></i><i></i></div><h3>Climate &amp; place</h3><p>Geospatial and environmental technology ideas.</p></article>
            <article class="build-item build-writing"><span class="eyebrow">05 · DOCUMENT</span><div class="build-visual writing-diagram" aria-hidden="true"><i>01</i><i>02</i><i>03</i></div><h3>Research &amp; writing</h3><p>Making the process, evidence and decisions legible.</p></article>
          </div>
        </section>

        <section class="section" id="projects" aria-labelledby="projects-title">
          <div class="section-heading"><h2 id="projects-title">Selected projects</h2><span class="section-index">05 / THE WORK, IN PROGRESS</span></div>
          <p class="section-intro">Start with the project names and directions already in the brief. Case-study content is clearly marked for verification until real implementation evidence is supplied.</p>
          <div class="project-grid">${projects.map(projectCard).join('')}</div>
        </section>

        <section class="section" aria-labelledby="worlds-title">
          <div class="section-heading"><h2 id="worlds-title">One identity, three worlds</h2><span class="section-index">06 / EXPLORE FURTHER</span></div>
          <div class="world-previews">
            <a class="preview-card" href="#/workshop">
              <div class="preview-top"><span>THE WORKSHOP · PROJECT ARCHIVE</span><span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span></div>
              <div class="preview-files"><div class="file-list"><span>⌄ DISHTI_WORKSPACE</span><span>　▸ 01_NexTerra</span><span>　▸ 02_PRAVAHA</span><span>　▸ 03_CloudForge</span><span>　▸ 04_Carbon_Credits</span></div><div class="mini-map" aria-hidden="true"></div></div>
              <div class="preview-copy"><h3>A closer look at the work behind the work.</h3><p>Project stories, decisions, architecture and what remains to be learned.</p></div>
              <span class="preview-arrow">Explore the Archive →</span>
            </a>
            <a class="preview-card observatory-preview" href="#/observatory">
              <div class="preview-top"><span>THE OBSERVATORY · PERSONAL NOTES</span><span>✳</span></div>
              <span class="star-chart" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
              <div class="preview-copy"><h3>A curious mind, still taking notes.</h3><p>A quiet place for essays, reading notes and reflections. No articles are published yet.</p></div>
              <span class="preview-arrow">Visit the Observatory →</span>
            </a>
          </div>
        </section>

        <section class="section choose-path-section" aria-labelledby="choose-path-title">
          <div class="section-heading"><h2 id="choose-path-title">Choose your path</h2><span class="section-index">07 / YOUR NEXT STEP</span></div>
          <div class="choose-path-grid">
            <a class="path-card path-recruiter" href="#projects"><span class="eyebrow">FOR RECRUITERS</span><strong>Start with the work</strong><span>Selected projects and the professional archive</span><b>Explore projects →</b></a>
            <a class="path-card path-builder" href="#/workshop"><span class="eyebrow">FOR BUILDERS</span><strong>Open the Workshop</strong><span>Ideas, decisions and technical case studies</span><b>Explore the Workshop →</b></a>
            <a class="path-card path-reader" href="#/observatory"><span class="eyebrow">FOR CURIOUS READERS</span><strong>Enter the Observatory</strong><span>Moments, reflections and quiet experiments</span><b>Visit the Observatory →</b></a>
          </div>
        </section>

        <section class="section" id="contact" aria-labelledby="contact-title">
          <div class="contact-panel">
            <div class="contact-copy"><span class="eyebrow">07 / BACK COVER</span><h2 id="contact-title">Have something interesting in mind?</h2><p>For internships, collaborations, technical conversations or creative projects, I'd love to hear from you.</p><p class="muted-note">Contact details and a delivery service have not been supplied. This form will not claim to send a message; add a verified email address or configure a form endpoint to enable it.</p></div>
            <form class="contact-form" id="contact-form">
              <div class="field"><label for="contact-name">Name</label><input id="contact-name" name="name" autocomplete="name" required /></div>
              <div class="field"><label for="contact-email">Email</label><input id="contact-email" name="email" type="email" autocomplete="email" required /></div>
              <div class="field full"><label for="contact-message">Message</label><textarea id="contact-message" name="message" required></textarea></div>
              <button class="button form-submit" type="submit">Prepare message <span aria-hidden="true">→</span></button>
              <p class="form-message" id="form-message" role="status" aria-live="polite">Form delivery isn't configured yet.</p>
            </form>
          </div>
        </section>
      </div>
    </main>
    ${footer('archive')}`;
}

function workshop(route) {
  const isWorkspaceHome = route.project === 'home';
  let project = isWorkspaceHome ? null : projects.find(item => item.slug === route.project) || projects[0];
  let selected = project ? project.files.find(item => item[0] === route.file) || project.files[0] : null;
  const body = isWorkspaceHome
    ? `<section class="workspace-welcome"><span class="eyebrow">DISHTI / WORKSHOP</span><h1>A workspace for ideas in progress.</h1><p>Choose a project to explore its story, the questions around it and the parts that still need evidence.</p><p class="workspace-honesty">Project status, screenshots and technical details are being verified. This archive distinguishes directions from implemented work.</p><h2>Pick a project to explore</h2><div class="workspace-project-grid">${projects.map((item, index) => `<a class="workspace-project-card project-${item.slug}" href="#/workshop/${item.slug}"><span class="workspace-project-number">${String(index + 1).padStart(2, '0')} / PROJECT</span><strong>${item.name}</strong><span>${item.category}</span><b>Open project ↗</b></a>`).join('')}</div><div class="workspace-legend"><span><i class="legend-proposed"></i>Project details being verified</span><span>Dates are not shown until confirmed</span></div></section>`
    : route.file && project.files.some(item => item[0] === route.file)
    ? `<section class="doc-section"><h2>${selected[1]}</h2><p>${selected[2]}</p></section>`
    : `<div class="workshop-content-grid">
        <section class="workshop-card"><span class="eyebrow">The idea</span><h2>${project.name}</h2><p>${project.concept}</p><p><strong>Case study status:</strong> This outline is a starting point, not proof of completed functionality.</p></section>
        <section class="workshop-card architecture-visual" aria-label="Documentation workflow outline"><div class="arch-node">Problem &amp; evidence</div><div class="arch-arrow" aria-hidden="true">↓</div><div class="arch-node">Design &amp; implementation</div><div class="arch-arrow" aria-hidden="true">↓</div><div class="arch-node">Results &amp; limitations</div></section>
      </div>
      <section class="doc-section"><h2>What this case study needs</h2><p>Document the origin, intended users, real research, implementation, trade-offs and limitations. Link to demos or source code only after verifying that they are public and working.</p></section>`;
  return `${header('workshop')}
    <main id="main">
      <div class="workshop-layout" style="--project-accent:${project?.accent || '#a8b9d4'}">
        <div class="workspace-bar">
              <a class="workspace-brand" href="#/workshop/home"><span aria-hidden="true">✳</span><span>DISHTI <i>/</i> WORKSHOP</span></a>
          <a class="workspace-selector" href="#/workshop/home">WORKSPACE <span>⌄</span></a>
          <label class="workspace-search-label" for="workshop-search">Search projects</label>
          <input class="workspace-search" id="workshop-search" type="search" placeholder="Search projects…" autocomplete="off">
          <a class="workspace-return" href="#/">← Archive</a>
        </div>
        <aside class="explorer" aria-label="Project file explorer">
          <div class="explorer-title">EXPLORER</div>
          <div class="tree-root">⌄ DISHTI_WORKSPACE</div>
          ${projects.map(item => `<div class="tree-project">
            <button class="tree-project-button project-${item.slug}" type="button" data-project="${item.slug}" aria-expanded="${item.slug === project?.slug}">
              <span class="tree-chevron" aria-hidden="true">›</span><span class="tree-folder" aria-hidden="true">${item.slug === project?.slug ? '▾' : '▰'}</span>${item.folder}
            </button>
            <div class="tree-children" ${item.slug === project?.slug ? '' : 'hidden'}>
              ${item.files.map(file => `<a class="tree-file" href="#/workshop/${item.slug}/${file[0]}" ${item.slug === project?.slug && file[0] === selected?.[0] ? 'aria-current="true"' : ''}><span class="file-icon" aria-hidden="true">▤</span>${file[0]}</a>`).join('')}
            </div>
          </div>`).join('')}
        </aside>
        <label class="mobile-project-select-label" for="mobile-project-select" hidden>Choose a project</label>
        <select class="mobile-project-select" id="mobile-project-select" aria-label="Choose a project">
          <option value="home" ${isWorkspaceHome ? 'selected' : ''}>Workspace home</option>
          ${projects.map(item => `<option value="${item.slug}" ${item.slug === project?.slug ? 'selected' : ''}>${item.name}</option>`).join('')}
        </select>
        <section class="editor" aria-label="Project document">
          <div class="editor-tabs"><a class="editor-tab ${isWorkspaceHome ? 'is-current' : ''}" href="#/workshop/home"><span aria-hidden="true">✳</span>workspace</a>${project ? `<div class="editor-tab is-current"><span aria-hidden="true">▤</span>${selected[0]}</div>` : ''}</div>
          <div class="editor-breadcrumb">${isWorkspaceHome ? 'DISHTI_WORKSPACE / HOME' : `DISHTI_WORKSPACE / ${project.folder} / ${selected[0]}`}</div>
          <article class="editor-content">
            ${project ? `<span class="eyebrow">${project.category}</span>
            <h1>${project.name}</h1>
            <p class="editor-lede">${project.tagline}</p>
            <div class="workshop-alert"><strong>Editorial note:</strong> ${project.concept} No demo, repository, implementation detail or result has been supplied, so none is represented as verified.</div>` : ''}
            ${body}
            ${project ? '<a class="workshop-back" href="#/workshop/home">← All projects</a>' : ''}
          </article>
        </section>
        <aside class="doc-meta" aria-label="Project information">
          <h2>${project ? 'Project info' : 'Workspace notes'}</h2>
          ${project ? `<div class="meta-row"><span>Documentation</span><strong>In progress</strong></div>
          <div class="meta-row"><span>Category</span><strong>${project.category}</strong></div>
          <div class="meta-row"><span>Source code</span><strong>Not supplied</strong></div>
          <div class="meta-row"><span>Live demo</span><strong>Not supplied</strong></div>
          <div class="meta-row"><span>Current document</span><strong>${selected[1]}</strong></div>` : `<div class="meta-row"><span>Projects</span><strong>04 concepts &amp; case studies</strong></div><div class="meta-row"><span>Last updated</span><strong>Not stated</strong></div><div class="meta-row"><span>Working principle</span><strong>Evidence before claims</strong></div>`}
          <a class="workshop-back" href="#/">← Back to Archive</a>
        </aside>
      </div>
    </main>
    ${footer('workshop')}`;
}

const observatoryMotion = {
  index: 0,
  category: 'Everything',
  observer: null,
  timer: 0,
  animating: false,
  touchStartY: null,
  onWheel: null,
  onTouchStart: null,
  onTouchEnd: null,
  onPointerMove: null,
  onKeyDown: null,
  onVisibilityChange: null
};

function observablePosts() {
  return observatoryMotion.category === 'Everything'
    ? observatoryPosts
    : observatoryPosts.filter(post => post.category === observatoryMotion.category);
}

function observatory() {
  const categories = ['Everything', 'Moments', 'Milestones', 'Reflections', 'Journeys', 'Thoughts'];
  const posts = observablePosts();
  observatoryMotion.index = Math.min(observatoryMotion.index, posts.length - 1);
  return `${header('observatory')}
    <main id="main" class="observatory-main">
      <div class="observatory-content">
        <header class="observatory-heading">
          <div>
            <span class="eyebrow">DISHTI PATEL · THOUGHT ARCHIVE</span>
            <h1 id="observatory-title">Thoughts, moments,<br class="desktop-break"> and quiet experiments.</h1>
          </div>
          <a class="observatory-archive-link" href="#/">← Portfolio</a>
        </header>
        <div class="observatory-toolbar">
          <div class="observatory-filter-wrap">
            <span class="eyebrow">IDEAS · EXPERIMENTS · REFLECTIONS</span>
            <nav class="observatory-filters" aria-label="Filter thought archive">
              ${categories.map(category => `<button class="category-chip" type="button" data-category="${category}" title="Show ${category === 'Everything' ? 'every story' : `only ${category.toLowerCase()}`}" aria-pressed="${observatoryMotion.category === category}">${category}</button>`).join('')}
            </nav>
          </div>
          <span class="filter-hint">Choose a constellation to narrow the archive</span>
        </div>
        <section class="story-stage" aria-label="Thought archive stories">
          <div class="story-deck" aria-live="polite" aria-atomic="true">
            ${posts.map((post, index) => `<article class="story-slide story-${post.category.toLowerCase()} ${index === observatoryMotion.index ? 'is-active' : ''}" data-story-index="${index}" aria-hidden="${index !== observatoryMotion.index}" ${index === observatoryMotion.index ? '' : 'inert'}>
              <div class="story-index"><span>FIELD NOTE</span><strong>${String(index + 1).padStart(2, '0')}</strong><span>OF ${String(posts.length).padStart(2, '0')}</span><i aria-hidden="true"></i></div>
              <div class="story-card">
                ${post.image
                  ? `<div class="story-art story-art-${post.slug}" role="img" aria-label="${post.title} image to be supplied"><span class="art-glyph" aria-hidden="true">${post.motif}</span><span class="art-caption">IMAGE TO BE ADDED · ${post.image}</span></div>`
                  : `<div class="story-art story-art-${post.slug}" aria-hidden="true"><span class="art-glyph">${post.motif}</span><span class="art-orbit"></span></div>`}
                <div class="story-copy">
                  <div class="story-meta"><span>${post.date}</span><span aria-hidden="true">·</span><span>${post.category}</span></div>
                  <h2>${post.title}</h2>
                  <p class="story-excerpt">${post.excerpt}</p>
                  <p class="story-context">${post.context}</p>
                  <div class="story-footer"><span class="story-note">${post.cta}</span><button type="button" class="story-next" data-story-next>${index === posts.length - 1 ? 'Return to the beginning' : 'Continue through the archive'} <span aria-hidden="true">→</span></button></div>
                </div>
              </div>
            </article>`).join('')}
          </div>
          <div class="story-controls">
            <button type="button" class="story-control story-previous" aria-label="Previous story"><span aria-hidden="true">↑</span></button>
            <div class="story-progress" aria-hidden="true"><span class="story-progress-fill"></span></div>
            <span class="story-count" aria-live="polite">${String(observatoryMotion.index + 1).padStart(2, '0')} <span>/</span> ${String(posts.length).padStart(2, '0')}</span>
            <button type="button" class="story-control story-next-control" aria-label="Next story"><span aria-hidden="true">↓</span></button>
          </div>
          <p class="story-instruction"><span aria-hidden="true">↕</span> Scroll or swipe to wander <span aria-hidden="true">·</span> Stories move gently when you pause</p>
        </section>
      </div>
    </main>`;
}

function clearObservatoryInteractions() {
  if (observatoryMotion.observer) {
    observatoryMotion.observer.kill();
    observatoryMotion.observer = null;
  }
  if (observatoryMotion.timer) {
    window.clearTimeout(observatoryMotion.timer);
    observatoryMotion.timer = 0;
  }
  if (observatoryMotion.onWheel) window.removeEventListener('wheel', observatoryMotion.onWheel);
  if (observatoryMotion.onTouchStart) window.removeEventListener('touchstart', observatoryMotion.onTouchStart);
  if (observatoryMotion.onTouchEnd) window.removeEventListener('touchend', observatoryMotion.onTouchEnd);
  if (observatoryMotion.onPointerMove) window.removeEventListener('pointermove', observatoryMotion.onPointerMove);
  if (observatoryMotion.onKeyDown) document.removeEventListener('keydown', observatoryMotion.onKeyDown);
  if (observatoryMotion.onVisibilityChange) document.removeEventListener('visibilitychange', observatoryMotion.onVisibilityChange);
  observatoryMotion.onWheel = null;
  observatoryMotion.onTouchStart = null;
  observatoryMotion.onTouchEnd = null;
  observatoryMotion.onPointerMove = null;
  observatoryMotion.onKeyDown = null;
  observatoryMotion.onVisibilityChange = null;
  observatoryMotion.touchStartY = null;
  observatoryMotion.animating = false;
}

function setupObservatoryInteractions() {
  if (!document.body.classList.contains('observatory-page')) return;
  const slides = [...document.querySelectorAll('.story-slide')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const activeSlide = slides[observatoryMotion.index];
  const gsap = window.gsap;
  const progress = document.querySelector('.story-progress-fill');

  if (gsap && typeof gsap.set === 'function') {
    gsap.set(slides.filter(slide => slide !== activeSlide), { autoAlpha: 0, y: 42 });
    gsap.set(activeSlide, { autoAlpha: 1, y: 0 });
  }

  const updateControls = () => {
    const count = observablePosts().length;
    const countText = `${String(observatoryMotion.index + 1).padStart(2, '0')} / ${String(count).padStart(2, '0')}`;
    document.querySelector('.story-count').innerHTML = `${countText.split(' / ')[0]} <span>/</span> ${countText.split(' / ')[1]}`;
    if (gsap) gsap.to(progress, { scaleX: (observatoryMotion.index + 1) / count, duration: reducedMotion ? 0 : 0.5, transformOrigin: 'left center', ease: 'power2.out' });
    else progress.style.transform = `scaleX(${(observatoryMotion.index + 1) / count})`;
  };

  const scheduleNext = () => {
    if (observatoryMotion.timer) window.clearTimeout(observatoryMotion.timer);
    observatoryMotion.timer = 0;
    if (reducedMotion || document.hidden) return;
    observatoryMotion.timer = window.setTimeout(() => showStory(1), 6800);
  };

  function showStory(direction) {
    if (observatoryMotion.animating || slides.length < 2) return;
    const previousIndex = observatoryMotion.index;
    observatoryMotion.index = (previousIndex + direction + slides.length) % slides.length;
    const current = slides[previousIndex];
    const next = slides[observatoryMotion.index];
    observatoryMotion.animating = true;
    current.setAttribute('aria-hidden', 'true');
    current.inert = true;
    next.setAttribute('aria-hidden', 'false');
    next.inert = false;
    updateControls();

    if (gsap && typeof gsap.to === 'function') {
      current.classList.remove('is-active');
      next.classList.add('is-active');
      gsap.set(next, { autoAlpha: 1 });
      const entrance = { y: direction > 0 ? 46 : -46, autoAlpha: 0 };
      if (next.classList.contains('story-moments')) entrance.x = direction > 0 ? 12 : -12;
      if (next.classList.contains('story-reflections')) entrance.rotation = direction > 0 ? 0.7 : -0.7;
      gsap.fromTo(next, entrance, {
        y: 0,
        x: 0,
        rotation: 0,
        autoAlpha: 1,
        duration: reducedMotion ? 0 : 0.85,
        ease: 'power3.out'
      });
      gsap.to(current, {
        y: direction > 0 ? -34 : 34,
        autoAlpha: 0,
        duration: reducedMotion ? 0 : 0.55,
        ease: 'power2.inOut',
        onComplete: () => {
          observatoryMotion.animating = false;
          scheduleNext();
        }
      });
    } else {
      current.classList.add(direction > 0 ? 'is-departing-up' : 'is-departing-down');
      current.classList.remove('is-active');
      next.classList.add('is-active');
      window.setTimeout(() => {
        current.classList.remove('is-departing-up', 'is-departing-down');
        observatoryMotion.animating = false;
        scheduleNext();
      }, reducedMotion ? 0 : 850);
    }
  }

  document.querySelectorAll('[data-category]').forEach(button => {
    button.addEventListener('click', () => {
      observatoryMotion.category = button.dataset.category;
      observatoryMotion.index = 0;
      render();
    });
  });
  document.querySelector('.story-previous').addEventListener('click', () => showStory(-1));
  document.querySelector('.story-next-control').addEventListener('click', () => showStory(1));
  document.querySelectorAll('[data-story-next]').forEach(button => {
    button.addEventListener('click', () => showStory(1));
  });

  if (window.Observer && gsap && typeof gsap.registerPlugin === 'function') {
    gsap.registerPlugin(window.Observer);
    observatoryMotion.observer = window.Observer.create({
      target: window,
      type: 'wheel,touch',
      tolerance: 24,
      preventDefault: true,
      onUp: () => showStory(-1),
      onDown: () => showStory(1)
    });
  } else {
    console.warn('GSAP Observer is unavailable; using native wheel and touch gestures for the Observatory.');
    observatoryMotion.onWheel = event => {
      if (Math.abs(event.deltaY) < 24) return;
      event.preventDefault();
      showStory(event.deltaY > 0 ? 1 : -1);
    };
    observatoryMotion.onTouchStart = event => {
      observatoryMotion.touchStartY = event.changedTouches[0]?.clientY ?? null;
    };
    observatoryMotion.onTouchEnd = event => {
      if (observatoryMotion.touchStartY === null) return;
      const delta = observatoryMotion.touchStartY - (event.changedTouches[0]?.clientY ?? observatoryMotion.touchStartY);
      if (Math.abs(delta) > 38) showStory(delta > 0 ? 1 : -1);
      observatoryMotion.touchStartY = null;
    };
    window.addEventListener('wheel', observatoryMotion.onWheel, { passive: false });
    window.addEventListener('touchstart', observatoryMotion.onTouchStart, { passive: true });
    window.addEventListener('touchend', observatoryMotion.onTouchEnd, { passive: true });
  }

  observatoryMotion.onPointerMove = scheduleNext;
  window.addEventListener('pointermove', observatoryMotion.onPointerMove, { passive: true });
  observatoryMotion.onKeyDown = event => {
    if (!document.body.classList.contains('observatory-page') || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'ArrowDown' || event.key === 'PageDown') {
      event.preventDefault();
      showStory(1);
    } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
      event.preventDefault();
      showStory(-1);
    }
  };
  observatoryMotion.onVisibilityChange = scheduleNext;
  document.addEventListener('keydown', observatoryMotion.onKeyDown);
  document.addEventListener('visibilitychange', observatoryMotion.onVisibilityChange);
  updateControls();
  scheduleNext();
}

function applyTheme() {
  const route = getRoute();
  const theme = localStorage.getItem('portfolio-theme') || 'light';
  const project = projects.find(item => item.slug === route.project);
  document.documentElement.dataset.theme = theme;
  document.body.className = `${route.mode}-page`;
  document.querySelector('meta[name="theme-color"]').content = route.mode === 'observatory' ? '#0c1422' : route.mode === 'workshop' ? '#171a21' : theme === 'dark' ? '#151b24' : '#f5f2ea';
  const title = route.mode === 'archive' ? 'Dishti Patel — The Archive' : route.mode === 'workshop' ? `Dishti Patel — ${project?.name || 'The Workshop'}` : 'Dishti Patel — The Observatory';
  const description = route.mode === 'archive'
    ? 'Dishti Patel — Computer Science student, builder and curious mind. Explore the Archive, Workshop and Observatory.'
    : route.mode === 'workshop'
      ? `${project?.name || 'The Workshop'} — project outline, design questions and implementation details to verify.`
      : 'The Observatory — a personal reading room for reviewed reflections on technology, literature and learning.';
  document.title = title;
  document.querySelector('meta[name="description"]').content = description;
  document.querySelector('meta[property="og:title"]').content = title;
  document.querySelector('meta[property="og:description"]').content = description;
}

function render() {
  clearObservatoryInteractions();
  const route = getRoute();
  document.getElementById('app').innerHTML = route.mode === 'workshop' ? workshop(route) : route.mode === 'observatory' ? observatory() : archive();
  applyTheme();
  bindInteractions();
  setupObservatoryInteractions();
  if (route.anchor) requestAnimationFrame(() => document.getElementById(route.anchor)?.scrollIntoView());
  else if (location.hash.startsWith('#/')) window.scrollTo(0, 0);
}

function bindInteractions() {
  const themeButton = document.querySelector('.theme-button');
  themeButton?.addEventListener('click', () => {
    const next = (localStorage.getItem('portfolio-theme') || 'light') === 'light' ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', next);
    applyTheme();
    themeButton.innerHTML = next === 'dark' ? icons.sun : icons.moon;
    themeButton.setAttribute('aria-label', next === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  });
  const menuButton = document.querySelector('.menu-button');
  menuButton?.addEventListener('click', () => {
    const nav = document.getElementById('mode-nav');
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('is-open', !expanded);
  });
  document.querySelectorAll('.tree-project-button').forEach(button => {
    button.addEventListener('click', () => {
      const wasExpanded = button.getAttribute('aria-expanded') === 'true';
      if (!wasExpanded) location.hash = `#/workshop/${button.dataset.project}`;
      else {
        button.setAttribute('aria-expanded', 'false');
        button.nextElementSibling.hidden = true;
      }
    });
  });
  document.querySelector('.mobile-project-select')?.addEventListener('change', event => {
    location.hash = `#/workshop/${event.target.value}`;
  });
  const portrait = document.querySelector('.portrait-dossier');
  if (portrait && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    portrait.addEventListener('pointermove', event => {
      const rect = portrait.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      portrait.style.transform = `rotate(${1.6 + x * 3}deg) perspective(700px) rotateY(${x * 4}deg) rotateX(${-y * 3}deg)`;
    });
    portrait.addEventListener('pointerleave', () => {
      portrait.style.transform = '';
    });
  }
  document.querySelector('.workspace-search')?.addEventListener('input', event => {
    const query = event.target.value.trim().toLowerCase();
    document.querySelectorAll('.tree-project').forEach(folder => {
      folder.hidden = !folder.textContent.toLowerCase().includes(query);
    });
    document.querySelectorAll('.workspace-project-card').forEach(card => {
      card.hidden = !card.textContent.toLowerCase().includes(query);
    });
  });
  document.querySelector('.contact-form')?.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const message = document.getElementById('form-message');
    message.textContent = 'Your message has not been sent: contact delivery is not configured. Please add a verified email address or connect a form service.';
  });
}

window.addEventListener('hashchange', () => {
  if (location.hash.startsWith('#/')) render();
  else document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
});
render();
