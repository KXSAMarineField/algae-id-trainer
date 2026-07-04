/* ===========================================================
   BC Algae ID Trainer — app logic
   =========================================================== */

// ---------- Data prep ----------
const SPECIES = ALGAE_DATA.species.map(s => ({
  id: 'sp' + s.num,
  num: s.num,
  code: s.code,
  name: s.name,
  commonName: s.commonName || null,
  commonNameUncertain: !!s.commonNameUncertain,
  category: s.category,
  layer: s.layer,
  facts: s.facts,
  confuse: s.confuse,
  images: s.images || [],
  isGeneral: false
}));

const GENERAL = ALGAE_DATA.generalCodes.map((g, i) => ({
  id: 'gc' + i,
  num: 1000 + i,
  code: g.code,
  name: g.name,
  category: 'General Codes',
  layer: '',
  facts: [g.desc],
  confuse: null,
  images: [],
  isGeneral: true
}));

const ALL_ITEMS = SPECIES.concat(GENERAL);

// ---------- Local storage (best-effort, falls back silently) ----------
const Store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem('algaeGame_' + key);
      return v === null ? fallback : JSON.parse(v);
    } catch (e) { return fallback; }
  },
  set(key, val) {
    try { localStorage.setItem('algaeGame_' + key, JSON.stringify(val)); } catch (e) {}
  }
};

// ---------- Helpers ----------
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickN(arr, n) {
  return shuffle(arr).slice(0, n);
}

function getCategory() {
  return document.getElementById('category-select').value;
}

