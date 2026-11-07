const fieldNotes = [
  {
    id: 'sih-internal',
    title: 'Smart India Hackathon',
    eventName: 'Smart India Hackathon Internal Selection',
    organizer: null,
    category: 'Hackathon',
    filter: 'Hackathons',
    accent: 'var(--blue)',
    year: null,
    location: null,
    teamName: null,
    status: 'needs-verification',
    historicalClaim: 'An internal winner result was previously reported; the event year and supporting evidence have not been added.',
    summary: 'An internal selection record; the official edition, challenge and result still need confirmation.',
    knownContext: [],
    sections: {
      challenge: { 'Official problem statement / ID': null, 'Organizing institution': null },
      approach: { 'Proposed solution': null, 'Prototype or presentation': null },
      contribution: { 'Team and role': null, 'Personal contribution': null },
      learning: { 'Verified selection result': null, 'Lessons learned': null },
      reflection: { 'What I would improve': null }
    },
    timeline: [],
    gallery: [],
    documents: [],
    externalLinks: []
  },
  {
    id: 'iit-roorkee-casequest',
    title: 'CaseQuest',
    eventName: 'IIT Roorkee E-Summit',
    organizer: 'Indian Institute of Technology Roorkee',
    category: 'Case Competition',
    filter: 'Case Competitions',
    accent: 'var(--brass)',
    year: null,
    location: null,
    teamName: 'Midnight Thinkers',
    status: 'needs-verification',
    historicalClaim: 'Previously described as a finalist; supporting evidence has not been added.',
    summary: 'A case competition entry associated with IIT Roorkee E-Summit.',
    knownContext: ['The available case context mentions FPOs and NABARD.'],
    sections: {
      challenge: { 'Problem statement': null, 'FPO / NABARD research notes': null },
      approach: { 'Team strategy': null, 'Proposed recommendation': null, 'Presentation and pitch': null },
      contribution: { 'Personal contribution': null, 'Role': null },
      learning: { 'What I learned': null },
      reflection: { 'What I would improve': null, 'Future applications': null }
    },
    timeline: [],
    gallery: [],
    documents: [],
    externalLinks: []
  },
  {
    id: 'star-ideaxplore',
    title: 'STAR · IDEAEXPLORE 2025',
    eventName: 'IDEAEXPLORE 2025',
    organizer: null,
    category: 'Innovation',
    filter: 'Innovation',
    accent: 'var(--terracotta)',
    year: 2025,
    location: null,
    teamName: 'STAR',
    coverImage: './assets/IDEAEXPLORE_2025.jpeg',
    coverAlt: 'IDEAXPLORE team members gathered at their event venue.',
    status: 'needs-verification',
    historicalClaim: 'A first-place result was previously reported; supporting evidence has not been added.',
    summary: 'An IDEAXPLORE 2025 entry identified by the project/team name STAR.',
    knownContext: [],
    sections: {
      challenge: { 'Problem addressed': null, 'Idea origin': null, 'Intended users': null },
      approach: { 'Proposed solution': null, 'Differentiation': null, 'Prototype or implementation': null, 'Presentation / demonstration': null },
      contribution: { 'Personal contribution': null, 'Team collaboration': null },
      learning: { 'Feedback received': null, 'Learning outcomes': null },
      reflection: { 'Future development possibilities': null }
    },
    timeline: [],
    gallery: [],
    documents: [],
    externalLinks: []
  },
  {
    id: 'solaris-nexus',
    title: 'Solaris Nexus',
    eventName: 'Solaris Nexus',
    organizer: null,
    category: 'University Event',
    filter: 'University Events',
    accent: 'var(--sage)',
    year: null,
    location: null,
    teamName: null,
    coverImage: './assets/SOLARIS%20NEXUS.jpeg',
    coverAlt: 'A presentation slide describing an animal-intrusion problem and its impact on farms.',
    status: 'needs-verification',
    historicalClaim: 'A first-place result at a university-level competition was previously reported; evidence has not been added.',
    summary: 'A university-level competition entry; its category, organizer and project details are to be confirmed.',
    knownContext: [],
    sections: {
      challenge: { 'Category / theme': null, 'Problem statement': null },
      approach: { 'Project or entry title': null, 'Approach': null, 'Presentation and judging': null },
      contribution: { 'Personal contribution': null, 'Team details': null },
      learning: { 'Lessons learned': null },
      reflection: { 'Why the experience mattered': null, 'What I would improve': null }
    },
    timeline: [],
    gallery: [],
    documents: [],
    externalLinks: []
  },
  {
    id: 'nuv-event',
    title: 'NUV event',
    eventName: 'NUV',
    organizer: null,
    category: 'Category to confirm',
    filter: 'Uncategorized',
    accent: 'var(--blue)',
    year: null,
    location: null,
    teamName: null,
    status: 'draft',
    historicalClaim: null,
    summary: 'A placeholder record for an NUV event; the exact title and event details have not been confirmed.',
    knownContext: [],
    sections: {
      challenge: { 'Exact event title / edition': null, 'Competition track': null, 'Problem statement': null },
      approach: { 'Solution details': null },
      contribution: { 'Team and role': null },
      learning: { 'Learning outcomes': null },
      reflection: { 'Experience and reflection': null }
    },
    timeline: [],
    gallery: [],
    documents: [],
    externalLinks: []
  },
  {
    id: 'kanadshield',
    title: 'KanadShield',
    eventName: 'CyberCrime Ahmedabad · KanadShield',
    organizer: 'CyberCrime Ahmedabad (association to confirm)',
    category: 'Cybersecurity',
    filter: 'Cybersecurity',
    accent: '#8a7baa',
    year: null,
    location: null,
    teamName: null,
    status: 'draft',
    historicalClaim: null,
    summary: 'A cybersecurity-related event associated with CyberCrime Ahmedabad and KanadShield.',
    knownContext: [],
    sections: {
      challenge: { 'Official event title / format': null, 'Challenge category': null, 'Problem statement': null },
      approach: { 'Technical approach': null, 'Tools and technologies': null, 'Authorized challenge artifacts': null, 'Defensive considerations': null },
      contribution: { 'Personal contribution': null, 'Team collaboration': null },
      learning: { 'Skills practiced': null, 'Lessons learned': null },
      reflection: { 'Further technical exploration': null }
    },
    timeline: [],
    gallery: [],
    documents: [],
    externalLinks: []
  },
  {
    id: 'sih-2025',
    title: 'Smart India Hackathon · 2025',
    eventName: 'Smart India Hackathon 2025',
    organizer: null,
    category: 'Hackathon',
    filter: 'Hackathons',
    accent: 'var(--blue)',
    year: 2025,
    location: null,
    teamName: null,
    coverImage: './assets/SIH%202025.jpeg',
    coverAlt: 'A team presenting on stage at Smart India Hackathon 2025.',
    status: 'draft',
    historicalClaim: null,
    summary: 'A Smart India Hackathon 2025 record; participation stage and outcome remain unconfirmed.',
    knownContext: [],
    sections: {
      challenge: { 'Official problem statement / ID': null, 'Organizing institution': null, 'Research and user needs': null },
      approach: { 'Proposed solution': null, 'Architecture / prototype': null, 'Repository': null },
      contribution: { 'Team and members': null, 'Personal contribution': null },
      learning: { 'Verified stage reached': null, 'Lessons learned': null },
      reflection: { 'Future implementation opportunities': null }
    },
    timeline: [],
    gallery: [],
    documents: [],
    externalLinks: []
  },
  {
    id: 'sih-2026',
    title: 'Smart India Hackathon · 2026',
    eventName: 'Smart India Hackathon 2026',
    organizer: null,
    category: 'Hackathon',
    filter: 'Hackathons',
    accent: 'var(--blue)',
    year: 2026,
    location: null,
    teamName: null,
    status: 'draft',
    historicalClaim: null,
    summary: 'A Smart India Hackathon 2026 record; dates, category, stage and outcome remain unconfirmed.',
    knownContext: [],
    sections: {
      challenge: { 'Problem statement / category': null, 'Research and user needs': null },
      approach: { 'Project overview': null, 'Proposed solution': null, 'Architecture / prototype': null },
      contribution: { 'Team and role': null, 'Personal contribution': null },
      learning: { 'Selection stage / verified result': null, 'Learning outcomes': null },
      reflection: { 'Reflection and next steps': null }
    },
    timeline: [],
    gallery: [],
    documents: [],
    externalLinks: []
  },
  {
    id: 'navrachana-tetrathon',
    title: 'Navrachana TetraTHON',
    eventName: 'Navrachana TetraTHON',
    organizer: 'Navrachana (event details to confirm)',
    category: 'Innovation',
    filter: 'Innovation',
    accent: 'var(--sage)',
    year: null,
    location: null,
    teamName: null,
    coverImage: './assets/TETRATHON.jpeg',
    coverAlt: 'Team members holding certificates at a TetraTHON event.',
    status: 'needs-verification',
    historicalClaim: 'Top-nine overall, top-two in AgriTech, and only GSFC participant were previously reported; each claim needs evidence.',
    summary: 'An innovation competition record with a reported AgriTech track; project and event details remain to be confirmed.',
    knownContext: [],
    sections: {
      challenge: { 'Official track / AgriTech problem': null, 'Target beneficiaries': null },
      approach: { 'Project or idea': null, 'Research and solution approach': null },
      contribution: { 'Personal contribution': null, 'Competition process': null, 'Participation context': null },
      learning: { 'Learning outcomes': null },
      reflection: { 'Future opportunities': null }
    },
    timeline: [],
    gallery: [],
    documents: [],
    externalLinks: []
  }
].map(note => ({
  date: null,
  result: null,
  teamSize: null,
  role: null,
  coverImage: null,
  coverAlt: null,
  skills: [],
  technologies: [],
  tags: [],
  learningOutcomes: [],
  nextSteps: [],
  featured: false,
  visibility: 'public',
  ...note
}));

const fieldNoteFilters = ['All', 'Hackathons', 'Innovation', 'Case Competitions', 'Cybersecurity', 'University Events'];
let activeFieldNoteFilter = 'All';

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function publishedFieldNotes() {
  return fieldNotes.filter(note => note.visibility === 'public');
}

function filteredFieldNotes() {
  const notes = publishedFieldNotes();
  return activeFieldNoteFilter === 'All'
    ? notes
    : notes.filter(note => note.filter === activeFieldNoteFilter);
}

const featuredFieldNoteDetails = {
  'sih-internal': { caption: 'the first big leap', icon: 'lightbulb', rotation: '-2.2deg' },
  'sih-2025': { caption: 'a team on the SIH stage', icon: 'presentation', rotation: '-2.2deg' },
  'iit-roorkee-casequest': { caption: 'a case of thinking bigger', icon: 'presentation', rotation: '1.8deg' },
  'star-ideaxplore': { caption: 'an idea that found its way', icon: 'rocket', rotation: '-1.4deg' },
  'navrachana-tetrathon': { caption: 'small team, big ambitions', icon: 'sprout', rotation: '2.5deg' },
  'solaris-nexus': { caption: 'one for the university', icon: 'trophy', rotation: '-1.7deg' },
  'demo-eduspark': { caption: 'a day to remember at EduSpark', icon: 'presentation', rotation: '-1.2deg' },
  'demo-workshop-after-hours': { caption: 'the best ideas happen after hours', icon: 'lightbulb', rotation: '1.5deg' },
  'demo-one-more-try': { caption: 'one more idea, one more try', icon: 'rocket', rotation: '2.3deg' }
};
const featuredFieldNoteIds = [
  'sih-2025',
  'iit-roorkee-casequest',
  'star-ideaxplore',
  'navrachana-tetrathon',
  'solaris-nexus'
];
const demoFieldNotes = [
  {
    id: 'demo-workshop-after-hours',
    title: 'A Workshop After Hours',
    eventName: 'Workshop / demo memory',
    category: 'Demo memory',
    year: null,
    status: 'draft',
    summary: 'A placeholder for a future workshop, experiment or behind-the-scenes moment.',
    isDemo: true
  },
  {
    id: 'demo-eduspark',
    title: 'EduSpark',
    eventName: 'EduSpark / demo memory',
    category: 'Demo memory',
    year: null,
    status: 'draft',
    summary: 'An EduSpark photograph. Event details and a fuller memory can be added later.',
    coverImage: './assets/EDUSPARK.jpeg',
    coverAlt: 'Four people standing together at an EduSpark event, two holding certificates.',
    isDemo: true
  },
  {
    id: 'demo-one-more-try',
    title: 'One More Idea, One More Try',
    eventName: 'Ideas / demo memory',
    category: 'Demo memory',
    year: null,
    status: 'draft',
    summary: 'A placeholder for a future idea, attempt or experience worth remembering.',
    isDemo: true
  }
];

function featuredFieldNotes() {
  const notesById = new Map(publishedFieldNotes().map(note => [note.id, note]));
  return [...featuredFieldNoteIds.map(id => notesById.get(id)).filter(Boolean), ...demoFieldNotes];
}

