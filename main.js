/* ═══════════════════════════════════════════════
   Hassan Mallah — Portfolio JS
   File: main.js
   ═══════════════════════════════════════════════ */

/* ── DATA ─────────────────────────────────────────── */
const SKILLS = [
  { name: 'Java',          icon: 'bi-cup-hot-fill',          pct: 85, color: 'text-info',    badge: 'bg-info bg-opacity-10 border-info' },
  { name: 'Spring Boot',   icon: 'bi-flower3',               pct: 72, color: 'text-success',  badge: 'bg-success bg-opacity-10 border-success' },
  { name: 'PostgreSQL',    icon: 'bi-database-fill',         pct: 70, color: 'text-primary',  badge: 'bg-primary bg-opacity-10 border-primary' },
  { name: 'Node.js',       icon: 'bi-hexagon-fill',          pct: 65, color: 'text-success',  badge: 'bg-success bg-opacity-10 border-success' },
  { name: 'HTML & CSS',    icon: 'bi-code-slash',            pct: 80, color: 'text-warning',  badge: 'bg-warning bg-opacity-10 border-warning' },
  { name: 'Bootstrap',     icon: 'bi-bootstrap-fill',        pct: 82, color: 'text-light',    badge: 'bg-secondary bg-opacity-25 border-secondary' },
  { name: 'Git & GitHub',  icon: 'bi-git',                   pct: 70, color: 'text-danger',   badge: 'bg-danger bg-opacity-10 border-danger' },
  { name: 'Maven',         icon: 'bi-box-seam-fill',         pct: 65, color: 'text-danger',   badge: 'bg-danger bg-opacity-10 border-danger' },
  { name: 'JavaScript',    icon: 'bi-lightning-charge-fill', pct: 62, color: 'text-warning',  badge: 'bg-warning bg-opacity-10 border-warning' },
  { name: 'Microservices', icon: 'bi-layout-split',          pct: 45, color: 'text-secondary',badge: 'bg-secondary bg-opacity-10 border-secondary' },
  { name: 'OOP Design',    icon: 'bi-diagram-3-fill',        pct: 88, color: 'text-info',     badge: 'bg-info bg-opacity-10 border-info' },
  { name: 'Docker',        icon: 'devicon-docker-plain',     pct: 55, color: 'text-info',  badge: 'bg-info bg-opacity-10 border-info' },
];

const CURRICULUM = [
  { step:'01', text:'Core Java & OOP Fundamentals',   done: true  },
  { step:'02', text:'Data Structures & Algorithms',   done: true  },
  { step:'03', text:'JDBC & Database Connectivity',   done: true  },
  { step:'04', text:'Servlets & Web Basics',          done: true  },
  { step:'05', text:'Spring Core & Spring MVC',       done: true  },
  { step:'06', text:'Spring Boot & REST APIs',        done: true },
  { step:'07', text:'Spring Data JPA / Hibernate',    done: false },
  { step:'08', text:'Microservices Architecture',     done: false },
];

const TICKER_ITEMS = [
  { label: 'khaato-backend',            note: 'Spring Boot microservices — active' },
  { label: 'Sindh-Uni-Notes',             note: 'Digitizing knowledge into structured platform. — active' },
  { label: 'Sindh Uni Notes',           note: 'teaching 20+ junior students' },
  { label: 'Doctor Booking System',     note: 'Node.js full-stack — completed' },
  { label: 'Learning Microservices',    note: 'structured 8-topic curriculum' },
  { label: 'Open to Germany',           note: 'Master\'s or direct job — 2026' },
  { label: 'PostgreSQL on MacBook M1',  note: 'local dev stack — fully configured' },
];

const TYPING_ROLES = [
  'Java Developer',
  'Spring Boot Engineer',
  'CS Student @ Sindh Uni',
  'Teaching 20+ Students',
  'Open to Opportunities 🌍',
];