function filteredPool(requireImage) {
  const cat = getCategory();
  let pool = cat === 'All' ? ALL_ITEMS : ALL_ITEMS.filter(i => i.category === cat);
  if (requireImage) pool = pool.filter(i => i.images.length > 0);
  return pool;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ---------- Home screen ----------
function renderHomeStats() {
  const played = Store.get('gamesPlayed', 0);
  const bestIid = Store.get('bestImageIdScore', 0);
  const el = document.getElementById('home-stats');
  el.innerHTML = `
    <span>🎮 Sessions played: ${played}</span>
    <span>🏆 Best ID Challenge score: ${bestIid}</span>
  `;
}
renderHomeStats();

document.querySelectorAll('.mode-card').forEach(card => {
  card.addEventListener('click', () => {
    const mode = card.dataset.mode;
    if (mode === 'image-id') startImageId();
    else if (mode === 'browse') startBrowse();
  });
});

document.querySelectorAll('[data-back]').forEach(btn => {
  btn.addEventListener('click', () => {
    renderHomeStats();
    showScreen('screen-home');
  });
});

/* ===========================================================
   SPECIES DETAIL POPUP
   =========================================================== */
function showSpeciesModal(item) {
  const photoWrap = document.getElementById('modal-photo-wrap');
  const photo = document.getElementById('modal-photo');
  if (item.images && item.images.length) {
    photo.src = item.images[0];
    photo.alt = item.name;
    photoWrap.classList.remove('hidden');
  } else {
    photo.removeAttribute('src');
    photoWrap.classList.add('hidden');
  }

  document.getElementById('modal-code').textContent = item.code;

  const commonEl = document.getElementById('modal-common');
  if (item.commonName) {
    commonEl.textContent = item.commonName + (item.commonNameUncertain ? '*' : '');
    commonEl.classList.remove('hidden');
  } else {
    commonEl.textContent = '';
    commonEl.classList.add('hidden');
  }

  document.getElementById('modal-sciname').textContent = item.name;
  document.getElementById('modal-meta').textContent = item.category + (item.layer ? ' · ' + item.layer : '');

  const factsEl = document.getElementById('modal-facts');
  factsEl.innerHTML = '';
  (item.facts || []).forEach(f => {
    const li = document.createElement('li');
    li.textContent = f;
    factsEl.appendChild(li);
  });

  const confuseEl = document.getElementById('modal-confuse');
  confuseEl.textContent = item.confuse ? `⚠ Don't confuse with: ${item.confuse}` : '';

  document.getElementById('species-modal').classList.remove('hidden');
}

function hideSpeciesModal() {
  document.getElementById('species-modal').classList.add('hidden');
}

document.getElementById('modal-close').addEventListener('click', hideSpeciesModal);
document.getElementById('modal-continue').addEventListener('click', hideSpeciesModal);
document.getElementById('species-modal').addEventListener('click', (e) => {
  if (e.target.id === 'species-modal') hideSpeciesModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideSpeciesModal();
});

/* ===========================================================
   IMAGE ID CHALLENGE
   =========================================================== */
let iidState = null;

function startImageId() {
  hideSpeciesModal();
  const pool = filteredPool(true);
  if (pool.length < 1) {
    alert('No photo-based codes in this category. Try "All species" or Browse mode instead.');
    return;
  }
  const qcount = Math.min(15, pool.length);
  iidState = {
    questions: pickN(pool, qcount),
    qIndex: 0,
    score: 0,
    streak: 0,
    answered: false
  };
  document.getElementById('iid-qtotal').textContent = qcount;
  document.getElementById('iid-quiz-body').classList.remove('hidden');
  document.getElementById('iid-results').classList.add('hidden');
  showScreen('screen-image-id');
  renderIidQuestion();
}

function renderIidQuestion() {
  hideSpeciesModal();
  const st = iidState;
  const item = st.questions[st.qIndex];
  document.getElementById('iid-qnum').textContent = st.qIndex + 1;
  document.getElementById('iid-score').textContent = st.score;
  document.getElementById('iid-streak').textContent = st.streak;
  document.getElementById('iid-photo').src = item.images[0];
  document.getElementById('iid-photo').alt = item.name;
  document.getElementById('iid-feedback').textContent = '';
  document.getElementById('iid-feedback').className = 'feedback';
  document.getElementById('iid-next').classList.add('hidden');
  st.answered = false;

  // build options: 1 correct + 3 distractors, prefer same category
  const sameCat = ALL_ITEMS.filter(i => i.category === item.category && i.code !== item.code);
  const otherCat = ALL_ITEMS.filter(i => i.category !== item.category && i.code !== item.code);
  let distractors = pickN(sameCat, 3);
  if (distractors.length < 3) {
    distractors = distractors.concat(pickN(otherCat, 3 - distractors.length));
  }
  const options = shuffle([item, ...distractors]);

  const optWrap = document.getElementById('iid-options');
  optWrap.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    const commonBit = opt.commonName ? `<span class="opt-common">${opt.commonName}</span>` : '';
    btn.innerHTML = `<b>${opt.code}</b>${opt.name}${commonBit}`;
    btn.addEventListener('click', () => handleIidAnswer(btn, opt, item));
    optWrap.appendChild(btn);
  });
}

function handleIidAnswer(btn, chosen, correctItem) {
  if (iidState.answered) return;
  iidState.answered = true;
  const allBtns = document.querySelectorAll('#iid-options .option-btn');
  allBtns.forEach(b => b.classList.add('disabled'));

  const isCorrect = chosen.code === correctItem.code;
  const fb = document.getElementById('iid-feedback');
  const commonSuffix = correctItem.commonName ? ` (${correctItem.commonName})` : '';
  if (isCorrect) {
    btn.classList.add('correct');
    iidState.score += 10 + iidState.streak * 2;
    iidState.streak += 1;
    fb.textContent = `✅ Correct! ${correctItem.code} — ${correctItem.name}${commonSuffix}`;
    fb.className = 'feedback good';
  } else {
    btn.classList.add('incorrect');
    iidState.streak = 0;
    fb.textContent = `❌ It's ${correctItem.code} — ${correctItem.name}${commonSuffix}`;
    fb.className = 'feedback bad';
    allBtns.forEach(b => {
      if (b.textContent.startsWith(correctItem.code)) b.classList.add('correct');
    });
  }
  if (correctItem.confuse) {
    fb.textContent += `  ·  Don't confuse with: ${correctItem.confuse}`;
  }
  document.getElementById('iid-score').textContent = iidState.score;
  document.getElementById('iid-streak').textContent = iidState.streak;

  const nextBtn = document.getElementById('iid-next');
  nextBtn.classList.remove('hidden');
  nextBtn.textContent = (iidState.qIndex + 1 >= iidState.questions.length) ? 'See results →' : 'Next →';

  showSpeciesModal(correctItem);
}

