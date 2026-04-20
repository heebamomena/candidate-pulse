// =============================================================
// app.js — All interactive logic for Candidate Pulse
// You don't need to edit this file unless you want to change
// how the app behaves. To change content, edit data.js instead.
// =============================================================

// ─── HELPERS ──────────────────────────────────────────────────

function starsHTML(n) {
  return (
    '<span class="stars">' +
    "★".repeat(n) +
    '<span style="opacity:0.2">' + "★".repeat(5 - n) + "</span>" +
    "</span>"
  );
}

function commHTML(v) {
  const c = v >= 80 ? "#7DB87A" : v >= 50 ? "#E8B96A" : "#E8A5B0";
  return `<div class="comm-bar-wrap"><div class="comm-bar" style="width:${v}%;background:${c}"></div></div>
          <span class="comm-val">${v}%</span>`;
}

const stageClass = {
  applied:   "p-applied",
  screening: "p-screening",
  interview: "p-interview",
  offer:     "p-offer",
  dropped:   "p-dropped"
};

const sentClass = {
  positive: "p-positive",
  neutral:  "p-neutral",
  negative: "p-negative"
};

const sentLabel = {
  positive: "Positive experience",
  neutral:  "Mixed experience",
  negative: "Negative experience"
};

const sentColor = {
  positive: "#7DB87A",
  neutral:  "#E8B96A",
  negative: "#E8A5B0"
};

// ─── HERO STATS COUNTER ──────────────────────────────────────

function animateStats() {
  const targets = [
    { id: "stat1", value: candidates.length, suffix: "" },
    { id: "stat2", value: Math.round(candidates.filter(c => c.sentiment === "positive").length / candidates.length * 100), suffix: "%" },
    { id: "stat3", value: Math.round(candidates.filter(c => c.stage === "dropped").length / candidates.length * 100), suffix: "%" },
    { id: "stat4", value: Math.round(candidates.reduce((a, c) => a + c.days, 0) / candidates.length), suffix: "" }
  ];

  targets.forEach(({ id, value, suffix }) => {
    let cur = 0;
    const el = document.getElementById(id);
    const step = value / 40;
    const iv = setInterval(() => {
      cur = Math.min(cur + step, value);
      el.textContent = Math.round(cur) + suffix;
      if (cur >= value) clearInterval(iv);
    }, 30);
  });
}

// ─── FUNNEL ──────────────────────────────────────────────────

// ─── FUNNEL ──────────────────────────────────────────────────

const funnelStages = [
  {
    label: "Applications started",
    count: 41,
    pct: 100,
    color: "#7EB8D4",
    drop: "—",
    dropClass: "",
    summary: "Applications started with 41 candidates.",
    analysis: "This is the full top of the funnel. It shows total intent and interest before any form friction or recruiter follow-up affects completion."
  },
  {
    label: "Applications completed",
    count: 30,
    pct: 73,
    color: "#7DB87A",
    drop: "28%",
    dropClass: "drop-red",
    summary: "Applications completed with 30 candidates out of 41 started.",
    analysis: "11 candidates dropped before finishing the application. This usually signals form friction, too many required fields, or a process that feels too long too early."
  },
  {
    label: "Screening call",
    count: 24,
    pct: 58,
    color: "#E8B96A",
    drop: "20%",
    dropClass: "drop-amber",
    summary: "24 candidates reached the screening call stage.",
    analysis: "6 candidates dropped between application completion and screening. This often points to slower recruiter response time, unclear expectations, or lower-fit profiles after review."
  },
  {
    label: "First interview",
    count: 17,
    pct: 41,
    color: "#E8A5B0",
    drop: "35%",
    dropClass: "drop-red",
    summary: "17 candidates moved into the first interview.",
    analysis: "7 candidates dropped between screening and first interview. This is one of the sharper falloffs and may reflect scheduling delays, mismatch after first contact, or drop in candidate interest."
  },
  {
    label: "Final interview",
    count: 11,
    pct: 27,
    color: "#C4687A",
    drop: "27%",
    dropClass: "drop-amber",
    summary: "11 candidates progressed to the final interview stage.",
    analysis: "6 candidates dropped between first and final interview. At this point, candidate experience matters even more because delays or uncertainty can quickly weaken trust."
  },
  {
    label: "Offer extended",
    count: 8,
    pct: 20,
    color: "#7EB8D4",
    drop: "—",
    dropClass: "",
    summary: "Offers were extended to 8 candidates.",
    analysis: "3 candidates dropped between final interview and offer. This usually signals hesitation late in the process, slower decision-making, or a lack of reassurance after the final round."
  }
];