function fieldNoteIcon(name) {
  const paths = {
    lightbulb: '<path d="M9 18h6m-5 3h4m-5-7a6 6 0 1 1 6 0c-.8.6-1.2 1.3-1.3 2h-3.4c-.1-.7-.5-1.4-1.3-2Z"/><path d="M12 2v2m8 7h2M2 11h2m13.7-5.7 1.4-1.4M4.9 5.3l1.4 1.4"/>',
    presentation: '<rect x="3" y="4" width="18" height="13" rx="1"/><path d="M12 17v4m-4 0h8M7 9h4m-4 4h8m-1-4h3"/>',
    rocket: '<path d="M14 4c2.8-2 5-2 6-2 0 1 0 3.2-2 6l-5 7-5-5 6-6Z"/><path d="m8 10-4 1-2 4 6-1m4 1-1 6 4-2 1-4"/><circle cx="16" cy="6" r="1"/><path d="M5 18c-1 1-1 3-1 3s2 0 3-1"/>',
    sprout: '<path d="M12 21v-9m0 4c-6 0-9-3-9-8 5 0 9 2 9 8Zm0-4c0-5 3-8 9-8 0 5-3 8-9 8Zm-5 9h10"/>',
    trophy: '<path d="M8 3h8v5a4 4 0 0 1-8 0V3Zm4 9v5m-4 4h8m-6-4h4"/><path d="M8 5H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4"/>'
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name] || paths.lightbulb}</svg>`;
}

function fieldMemoryCard(note, index) {
  const details = featuredFieldNoteDetails[note.id];
  const photograph = note.coverImage
    ? { src: note.coverImage, alt: note.coverAlt || note.title }
    : (note.gallery || []).find(image => image.src);
  const isVerified = note.status === 'verified' && note.result;
  const result = note.isDemo ? 'DEMO · DETAILS TO ADD' : isVerified ? note.result : note.historicalClaim ? 'Reported result · unverified' : 'Outcome to confirm';
  const route = note.isDemo ? '#/field-notes/archive' : `#/field-notes/${encodeURIComponent(note.id)}`;
  const photo = photograph
    ? `<img src="${escapeHtml(photograph.src)}" alt="${escapeHtml(photograph.alt || note.title)}" loading="lazy">`
    : `<span class="field-memory-photo-pending" role="img" aria-label="${note.isDemo ? 'Demo photograph placeholder' : `An event photograph for ${escapeHtml(note.title)} has not been added`}"><span class="field-memory-photo-mark" aria-hidden="true">${fieldNoteIcon(details.icon)}</span><span>${note.isDemo ? 'SAMPLE MEMORY' : 'REAL MOMENT'}<br>PHOTO TO ADD</span></span>`;
  const duplicateAttributes = note.isDuplicate ? ' aria-hidden="true"' : '';
  const duplicateTabIndex = note.isDuplicate ? ' tabindex="-1"' : '';
  return `<li class="field-memory${note.isDuplicate ? ' field-memory--duplicate' : ''}" style="--memory-rotation:${details.rotation};--memory-delay:${index * -0.7}s" data-field-memory${duplicateAttributes}>
    <span class="field-memory-clip" aria-hidden="true"></span>
    <span class="field-memory-sticker" aria-hidden="true">${fieldNoteIcon(details.icon)}</span>
    <a class="field-memory-polaroid" href="${route}"${note.isDemo ? '' : ` data-field-note-link="${escapeHtml(note.id)}"`} aria-label="${note.isDemo ? `Explore Field Notes; ${escapeHtml(note.title)} is a demo placeholder` : `Read the ${escapeHtml(note.title)} field note`}"${duplicateTabIndex}>
      <span class="field-memory-photo">${photo}${!photograph ? '<span class="field-memory-photo-stamp" aria-hidden="true">PHOTO NEEDED</span>' : ''}</span>
      <span class="field-memory-caption">${escapeHtml(details.caption)}.</span>
      <span class="field-memory-event">${escapeHtml(note.eventName)}</span>
      <span class="field-memory-outcome">${escapeHtml(result)}</span>
      <span class="field-memory-date">${note.year || 'DATE TO CONFIRM'}</span>
    </a>
    <button class="field-memory-preview-toggle" type="button" aria-expanded="false" aria-controls="field-memory-preview-${index}" data-memory-preview-toggle${duplicateTabIndex}>+ story</button>
    <div class="field-memory-preview" id="field-memory-preview-${index}" hidden>
      <span class="eyebrow">${escapeHtml(note.category)} / ${note.year || 'DATE TO CONFIRM'}</span>
      <strong>${escapeHtml(note.title)}</strong>
      <span class="field-memory-preview-result">${escapeHtml(result)}</span>
      <p>${escapeHtml(note.summary)}</p>
      ${note.teamName ? `<span class="field-memory-team">TEAM · ${escapeHtml(note.teamName)}</span>` : ''}
      <a href="${route}"${note.isDemo ? '' : ` data-field-note-link="${escapeHtml(note.id)}"`}${duplicateTabIndex}>${note.isDemo ? 'EXPLORE FIELD NOTES' : 'VIEW STORY'} <span aria-hidden="true">↗</span></a>
    </div>
  </li>`;
}

function fieldNoteCard(note, index) {
  const isVerified = note.status === 'verified' && note.result;
  const result = isVerified
    ? note.result
    : note.historicalClaim ? 'Result awaiting verification' : 'Event details in progress';
  const evidenceCount = (note.gallery || []).length + (note.documents || []).length + (note.externalLinks || []).length;
  return `<a class="field-note-card" href="#/field-notes/${encodeURIComponent(note.id)}" data-field-note-link="${escapeHtml(note.id)}" style="--note-accent:${note.accent || 'var(--blue)'}">
    <span class="field-note-card-top"><span>FIELD NOTE / ${String(index + 1).padStart(2, '0')}</span><span>${note.year || 'YEAR TO CONFIRM'}</span></span>
    ${note.coverImage ? `<span class="field-note-card-cover"><img src="${escapeHtml(note.coverImage)}" alt="${escapeHtml(note.coverAlt || note.title)}" loading="lazy"></span>` : ''}
    <span class="field-note-category">${escapeHtml(note.category)}</span>
    <h3>${escapeHtml(note.title)}</h3>
    <p>${escapeHtml(note.summary)}</p>
    <span class="field-note-card-bottom"><span class="field-note-result">${escapeHtml(result)}</span><span class="field-note-evidence">${evidenceCount ? `${evidenceCount} ASSETS` : '0 ASSETS'}</span><span class="field-note-explore">Explore this field note <span aria-hidden="true">↗</span></span></span>
  </a>`;
}

function fieldNotesSection() {
  const notes = featuredFieldNotes();
  const duplicatedNotes = [...notes, ...notes.map(note => ({ ...note, isDuplicate: true }))];
  return `<section class="section field-notes-section" id="field-notes" aria-labelledby="field-notes-title">
    <div class="section-heading"><div><span class="eyebrow">MILESTONES &amp; MEMORIES</span><h2 id="field-notes-title">A few things happened along the way.</h2></div><span class="section-index">05 / FIELD NOTES</span></div>
    <div class="field-notes-intro">
      <p>Competitions · Hackathons · Case studies · Experiences</p>
      <span class="field-notes-date-note">A COLLECTION OF MOMENTS <span>·</span> DATES SHOWN WHEN CONFIRMED</span>
    </div>
    <div class="field-notes-carousel-controls">
      <span class="field-notes-motion-status" data-carousel-status aria-live="polite">Eight memories · gliding from right to left</span>
      <button class="field-notes-motion-toggle" type="button" data-carousel-toggle aria-pressed="false">Pause cards</button>
    </div>
    <div class="field-notes-clothesline" role="region" aria-label="Field Notes Polaroid carousel">
      <svg class="field-clothesline-svg field-clothesline-svg--horizontal" viewBox="0 0 1000 525" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path class="field-clothesline-path" d="M 0 62 C 40 62 68 73 100 76 S 245 102 300 96 S 435 67 500 74 S 646 122 700 112 S 855 77 900 86 S 977 89 1000 85"/></svg>
      <ol class="field-memory-list">${duplicatedNotes.map(fieldMemoryCard).join('')}</ol>
    </div>
    <div class="field-note-ending">
      <div class="field-note-ending-paper"><span class="eyebrow">FINAL NOTE</span><p class="field-note-ending-handwritten">To be continued...</p><p>Still collecting stories, building things, and finding new challenges.</p></div>
      <a class="field-note-archive-link" href="#/field-notes/archive">EXPLORE ALL FIELD NOTES <span aria-hidden="true">↗</span></a>
    </div>
  </section>`;
}

function fieldNotesArchive() {
  const notes = filteredFieldNotes();
  return `${header('archive')}
    <main id="main" class="field-note-archive-main">
      <div class="shell">
        <a class="field-back-link" href="#/">← Back to the Archive</a>
        <section class="field-note-archive-section" aria-labelledby="field-note-archive-title">
          <div class="section-heading"><div><span class="eyebrow">COMPETITIONS · EXPERIENCES · CASE STUDIES</span><h1 id="field-note-archive-title">The Field Notes archive.</h1></div><span class="section-index">${String(publishedFieldNotes().length).padStart(2, '0')} / RECORDS</span></div>
          <p class="field-note-archive-intro">A growing collection of challenges, attempts, collaborations and outcomes. Results remain marked for verification until their supporting details are confirmed.</p>
          <div class="field-notes-toolbar">
            <nav class="field-note-filters" aria-label="Filter field notes">
              ${fieldNoteFilters.map(filter => `<button type="button" class="field-note-filter" data-field-filter="${escapeHtml(filter)}" aria-pressed="${activeFieldNoteFilter === filter}">${escapeHtml(filter)}</button>`).join('')}
            </nav>
            <span class="field-note-count" aria-live="polite">${notes.length} ${notes.length === 1 ? 'record' : 'records'}</span>
          </div>
          <div class="field-note-grid" aria-live="polite">${notes.length ? notes.map(fieldNoteCard).join('') : '<p class="field-note-empty">No field notes in this category yet.</p>'}</div>
        </section>
      </div>
    </main>
    ${footer('archive')}`;
}