document.getElementById('iid-next').addEventListener('click', () => {
  iidState.qIndex += 1;
  if (iidState.qIndex >= iidState.questions.length) {
    finishImageId();
  } else {
    renderIidQuestion();
  }
});

function finishImageId() {
  const st = iidState;
  const played = Store.get('gamesPlayed', 0) + 1;
  Store.set('gamesPlayed', played);
  const best = Store.get('bestImageIdScore', 0);
  if (st.score > best) Store.set('bestImageIdScore', st.score);

  document.getElementById('iid-final-score').textContent = st.score;
  document.getElementById('iid-quiz-body').classList.add('hidden');
  document.getElementById('iid-results').classList.remove('hidden');
}

document.getElementById('iid-replay').addEventListener('click', startImageId);

/* ===========================================================
   BROWSE / FLASHCARDS
   =========================================================== */
let browseState = null;

function startBrowse() {
  const cat = getCategory();
  let pool = cat === 'All' ? ALL_ITEMS : ALL_ITEMS.filter(i => i.category === cat);
  pool = pool.slice().sort((a, b) => a.num - b.num);
  if (pool.length === 0) { alert('No entries in this category.'); return; }
  browseState = { pool, idx: 0 };
  document.getElementById('browse-total').textContent = pool.length;
  renderBrowseCard();
  showScreen('screen-browse');
}

function renderBrowseCard() {
  const { pool, idx } = browseState;
  const item = pool[idx];
  document.getElementById('browse-num').textContent = idx + 1;
  document.getElementById('flashcard').classList.remove('flipped');

  const photo = document.getElementById('browse-photo');
  if (item.images.length) {
    photo.src = item.images[0];
    photo.style.display = 'block';
  } else {
    photo.removeAttribute('src');
    photo.style.display = 'none';
  }
  document.getElementById('browse-front-nophoto').classList.toggle('hidden', item.images.length > 0);
  document.getElementById('browse-front-code').textContent = item.code;
  document.getElementById('browse-front-name').textContent = item.name;
  document.getElementById('browse-front-common').textContent = item.commonName
    ? item.commonName + (item.commonNameUncertain ? '*' : '')
    : '';
  document.getElementById('browse-category').textContent = item.category + (item.layer ? ' · ' + item.layer : '');
  document.getElementById('browse-code').textContent = item.code;
  document.getElementById('browse-name').textContent = item.name;

  const commonEl = document.getElementById('browse-common');
  if (item.commonName) {
    commonEl.textContent = item.commonName + (item.commonNameUncertain ? '*' : '');
    commonEl.classList.remove('hidden');
  } else {
    commonEl.textContent = '';
    commonEl.classList.add('hidden');
  }

  const factsEl = document.getElementById('browse-facts');
  factsEl.innerHTML = '';
  item.facts.forEach(f => {
    const li = document.createElement('li');
    li.textContent = f;
    factsEl.appendChild(li);
  });

  const confuseEl = document.getElementById('browse-confuse');
  confuseEl.textContent = item.confuse ? `⚠ Don't confuse with: ${item.confuse}` : '';

  // give the front face a default look for image-less (general code) entries
  const front = document.querySelector('.flashcard-front');
  front.classList.toggle('flashcard-front-nophoto', item.images.length === 0);
}

document.getElementById('flashcard').addEventListener('click', () => {
  document.getElementById('flashcard').classList.toggle('flipped');
});
document.getElementById('browse-next').addEventListener('click', () => {
  browseState.idx = (browseState.idx + 1) % browseState.pool.length;
  renderBrowseCard();
});
document.getElementById('browse-prev').addEventListener('click', () => {
  browseState.idx = (browseState.idx - 1 + browseState.pool.length) % browseState.pool.length;
  renderBrowseCard();
});