function buildFunnel() {
  const container = document.getElementById("funnelViz");
  container.innerHTML = "";

  funnelStages.forEach((s, i) => {
    const row = document.createElement("div");
    row.className = "funnel-stage";
    row.innerHTML = `
      <div class="funnel-label">${s.label}</div>
      <div class="funnel-bar-wrap">
        <div class="funnel-bar" id="fbar${i}"
             style="width:0%;background:${s.color}22;border:1.5px solid ${s.color};">
          <span style="color:${s.color}">${s.count} candidates</span>
        </div>
      </div>
      <div class="funnel-count">${s.count}</div>
      ${s.drop !== "—"
        ? `<span class="drop-tag ${s.dropClass}">${s.drop}</span>`
        : `<span class="drop-tag-placeholder"></span>`}
    `;

    row.addEventListener("click", () => openFunnelModal(i));
    container.appendChild(row);

    setTimeout(() => {
      document.getElementById("fbar" + i).style.width = s.pct + "%";
    }, 200 + i * 120);
  });
}

function openFunnelModal(index) {
  const stage = funnelStages[index];
  document.getElementById("funnelModalTitle").textContent = stage.label;
  document.getElementById("funnelModalSummary").textContent = stage.summary;
  document.getElementById("funnelModalCount").textContent = `${stage.count} candidates`;
  document.getElementById("funnelModalPct").textContent = `${stage.pct}%`;
  document.getElementById("funnelModalAnalysis").textContent = stage.analysis;
  document.getElementById("funnelModal").classList.add("open");
}

function closeFunnelModal() {
  document.getElementById("funnelModal").classList.remove("open");
}
document.addEventListener("click", e => {
  const modal = document.getElementById("funnelModal");
  if (e.target === modal) {
    closeFunnelModal();
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeFunnelModal();
  }
});
// ─── CANDIDATE DIRECTORY ─────────────────────────────────────

let activeIdx   = null;
let sortCol     = "name";
let sortDir     = 1;
let currentPage = 1;
const rowsPerPage = 10;

function buildMeta() {
  const total   = candidates.length;
  const dropped = candidates.filter(c => c.stage === "dropped").length;
  const pos     = candidates.filter(c => c.sentiment === "positive").length;
  const avgDays = Math.round(candidates.reduce((a, c) => a + c.days, 0) / total);

  const chips = [
    { label: `${total} candidates`,                              bg: "#D6EDF6", color: "#3A7FA0" },
    { label: `${dropped} dropped off`,                          bg: "#fde8e8", color: "#b83232" },
    { label: `${Math.round((pos / total) * 100)}% positive`,   bg: "#D6EDD4", color: "#2d6b2a" },
    { label: `${avgDays} avg days in process`,                  bg: "#FAF0D6", color: "#8a5a0a" }
  ];

  const el = document.getElementById("metaChips");
  chips.forEach(c => {
    el.innerHTML += `<span class="meta-chip" style="background:${c.bg};color:${c.color}">${c.label}</span>`;
  });
}

function buildIndustryFilter() {
  const industries = [...new Set(candidates.map(c => c.industry))].sort();
  const sel = document.getElementById("filterIndustry");
  industries.forEach(ind => {
    sel.innerHTML += `<option value="${ind}">${ind}</option>`;
  });
}

function getFiltered() {
  const q     = document.getElementById("searchInput").value.toLowerCase();
  const stage = document.getElementById("filterStage").value;
  const sent  = document.getElementById("filterSentiment").value;
  const ind   = document.getElementById("filterIndustry").value;
  const rat   = document.getElementById("filterRating").value;
  const comm  = document.getElementById("filterComm").value;

  return candidates.filter(c => {
    if (q && !`${c.name} ${c.role} ${c.industry}`.toLowerCase().includes(q)) return false;
    if (stage && c.stage !== stage)         return false;
    if (sent  && c.sentiment !== sent)      return false;
    if (ind   && c.industry !== ind)        return false;
    if (rat   && c.rating !== +rat)         return false;
    if (comm === "high"   && c.comm < 80)          return false;
    if (comm === "medium" && (c.comm < 50 || c.comm >= 80)) return false;
    if (comm === "low"    && c.comm >= 50)         return false;
    return true;
  });
}