/* ── BOOT SEQUENCE ────────────────────────────────── */
(function bootSequence() {
  const lines = [
    { t: 0,    html: '<span class="dim">$ </span><span class="prompt">./initialize</span> hassan.portfolio' },
    { t: 400,  html: '> Loading profile...' },
    { t: 750,  html: '> Name:        <span class="hi">Hassan Mallah</span>' },
    { t: 950,  html: '> Role:        <span class="hi">Java Developer · Spring Boot</span>' },
    { t: 1150, html: '> University:  <span class="hi">Sindh University, Hyderabad</span>' },
    { t: 1550, html: '> Projects:    <span class="hi">3 active</span>' },
    { t: 1750, html: '> Teaching:    <span class="hi">20+ students</span>' },
    { t: 2200, html: '<span class="dim">────────────────────────────────</span>' },
    { t: 2400, html: '> <span class="hi">✓ All systems ready. Launching portfolio...</span>' },
  ];

  const container = document.getElementById('boot-lines');

  lines.forEach(({ t, html }) => {
    setTimeout(() => {
      const line = document.createElement('div');
      line.innerHTML = html;
      line.style.marginBottom = '4px';
      container.appendChild(line);
    }, t);
  });

  // Hide boot screen
  setTimeout(() => {
    const screen = document.getElementById('boot-screen');
    screen.style.transition = 'opacity .6s ease';
    screen.style.opacity = '0';
    setTimeout(() => {
      screen.style.display = 'none';
      document.getElementById('main-nav').classList.add('visible');
      buildSkillsGrid();
      buildCurriculum();
      buildTicker();
      startTyping();
      buildGitHubGraph();
      buildRepoCards();
      initAnimations();
    }, 620);
  }, 3000);
})();

/* ── SKILLS GRID  (B's exact version) ────────────── */
function buildSkillsGrid() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = SKILLS
    .map(s => `
      <div class="col-6 col-md-4 col-lg-3 fade-up">
        <div class="card bg-dark border-secondary border-opacity-50 p-3 card-hover-glow h-100">
          <div class="d-flex align-items-center gap-3 mb-3">
            <div class="rounded-2 d-flex align-items-center justify-content-center flex-shrink-0 border ${s.badge}"
                 style="width:42px;height:42px;">
              <i class="${resolveSkillIconClass(s.icon)} ${s.color} fs-5"></i>
            </div>
            <div>
              <div class="fw-bold" style="font-size:.9rem;color:var(--text);">${s.name}</div>
              <div class="font-mono" style="font-size:.68rem;color:var(--muted);">${s.pct}%</div>
            </div>
          </div>
          <div class="progress bg-secondary bg-opacity-25" style="height:3px;border-radius:2px;">
            <div class="progress-bar skill-bar-anim"
                 data-pct="${s.pct}"
                 style="width:0%; background:var(--bs-info); transition:width 1.3s ease; border-radius:2px;"></div>
          </div>
        </div>
      </div>`)
    .join('');

  /* Animate bars when visible */
  const bars = document.querySelectorAll('.skill-bar-anim');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.pct + '%';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => obs.observe(b));
}

function resolveSkillIconClass(icon) {
  return icon.includes(' ') || icon.startsWith('devicon-') ? icon : `bi ${icon}`;
}

/* ── CURRICULUM ───────────────────────────────────── */
function buildCurriculum() {
  const list = document.getElementById('curriculum-list');
  CURRICULUM.forEach(c => {
    const div = document.createElement('div');
    div.className = 'curriculum-item';
    div.innerHTML = `
      <span class="curr-num">${c.step}</span>
      <span class="${c.done ? 'curr-done' : 'curr-pending'}">
        ${c.done ? '✓' : '○'} ${c.text}
      </span>`;
    list.appendChild(div);
  });
}

/* ── TICKER ───────────────────────────────────────── */
function buildTicker() {
  const track = document.getElementById('tickerTrack');
  // duplicate for seamless loop
  const all = [...TICKER_ITEMS, ...TICKER_ITEMS];
  all.forEach(item => {
    const span = document.createElement('span');
    span.className = 'ticker-item';
    span.innerHTML = `<span class="dot"></span><span class="label">${item.label}</span><span style="color:var(--muted)"> — ${item.note}</span>`;
    track.appendChild(span);
  });
}

/* ── TYPING EFFECT ────────────────────────────────── */
function startTyping() {
  const el     = document.getElementById('typing-role');
  const cursor = document.getElementById('typing-cursor');
  let ri = 0, ci = 0, deleting = false;

  cursor.style.animation = 'blink .7s step-end infinite';

  function tick() {
    const role = TYPING_ROLES[ri];
    if (!deleting) {
      ci++;
      el.textContent = role.slice(0, ci);
      if (ci === role.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
      setTimeout(tick, 70);
    } else {
      ci--;
      el.textContent = role.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % TYPING_ROLES.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, 35);
    }
  }
  setTimeout(tick, 400);
}