function fieldNoteDetail(route) {
  const notes = publishedFieldNotes();
  const note = notes.find(entry => entry.id === route.fieldNote);
  if (!note) {
    return `${header('archive')}<main id="main" class="field-note-detail-main"><div class="shell"><a class="field-back-link" href="#/">← Back to Field Notes</a><h1>Field note not found</h1><p>This record may have moved or its identifier may be incorrect.</p></div></main>${footer('archive')}`;
  }

  const sectionLabels = [
    ['overview', 'Overview'],
    ['challenge', 'The challenge'],
    ['approach', 'Approach & solution'],
    ['contribution', 'My contribution'],
    ['sprint', 'Competitive sprint'],
    ['evidence', 'Evidence & resources'],
    ['learning', 'Learning outcomes'],
    ['reflection', 'Reflection & next steps']
  ];
  const sections = note.sections || {};
  const renderFields = fields => {
    const entries = Object.entries(fields || {}).filter(([, value]) => value !== null && value !== '');
    return entries.length
      ? `<dl class="field-detail-list">${entries.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl>`
      : '<span class="field-pending-label">DOCUMENTATION PENDING</span>';
  };
  const gallery = note.gallery || [];
  const resources = note.documents || [];
  const links = note.externalLinks || [];
  const timeline = note.timeline || [];
  const knownFacts = note.knownContext || [];
  const detailSections = [
    `<section class="field-detail-section" id="overview"><span class="eyebrow">01 / EVENT RECORD</span><h2>Overview</h2>
      <dl class="field-meta-grid">
        ${[['Event', note.eventName], ['Organizer', note.organizer], ['Year', note.year], ['Location', note.location], ['Category', note.category], ['Team', note.teamName]].filter(([, value]) => value).map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}
        <div><dt>Result</dt><dd>${note.status === 'verified' && note.result ? escapeHtml(note.result) : note.historicalClaim ? 'Reported claim awaits verification' : 'Not recorded'}</dd></div>
      </dl>
      ${note.historicalClaim && !(note.status === 'verified' && note.result) ? `<aside class="field-claim-note"><span class="eyebrow">UNVERIFIED HISTORICAL CLAIM</span><p>${escapeHtml(note.historicalClaim)}</p></aside>` : ''}
      ${knownFacts.length ? `<div class="field-known-context">${knownFacts.map(fact => `<p>${escapeHtml(fact)}</p>`).join('')}</div>` : ''}
    </section>`,
    ...sectionLabels.slice(1, 4).map(([id, label], index) => `<section class="field-detail-section" id="${id}"><span class="eyebrow">${String(index + 2).padStart(2, '0')} / CASE NOTES</span><h2>${label}</h2>${renderFields(sections[id])}</section>`),
    `<section class="field-detail-section" id="sprint"><span class="eyebrow">05 / EVENT SEQUENCE</span><h2>Competitive sprint</h2>
      ${timeline.length ? `<ol class="field-sprint">${timeline.map(stage => `<li><span>${escapeHtml(stage.title)}</span>${stage.date ? `<small>${escapeHtml(stage.date)}</small>` : ''}<p>${escapeHtml(stage.description)}</p></li>`).join('')}</ol>` : '<span class="field-pending-label">TIMELINE TO BE ADDED</span>'}
    </section>`,
    `<section class="field-detail-section" id="evidence"><span class="eyebrow">06 / DOCUMENTATION</span><h2>Evidence &amp; resources</h2>
      ${gallery.length ? `<div class="field-gallery">${gallery.map((image, index) => `<button type="button" class="field-gallery-item" data-gallery-index="${index}" aria-label="View image ${index + 1}: ${escapeHtml(image.alt || image.caption || note.title)}"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || '')}" loading="lazy"><span>${escapeHtml(image.caption || '')}</span></button>`).join('')}</div>` : '<p class="field-empty-state">Gallery to be added.</p>'}
      ${resources.length ? `<div class="field-resource-list">${resources.map(resource => {
        const href = resource.url || resource.path;
        const validHref = href && /^(https?:\/\/|\.\.\/|\.\/|assets\/)/i.test(href);
        return validHref
          ? `<a class="field-resource" href="${escapeHtml(href)}" ${resource.url ? 'target="_blank" rel="noopener noreferrer"' : 'download'}><span class="eyebrow">${escapeHtml(resource.type || 'RESOURCE')}</span><strong>${escapeHtml(resource.title)}</strong><span>${escapeHtml(resource.description || '')}</span><b>Open resource ↗</b></a>`
          : `<article class="field-resource"><span class="eyebrow">${escapeHtml(resource.type || 'RESOURCE')}</span><strong>${escapeHtml(resource.title)}</strong><span>${escapeHtml(resource.description || '')}</span><span class="field-pending-label">FILE OR LINK NOT ADDED</span></article>`;
      }).join('')}</div>` : '<p class="field-empty-state">No presentations or supporting documents have been added yet.</p>'}
      ${links.length ? `<div class="field-external-links">${links.filter(link => /^https?:\/\//i.test(link.url || '')).map(link => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)} ↗</a>`).join('')}</div>` : ''}
    </section>`,
    ...sectionLabels.slice(6).map(([id, label], index) => `<section class="field-detail-section" id="${id}"><span class="eyebrow">${String(index + 7).padStart(2, '0')} / JOURNAL</span><h2>${label}</h2>${renderFields(sections[id])}</section>`)
  ].join('');
  const currentIndex = notes.indexOf(note);
  const previous = notes[currentIndex - 1];
  const next = notes[currentIndex + 1];

  const storedReturn = sessionStorage.getItem('field-note-return');
  const returnHref = storedReturn === '#/field-notes/archive' ? storedReturn : '#/';
  sessionStorage.removeItem('field-note-return');
  return `${header('archive')}
    <main id="main" class="field-note-detail-main">
      <div class="shell">
        <a class="field-back-link" href="${returnHref}">← Back to Field Notes</a>
        <header class="field-detail-heading">
          <span class="eyebrow">FIELD NOTE / ${String(currentIndex + 1).padStart(2, '0')} · ${escapeHtml(note.category)}</span>
          <h1 tabindex="-1">${escapeHtml(note.title)}</h1>
          <p>${escapeHtml(note.summary)}</p>
          <span class="field-detail-status">${note.status === 'verified' && note.result ? 'VERIFIED RECORD' : note.historicalClaim ? 'HISTORICAL CLAIM NEEDS VERIFICATION' : 'DRAFT · DETAILS TO CONFIRM'}</span>
        </header>
        ${note.coverImage ? `<figure class="field-detail-cover"><img src="${escapeHtml(note.coverImage)}" alt="${escapeHtml(note.coverAlt || note.title)}"><figcaption>${escapeHtml(note.coverAlt || note.title)}</figcaption></figure>` : ''}
        <div class="field-detail-layout">
          <nav class="field-detail-toc" aria-label="On this page"><span class="eyebrow">ON THIS PAGE</span>${sectionLabels.map(([id, label], index) => `<a href="#${id}">${String(index + 1).padStart(2, '0')} ${label}</a>`).join('')}</nav>
          <article class="field-detail-content">${detailSections}
            <nav class="field-detail-pagination" aria-label="Other field notes">
              ${previous ? `<a href="#/field-notes/${previous.id}">← ${escapeHtml(previous.title)}</a>` : '<span></span>'}
              ${next ? `<a href="#/field-notes/${next.id}">${escapeHtml(next.title)} →</a>` : '<span></span>'}
            </nav>
          </article>
        </div>
      </div>
    </main>
    ${gallery.length ? `<dialog class="field-lightbox" aria-label="Field note image viewer"><button type="button" class="field-lightbox-close" aria-label="Close image viewer">×</button><button type="button" class="field-lightbox-previous" aria-label="Previous image">←</button><figure><img alt=""><figcaption></figcaption></figure><button type="button" class="field-lightbox-next" aria-label="Next image">→</button></dialog>` : ''}
    ${footer('archive')}`;
}

const documentationModules = [
  { slug: 'overview', folder: '01_Overview', title: 'Overview', purpose: 'Project identity, problem, vision and timeline.', files: ['project-brief.md', 'elevator-pitch.md', 'problem-statement.md', 'vision.md', 'project-metadata.json', 'project-timeline.md'] },
  { slug: 'research', folder: '02_Research', title: 'Research', purpose: 'Market, users, evidence and research sources.', files: ['problem-research.md', 'market-research.md', 'competitor-analysis.md', 'user-research.md', 'personas.md', 'research-sources.md'] },
  { slug: 'ideation', folder: '03_Ideation', title: 'Ideation', purpose: 'Concept development, alternatives and prioritization.', files: ['initial-ideas.md', 'brainstorming.md', 'concept-evolution.md', 'alternative-solutions.md', 'feature-prioritization.md', 'why-this-approach.md'] },
  { slug: 'requirements', folder: '04_Requirements', title: 'Requirements', purpose: 'Functional scope, user needs and constraints.', files: ['functional-requirements.md', 'non-functional-requirements.md', 'user-stories.md', 'use-cases.md', 'constraints.md', 'scope.md'] },
  { slug: 'architecture', folder: '05_Architecture', title: 'Architecture', purpose: 'System design, technologies, interfaces and infrastructure.', files: ['system-architecture.md', 'tech-stack.md', 'database-schema.md', 'api-design.md', 'integrations.md', 'infrastructure.md', 'security-design.md'] },
  { slug: 'user-flows', folder: '06_User_Flows', title: 'User Flows', purpose: 'Journeys, workflows and information architecture.', files: ['user-journey.md', 'user-flow.md', 'information-architecture.md', 'process-workflows.md', 'stakeholder-flows.md'] },
  { slug: 'design-studio', folder: '07_Design_Studio', title: 'Design Studio', purpose: 'Visual direction, interface decisions and prototypes.', files: ['design-direction.md', 'color-system.md', 'typography.md', 'components.md', 'design-decisions.md', 'wireframes/', 'prototypes/', 'screenshots/'] },
  { slug: 'implementation', folder: '08_Implementation', title: 'Implementation', purpose: 'Engineering work, code references and deployment.', files: ['implementation-notes.md', 'frontend.md', 'backend.md', 'database.md', 'ai-ml-models.md', 'deployment.md', 'github-links.md', 'codebase/'] },
  { slug: 'decisions', folder: '09_Decisions', title: 'Decisions', purpose: 'Trade-offs, alternatives, challenges and lessons.', files: ['decision-log.md', 'technical-tradeoffs.md', 'alternatives-considered.md', 'challenges.md', 'lessons-learned.md'] },
  { slug: 'testing', folder: '10_Testing', title: 'Testing', purpose: 'Validation, quality, performance and limitations.', files: ['test-plan.md', 'test-cases.md', 'bug-log.md', 'performance.md', 'validation.md', 'limitations.md'] },
  { slug: 'outcomes', folder: '11_Outcomes', title: 'Outcomes', purpose: 'Results, achievements, metrics and feedback.', files: ['results.md', 'achievements.md', 'metrics.md', 'demonstrations.md', 'feedback.md'] },
  { slug: 'future-scope', folder: '12_Future_Scope', title: 'Future Scope', purpose: 'Roadmap, planned features and open research.', files: ['roadmap.md', 'planned-features.md', 'research-gaps.md', 'next-iterations.md'] },
  { slug: 'media-assets', folder: '13_Media_Assets', title: 'Media Assets', purpose: 'Project identity, imagery, diagrams and demonstrations.', files: ['cover.webp', 'icon.svg', 'hero.webp', 'gallery/', 'diagrams/', 'videos/', 'screenshots/', 'photographs/'] }
];

const projectRegistry = [
  {
    slug: 'nexterra', featured: true, order: 1, accent: '#86c9a6', deep: '#173a34', soft: '#e8f1e7',
    name: 'NexTerra', folder: '01_NexTerra', category: 'Environmental intelligence / ClimateTech', identity: 'Climate Intelligence Laboratory', code: 'CLIMATE / GEO',
    tagline: 'Environmental intelligence, explored through a climate-focused lens.',
    concept: 'A climate intelligence project direction. The intended users, environmental data sources, methods and implemented scope still need confirmation.',
    signature: 'Interactive environmental map and climate-risk layer exploration.'
  },
  {
    slug: 'cloudforge', featured: true, order: 2, accent: '#93b8ff', deep: '#182b50', soft: '#e8eefb',
    name: 'CloudForge', folder: '02_CloudForge', category: 'Cloud computing / Education', identity: 'Cloud Engineering Playground', code: 'CLOUD / LEARN',
    tagline: 'A cloud engineering playground shaped around learning and practice.',
    concept: 'A cloud computing and education project direction. Learner workflows, completed exercises and any real cloud integrations need confirmation.',
    signature: 'Simulated terminal or interactive cloud quest explorer.'
  },
  {
    slug: 'carbon-credits', featured: true, order: 3, accent: '#b4c690', deep: '#334431', soft: '#edf1e2',
    name: 'Carbon Credits Ecosystem', folder: '03_Carbon_Credits', category: 'Climate finance / Sustainability', identity: 'The Carbon Exchange', code: 'CARBON / LEDGER',
    tagline: 'A sustainability-focused exploration of the carbon-credit ecosystem.',
    concept: 'A climate finance and sustainability project direction. Credit-generation methods, verification evidence and marketplace scope need confirmation.',
    signature: 'Explore a carbon-credit lifecycle from generation through verification to trading.'
  },
  {
    slug: 'pravaha', featured: true, order: 4, accent: '#9ad5b2', deep: '#183d32', soft: '#e8eee3',
    name: 'PRAVAHA', folder: '04_PRAVAHA', category: 'Circular economy / E-waste', identity: 'Circular Systems Studio', code: 'E-WASTE / CIRCULAR',
    tagline: 'A circular-systems direction centered on e-waste.',
    concept: 'A circular economy and e-waste project direction. Stakeholder research, collection workflows and implemented capabilities need confirmation.',
    signature: 'Trace an e-waste item through a proposed recycling ecosystem.'
  },
  {
    slug: 'urvara', featured: true, order: 5, accent: '#d9a276', deep: '#4d3025', soft: '#f3e8dc',
    name: 'Urvara', folder: '05_Urvara', category: 'AgriTech / Precision agriculture', identity: 'Agricultural Intelligence Field', code: 'AGRI / FIELD',
    tagline: 'An agricultural intelligence direction grounded in the crop cycle.',
    concept: 'An AgriTech and precision agriculture project direction. Crop advisory methods, farmer workflows and validated capabilities need confirmation.',
    signature: 'Explore a crop lifecycle alongside proposed advisory and post-harvest decisions.'
  },
  {
    slug: 'trilogy', featured: true, order: 6, accent: '#e5a9bd', deep: '#482a3d', soft: '#f5e8ec',
    name: 'Trilogy', folder: '06_Trilogy', category: 'Creative / Editorial', identity: 'A Shared Digital Scrapbook', code: 'EDITORIAL / MEMORY',
    tagline: 'A creative and editorial space for three contributors.',
    concept: 'A shared digital scrapbook project direction. Contributor histories, content and media organization have not been supplied.',
    signature: 'Flip through photographs, journal entries and memories from three contributors.'
  },
  {
    slug: 'kanochi', featured: false, order: 7, accent: '#77d7a2', deep: '#122e2b', soft: '#e4efe9',
    name: 'Kanochi', folder: '07_Kanochi', category: 'Cybersecurity', identity: 'Cybersecurity Operations Center', code: 'SECURITY / OPS',
    tagline: 'A cybersecurity project identity for a research and engineering archive.',
    concept: 'A cybersecurity project direction. The threat landscape, detection methodology and project implementation need confirmation.',
    signature: 'Interactive threat-monitoring or security-workflow exploration.'
  },
  {
    slug: 'cognivault', featured: false, order: 8, accent: '#91abc9', deep: '#283747', soft: '#eceeea',
    name: 'Cognivault', folder: '08_Cognivault', category: 'Research / Knowledge management', identity: 'The Research Archive', code: 'RESEARCH / INDEX',
    tagline: 'A research archive identity for organizing and exploring knowledge.',
    concept: 'A research and knowledge-management project direction. The topic taxonomy, search behavior and content collection need confirmation.',
    signature: 'Explore and search the research library, including its 200+ topics.'
  },
  {
    slug: 'retra-038-suraksha', featured: false, order: 9, accent: '#c6b67b', deep: '#3e3a26', soft: '#efeddf',
    name: 'Retra 038 / Suraksha', folder: '09_Retra_038_Suraksha', category: 'AI / Agricultural protection', identity: 'Smart Farm Protection Laboratory', code: 'VISION / AGRI',
    tagline: 'A smart-farm protection identity for agricultural AI research.',
    concept: 'Retra 038 and Suraksha remain one registry entry as directed. Their individual histories, differences and any implemented capabilities have not been established.',
    signature: 'Visual detection demonstration with bounding boxes and livestock-identification overlays.'
  }
];

const projectDomains = {
  nexterra: ['Environment', 'AI / ML'],
  cloudforge: ['Cloud'],
  'carbon-credits': ['Environment', 'Systems'],
  pravaha: ['Environment', 'Systems'],
  urvara: ['Environment', 'AI / ML'],
  trilogy: ['Systems'],
  kanochi: ['Cybersecurity'],
  cognivault: ['AI / ML', 'Systems'],
  'retra-038-suraksha': ['Environment', 'AI / ML', 'Cybersecurity']
};

const projects = projectRegistry.map(project => ({
  theme: project.slug,
  status: 'Details to verify',
  role: null,
  duration: null,
  icon: null,
  cover: null,
  hero: null,
  technologies: [],
  collaborators: [],
  links: { website: null, github: null, prototype: null },
  sections: documentationModules.map(module => module.slug),
  relatedProjects: [],
  domains: projectDomains[project.slug] || [],
  ...project
}));

const workshopSession = {
  openProjects: [],
  activeProject: null,
  activeFiles: {}
};

function resetWorkshopSession() {
  workshopSession.openProjects = [];
  workshopSession.activeProject = null;
  workshopSession.activeFiles = {};
}

const projectDocuments = {
  nexterra: {
    overview: 'The supplied Workshop brief identifies NexTerra as an environmental intelligence / ClimateTech project with a climate intelligence laboratory identity. Its problem statement, current build and project history have not been supplied.',
    research: 'Document environmental problem research, urban heat mitigation methodology and geospatial data sources. No datasets, interviews or findings have been supplied.',
    architecture: 'The brief calls for mapping and analytics architecture documentation. The actual system design, data flow and technologies are not yet supplied.',
    implementation: 'Implementation evidence, repository links and screenshots have not been supplied. Add them only after reviewing the project source.',
    testing: 'Model and data validation are priority documentation areas. No validation results or performance claims have been supplied.'
  },
  cloudforge: {
    overview: 'The supplied Workshop brief identifies CloudForge as a cloud computing / education project with a cloud engineering playground identity. The learner audience, completed challenges and project status need confirmation.',
    ideation: 'The brief proposes documenting learning architecture and the quest or challenge system. No completed learning materials or outcomes have been supplied.',
    architecture: 'Document the actual cloud service mapping and infrastructure. Distinguish any simulated scenario from a real cloud integration.',
    implementation: 'Implementation details and repository links have not been supplied. No cloud resources or deployment are represented as verified.',
    testing: 'No learner testing or learning outcomes have been supplied.'
  },
  'carbon-credits': {
    overview: 'The supplied Workshop brief identifies this as a climate finance / sustainability project with a carbon exchange identity. No credit lifecycle, marketplace or impact is claimed as implemented.',
    research: 'Document carbon-credit ecosystem research, farmer and company personas, and the evidence behind the proposed workflow. No research findings have been supplied.',
    implementation: 'The project source and actual transaction, verification or traceability implementation have not been supplied.'
  },
  pravaha: {
    overview: 'The supplied Workshop brief identifies PRAVAHA as a circular economy / e-waste project with a circular systems studio identity. Scope and project status need confirmation.',
    research: 'Document the e-waste problem landscape and stakeholder ecosystem. No interviews or validated demand have been supplied.',
    architecture: 'The project source and actual material lineage, tracking or verification system have not been supplied.',
    'user-flows': 'Collection and processing workflows are priority documentation areas. Current stakeholder journeys have not been supplied.',
    testing: 'No field validation or verified impact measures have been supplied.'
  }
};

const projectThemes = Object.fromEntries(projects.map(project => [project.theme, {
  accent: project.accent,
  deep: project.deep,
  soft: project.soft,
  identity: project.identity
}]));

function projectModules(project) {
  const projectContent = projectDocuments[project.slug] || {};
  return documentationModules.map(module => ({
    ...module,
    content: projectContent[module.slug] || '',
    status: projectContent[module.slug] ? 'Portfolio outline · source not supplied' : 'Documentation not supplied'
  }));
}

function featuredProjects() {
  return projects.filter(project => project.featured).sort((a, b) => a.order - b.order);
}

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
  if (path[0] === 'field-notes' && path[1] === 'archive') return { mode: 'field-notes-archive' };
  if (path[0] === 'field-notes' && path[1]) return { mode: 'field-note', fieldNote: path[1] };
  if (path[0] === 'field-notes') return { mode: 'field-notes-archive' };
  if (path[0] === 'contact') return { mode: 'archive', anchor: 'contact' };
  return { mode: 'archive' };
}

function navLink(mode, label, href, active) {
  return `<a class="nav-link" href="${href}" ${active === mode ? 'aria-current="page"' : ''}>${label}</a>`;
}

function header(active) {
  const theme = localStorage.getItem('portfolio-theme') || 'light';
  return `<header class="site-header">
    <div class="header-inner${active === 'archive' ? ' archive-header-inner' : ''}">
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
      ${active === 'archive' ? `<div class="archive-hanging" aria-hidden="true">
        <svg class="hanging-filter-defs" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <filter id="hanging-wave" x="-8%" y="-5%" width="116%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency=".018" numOctaves="2" seed="4" result="wave" />
            <feDisplacementMap in="SourceGraphic" in2="wave" scale="0" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        <img class="archive-hanging-image" src="./assets/dangling-transparent.png" alt="" draggable="false">
      </div>` : ''}
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

function projectArtwork(slug) {
  const illustrations = {
    nexterra: '<svg viewBox="0 0 320 180" aria-hidden="true" focusable="false"><path d="M17 37c37-29 65 8 103-8s60-33 99-12 57 4 84 19M10 60c37-29 67 11 109-7s62-30 98-8 54 3 87 18M6 85c45-25 66 8 111-8s67-29 99-8 51 3 82 18M18 111c34-20 62 4 101-9s72-26 106-6 51 2 72 12M39 139c25-14 53 1 83-9s67-20 97-5 47 4 66 10" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M216 48c0 20-26 42-26 42s-26-22-26-42a26 26 0 1 1 52 0Z" fill="currentColor" opacity=".14"/><circle cx="190" cy="48" r="7" fill="currentColor"/><path d="M235 122h52M261 96v52" stroke="currentColor" stroke-width="1" stroke-dasharray="3 5"/></svg>',
    cloudforge: '<svg viewBox="0 0 320 180" aria-hidden="true" focusable="false"><path d="M84 83a31 31 0 0 1 59-13 25 25 0 0 1 40 14h6a21 21 0 0 1 0 42H89a22 22 0 0 1-5-43Z" fill="currentColor" opacity=".17" stroke="currentColor" stroke-width="2"/><rect x="194" y="46" width="70" height="23" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><rect x="194" y="79" width="70" height="23" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><rect x="194" y="112" width="70" height="23" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M205 58h4m-4 33h4m-4 33h4M218 58h35m-35 33h35m-35 33h35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="m75 137 11-11 11 11m-11-11v27h36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    pravaha: '<svg viewBox="0 0 320 180" aria-hidden="true" focusable="false"><path d="M86 78a51 51 0 0 1 89-23l10 12m0 0-19 2m19-2-2-19M232 91a51 51 0 0 1-88 30l-11-12m0 0 19-1m-19 1 1 19" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M147 78h39l-5 43h-30z" fill="currentColor" opacity=".14" stroke="currentColor" stroke-width="2"/><path d="M150 91h34m-30 9h28m-24 9h20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="109" cy="55" r="4" fill="currentColor"/><circle cx="213" cy="128" r="4" fill="currentColor"/><path d="M62 145h196" stroke="currentColor" stroke-width="1" stroke-dasharray="3 6"/></svg>',
    'carbon-credits': '<svg viewBox="0 0 320 180" aria-hidden="true" focusable="false"><path d="M52 142h220M69 142V89m0 0 20-29 20 29v53m38 0V70m0 0 25-35 25 35v72m30 0V95m0 0 18-25 18 25v47" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="239" cy="51" r="28" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.5"/><path d="m226 51 9 9 18-19" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M43 40h45M43 48h29M254 135h31" stroke="currentColor" stroke-width="1" stroke-dasharray="3 5"/></svg>',
    urvara: '<svg viewBox="0 0 320 180" aria-hidden="true" focusable="false"><path d="M160 148V56m0 55c-43 0-66-25-66-63 39 0 66 22 66 63Zm0-29c0-38 24-64 66-64 0 39-23 64-66 64Z" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="2"/><path d="M74 148h172M108 148v-20m104 20v-20M122 126c15-10 29-10 38 0m0 0c12-10 25-10 38 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="160" cy="48" r="4" fill="currentColor"/></svg>',
    trilogy: '<svg viewBox="0 0 320 180" aria-hidden="true" focusable="false"><rect x="55" y="35" width="94" height="110" rx="2" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="2" transform="rotate(-8 102 90)"/><rect x="112" y="27" width="94" height="110" rx="2" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="2" transform="rotate(5 159 82)"/><rect x="169" y="38" width="94" height="110" rx="2" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="2" transform="rotate(-3 216 93)"/><path d="M91 115c14-25 26-23 39 0m-8-20h1m63 13c14-21 25-22 39 0m-18-29h1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    kanochi: '<svg viewBox="0 0 320 180" aria-hidden="true" focusable="false"><path d="M160 28 236 57v40c0 34-28 55-76 72-48-17-76-38-76-72V57l76-29Z" fill="currentColor" fill-opacity=".09" stroke="currentColor" stroke-width="2"/><path d="M160 48 216 69v29c0 23-19 39-56 53-37-14-56-30-56-53V69l56-21Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/><path d="m132 92 18 18 39-40" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="69" cy="40" r="3" fill="currentColor"/><circle cx="254" cy="130" r="3" fill="currentColor"/></svg>',
    cognivault: '<svg viewBox="0 0 320 180" aria-hidden="true" focusable="false"><path d="M75 41h117l39 39v62H75z" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="2"/><path d="M192 41v39h39M94 96h112m-112 14h93m-93 14h105" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="248" cy="48" r="20" fill="none" stroke="currentColor" stroke-width="2"/><path d="m263 63 17 17m-36-32v12m-6-6h12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    'retra-038-suraksha': '<svg viewBox="0 0 320 180" aria-hidden="true" focusable="false"><path d="M53 53h214v101H53z" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="2"/><path d="M82 123V87l22-18 25 18v36m15 0V76l24-20 25 20v47m16 0V94l21-16 20 16v29" fill="none" stroke="currentColor" stroke-width="2"/><rect x="151" y="68" width="54" height="61" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><path d="M151 68v9m0-9h9m45 0h-9m9 0v9m-54 52v-9m0 9h9m45 0h-9m9 0v-9" fill="none" stroke="currentColor" stroke-width="2"/></svg>'
  };
  return illustrations[slug] || '';
}

function projectDesktopFolder(project, index) {
  const number = String(project.order || index + 1).padStart(2, '0');
  const isFeatured = index === 0;
  const isNexTerra = project.slug === 'nexterra';
  const description = isNexTerra
    ? 'An AI-powered geospatial platform for understanding environmental risks and enabling smarter urban decisions.'
    : project.tagline;
  const fileNumber = String(project.order || index + 1).padStart(3, '0');
  return `<a class="project-folder project-folder--${project.slug}${isFeatured ? ' project-folder--featured' : ''}" data-project-slug="${project.slug}" href="#/workshop/${project.slug}" style="--folder-accent:${project.accent};--folder-surface:color-mix(in srgb, ${project.soft} 66%, var(--paper-raised));--folder-border:color-mix(in srgb, ${project.accent} 66%, var(--rule))" aria-label="Open ${escapeHtml(project.name)} project overview in the Workshop">
    <span class="project-folder-topline"><span class="${isFeatured ? 'project-folder-file' : 'project-folder-number'}">${isFeatured ? `FILE ${fileNumber}` : number}</span><span class="project-folder-code">${escapeHtml(project.code)}</span><span class="project-folder-open">OPEN PROJECT <span aria-hidden="true">↗</span></span></span>
    <span class="project-folder-art" role="img" aria-label="${escapeHtml(project.identity)} conceptual illustration, not a product screenshot">${projectArtwork(project.slug)}<span class="project-folder-art-caption" aria-hidden="true">CONCEPT VISUAL</span></span>
    <div class="project-folder-copy"><div class="project-folder-meta">${isFeatured ? `<span class="project-feature-category">${isNexTerra ? '01 — CLIMATE TECHNOLOGY' : escapeHtml(project.category)}</span>` : ''}<h3>${escapeHtml(project.name)}</h3>${isFeatured ? `${isNexTerra ? '<span class="project-feature-subtitle">Environmental Intelligence</span><strong class="project-feature-statement">Building intelligence for a changing planet.</strong>' : ''}<p class="project-feature-description">${escapeHtml(description)}</p>${isNexTerra ? '<span class="project-feature-stack">GIS · AI/ML · React · Python</span>' : ''}` : `<span class="project-folder-category">${escapeHtml(project.category)}</span>`}</div>${isFeatured ? '<span class="project-feature-cta">VIEW PROJECT <span aria-hidden="true">↗</span></span>' : '<span class="project-folder-arrow" aria-hidden="true">↗</span>'}</div>
  </a>`;
}

function projectDesktopWindow() {
  const featured = featuredProjects();
  return Array.from({ length: Math.min(4, featured.length) }, (_, slot) => featured[(projectCarouselIndex + slot) % featured.length]);
}

function updateProjectCarouselStatus() {
  const status = document.querySelector('[data-project-carousel-status]');
  const visible = projectDesktopWindow();
  if (status) status.textContent = `Showing ${visible.map(project => project.name).join(', ')}`;
  const count = document.querySelector('[data-project-carousel-count]');
  if (count) count.textContent = `${String(projectCarouselIndex + 1).padStart(2, '0')} / ${String(featuredProjects().length).padStart(2, '0')}`;
}

function stepProjectCarousel(direction) {
  const grid = document.querySelector('[data-project-carousel-grid]');
  const featured = featuredProjects();
  if (!grid || projectCarouselAnimating || featured.length <= 4) return;

  const oldCards = [...grid.querySelectorAll('.project-folder')];
  const oldPositions = new Map(oldCards.map(card => [card.dataset.projectSlug, card.getBoundingClientRect()]));
  const gridBounds = grid.getBoundingClientRect();
  const desktop = grid.closest('.project-desktop');
  const desktopBounds = desktop.getBoundingClientRect();
  projectCarouselIndex = (projectCarouselIndex + direction + featured.length) % featured.length;
  const visible = projectDesktopWindow();
  const visibleSlots = new Map(visible.map((project, slot) => [project.slug, slot]));
  const exiting = oldCards.filter(card => {
    const slot = visibleSlots.get(card.dataset.projectSlug);
    return slot === undefined || card.classList.contains('project-folder--featured') !== (slot === 0);
  });
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const exitClones = reducedMotion ? [] : exiting.map(card => {
    const bounds = oldPositions.get(card.dataset.projectSlug);
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.inert = true;
    clone.style.position = 'absolute';
    clone.style.left = `${bounds.left - desktopBounds.left}px`;
    clone.style.top = `${bounds.top - desktopBounds.top}px`;
    clone.style.width = `${bounds.width}px`;
    clone.style.height = `${bounds.height}px`;
    clone.style.margin = '0';
    clone.style.zIndex = '3';
    clone.style.pointerEvents = 'none';
    clone.dataset.carouselExit = 'true';
    return clone;
  });

  projectCarouselAnimating = true;
  grid.setAttribute('aria-busy', 'true');
  document.querySelectorAll('[data-project-carousel-step]').forEach(button => { button.disabled = true; });
  exitClones.forEach(clone => desktop.append(clone));
  exiting.forEach(card => card.remove());

  const nextCards = visible.map((project, slot) => {
    const existing = oldCards.find(card => card.dataset.projectSlug === project.slug
      && card.classList.contains('project-folder--featured') === (slot === 0));
    if (existing) {
      grid.append(existing);
      return existing;
    }
    const template = document.createElement('template');
    template.innerHTML = projectDesktopFolder(project, slot);
    const card = template.content.firstElementChild;
    card.dataset.projectSlug = project.slug;
    grid.append(card);
    return card;
  });
  updateProjectCarouselStatus();

  if (!reducedMotion) {
    void grid.offsetHeight;
    const duration = 660;
    const animations = nextCards.map(card => {
      const previous = oldPositions.get(card.dataset.projectSlug);
      if (!previous) {
        return card.animate([
          { translate: `0px ${direction > 0 ? 54 : -54}px`, opacity: 0 },
          { translate: '0px 0px', opacity: 1 }
        ], { duration, easing: 'cubic-bezier(.22,.75,.22,1)' });
      }
      const current = card.getBoundingClientRect();
      return card.animate([
        { translate: `${previous.left - current.left}px ${previous.top - current.top}px`, opacity: 1 },
        { translate: '0px 0px', opacity: 1 }
      ], { duration, easing: 'cubic-bezier(.22,.75,.22,1)' });
    });
    const exitDistance = gridBounds.width + 32;
    exitClones.forEach(clone => {
      animations.push(clone.animate([
        { translate: '0px 0px', opacity: 1 },
        { translate: `${direction > 0 ? -exitDistance : exitDistance}px 0px`, opacity: 0 }
      ], { duration: duration - 70, easing: 'cubic-bezier(.55,0,.8,.35)' }));
    });
    projectCarouselAnimations = animations;
    Promise.all(animations.map(animation => animation.finished.catch(() => null))).then(() => {
      exitClones.forEach(clone => clone.remove());
      if (grid.isConnected) {
        projectCarouselAnimating = false;
        projectCarouselAnimations = [];
        grid.removeAttribute('aria-busy');
        document.querySelectorAll('[data-project-carousel-step]').forEach(button => { button.disabled = false; });
      }
    });
    return;
  }

  projectCarouselAnimating = false;
  grid.removeAttribute('aria-busy');
  document.querySelectorAll('[data-project-carousel-step]').forEach(button => { button.disabled = false; });
}

const polaroidPhotos = [
  { image: 'img 1.jpeg', width: 899, height: 1599, alt: 'A close-up selfie of Dishti in a black top.', caption: 'a little moment to keep', note: 'collect moments, not things ♡' },
  { image: 'img 2.jpeg', width: 576, height: 1280, alt: 'Dishti taking a mirror selfie with an event lanyard.', caption: 'somewhere new, feeling brave', note: 'ideas, adventures & little victories' },
  { image: 'img 3.jpeg', width: 899, height: 1599, alt: 'A portrait of Dishti wearing a teal kurta.', caption: 'soft days, bright colors', note: 'soft heart, sharp mind' },
  { image: 'img 4.jpeg', width: 1141, height: 720, alt: 'Dishti at a mountain overlook beneath a hazy sky.', caption: 'a little closer to the clouds', note: 'mountains = healing' },
  { image: 'img 5.jpeg', width: 960, height: 1280, alt: 'Dishti standing outside a grand university building.', caption: 'showing up, one day at a time', note: 'build · learn · repeat' },
  { image: 'img 6.jpeg', width: 484, height: 658, alt: 'A candid portrait of Dishti in a light shirt with a lanyard.', caption: 'good people, good memories', note: 'still becoming ✿' }
];

let polaroidShuffleTimer = 0;
let polaroidTransitionTimer = 0;
let polaroidObserver = null;
let polaroidVisibilityHandler = null;
let explorationObserver = null;
let explorationTween = null;
let projectDesktopObserver = null;
let projectDesktopTimeline = null;
let projectCarouselIndex = 0;
let projectCarouselAnimating = false;
let projectCarouselAnimations = [];
let fieldNotesObserver = null;
let fieldNotesTimeline = null;

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
          <div class="polaroid-scrapbook" data-polaroid-stack role="group" aria-label="A scrapbook bundle of six personal photographs">
            <div class="polaroid-stage">
              ${polaroidPhotos.map((photo, index) => `<figure class="polaroid-card" data-position="${index}" data-note="${photo.note}" data-shuffle-direction="left">
                <img src="./assets/${photo.image}" width="${photo.width}" height="${photo.height}" alt="${photo.alt}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>
                <figcaption>${photo.caption}</figcaption>
              </figure>`).join('')}
              <p class="scrap-note scrap-note--featured" data-polaroid-note aria-hidden="true">${polaroidPhotos[0].note}</p>
              <p class="scrap-note scrap-note--fixed" aria-hidden="true">little life lately ✿</p>
              <p class="scrap-note scrap-note--code" aria-hidden="true">somewhere between code &amp; coffee</p>
              <span class="scrap-doodle" aria-hidden="true">✧</span>
              <span class="scrap-doodle scrap-doodle--heart" aria-hidden="true">♡</span>
            </div>
            <p class="polaroid-caption">small frames, big feelings <span aria-hidden="true">↗</span></p>
          </div>
        </section>

        <section class="academic-snapshot" aria-labelledby="academic-snapshot-title">
          <div class="academic-snapshot-topline">
            <span class="eyebrow">02.5 / ACADEMIC SNAPSHOT</span>
            <span class="academic-snapshot-status"><i aria-hidden="true"></i> IN PROGRESS</span>
          </div>
          <div class="academic-snapshot-main">
            <div class="academic-snapshot-degree">
              <span class="eyebrow">ACADEMIC RECORD / 001 · CURRENTLY PURSUING</span>
              <h2 id="academic-snapshot-title">Computer Science &amp; Engineering</h2>
              <p>B.Tech · GSFC University</p>
              <span class="academic-snapshot-location">Vadodara, Gujarat, India</span>
            </div>
            <div class="academic-snapshot-gpa" aria-label="Current CGPA 8.38 out of 10">
              <strong>8.38</strong>
              <span>CGPA / 10</span>
            </div>
          </div>
          <div class="academic-snapshot-bottom">
            <div><span>YEAR</span><strong>02</strong></div>
            <div><span>SEMESTER</span><strong>03</strong></div>
            <div><span>GRADUATION</span><strong>2028</strong></div>
            <p>BUILDING THE FUNDAMENTALS, ONE SEMESTER AT A TIME.</p>
          </div>
        </section>

        <section class="section exploration-section" aria-labelledby="exploring-title">
          <div class="section-heading"><h2 id="exploring-title">A mind in progress.</h2><span class="section-index">03 / CURRENTLY EXPLORING</span></div>
          <p class="section-intro exploration-intro">Areas I'm exploring, experimenting with, and learning to understand better.</p>
          <div class="exploration-grid">
            <details class="exploration-item">
              <summary>
                <span class="exploration-code">01 / INFRASTRUCTURE</span>
                <svg class="exploration-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20 16.2a4.5 4.5 0 0 0-4.5-4.5h-.3A6.2 6.2 0 1 0 4.5 17h11"></path><path d="M16 19h6m-3-3 3 3-3 3"></path></svg>
                <strong class="exploration-title">Cloud &amp; DevOps</strong>
                <span class="exploration-summary">AWS · Linux · Infrastructure</span>
                <span class="exploration-arrow" aria-hidden="true">↗</span>
              </summary>
              <div class="exploration-detail"><div class="exploration-detail-inner"><p>Exploring how systems are deployed, managed, automated and scaled.</p><span class="exploration-tags">AWS / LINUX / CI-CD / AUTOMATION</span></div></div>
            </details>
            <details class="exploration-item">
              <summary>
                <span class="exploration-code">02 / INTELLIGENCE</span>
                <svg class="exploration-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 18V5.5a3.5 3.5 0 0 0-7 0A3.5 3.5 0 0 0 4 12a3.5 3.5 0 0 0 3 5.5"></path><path d="M12 18V5.5a3.5 3.5 0 0 1 7 0A3.5 3.5 0 0 1 20 12a3.5 3.5 0 0 1-3 5.5"></path><path d="M8 9h1m-2 5h2m6-5h1m-1 5h2m-5-8v2m0 8v2"></path><path d="M9 18v2m6-2v2"></path></svg>
                <strong class="exploration-title">AI &amp; ML</strong>
                <span class="exploration-summary">Intelligent systems · Data</span>
                <span class="exploration-arrow" aria-hidden="true">↗</span>
              </summary>
              <div class="exploration-detail"><div class="exploration-detail-inner"><p>Exploring intelligent systems and how data can make them more useful.</p><span class="exploration-tags">INTELLIGENT SYSTEMS / DATA</span></div></div>
            </details>
            <details class="exploration-item">
              <summary>
                <span class="exploration-code">03 / ENGINEERING</span>
                <svg class="exploration-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m4 17 6-5-6-5"></path><path d="M12 19h8"></path></svg>
                <strong class="exploration-title">Development</strong>
                <span class="exploration-summary">Full-stack · Experimentation</span>
                <span class="exploration-arrow" aria-hidden="true">↗</span>
              </summary>
              <div class="exploration-detail"><div class="exploration-detail-inner"><p>Building across the stack and learning through hands-on experimentation.</p><span class="exploration-tags">FULL-STACK / EXPERIMENTATION</span></div></div>
            </details>
            <details class="exploration-item">
              <summary>
                <span class="exploration-code">04 / CREATIVITY</span>
                <svg class="exploration-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m15.5 5.5 3 3"></path><path d="M4 20c4.5-.5 7.5-3 10-5.5l5-5a2.1 2.1 0 0 0-3-3l-5 5C8.5 14 6 16.5 4 20Z"></path><path d="m13 8 3 3"></path></svg>
                <strong class="exploration-title">Design &amp; Ideas</strong>
                <span class="exploration-summary">Product thinking · UI/UX</span>
                <span class="exploration-arrow" aria-hidden="true">↗</span>
              </summary>
              <div class="exploration-detail"><div class="exploration-detail-inner"><p>Thinking about how useful products feel, work and communicate.</p><span class="exploration-tags">PRODUCT THINKING / UI/UX</span></div></div>
            </details>
          </div>
          <div class="exploration-footer"><span>ALWAYS LEARNING. ALWAYS BUILDING.</span><a class="text-link" href="#projects">Explore my work <span aria-hidden="true">↗</span></a></div>
        </section>

        <section class="section selected-work-section" id="projects" aria-labelledby="projects-title">
          <div class="section-heading selected-work-heading">
            <div class="selected-work-title"><span class="eyebrow">THE PROJECT ARCHIVE</span><h2 id="projects-title">SELECTED WORKS · 2025–26</h2></div>
            <span class="section-index">04 / SELECTED WORK</span>
          </div>
          <p class="section-intro selected-work-intro">A collection of ideas, experiments and things brought to life.</p>
          <div class="project-desktop" role="group" aria-label="Dishti's project desktop">
            <nav class="project-desktop-toolbar" aria-label="Project desktop controls">
              <button class="project-toolbar-control" type="button" data-project-carousel-step="-1" aria-label="Show previous featured projects" title="Previous projects"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button>
              <button class="project-toolbar-control" type="button" data-project-carousel-step="1" aria-label="Show next featured projects" title="Next projects"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button>
              <span class="project-desktop-address"><span class="address-lock" aria-hidden="true">⌑</span>dishti.dev <span aria-hidden="true">/</span> workshop</span>
              <button class="project-toolbar-control project-desktop-refresh" type="button" aria-label="Refresh the project desktop" title="Refresh the project desktop"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 7v5h-5"></path><path d="M19 12a7 7 0 1 1-2-5l3 5"></path></svg></button>
              <span class="project-toolbar-spacer"></span>
              <a class="project-toolbar-control project-github-link" href="https://github.com/Dishti-ec" target="_blank" rel="noopener noreferrer" aria-label="Open Dishti's GitHub profile in a new tab" title="GitHub profile"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.24.93.1-.73.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.52 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.42.11-2.96 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.67.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.6 5.23-5.08 5.51.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .9Z"></path></svg></a>
              <a class="project-toolbar-control project-workshop-link" href="#/workshop/home" aria-label="Open the full Workshop" title="Open the full Workshop"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6"></path><path d="m20 4-9 9"></path><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"></path></svg></a>
            </nav>
            <span class="sr-only" data-project-carousel-status aria-live="polite">Showing ${projectDesktopWindow().map(project => escapeHtml(project.name)).join(', ')}</span>
            <div class="project-desktop-grid" data-project-carousel-grid>
              ${projectDesktopWindow().map((project, index) => projectDesktopFolder(project, index)).join('')}
            </div>
            <div class="project-desktop-footer">
              <span class="project-desktop-count" data-project-carousel-count>${String(projectCarouselIndex + 1).padStart(2, '0')} / ${String(featuredProjects().length).padStart(2, '0')}</span>
              <a class="project-desktop-enter" href="#/workshop/home">ENTER WORKSHOP <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        ${fieldNotesSection()}

        <section class="section" aria-labelledby="roles-title">
          <div class="section-heading"><h2 id="roles-title">Roles &amp; current work</h2><span class="section-index">06 / COMMUNITY</span></div>
          <div class="role-spread">
            <article class="role-card role-cloud"><div class="role-illustration" aria-hidden="true"><span class="role-star">✳</span><span class="role-orbit"></span><span class="role-planet"></span><span class="role-coordinate">AWS / BUILD</span></div><div class="role-copy"><span class="eyebrow">CLOUD · COMMUNITY · TECHNICAL LEADERSHIP</span><h3>AWS Student Builder Group</h3><p class="role">Technical Lead</p><p>Cloud learning, technical exploration and student building initiatives.</p><div class="role-tags"><span>Cloud</span><span>Learning</span><span>Community</span></div></div></article>
            <article class="role-card role-literature"><div class="role-illustration" aria-hidden="true"><span class="book-mark">Aa</span><span class="book-line"></span><span class="role-coordinate">WORDS / IDEAS</span><span class="book-star">✳</span></div><div class="role-copy"><span class="eyebrow">LITERATURE · LEADERSHIP · CREATIVITY</span><h3>University Literature Club</h3><p class="role">President</p><p>Literary initiatives, student participation and creative expression.</p><div class="role-tags"><span>Literature</span><span>Leadership</span><span>Community</span></div></div></article>
          </div>
        </section>

        <section class="section" aria-labelledby="worlds-title">
          <div class="section-heading"><h2 id="worlds-title">One identity, three worlds</h2><span class="section-index">07 / EXPLORE FURTHER</span></div>
          <div class="world-previews">
            <a class="preview-card" href="#/workshop">
              <div class="preview-top"><span>THE WORKSHOP · PROJECT ARCHIVE</span><span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span></div>
              <div class="preview-files"><div class="file-list"><span>⌄ DISHTI_WORKSPACE</span><span>　▸ 01_NexTerra</span><span>　▸ 02_CloudForge</span><span>　▸ 03_Carbon_Credits</span><span>　▸ 04_PRAVAHA</span><span>　▸ 05_Urvara</span></div><div class="mini-map" aria-hidden="true"></div></div>
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
          <div class="section-heading"><h2 id="choose-path-title">Choose your path</h2><span class="section-index">08 / YOUR NEXT STEP</span></div>
          <div class="choose-path-grid">
            <a class="path-card path-recruiter" href="#projects"><span class="eyebrow">FOR RECRUITERS</span><strong>Start with the work</strong><span>Selected projects and the professional archive</span><b>Explore projects →</b></a>
            <a class="path-card path-builder" href="#/workshop"><span class="eyebrow">FOR BUILDERS</span><strong>Open the Workshop</strong><span>Ideas, decisions and technical case studies</span><b>Explore the Workshop →</b></a>
            <a class="path-card path-reader" href="#/observatory"><span class="eyebrow">FOR CURIOUS READERS</span><strong>Enter the Observatory</strong><span>Moments, reflections and quiet experiments</span><b>Visit the Observatory →</b></a>
          </div>
        </section>

        <section class="section" id="contact" aria-labelledby="contact-title">
          <div class="contact-panel">
            <div class="contact-copy"><span class="eyebrow">09 / BACK COVER</span><h2 id="contact-title">Have something interesting in mind?</h2><p>For internships, collaborations, technical conversations or creative projects, I'd love to hear from you.</p><p class="muted-note">Contact details and a delivery service have not been supplied. This form will not claim to send a message; add a verified email address or configure a form endpoint to enable it.</p></div>
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

function projectFolderIcon(project) {
  const symbols = {
    nexterra: '<circle cx="64" cy="58" r="15"/><path d="M49 58h30M64 43c6 7 6 23 0 30M64 43c-6 7-6 23 0 30"/><circle cx="82" cy="48" r="3" fill="currentColor" stroke="none"/>',
    cloudforge: '<path d="M47 61a10 10 0 0 1 1-20 15 15 0 0 1 28 3 9 9 0 1 1 2 17H47Z"/><path d="M58 67h24m-20 5h16"/>',
    'carbon-credits': '<path d="M64 70c-20-2-26-18-22-31 16-2 29 7 29 24-1 4-3 6-7 7Z"/><path d="M54 51c8 5 13 11 15 19m2-5 5 5 9-12"/>',
    pravaha: '<path d="M78 48a17 17 0 0 0-28-4l-5 5m0 0 1-10m-1 10 10-1m-13 13a17 17 0 0 0 28 4l5-5m0 0-1 10m1-10-10 1"/>',
    urvara: '<path d="M64 73V48m0 14c-13 0-20-7-20-20 12 0 20 7 20 20Zm0-9c0-12 8-20 21-20 0 12-8 20-21 20Z"/>',
    trilogy: '<circle cx="54" cy="51" r="8"/><circle cx="74" cy="51" r="8"/><circle cx="64" cy="68" r="8"/><path d="m60 56 3 5m5-5-3 5m-3 4h4"/>',
    kanochi: '<path d="M64 40 81 47v12c0 11-7 18-17 23-10-5-17-12-17-23V47l17-7Z"/><path d="m56 60 6 6 11-13"/>',
    cognivault: '<circle cx="64" cy="56" r="5"/><circle cx="48" cy="45" r="4"/><circle cx="80" cy="44" r="4"/><circle cx="49" cy="69" r="4"/><circle cx="80" cy="69" r="4"/><path d="m52 48 8 6m8 0 8-7m-17 12-7 7m16-7 7 7"/>',
    'retra-038-suraksha': '<path d="M64 40 81 47v12c0 11-7 18-17 23-10-5-17-12-17-23V47l17-7Z"/><path d="M64 51v17m-8-8h16"/>'
  };
  return `<svg class="project-folder-icon" viewBox="0 0 128 108" aria-hidden="true" focusable="false">
    <path d="M10 26V17a5 5 0 0 1 5-5h31l11 12h56a5 5 0 0 1 5 5v8H10Z" fill="currentColor" opacity=".27" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M10 30a4 4 0 0 1 4-4h100a4 4 0 0 1 4 4v57a5 5 0 0 1-5 5H15a5 5 0 0 1-5-5Z" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.5"/>
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${symbols[project.slug] || symbols.nexterra}</g>
  </svg>`;
}

function workshopProjectCard(project) {
  const collection = project.featured ? 'FEATURED' : 'ARCHIVE';
  return `<a class="workspace-project-card project-${project.slug}" href="#/workshop/${project.slug}" data-project-card data-project-order="${project.order}" data-project-collection="${project.featured ? 'featured' : 'archive'}" data-project-category="${escapeHtml(project.category)}" data-project-domains="${escapeHtml(project.domains.join('|'))}" data-project-experimental="${project.experimental === true}" style="--project-accent:${project.accent};--project-deep:${project.deep};--project-soft:${project.soft}">
    <span class="workspace-project-number">${String(project.order).padStart(2, '0')} / ${collection}</span>
    <span class="workspace-project-art">${projectFolderIcon(project)}</span>
    <span class="workspace-project-identity">${escapeHtml(project.identity)}</span>
    <strong>${escapeHtml(project.name)}</strong>
    <span class="workspace-project-category">${escapeHtml(project.category)}</span>
    <span class="workspace-project-summary">${escapeHtml(project.tagline)}</span>
    <b>Open project <span aria-hidden="true">↗</span></b>
  </a>`;
}

function workshopDirectory() {
  const featured = featuredProjects();
  const archive = projects.filter(project => !project.featured).sort((a, b) => a.order - b.order);
  const domains = ['AI / ML', 'Cloud', 'Environment', 'Cybersecurity', 'Systems'];
  return `<section class="workspace-welcome">
    <div class="workspace-directory-intro">
      <span class="eyebrow">WORKSHOP / 01 PROJECT DIRECTORY</span>
      <h1>Things I've been building.</h1>
      <p>An evolving archive of ideas, experiments, engineered systems and things I couldn't resist building.</p>
      <span class="workspace-directory-count">09 PROJECTS <i>·</i> MULTIPLE DOMAINS <i>·</i> CONTINUOUSLY EVOLVING</span>
    </div>
    <div class="workspace-directory-toolbar">
      <div class="workspace-view-filters" role="group" aria-label="Filter project collection">
        <button type="button" data-project-view="all" aria-pressed="true">All projects <span>09</span></button>
        <button type="button" data-project-view="featured" aria-pressed="false">Featured <span>06</span></button>
      </div>
      <label class="workspace-search-wrap"><span class="workspace-search-label">Search projects</span><input class="workspace-search" id="workshop-search" type="search" placeholder="Search projects…" autocomplete="off"></label>
      <label class="workspace-sort-label" for="workspace-sort">Sort
        <select id="workspace-sort" data-project-sort><option value="featured">Featured order</option><option value="alphabetical">A–Z</option><option value="recently-updated" disabled>Recently updated · dates not supplied</option></select>
      </label>
    </div>
    <div class="workspace-domain-filters" role="group" aria-label="Filter projects by domain">
      <span>DOMAIN</span><button type="button" data-project-domain="all" aria-pressed="true">All</button>
      ${domains.map(domain => `<button type="button" data-project-domain="${escapeHtml(domain)}" aria-pressed="false">${escapeHtml(domain)}</button>`).join('')}
    </div>
    <div class="workspace-directory-options">
      <span data-project-results>09 projects</span>
      <div class="workspace-layout-toggle" role="group" aria-label="Project layout">
        <button type="button" data-project-layout="grid" aria-pressed="true">Folders</button>
        <button type="button" data-project-layout="explorer" aria-pressed="false">List</button>
      </div>
    </div>
    <section class="workspace-collection" data-project-collection-section="featured" aria-labelledby="featured-projects-title">
      <div class="workspace-collection-heading"><div><span class="eyebrow">COLLECTION A / PRIORITY PROJECTS</span><h2 id="featured-projects-title">Featured projects</h2></div><span>06 PROJECTS</span></div>
      <div class="workspace-project-grid">${featured.map(workshopProjectCard).join('')}</div>
    </section>
    <section class="workspace-collection workspace-archive-collection" data-project-collection-section="archive" aria-labelledby="archive-projects-title">
      <div class="workspace-collection-heading"><div><span class="eyebrow">COLLECTION B / ENGINEERING &amp; RESEARCH</span><h2 id="archive-projects-title">More experiments</h2></div><span>03 PROJECTS</span></div>
      <div class="workspace-project-grid">${archive.map(workshopProjectCard).join('')}</div>
      <p class="workspace-archive-note">Retra 038 and Suraksha remain one registry entry until their histories and differences are established.</p>
    </section>
    <p class="workspace-directory-empty" data-project-empty hidden>No projects match these filters. Try another search or domain.</p>
    <div class="workspace-legend"><span><i class="legend-proposed"></i>Project details to verify</span><span>END OF DIRECTORY — MORE EXPERIMENTS AHEAD.</span></div>
  </section>`;
}

function projectCover(project) {
  const modules = projectModules(project);
  const theme = projectThemes[project.theme];
  const related = (project.relatedProjects || []).map(slug => projects.find(item => item.slug === slug)).filter(Boolean);
  const projectLinks = [
    ['Website', project.links.website],
    ['Source', project.links.github],
    ['Prototype', project.links.prototype]
  ].map(([label, url]) => url
    ? `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`
    : `<span>${label}: Not supplied</span>`).join('');
  return `<section class="project-cover" style="--cover-accent:${theme.accent};--cover-deep:${theme.deep};--cover-soft:${theme.soft}">
    <div class="project-cover-identity">
      <span class="eyebrow">${escapeHtml(theme.identity)} / ${project.featured ? `FEATURED ${String(project.order).padStart(2, '0')}` : `ARCHIVE ${String(project.order - 6).padStart(2, '0')}`}</span>
      <span class="project-cover-status">${escapeHtml(project.status.toUpperCase())}</span>
    </div>
    <div class="project-cover-heading">
      <div><h2>${escapeHtml(project.name)}</h2><p class="project-cover-tagline">${escapeHtml(project.tagline)}</p><p class="project-cover-concept">${escapeHtml(project.concept)}</p></div>
      <div class="project-cover-art" role="img" aria-label="${escapeHtml(theme.identity)} conceptual visual, not a product screenshot">${projectArtwork(project.slug)}<span>CONCEPT COVER</span></div>
    </div>
    <div class="project-cover-facts">
      <div><span>DOMAIN</span><strong>${escapeHtml(project.category)}</strong></div>
      <div><span>PERSONAL CONTRIBUTION</span><strong>${escapeHtml(project.role || 'Not supplied')}</strong></div>
      <div><span>TECHNOLOGIES</span><strong>${escapeHtml(project.technologies.length ? project.technologies.join(', ') : 'Not supplied')}</strong></div>
      <div><span>COLLABORATORS / DURATION</span><strong>${escapeHtml(project.collaborators.length ? project.collaborators.join(', ') : 'Not supplied')}${project.duration ? ` / ${escapeHtml(project.duration)}` : ''}</strong></div>
    </div>
    <div class="project-links" aria-label="Project links"><span class="eyebrow">PROJECT LINKS</span>${projectLinks}</div>
    <section class="project-signature" aria-labelledby="project-signature-title">
      <span class="eyebrow">SIGNATURE INTERACTION / PLANNED CONCEPT</span>
      <h3 id="project-signature-title">${escapeHtml(project.signature)}</h3>
      <p>This interaction is a direction from the Workshop brief, not a functioning project demo. Its implementation and evidence have not been supplied.</p>
    </section>
    <div class="project-cover-documents">
      <span class="eyebrow">DOCUMENTATION MAP</span>
      <p>${project.sections.length} modular sections. Open a section in the explorer to see its purpose, expected files and any supplied portfolio outline.</p>
      <a href="#/workshop/${project.slug}/overview">Open project overview ↗</a>
    </div>
    ${related.length ? `<nav class="project-related" aria-label="Related projects"><span class="eyebrow">CONNECTED PROJECTS</span>${related.map(item => `<a href="#/workshop/${item.slug}">${escapeHtml(item.name)} ↗</a>`).join('')}</nav>` : ''}
  </section>`;
}

function projectModulePage(project, module) {
  const expectedFiles = module.files.map(file => `<li><code>${escapeHtml(file)}</code><span>Not supplied</span></li>`).join('');
  return `<section class="doc-section project-module-page">
    <div class="project-module-heading"><span class="eyebrow">${escapeHtml(module.folder)} / DOCUMENTATION MODULE</span><span class="project-module-status">${escapeHtml(module.status)}</span></div>
    <h2>${escapeHtml(module.title)}</h2>
    <p>${escapeHtml(module.purpose)}</p>
    ${module.content ? `<div class="project-source-note"><span class="eyebrow">PORTFOLIO OUTLINE / NOT SOURCE DOCUMENTATION</span><p>${escapeHtml(module.content)}</p></div>` : `<div class="project-missing-note"><strong>Documentation not supplied.</strong><p>This section is part of the shared Workshop structure. Its project-specific content should be added after the project source and supporting materials are reviewed.</p></div>`}
    <div class="project-document-list"><h3>Expected files <span>optional when not applicable</span></h3><ul>${expectedFiles}</ul><p>These are documentation targets, not files that currently exist in this portfolio.</p></div>
  </section>`;
}

function workshop(route) {
  const isWorkspaceHome = route.project === 'home';
  if (isWorkspaceHome) {
    return `${header('workshop')}
      <main id="main" class="workshop-directory-main">
        <div class="workshop-directory-topbar">
          <a class="workspace-brand" href="#/workshop/home"><span aria-hidden="true">⌑</span><span>DISHTI <i>/</i> WORKSHOP</span></a>
          <span class="directory-breadcrumb">WORKSHOP <i>/</i> DIRECTORY</span>
          <a class="workspace-return" href="#/">← Back to portfolio</a>
        </div>
        <div class="workshop-directory-content">${workshopDirectory()}</div>
      </main>
      ${footer('workshop')}`;
  }
  const project = projects.find(item => item.slug === route.project);
  if (!project || !workshopSession.openProjects.includes(project.slug)) return workshop({ mode: 'workshop', project: 'home', file: '' });
  const modules = project ? projectModules(project) : [];
  const selected = modules.find(module => module.slug === route.file) || modules.find(module => module.slug === (workshopSession.activeFiles[project.slug] || 'overview')) || modules[0];
  const activeTheme = projectThemes[project.theme];
  const body = route.file ? projectModulePage(project, selected) : projectCover(project);
  return `${header('workshop')}
    <main id="main" class="workshop-app-main">
      <div class="workshop-layout" style="--project-accent:${activeTheme.accent};--project-deep:${activeTheme.deep};--project-soft:${activeTheme.soft}">
        <div class="workspace-bar">
          <a class="workspace-brand" href="#/workshop/home"><span aria-hidden="true">⌑</span><span>DISHTI <i>/</i> WORKSHOP</span></a>
          <a class="workspace-selector" href="#/workshop/home">PROJECT DIRECTORY <span>↗</span></a>
          <button class="workspace-explorer-toggle" type="button" data-explorer-toggle aria-expanded="false" aria-controls="project-explorer">Explorer</button>
          <span class="workspace-current-path">WORKSHOP <i>/</i> ${escapeHtml(project.name.toUpperCase())} <i>/</i> ${escapeHtml(selected.title.toUpperCase())}</span>
          <a class="workspace-return" href="#/">← Archive</a>
        </div>
        <aside class="explorer" id="project-explorer" aria-label="Open project explorer">
          <div class="explorer-title">EXPLORER <span>${workshopSession.openProjects.length} OPEN</span></div>
          <div class="tree-root">⌄ OPEN PROJECTS</div>
          ${workshopSession.openProjects.map(slug => {
            const item = projects.find(candidate => candidate.slug === slug);
            if (!item) return '';
            const itemModules = projectModules(item);
            const activeFile = workshopSession.activeFiles[slug] || 'overview';
            const active = item.slug === project.slug;
            return `<div class="tree-project${active ? ' is-active' : ''}" data-project-tree="${item.slug}">
              <div class="tree-project-heading">
                <button class="tree-project-button project-${item.slug}" type="button" data-project="${item.slug}" style="--project-accent:${item.accent}" ${active ? 'aria-current="page"' : ''}>
                  <span class="tree-folder" aria-hidden="true">${projectFolderIcon(item)}</span><span>${escapeHtml(item.name)}</span>
                </button>
                <button class="tree-project-close" type="button" data-close-project="${item.slug}" aria-label="Close ${escapeHtml(item.name)}">×</button>
              </div>
              <div class="tree-children">
                ${itemModules.map(module => `<a class="tree-file tree-module-link" href="#/workshop/${item.slug}/${module.slug}" ${item.slug === project.slug && module.slug === selected.slug ? 'aria-current="true"' : ''}><span class="file-icon" aria-hidden="true">▤</span><span>${escapeHtml(module.folder)}</span></a>`).join('')}
              </div>
            </div>`;
          }).join('')}
          <a class="explorer-add-project" href="#/workshop/home">＋ Add project from directory</a>
          <div class="explorer-session-count">${workshopSession.openProjects.length} ${workshopSession.openProjects.length === 1 ? 'project' : 'projects'} in this workspace</div>
        </aside>
        <section class="editor" aria-label="${escapeHtml(project.name)} project workspace">
          <div class="editor-tabs">${workshopSession.openProjects.map(slug => {
            const item = projects.find(candidate => candidate.slug === slug);
            const file = projectModules(item).find(module => module.slug === (workshopSession.activeFiles[slug] || 'overview')) || projectModules(item)[0];
            return `<div class="editor-tab-wrap${item.slug === project.slug ? ' is-current' : ''}"><a class="editor-tab${item.slug === project.slug ? ' is-current' : ''}" href="#/workshop/${item.slug}/${file.slug}"><span aria-hidden="true">▤</span>${escapeHtml(item.name)} / ${escapeHtml(file.title)}</a><button type="button" data-close-project="${item.slug}" aria-label="Close ${escapeHtml(item.name)} tab">×</button></div>`;
          }).join('')}</div>
          <div class="editor-breadcrumb">WORKSHOP / ${escapeHtml(project.folder)} / ${escapeHtml(selected.folder)}</div>
          <article class="editor-content">
            <span class="eyebrow">${escapeHtml(project.category)} / ${escapeHtml(activeTheme.identity)}</span><h1>${escapeHtml(project.name)}</h1><p class="editor-lede">${escapeHtml(project.tagline)}</p>
            ${body}
            <a class="workshop-back" href="#/workshop/home">← Project directory</a>
          </article>
        </section>
        <aside class="doc-meta" aria-label="Project information">
          <h2>Project info</h2>
          <div class="meta-row"><span>Collection</span><strong>${project.featured ? `Featured · ${String(project.order).padStart(2, '0')} / 06` : `Archive · ${String(project.order - 6).padStart(2, '0')} / 03`}</strong></div>
          <div class="meta-row"><span>Project status</span><strong>Details to verify</strong></div>
          <div class="meta-row"><span>Documentation modules</span><strong>13</strong></div>
          <div class="meta-row"><span>Current section</span><strong>${escapeHtml(selected.title)}</strong></div>
          <div class="meta-row"><span>Source / demo</span><strong>Not supplied</strong></div>
          <div class="meta-row"><span>Working principle</span><strong>Evidence before claims</strong></div>
        </aside>
        <div class="workspace-status-bar"><span><i></i>WORKSPACE ACTIVE</span><span>${workshopSession.openProjects.length} OPEN PROJECTS</span><span>${escapeHtml(selected.folder)} · ${escapeHtml(selected.status)}</span></div>
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
  const fieldNote = publishedFieldNotes().find(item => item.id === route.fieldNote);
  document.documentElement.dataset.theme = theme;
  document.body.className = `${route.mode === 'field-notes-archive' ? 'archive' : route.mode}-page`;
  document.querySelector('meta[name="theme-color"]').content = route.mode === 'observatory' ? '#0c1422' : route.mode === 'workshop' ? '#171a21' : theme === 'dark' ? '#151b24' : '#f5f2ea';
  const title = route.mode === 'archive' ? 'Dishti Patel — The Archive' : route.mode === 'field-notes-archive' ? 'Field Notes — Dishti Patel' : route.mode === 'field-note' ? `Field Note: ${fieldNote?.title || 'Not found'} — Dishti Patel` : route.mode === 'workshop' ? `Dishti Patel — ${project?.name || 'The Workshop'}` : 'Dishti Patel — The Observatory';
  const description = route.mode === 'archive'
    ? 'Dishti Patel — Computer Science student, builder and curious mind. Explore the Archive, Workshop and Observatory.'
    : route.mode === 'field-notes-archive'
      ? 'A growing collection of Dishti Patel’s competitions, case studies, experiences and lessons learned.'
    : route.mode === 'field-note'
      ? `${fieldNote?.eventName || 'Field note'} — competition notes, evidence and reflections.`
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
  clearPolaroidShuffle();
  clearExplorationAnimation();
  clearProjectDesktopAnimation();
  clearFieldNotesAnimation();
  const route = getRoute();
  document.getElementById('app').innerHTML = route.mode === 'workshop' ? workshop(route) : route.mode === 'observatory' ? observatory() : route.mode === 'field-note' ? fieldNoteDetail(route) : route.mode === 'field-notes-archive' ? fieldNotesArchive() : archive();
  applyTheme();
  bindInteractions();
  setupObservatoryInteractions();
  setupPolaroidShuffle();
  setupExplorationAnimation();
  setupProjectDesktopAnimation();
  setupFieldNotesAnimation();
  if (route.anchor) requestAnimationFrame(() => document.getElementById(route.anchor)?.scrollIntoView());
  else if ((route.mode === 'archive' || route.mode === 'field-notes-archive') && sessionStorage.getItem('field-note-scroll')) {
    const position = Number(sessionStorage.getItem('field-note-scroll'));
    const focusedNote = sessionStorage.getItem('field-note-focus');
    sessionStorage.removeItem('field-note-scroll');
    sessionStorage.removeItem('field-note-focus');
    requestAnimationFrame(() => {
      window.scrollTo(0, position);
      const card = [...document.querySelectorAll('[data-field-note-link]')].find(item => item.dataset.fieldNoteLink === focusedNote);
      card?.focus({ preventScroll: true });
    });
  } else if (location.hash.startsWith('#/')) window.scrollTo(0, 0);
}

function clearExplorationAnimation() {
  explorationObserver?.disconnect();
  explorationObserver = null;
  explorationTween?.kill();
  explorationTween = null;
}

function setupExplorationAnimation() {
  const section = document.querySelector('.exploration-section');
  const gsap = window.gsap;
  if (!section || !gsap || typeof gsap.set !== 'function' || typeof gsap.to !== 'function' || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

  const targets = [...section.querySelectorAll('.section-heading, .exploration-intro, .exploration-item, .exploration-footer')];
  gsap.set(targets, { autoAlpha: 0, y: 12 });
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();
    if (explorationObserver === observer) explorationObserver = null;
    explorationTween = gsap.to(targets, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out' });
  });
  explorationObserver = observer;
  observer.observe(section);
}

function clearProjectDesktopAnimation() {
  projectDesktopObserver?.disconnect();
  projectDesktopObserver = null;
  projectDesktopTimeline?.kill();
  projectDesktopTimeline = null;
  projectCarouselAnimations.forEach(animation => animation.cancel());
  projectCarouselAnimations = [];
  projectCarouselAnimating = false;
}

function setupProjectDesktopAnimation() {
  const section = document.querySelector('.selected-work-section');
  const gsap = window.gsap;
  if (!section || !gsap || typeof gsap.set !== 'function' || typeof gsap.timeline !== 'function' || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

  const heading = section.querySelector('.section-heading');
  const desktop = section.querySelector('.project-desktop');
  const toolbar = section.querySelector('.project-desktop-toolbar');
  const folders = [...section.querySelectorAll('.project-folder')];
  const footer = section.querySelector('.project-desktop-footer');
  gsap.set(heading, { autoAlpha: 0, y: 14 });
  gsap.set(desktop, { autoAlpha: 0, scale: 0.985, transformOrigin: '50% 50%' });
  gsap.set([toolbar, ...folders, footer], { autoAlpha: 0, y: 14 });

  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();
    if (projectDesktopObserver === observer) projectDesktopObserver = null;
    projectCarouselAnimating = true;
    section.querySelectorAll('[data-project-carousel-step]').forEach(button => { button.disabled = true; });
    projectDesktopTimeline = gsap.timeline();
    projectDesktopTimeline
      .to(heading, { autoAlpha: 1, y: 0, duration: 0.42, ease: 'power2.out' })
      .to(desktop, { autoAlpha: 1, scale: 1, duration: 0.48, ease: 'power2.out' }, '-=0.16')
      .to(toolbar, { autoAlpha: 1, y: 0, duration: 0.34, ease: 'power2.out' }, '-=0.2')
      .to(folders, { autoAlpha: 1, y: 0, duration: 0.42, stagger: 0.12, ease: 'power2.out' }, '-=0.12')
      .to(footer, { autoAlpha: 1, y: 0, duration: 0.32, ease: 'power2.out' }, '-=0.16')
      .call(() => {
        projectCarouselAnimating = false;
        section.querySelectorAll('[data-project-carousel-step]').forEach(button => { button.disabled = false; });
      });
  }, { threshold: 0.12 });
  projectDesktopObserver = observer;
  observer.observe(section);
}

function clearFieldNotesAnimation() {
  fieldNotesObserver?.disconnect();
  fieldNotesObserver = null;
  fieldNotesTimeline?.kill();
  fieldNotesTimeline = null;
}

function setupFieldNotesAnimation() {
  const section = document.querySelector('.field-notes-section');
  const gsap = window.gsap;
  if (!section || !gsap || typeof gsap.set !== 'function' || typeof gsap.timeline !== 'function' || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

  const heading = section.querySelector('.section-heading');
  const intro = section.querySelector('.field-notes-intro');
  gsap.set([heading, intro], { autoAlpha: 0, y: 12 });

  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();
    if (fieldNotesObserver === observer) fieldNotesObserver = null;
    fieldNotesTimeline = gsap.to([heading, intro], { autoAlpha: 1, y: 0, duration: 0.42, stagger: 0.08, ease: 'power2.out' });
  }, { threshold: 0.12 });
  fieldNotesObserver = observer;
  observer.observe(section);
}

function clearPolaroidShuffle() {
  if (polaroidShuffleTimer) window.clearTimeout(polaroidShuffleTimer);
  if (polaroidTransitionTimer) window.clearTimeout(polaroidTransitionTimer);
  polaroidShuffleTimer = 0;
  polaroidTransitionTimer = 0;
  polaroidObserver?.disconnect();
  polaroidObserver = null;
  if (polaroidVisibilityHandler) document.removeEventListener('visibilitychange', polaroidVisibilityHandler);
  polaroidVisibilityHandler = null;
}

function setupPolaroidShuffle() {
  const stack = document.querySelector('[data-polaroid-stack]');
  if (!stack || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const note = stack.querySelector('[data-polaroid-note]');
  let isVisible = false;
  let entranceDirection = 'left';

  const scheduleShuffle = () => {
    if (polaroidShuffleTimer) window.clearTimeout(polaroidShuffleTimer);
    polaroidShuffleTimer = 0;
    if (!isVisible || document.hidden || polaroidTransitionTimer) return;
    polaroidShuffleTimer = window.setTimeout(shuffle, 3900);
  };

  const shuffle = () => {
    if (!isVisible || document.hidden) return;
    const cards = [...stack.querySelectorAll('.polaroid-card')];
    const outgoing = cards.find(card => card.dataset.position === '0');
    const incoming = cards.find(card => card.dataset.position === '1');
    if (!outgoing || !incoming) return;

    outgoing.dataset.shuffleDirection = entranceDirection === 'left' ? 'right' : 'left';
    incoming.dataset.shuffleDirection = entranceDirection;
    outgoing.classList.add('is-leaving');
    polaroidTransitionTimer = window.setTimeout(() => {
      polaroidTransitionTimer = 0;
      incoming.classList.add('is-entering');
      outgoing.classList.add('is-resetting');
      cards.forEach(card => {
        const position = Number(card.dataset.position);
        card.dataset.position = String(position === 0 ? cards.length - 1 : position - 1);
      });
      outgoing.classList.remove('is-leaving');
      if (note) note.textContent = incoming.dataset.note;
      entranceDirection = entranceDirection === 'left' ? 'right' : 'left';
      requestAnimationFrame(() => {
        outgoing.classList.remove('is-resetting');
        requestAnimationFrame(() => incoming.classList.remove('is-entering'));
      });
      scheduleShuffle();
    }, 760);
  };

  polaroidVisibilityHandler = scheduleShuffle;
  document.addEventListener('visibilitychange', polaroidVisibilityHandler);
  if ('IntersectionObserver' in window) {
    polaroidObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      scheduleShuffle();
    }, { threshold: 0.15 });
    polaroidObserver.observe(stack);
  } else {
    isVisible = true;
    scheduleShuffle();
  }
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
  document.querySelectorAll('[data-project-carousel-step]').forEach(button => {
    button.addEventListener('click', () => stepProjectCarousel(Number(button.dataset.projectCarouselStep)));
  });
  document.querySelectorAll('.tree-project-button').forEach(button => {
    button.addEventListener('click', () => {
      const projectId = button.dataset.project;
      const file = workshopSession.activeFiles[projectId] || 'overview';
      location.hash = `#/workshop/${projectId}/${file}`;
    });
  });
  document.querySelector('[data-explorer-toggle]')?.addEventListener('click', event => {
    const button = event.currentTarget;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    document.querySelector('.workshop-layout').classList.toggle('is-explorer-open', !expanded);
  });
  document.querySelectorAll('[data-close-project]').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      const projectId = button.dataset.closeProject;
      workshopSession.openProjects = workshopSession.openProjects.filter(id => id !== projectId);
      delete workshopSession.activeFiles[projectId];
      if (workshopSession.activeProject === projectId) {
        const nextProject = workshopSession.openProjects.at(-1);
        location.hash = nextProject
          ? `#/workshop/${nextProject}/${workshopSession.activeFiles[nextProject] || 'overview'}`
          : '#/workshop/home';
        return;
      }
      render();
    });
  });
  document.querySelector('.project-desktop-refresh')?.addEventListener('click', () => window.location.reload());
  document.querySelector('.field-note-filters')?.addEventListener('click', event => {
    const button = event.target.closest('[data-field-filter]');
    if (!button) return;
    activeFieldNoteFilter = button.dataset.fieldFilter;
    document.querySelectorAll('[data-field-filter]').forEach(filterButton => {
      filterButton.setAttribute('aria-pressed', String(filterButton === button));
    });
    const notes = filteredFieldNotes();
    const grid = document.querySelector('.field-note-grid');
    grid.innerHTML = notes.length
      ? notes.map(fieldNoteCard).join('')
      : '<p class="field-note-empty">No field notes in this category yet.</p>';
    document.querySelector('.field-note-count').textContent = `${notes.length} ${notes.length === 1 ? 'record' : 'records'}`;
  });
  const rememberFieldNoteReturn = event => {
    const link = event.target.closest('[data-field-note-link]');
    if (!link) return;
    sessionStorage.setItem('field-note-return', location.hash === '#/field-notes/archive' ? '#/field-notes/archive' : '#/');
    sessionStorage.setItem('field-note-scroll', String(window.scrollY));
    sessionStorage.setItem('field-note-focus', link.dataset.fieldNoteLink);
  };
  document.querySelector('.field-note-grid')?.addEventListener('click', rememberFieldNoteReturn);
  const clothesline = document.querySelector('.field-notes-clothesline');
  if (clothesline) {
    const motionToggle = document.querySelector('[data-carousel-toggle]');
    const motionStatus = document.querySelector('[data-carousel-status]');
    const setManualPause = paused => {
      clothesline.classList.toggle('is-manual', paused);
      motionToggle.setAttribute('aria-pressed', String(paused));
      motionToggle.textContent = paused ? 'Resume cards' : 'Pause cards';
      motionStatus.textContent = paused
        ? 'Paused · scroll to browse all eight memories'
        : 'Eight memories · gliding from right to left';
    };
    setManualPause(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    motionToggle.addEventListener('click', () => setManualPause(!clothesline.classList.contains('is-manual')));
    clothesline.addEventListener('focusin', event => {
      const memory = event.target.closest('[data-field-memory]');
      if (!memory) return;
      setManualPause(true);
      memory.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'auto' });
    });
    const setPreview = (memory, open) => {
      const panel = memory.querySelector('.field-memory-preview');
      const button = memory.querySelector('[data-memory-preview-toggle]');
      panel.hidden = !open;
      memory.classList.toggle('is-preview-open', open);
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? '− close' : '+ story';
    };
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(max-width: 700px)').matches;
    clothesline.addEventListener('pointerover', event => {
      if (!hasHover) return;
      const memory = event.target.closest('[data-field-memory]');
      if (memory && !(event.relatedTarget instanceof Node && memory.contains(event.relatedTarget))) setPreview(memory, true);
    });
    clothesline.addEventListener('pointerout', event => {
      if (!hasHover) return;
      const memory = event.target.closest('[data-field-memory]');
      if (memory && !(event.relatedTarget instanceof Node && memory.contains(event.relatedTarget)) && !memory.contains(document.activeElement) && memory.dataset.previewPinned !== 'true') setPreview(memory, false);
    });
    clothesline.addEventListener('focusin', event => {
      const memory = event.target.closest('[data-field-memory]');
      if (memory) setPreview(memory, true);
    });
    clothesline.addEventListener('focusout', event => {
      const memory = event.target.closest('[data-field-memory]');
      if (memory && !(event.relatedTarget instanceof Node && memory.contains(event.relatedTarget)) && memory.dataset.previewPinned !== 'true') setPreview(memory, false);
    });
    clothesline.addEventListener('click', event => {
      const previewButton = event.target.closest('[data-memory-preview-toggle]');
      if (previewButton) {
        const memory = previewButton.closest('[data-field-memory]');
        const open = memory.dataset.previewPinned !== 'true';
        memory.dataset.previewPinned = String(open);
        setPreview(memory, open);
        return;
      }
      rememberFieldNoteReturn(event);
    });
  }
  const lightbox = document.querySelector('.field-lightbox');
  if (lightbox) {
    const images = publishedFieldNotes().find(note => note.id === getRoute().fieldNote)?.gallery || [];
    let imageIndex = 0;
    const showImage = index => {
      imageIndex = (index + images.length) % images.length;
      const image = images[imageIndex];
      lightbox.querySelector('img').src = image.src;
      lightbox.querySelector('img').alt = image.alt || '';
      lightbox.querySelector('figcaption').textContent = image.caption || '';
    };
    document.querySelectorAll('[data-gallery-index]').forEach(button => {
      button.addEventListener('click', () => {
        showImage(Number(button.dataset.galleryIndex));
        lightbox.showModal();
        lightbox.querySelector('.field-lightbox-close').focus();
      });
    });
    lightbox.querySelector('.field-lightbox-close').addEventListener('click', () => lightbox.close());
    lightbox.querySelector('.field-lightbox-previous').addEventListener('click', () => showImage(imageIndex - 1));
    lightbox.querySelector('.field-lightbox-next').addEventListener('click', () => showImage(imageIndex + 1));
    lightbox.addEventListener('click', event => {
      if (event.target === lightbox) lightbox.close();
    });
    lightbox.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') showImage(imageIndex - 1);
      if (event.key === 'ArrowRight') showImage(imageIndex + 1);
    });
  }
  const hangingObject = document.querySelector('.archive-hanging');
  if (hangingObject && window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
    const wave = hangingObject.querySelector('feDisplacementMap');
    hangingObject.addEventListener('pointermove', event => {
      const rect = hangingObject.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height;
      hangingObject.style.setProperty('--hanging-rotation', `${(x * 4).toFixed(2)}deg`);
      hangingObject.style.setProperty('--hanging-shift', `${(x * 5).toFixed(2)}px`);
      wave.setAttribute('scale', String(5 + Math.round(Math.abs(x) * 13 + (1 - y) * 5)));
    });
    hangingObject.addEventListener('pointerleave', () => {
      hangingObject.style.removeProperty('--hanging-rotation');
      hangingObject.style.removeProperty('--hanging-shift');
      wave.setAttribute('scale', '0');
    });
  }
  const projectSearch = document.querySelector('.workspace-search');
  const projectDirectory = document.querySelector('.workspace-welcome');
  if (projectSearch) {
    let activeDomain = 'all';
    const applyProjectFilters = () => {
      const query = projectSearch.value.trim().toLowerCase();
      const activeView = document.querySelector('[data-project-view][aria-pressed="true"]')?.dataset.projectView || 'featured';
      let visibleCount = 0;
      document.querySelectorAll('[data-project-card]').forEach(card => {
        const matchesSearch = card.textContent.toLowerCase().includes(query);
        const matchesView = activeView === 'all'
          || activeView === card.dataset.projectCollection
          || (activeView === 'experimental' && card.dataset.projectExperimental === 'true');
        const matchesDomain = activeDomain === 'all' || card.dataset.projectDomains.split('|').includes(activeDomain);
        const visible = matchesSearch && matchesView && matchesDomain;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      document.querySelectorAll('[data-project-collection-section]').forEach(section => {
        section.hidden = !section.querySelector('[data-project-card]:not([hidden])');
      });
      document.querySelector('[data-project-empty]').hidden = visibleCount > 0;
      document.querySelector('[data-project-results]').textContent = `${String(visibleCount).padStart(2, '0')} ${visibleCount === 1 ? 'project' : 'projects'}`;
    };
    const sortCards = () => {
      const alphabetical = document.querySelector('[data-project-sort]').value === 'alphabetical';
      document.querySelectorAll('.workspace-project-grid').forEach(grid => {
        [...grid.querySelectorAll('[data-project-card]')]
          .sort((a, b) => alphabetical
            ? a.querySelector('strong').textContent.localeCompare(b.querySelector('strong').textContent)
            : Number(a.dataset.projectOrder) - Number(b.dataset.projectOrder))
          .forEach(card => grid.append(card));
      });
    };
    projectSearch.addEventListener('input', applyProjectFilters);
    document.querySelectorAll('[data-project-domain]').forEach(button => {
      button.addEventListener('click', () => {
        activeDomain = button.dataset.projectDomain;
        document.querySelectorAll('[data-project-domain]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        applyProjectFilters();
      });
    });
    document.querySelector('[data-project-sort]')?.addEventListener('change', sortCards);
    document.querySelectorAll('[data-project-view]').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('[data-project-view]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        applyProjectFilters();
      });
    });
    document.querySelectorAll('[data-project-layout]').forEach(button => {
      button.addEventListener('click', () => {
        const listView = button.dataset.projectLayout === 'explorer';
        projectDirectory.classList.toggle('is-file-explorer-view', listView);
        document.querySelectorAll('[data-project-layout]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      });
    });
    sortCards();
    applyProjectFilters();
  }
  document.querySelector('.contact-form')?.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const message = document.getElementById('form-message');
    message.textContent = 'Your message has not been sent: contact delivery is not configured. Please add a verified email address or connect a form service.';
  });
}