function renderTable() {
  const filtered = getFiltered();

  filtered.sort((a, b) => {
    let av = a[sortCol];
    let bv = b[sortCol];
    if (typeof av === "string") {
      av = av.toLowerCase();
      bv = bv.toLowerCase();
    }
    return av < bv ? -sortDir : av > bv ? sortDir : 0;
  });

  const tbody = document.getElementById("tableBody");
  const empty = document.getElementById("emptyState");
  const pagination = document.getElementById("tablePagination");

  tbody.innerHTML = "";
  pagination.innerHTML = "";

  empty.style.display = filtered.length ? "none" : "block";

  document.getElementById("resultCount").textContent =
    `${filtered.length} of ${candidates.length} candidates`;

  const totalPages = Math.ceil(filtered.length / rowsPerPage) || 1;

  if (currentPage > totalPages) {
    currentPage = 1;
  }

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageRows = filtered.slice(start, end);

  pageRows.forEach(c => {
    const origIdx = candidates.indexOf(c);
    const tr = document.createElement("tr");
    if (activeIdx === origIdx) tr.classList.add("active-row");

    tr.innerHTML = `
      <td>
        <div class="name-cell">
          <div class="avatar-sm" style="background:${c.color}22;color:${c.color}">${c.initials}</div>
          <div class="td-name">${c.name}</div>
        </div>
      </td>
      <td class="td-role">${c.role}</td>
      <td class="td-industry">${c.industry}</td>
      <td><span class="pill ${stageClass[c.stage]}">${c.stage.charAt(0).toUpperCase() + c.stage.slice(1)}</span></td>
      <td><span class="pill ${sentClass[c.sentiment]}">${c.sentiment.charAt(0).toUpperCase() + c.sentiment.slice(1)}</span></td>
      <td>${starsHTML(c.rating)}</td>
      <td>${commHTML(c.comm)}</td>
      <td><span class="days-badge">${c.days}d</span></td>
    `;

    tr.addEventListener("click", () => openPanel(origIdx, tr));
    tbody.appendChild(tr);
  });

  if (filtered.length > rowsPerPage) {
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.className = `page-btn ${i === currentPage ? "active" : ""}`;
      btn.textContent = i;
      btn.addEventListener("click", () => {
        currentPage = i;
        closePanel();
        renderTable();
      });
      pagination.appendChild(btn);
    }
  }
}

function sortBy(col) {
  if (sortCol === col) {
    sortDir *= -1;
  } else {
    sortCol = col;
    sortDir = 1;
  }

  currentPage = 1;

  document.querySelectorAll(".sort-arrow").forEach(el => {
    el.classList.remove("active");
    el.textContent = "▴";
  });

  const arrow = document.getElementById("sort-" + col);
  if (arrow) {
    arrow.classList.add("active");
    arrow.textContent = sortDir === 1 ? "▴" : "▾";
  }

  renderTable();
}

function openPanel(idx, tr) {
  // Toggle off if same row clicked again
  if (activeIdx === idx) { closePanel(); return; }

  activeIdx = idx;
  document.querySelectorAll(".dir-table tbody tr").forEach(r => r.classList.remove("active-row"));
  if (tr) tr.classList.add("active-row");

  const c = candidates[idx];

  document.getElementById("sideInner").innerHTML = `
    <div class="side-top">
      <button class="side-close" onclick="closePanel()">&#x2715;</button>
      <div class="side-avatar" style="background:${c.color}22;color:${c.color}">${c.initials}</div>
      <div class="side-name">${c.name}</div>
      <div class="side-role">${c.role} &middot; ${c.industry}</div>
      <div class="side-pills">
        <span class="pill ${stageClass[c.stage]}">${c.stage.charAt(0).toUpperCase() + c.stage.slice(1)}</span>
        <span class="pill" style="background:${sentColor[c.sentiment]}22;color:${sentColor[c.sentiment]}">${sentLabel[c.sentiment]}</span>
      </div>
    </div>

    <div class="side-section">
      <div class="side-section-title">Quick stats</div>
      <div class="stat-row"><span class="stat-key">Days in process</span><span class="stat-val">${c.days} days</span></div>
      <div class="stat-row"><span class="stat-key">Experience rating</span><span class="stat-val">${starsHTML(c.rating)}</span></div>
      <div class="stat-row"><span class="stat-key">Communication score</span><span class="stat-val">${commHTML(c.comm)}</span></div>
    </div>

    <div class="side-section">
      <div class="side-section-title">Their feedback</div>
      <div class="quote-block">"${c.feedback}"</div>
      ${c.dropReason ? `<div class="drop-reason">Drop-off reason: ${c.dropReason}</div>` : ""}
    </div>

    <div class="side-section">
      <div class="side-section-title">Journey (${c.timeline.length} steps)</div>
      ${c.timeline.map((t, i) => `
        <div class="tl-item">
          <div class="tl-dot" style="background:${i === c.timeline.length - 1 ? c.color : "#D3D1C7"}"></div>
          <div class="tl-text">${t}</div>
        </div>
      `).join("")}
    </div>
  `;

  document.getElementById("sidePanel").classList.add("open");
}

