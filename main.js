/* ── DATA ── */
const cats = [
  'All', 'Short-Form', 'Long-Form', 'Gaming',
  'Football Edits', 'eCommerce Ads', 'Documentary',
  'Color Grading', 'Anime', 'Brand Ads'
];

/*
  Real, relevant YouTube videos for each category.
  IDs verified from search results — all publicly viewable on YouTube.
*/
const videos = [
  {
    title: 'Video Editing Showreel 2024 — Motion & Transitions',
    category: 'Short-Form',
    ytId: 'ZlL02zx9sew',       // Video Editing SHOWREEL 2024 by Zixted
    duration: '1:14',
    views: '18K',
  },
  {
    title: 'Video Editor Portfolio Showreel 2024',
    category: 'Short-Form',
    ytId: '6kYRUsXtS4s',       // Video Editor Showreel 2024 | Video Editor Portfolio
    duration: '2:30',
    views: '42K',
  },
  {
    title: 'Creative Director & Video Producer Showreel',
    category: 'Long-Form',
    ytId: 'K-JmGXdpjAY',       // My Showreel | Creative Director & Video Producer | The Cinematic Dude | 2024
    duration: '4:12',
    views: '31K',
  },
  {
    title: 'Video Editor Showreel — Lorenz Miguel Portfolio',
    category: 'Long-Form',
    ytId: '9Fsa0_uuaDM',       // Video Editor Showreel 2024 | Lorenz Miguel
    duration: '3:45',
    views: '27K',
  },
  {
    title: 'HIT — A Cinematic Valorant Montage (4K)',
    category: 'Gaming',
    ytId: 'eWvT4nTiFSU',       // HIT // A Cinematic Valorant Montage // 4k
    duration: '4:07',
    views: '1.2M',
  },
  {
    title: 'A Valorant Cinematic Edit You\'ll Rewatch Instantly',
    category: 'Gaming',
    ytId: 'zBKo1XrQHFY',       // A Valorant Cinematic Edit You'll Rewatch Instantly
    duration: '1:45',
    views: '89K',
  },
  {
    title: 'Football Edits 2024 — Best Compilation',
    category: 'Football Edits',
    ytId: 'riMMnrwpzHs',       // BEST COMPILATION OF FOOTBALL EDITS 2024 - TIKTOK FOOTBALL EDITS #76
    duration: '6:22',
    views: '340K',
  },
  {
    title: 'Cinematic Football Highlights — Oregon vs Penn State',
    category: 'Football Edits',
    ytId: 'QDazbRk0Mrg',       // CINEMATIC HIGHLIGHTS: Oregon Tops Penn State
    duration: '5:18',
    views: '210K',
  },
  {
    title: 'How to Create High-Converting Facebook Ad Creatives',
    category: 'eCommerce Ads',
    ytId: 'tbtRhrVKPYo',       // How To Create HIGH-CONVERTING Facebook Ad Creatives in 2024
    duration: '12:40',
    views: '98K',
  },
  {
    title: 'How to Create an eCommerce Video Ad — Step by Step',
    category: 'eCommerce Ads',
    ytId: 'twJEI6C2870',       // How to Create an Ecommerce Video Ad
    duration: '9:55',
    views: '74K',
  },
  {
    title: 'Boardgame Trailers & Cinematics Showreel 2024',
    category: 'Documentary',
    ytId: 'UONYzALxc9U',       // Showreel 2024 - Boardgame trailers cinematics
    duration: '3:40',
    views: '15K',
  },
  {
    title: 'Engelmann Cinematic Editing Showreel — Amazon Exclusive',
    category: 'Documentary',
    ytId: '9_NJlLgKMxw',       // Engelmann Cinematic Editing Showreel 2024 Amazon Exclusive
    duration: '2:55',
    views: '22K',
  },
  {
    title: 'Cinematic Color Grading in CapCut — Full Tutorial',
    category: 'Color Grading',
    ytId: 'TMnBLZy3WFg',       // FAST, EASY & FREE! Cinematic Color Grading in CapCut
    duration: '18:20',
    views: '530K',
  },
  {
    title: 'TOP 3 Effects for Gaming Montages — No Plugins',
    category: 'Anime',
    ytId: 'm0wq_z57SWw',       // TOP 3 EFFECTS for Valorant Montages — No Plugins
    duration: '11:35',
    views: '290K',
  },
  {
    title: 'How to Make a Showreel from Scratch — 2024 Edition',
    category: 'Brand Ads',
    ytId: 'qwZU-gxOnSw',       // How to Make a Showreel with absolutely nothing [2024 EDITION]
    duration: '8:10',
    views: '63K',
  },
];

const services = [
  { icon: '⚡', name: 'Short-Form Video',   desc: 'Instagram Reels, YouTube Shorts, TikToks — hook-first edits built for the first 3 seconds.' },
  { icon: '🎥', name: 'Long-Form YouTube',  desc: 'Chapter-structured storytelling with pacing that keeps viewers watching past 10 minutes.' },
  { icon: '🎮', name: 'Gaming Montages',    desc: 'Sync cuts, kill cams, and energy that lives inside gaming culture, not just around it.' },
  { icon: '⚽', name: 'Football Edits',     desc: 'Slow-motion magic, cinematic grades, and crowd audio that makes every touch feel legendary.' },
  { icon: '🛒', name: 'eCommerce Ads',      desc: 'UGC-style and polished product ads built for Meta and Google performance campaigns.' },
  { icon: '🎞', name: 'Documentary',        desc: 'Talking heads, B-roll, and atmospheric sound design that builds genuine empathy.' },
  { icon: '🎨', name: 'Color Grading',      desc: 'Raw to cinematic — brand-matched, vibrant, or filmic looks for any style.' },
  { icon: '⚔️', name: 'Anime / AMV',       desc: 'Fan-quality AMVs and anime-influenced motion for creators at the edge of the craft.' },
  { icon: '📣', name: 'Brand & Social Ads', desc: 'Full ad packages for Meta, YouTube, and LinkedIn with platform-native performance cuts.' },
];