const initialRoute = getRoute();
if (initialRoute.mode === 'workshop' && initialRoute.project !== 'home') {
  history.replaceState(null, '', `${location.pathname}${location.search}#/workshop/home`);
}

let lastRoute = getRoute();

window.addEventListener('hashchange', () => {
  if (location.hash.startsWith('#/')) {
    const nextRoute = getRoute();
    if (lastRoute.mode === 'workshop' && nextRoute.mode !== 'workshop') resetWorkshopSession();
    if (nextRoute.mode === 'workshop' && nextRoute.project !== 'home') {
      const project = projects.find(item => item.slug === nextRoute.project);
      if (!project) {
        location.hash = '#/workshop/home';
        return;
      }
      if (!workshopSession.openProjects.includes(project.slug)) workshopSession.openProjects.push(project.slug);
      const modules = projectModules(project);
      const requestedFile = modules.find(module => module.slug === nextRoute.file)?.slug;
      workshopSession.activeFiles[project.slug] = requestedFile || workshopSession.activeFiles[project.slug] || 'overview';
      workshopSession.activeProject = project.slug;
    } else if (nextRoute.mode === 'workshop') {
      workshopSession.activeProject = null;
    }
    lastRoute = nextRoute;
    render();
    if (getRoute().mode === 'field-note') document.querySelector('.field-detail-heading h1')?.focus();
  }
  else document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
});

window.addEventListener('pageshow', event => {
  if (!event.persisted) return;
  resetWorkshopSession();
  if (getRoute().mode === 'workshop' && getRoute().project !== 'home') {
    history.replaceState(null, '', `${location.pathname}${location.search}#/workshop/home`);
  }
  lastRoute = getRoute();
  render();
});

render();