/* ── INTERSECTION OBSERVER ────────────────────────── */
function initAnimations() {
  // Fade up elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Skill bars — animate width when visible
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.pct + '%';
        barObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-bar').forEach(bar => barObserver.observe(bar));
}

/* ── NAVBAR SCROLL HIGHLIGHT ──────────────────────── */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#main-nav .nav-link:not(.hire-btn)');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === '#' + current
        ? 'var(--accent)'
        : '';
    });
  }, { passive: true });
}

/* ── GITHUB GRAPH  (B's exact function) ──────────── */
const GH_REPOS = [
  { name: 'khaato-backend',  lang: 'Java',  stars: 2, desc: 'Spring Boot microservices backend' },
  { name: 'sindhuninotes',   lang: 'Java',  stars: 1, desc: 'Teaching resources for CS juniors' },
  { name: 'portfolio',       lang: 'HTML',  stars: 1, desc: 'Personal developer portfolio' },
];

function buildGitHubGraph() {
  const graph = document.getElementById('ghGraph');
  if (!graph) return;
  const WEEKS = 52, DAYS = 7;
  const levels = [
    'bg-secondary bg-opacity-25',
    'bg-success bg-opacity-25',
    'bg-success bg-opacity-50',
    'bg-success bg-opacity-75',
    'bg-success',
  ];
  const seed = [];
  for (let w = 0; w < WEEKS; w++) {
    for (let d = 0; d < DAYS; d++) {
      const recency = w / WEEKS;
      const rand = Math.random();
      let lvl = 0;
      if (rand > .55) lvl = 1;
      if (rand > .7 && recency > .3) lvl = 2;
      if (rand > .82 && recency > .5) lvl = 3;
      if (rand > .92 && recency > .7) lvl = 4;
      seed.push(lvl);
    }
  }
  graph.innerHTML = seed
    .map(lvl => `<div class="gh-cell rounded-1 flex-shrink-0 ${levels[lvl]}" style="width:11px;height:11px;" title="Contributions"></div>`)
    .join('');
}

/* ── REPO CARDS  (B's exact function) ────────────── */
function buildRepoCards() {
  const el = document.getElementById('repoCards');
  if (!el) return;
  el.innerHTML = GH_REPOS
    .map(r => `
      <div class="col-md-4">
        <div class="card bg-black border-secondary border-opacity-50 p-3 card-hover-glow h-100">
          <div class="d-flex align-items-center gap-2 mb-2">
            <i class="bi bi-book text-secondary"></i>
            <span class="fw-bold text-info font-mono" style="font-size:.85rem;">${r.name}</span>
          </div>
          <p class="text-secondary mb-3" style="font-size:.8rem;">${r.desc}</p>
          <div class="d-flex align-items-center gap-3 mt-auto">
            <span class="d-flex align-items-center gap-1 text-secondary font-mono" style="font-size:.72rem;">
              <span class="rounded-circle d-inline-block" style="width:8px;height:8px;background:${r.lang === 'Java' ? '#b07219' : r.lang === 'HTML' ? '#e34c26' : '#f1e05a'};"></span>
              ${r.lang}
            </span>
            <span class="d-flex align-items-center gap-1 text-secondary font-mono" style="font-size:.72rem;">
              <i class="bi bi-star"></i> ${r.stars}
            </span>
          </div>
        </div>
      </div>`)
    .join('');
}

/* ── CONTACT FORM ─────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitButton = document.getElementById('contact-submit');
  const status = document.getElementById('contact-status');

  function setStatus(message, tone) {
    status.textContent = message;
    status.classList.remove('text-secondary', 'text-success', 'text-danger', 'text-warning');
    status.classList.add(tone);
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      setStatus('Please complete all required fields first.', 'text-warning');
      return;
    }

    const formData = new FormData(form);
    formData.set('name', String(formData.get('name') || '').trim());
    formData.set('email', String(formData.get('email') || '').trim());
    formData.set('message', String(formData.get('message') || '').trim());

    const payload = Object.fromEntries(formData.entries());

    submitButton.disabled = true;
    setStatus('Sending your message...', 'text-secondary');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Unable to send your message right now.');
      }

      form.reset();
      setStatus('Message sent successfully. I will get back to you soon.', 'text-success');
    } catch (error) {
      setStatus(error.message || 'Something went wrong while sending the message.', 'text-danger');
    } finally {
      submitButton.disabled = false;
    }
  });
}

/* ── INIT ─────────────────────────────────────────── */
initNavHighlight();
initContactForm();