function closePanel() {
  activeIdx = null;
  document.querySelectorAll(".dir-table tbody tr").forEach(r => r.classList.remove("active-row"));
  document.getElementById("sidePanel").classList.remove("open");
}

function clearFilters() {
  document.getElementById("searchInput").value = "";
  ["filterStage", "filterSentiment", "filterIndustry", "filterRating", "filterComm"]
    .forEach(id => (document.getElementById(id).value = ""));

  currentPage = 1;
  closePanel();
  renderTable();
}

// ─── CHART ───────────────────────────────────────────────────

let activeChart = null;

function buildChart(type) {
  if (activeChart) activeChart.destroy();

  const ctx = document.getElementById("mainChart").getContext("2d");
  activeChart = new Chart(ctx, {
    type: "bar",
    data: chartData[type],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: { font: { family: "DM Sans", size: 12 }, padding: 16, usePointStyle: true }
        }
      },
      scales: {
        y: {
          grid: { color: "rgba(44,44,42,0.05)" },
          ticks: { font: { family: "DM Sans", size: 11 }, color: "#8A8880" },
          beginAtZero: true,
          max: 100
        },
        x: {
          grid: { display: false },
          ticks: { font: { family: "DM Sans", size: 11 }, color: "#8A8880" }
        }
      }
    }
  });
}

function switchChart(type, btn) {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  buildChart(type);
}

// ─── MESSAGE GENERATOR ───────────────────────────────────────

function populateMsgDropdown() {
  const sel = document.getElementById("msgCandidate");
  candidates.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.name;
    opt.textContent = `${c.name} — ${c.role}`;
    sel.appendChild(opt);
  });

  sel.addEventListener("change", () => {
    document.getElementById("msgCandidateInput").value = sel.value;
  });
}

function generateMessage() {
  const typedName = document.getElementById("msgCandidateInput").value.trim();
  const selectedName = document.getElementById("msgCandidate").value;
  const name = typedName || selectedName;

  const type    = document.getElementById("msgType").value;
  const tone    = document.getElementById("msgTone").value;
  const company = document.getElementById("msgCompany").value || "TalentForward";

  if (!name) return;

  const cand = candidates.find(c => c.name.toLowerCase() === name.toLowerCase());
  const resolvedName = cand ? cand.name : name;
  const role = cand ? cand.role : "this role";

  const fn = messageTemplates[type]?.[tone];
  if (!fn) return;

  const text = fn(resolvedName, role, company);

  document.getElementById("msgPlaceholder").style.display = "none";

  const out = document.getElementById("msgText");
  out.style.display = "block";
  out.textContent = "";

  document.getElementById("copyBtn").style.display = "block";

  let i = 0;
  const interval = setInterval(() => {
    out.textContent = text.slice(0, i);
    i += 4;
    if (i > text.length) {
      out.textContent = text;
      clearInterval(interval);
    }
  }, 10);
}

function copyMessage() {
  const text = document.getElementById("msgText").textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById("copyBtn");
    btn.textContent = "Copied!";
    setTimeout(() => (btn.textContent = "Copy"), 2000);
  });
}

// ─── IMPROVEMENT CARDS ───────────────────────────────────────

function buildImprovements() {
  const grid = document.getElementById("improveGrid");
  improvements.forEach(imp => {
    const card = document.createElement("div");
    card.className = "improve-card";
    card.innerHTML = `
      <div class="improve-icon" style="background:${imp.iconBg}">${imp.icon}</div>
      <div class="improve-title">${imp.title}</div>
      <div class="improve-body">${imp.body}</div>
      <div class="improve-impact" style="color:${imp.impactColor}">${imp.impact}</div>
    `;
    grid.appendChild(card);
  });
}

// ─── NAV SCROLL EFFECT ───────────────────────────────────────

window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 40) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// ─── FILTER EVENT LISTENERS ──────────────────────────────────

["searchInput", "filterStage", "filterSentiment", "filterIndustry", "filterRating", "filterComm"]
  .forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener("input", () => {
      currentPage = 1;
      closePanel();
      renderTable();
    });
    el.addEventListener("change", () => {
      currentPage = 1;
      closePanel();
      renderTable();
    });
  });

// Chart tab buttons
document.getElementById("chartTabs").addEventListener("click", e => {
  const btn = e.target.closest(".tab-btn");
  if (btn) switchChart(btn.dataset.chart, btn);
});

// Message generator button
document.getElementById("genBtn").addEventListener("click", generateMessage);

// ─── INIT ─────────────────────────────────────────────────────

buildMeta();
buildIndustryFilter();
renderTable();
buildFunnel();
buildChart("sentiment");
buildImprovements();
populateMsgDropdown();

// Animate hero stats after a short delay
setTimeout(animateStats, 400);