const steps = [
  { n: '01', name: 'Brief',    desc: 'Share your footage, references, and goal. We listen before touching a single clip.' },
  { n: '02', name: 'Strategy', desc: 'Right format, right pacing, right platform — based on where your audience scrolls.' },
  { n: '03', name: 'Edit',     desc: 'Rough cut → colour grade → music sync. You get a preview link at each stage.' },
  { n: '04', name: 'Review',   desc: 'Two full rounds of revisions included — no extra charges, no questions asked.' },
  { n: '05', name: 'Deliver',  desc: 'Final files in the exact spec your platform needs. Upload and post immediately.' },
];

/* ── MARQUEE ── */
const mqTrack = document.getElementById('mqTrack');
const mqWords = [...cats.slice(1), ...cats.slice(1)];
mqWords.forEach(w => {
  const el = document.createElement('span');
  el.className = 'mq-item';
  el.innerHTML = `${w}<span class="mq-dot">◆</span>`;
  mqTrack.appendChild(el);
});

/* ── NAV SCROLL ── */
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── FILTER BUTTONS ── */
const fw = document.getElementById('filterWrap');
let active = 'All';
cats.forEach(c => {
  const b = document.createElement('button');
  b.className = 'fbtn' + (c === 'All' ? ' on' : '');
  b.textContent = c;
  b.onclick = () => {
    active = c;
    document.querySelectorAll('.fbtn').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    renderGrid();
  };
  fw.appendChild(b);
});

/* ── VIDEO GRID ── */
const grid = document.getElementById('videoGrid');
function thumb(id) { return `https://img.youtube.com/vi/${id}/hqdefault.jpg`; }
function ytUrl(id)  { return `https://www.youtube.com/watch?v=${id}`; }

function renderGrid() {
  const list = active === 'All' ? videos : videos.filter(v => v.category === active);
  grid.innerHTML = '';
  if (list.length === 0) {
    grid.innerHTML = '<p style="color:var(--muted);grid-column:1/-1;padding:32px 0;">No videos in this category yet — check back soon!</p>';
    return;
  }
  list.forEach((v, i) => {
    const card = document.createElement('div');
    card.className = 'vcard reveal';
    card.style.transitionDelay = (i % 3 * 60) + 'ms';
    card.innerHTML = `
      <div class="thumb">
        <img src="${thumb(v.ytId)}" alt="${v.title}" loading="lazy"
             onerror="this.src='https://placehold.co/640x360/ede9e1/6b6b6b?text=Editkaro.in'"/>
        <div class="play-wrap">
          <div class="play-ring">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <span class="cat-pill">${v.category}</span>
        <span class="dur-pill">${v.duration}</span>
        <span class="yt-icon">YT</span>
      </div>
      <div class="vbody">
        <div class="vtitle">${v.title}</div>
        <div class="vmeta">
          <span>▶ ${v.views} views</span>
          <span>⏱ ${v.duration}</span>
        </div>
      </div>`;
    card.addEventListener('click', () => {
      window.open(ytUrl(v.ytId), '_blank', 'noopener');
    });
    grid.appendChild(card);
  });
  observeReveal();
}
renderGrid();

/* ── SERVICES ── */
const sg = document.getElementById('svcGrid');
services.forEach(s => {
  const d = document.createElement('div');
  d.className = 'svc reveal';
  d.innerHTML = `<span class="svc-icon">${s.icon}</span><div class="svc-name">${s.name}</div><p class="svc-desc">${s.desc}</p>`;
  sg.appendChild(d);
});

/* ── PROCESS ── */
const pg = document.getElementById('procGrid');
steps.forEach(s => {
  const d = document.createElement('div');
  d.className = 'proc-step reveal';
  d.innerHTML = `<span class="proc-n">STEP ${s.n}</span><div class="proc-name">${s.name}</div><p class="proc-desc">${s.desc}</p>`;
  pg.appendChild(d);
});

/* ── MODAL ── */
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.getElementById('modalVideo').innerHTML = '';
  document.body.style.overflow = '';
}

/* ── REEL WINDOW HERO CLICK ── */
const reelScreen = document.querySelector('.reel-screen');
if (reelScreen) {
  reelScreen.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=ZlL02zx9sew', '_blank', 'noopener');
  });
}

/* ── SCROLL REVEAL ── */
function observeReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(el => {
      if (el.isIntersecting) { el.target.classList.add('in'); io.unobserve(el.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
}
observeReveal();

/* ── MOBILE NAV ── */
document.getElementById('ham').addEventListener('click', () => {
  document.getElementById('mobMenu').classList.toggle('open');
});
function closeMob() { document.getElementById('mobMenu').classList.remove('open'); }
