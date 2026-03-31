// ── Theme Toggle ──
(function(){
  const t = document.querySelector('[data-theme-toggle]');
  const r = document.documentElement;
  let d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  r.setAttribute('data-theme', d);
  function updateIcon() {
    if (!t) return;
    t.innerHTML = d === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
  updateIcon();
  t && t.addEventListener('click', () => {
    d = d === 'dark' ? 'light' : 'dark';
    r.setAttribute('data-theme', d);
    updateIcon();
  });
})();

// ── Countdown Timer ──
function updateCountdown() {
  const end = new Date(PROJECT.endDate + "T23:59:59");
  const now = new Date();
  const diff = end - now;

  if (diff <= 0) {
    document.getElementById('cd-days').textContent = '0';
    document.getElementById('cd-hours').textContent = '0';
    document.getElementById('cd-mins').textContent = '0';
    document.getElementById('cd-secs').textContent = '0';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('cd-days').textContent = days;
  document.getElementById('cd-hours').textContent = hours;
  document.getElementById('cd-mins').textContent = mins;
  document.getElementById('cd-secs').textContent = secs;

  // Timeline progress
  const start = new Date(PROJECT.startDate);
  const totalDuration = end - start;
  const elapsed = now - start;
  const progress = Math.min(Math.max((elapsed / totalDuration) * 100, 0), 100);
  document.getElementById('timeline-progress').style.width = progress.toFixed(1) + '%';
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ── Last Updated ──
document.getElementById('lastUpdate').textContent = new Date(PROJECT.lastUpdated).toLocaleDateString('en-GB', {
  day: 'numeric', month: 'long', year: 'numeric'
});

// ── Stats ──
function computeStats() {
  const total = TASKS.length;
  const completed = TASKS.filter(t => t.status === 'completed').length;
  const inProgress = TASKS.filter(t => t.status === 'in-progress').length;
  const notStarted = TASKS.filter(t => t.status === 'not-started').length;
  const stalled = TASKS.filter(t => t.status === 'stalled').length;
  const broken = TASKS.filter(t => t.status === 'broken').length;

  // Weighted progress: completed = 100%, in-progress = 50%
  const progressPercent = total > 0
    ? Math.round(((completed * 1.0 + inProgress * 0.5) / total) * 100)
    : 0;

  return { total, completed, inProgress, notStarted, stalled, broken, progressPercent };
}

function animateNumber(el, target) {
  let current = 0;
  const step = Math.max(1, Math.floor(target / 30));
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = current;
  }, 30);
}

function renderStats() {
  const s = computeStats();
  animateNumber(document.getElementById('stat-total'), s.total);
  animateNumber(document.getElementById('stat-completed'), s.completed);
  animateNumber(document.getElementById('stat-inprogress'), s.inProgress);
  animateNumber(document.getElementById('stat-notstarted'), s.notStarted);
  animateNumber(document.getElementById('stat-stalled'), s.stalled);
  animateNumber(document.getElementById('stat-broken'), s.broken);

  // Progress ring
  const ring = document.getElementById('progress-ring-fill');
  const circumference = 2 * Math.PI * 70;
  ring.style.strokeDasharray = circumference;
  ring.style.strokeDashoffset = circumference;
  setTimeout(() => {
    const offset = circumference - (s.progressPercent / 100) * circumference;
    ring.style.strokeDashoffset = offset;
  }, 300);
  document.getElementById('progress-percent').textContent = s.progressPercent + '%';

  // Progress bar
  setTimeout(() => {
    document.getElementById('progress-bar-fill').style.width = s.progressPercent + '%';
  }, 300);
}

renderStats();

// ── Category Progress ──
function renderCategories() {
  const grid = document.getElementById('categoryGrid');
  const select = document.getElementById('categoryFilter');

  CATEGORIES.forEach(cat => {
    const catTasks = TASKS.filter(t => t.category === cat.id);
    const completed = catTasks.filter(t => t.status === 'completed').length;
    const inProgress = catTasks.filter(t => t.status === 'in-progress').length;
    const total = catTasks.length;
    const percent = total > 0 ? Math.round(((completed + inProgress * 0.5) / total) * 100) : 0;

    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
      <div class="category-card__header">
        <span class="category-card__dot" style="background:${cat.color}"></span>
        <span class="category-card__name">${cat.name}</span>
      </div>
      <div class="category-card__stats">
        <span class="category-card__percent">${percent}%</span>
        <span class="category-card__count">${completed}/${total} done</span>
      </div>
      <div class="category-card__bar">
        <div class="category-card__bar-fill" style="width:${percent}%;background:${cat.color}"></div>
      </div>
      <div class="category-card__breakdown">
        ${completed > 0 ? `<span class="mini-badge mini-badge--completed">${completed} done</span>` : ''}
        ${inProgress > 0 ? `<span class="mini-badge mini-badge--inprogress">${inProgress} active</span>` : ''}
        ${total - completed - inProgress > 0 ? `<span class="mini-badge mini-badge--pending">${total - completed - inProgress} pending</span>` : ''}
      </div>
    `;
    grid.appendChild(card);

    // Populate filter dropdown
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = cat.name;
    select.appendChild(opt);
  });
}

renderCategories();

// ── Task Rendering ──
function getStatusLabel(status) {
  const map = {
    'not-started': 'Not Started',
    'in-progress': 'In Progress',
    'completed': 'Completed',
    'broken': 'Broken',
    'stalled': 'Stalled'
  };
  return map[status] || status;
}

function getCategoryName(id) {
  const cat = CATEGORIES.find(c => c.id === id);
  return cat ? cat.name : id;
}

function getCategoryColor(id) {
  const cat = CATEGORIES.find(c => c.id === id);
  return cat ? cat.color : '#666';
}

function renderTasks(filter = 'all', category = 'all', search = '') {
  const list = document.getElementById('tasksList');
  const empty = document.getElementById('tasksEmpty');
  list.innerHTML = '';

  let filtered = TASKS;

  if (filter !== 'all') {
    filtered = filtered.filter(t => t.status === filter);
  }
  if (category !== 'all') {
    filtered = filtered.filter(t => t.category === category);
  }
  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.task.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  filtered.forEach(task => {
    const card = document.createElement('div');
    card.className = 'task-card';
    card.setAttribute('data-status', task.status);
    card.innerHTML = `
      <div class="task-card__top">
        <div class="task-card__meta">
          <span class="task-card__wp" style="color:${getCategoryColor(task.category)}">${task.task}</span>
          <span class="task-card__cat">${getCategoryName(task.category)}</span>
        </div>
        <span class="status-badge status-badge--${task.status}">${getStatusLabel(task.status)}</span>
      </div>
      <h3 class="task-card__title">${task.title}</h3>
      <p class="task-card__desc">${task.description}</p>
      <div class="task-card__footer">
        <span class="task-card__partners">${task.partners.map(p => `<span class="partner-tag">${p}</span>`).join('')}</span>
        <span class="task-card__year">${task.year}</span>
      </div>
    `;
    list.appendChild(card);
  });
}

renderTasks();

// ── Filters ──
document.getElementById('statusFilters').addEventListener('click', e => {
  if (!e.target.classList.contains('filter-btn')) return;
  document.querySelectorAll('#statusFilters .filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  applyFilters();
});

document.getElementById('categoryFilter').addEventListener('change', applyFilters);
document.getElementById('searchInput').addEventListener('input', applyFilters);

function applyFilters() {
  const status = document.querySelector('#statusFilters .filter-btn.active').dataset.filter;
  const category = document.getElementById('categoryFilter').value;
  const search = document.getElementById('searchInput').value;
  renderTasks(status, category, search);
}

// ── Scroll Animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.stat-card, .category-card, .methodology-card, .info-card, .task-card').forEach(el => {
  observer.observe(el);
});

// Re-observe dynamically added task cards after filter
const taskListObserver = new MutationObserver(() => {
  document.querySelectorAll('.task-card:not(.visible)').forEach(el => observer.observe(el));
});
taskListObserver.observe(document.getElementById('tasksList'), { childList: true });
