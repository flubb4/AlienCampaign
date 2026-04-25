/* Shell for every page in AlienCampaign.
   Renders topbar + sidebar from a single nav definition, with
   the current page highlighted via `active`.
   Optional `subNav` injects section-switcher entries under the active item. */

const NAV = [
  { cat: "", items: [
    { href: "index.html",                         label: "🏠 Dashboard",          id: "dashboard" },
    { href: "campaign/black-veil-tracker.html",   label: "🧬 Black Veil Tracker", id: "bv-tracker" },
    { href: "campaign/loot-tables.html",          label: "💰 Loot-Tabellen",      id: "loot-tables" },
  ]},
  { cat: "Kampagne", items: [
    { href: "campaign/overview.html",       label: "Overview",      id: "overview" },
    { href: "campaign/timeline.html",       label: "Timeline",      id: "timeline" },
    { href: "campaign/lore.html",           label: "Lore",          id: "lore" },
    { href: "campaign/hook-register.html",  label: "Hook-Register", id: "hooks" },
  ]},
  { cat: "Charaktere", group: "pcs", items: [
    { href: "characters/pcs/julian.html",   label: "Julian",        id: "julian" },
    { href: "characters/pcs/gustav.html",   label: "Gustav Gustavson", id: "gustav" },
    { href: "characters/pcs/mae.html",      label: "Maelys Harlan", id: "mae" },
    { href: "characters/pcs/silas.html",    label: "Silas",         id: "silas" },
    { href: "characters/pcs/scott.html",    label: "Scott Reynolds",id: "scott" },
    { href: "characters/pcs/isabella.html", label: "Isabela Cruz",  id: "isabella" },
    { href: "characters/agendas.html",      label: "⚑ Persönliche Agendas", id: "agendas" },
  ]},
  { cat: "Das Schiff", items: [
    { href: "ship/corvus.html",             label: "🚀 CM90-S Corvus",      id: "corvus" },
    { href: "ship/reisezeiten.html",        label: "🗺 Reisezeiten",        id: "reisezeiten" },
  ]},
  { cat: "Welt & Orte", items: [
    { href: "world/anchorpoint.html",       label: "🛰️ Anchorpoint Station", id: "anchorpoint" },
    { href: "world/helios.html",            label: "Helios Commercial Logistics", id: "helios" },
    { href: "world/starmap.html",           label: "🌌 Starmap — Sektoren", id: "sektoren" },
    { href: "world/wuerfel-duerfel.html",   label: "🎲 Würfel Dürfel",      id: "wuerfel-duerfel" },
  ]},
  { cat: "Missionen", group: "missions", items: [
    { href: "missions/easy-missionen/01-routine-exchange.html",  label: "01 — 40 Eridani",        id: "m01" },
    { href: "missions/easy-missionen/02-theta-persei.html",      label: "02 — Theta Persei",      id: "m02" },
    { href: "missions/schwerere-missionen/03-jeremiah-vi.html",       label: "03 — Jeremiah VI",       id: "m03" },
    { href: "missions/schwerere-missionen/04-atlas-station.html",     label: "04 — Atlas Station",     id: "m04" },
    { href: "missions/schwerere-missionen/05-arceon-station.html",    label: "05 — Arceon Station",    id: "m05" },
    { href: "missions/schwerere-missionen/06-lambda-aurigae.html",    label: "06 — Lambda Aurigae",    id: "m06" },
    { href: "missions/schwerere-missionen/07-tiamat-iv.html", label: "07 — Tiamat IV", id: "m07" },
    { href: "missions/schwerere-missionen/08-van-maanens-star.html",  label: "08 — Van Maanen's Star", id: "m08" },
    { href: "missions/99-act-2-3.html",           label: "99 — Akt 2 & 3",         id: "m99" },
  ]},
  { cat: "Material", items: [
    { href: "handouts/index.html",                label: "Handouts",             id: "handouts" },
    { href: "tools/starmap.html",                 label: "Starmap",              id: "starmap" },
    { href: "tools/terminal-log-template.html",   label: "Terminal-Log Template",id: "tlog-template" },
  ]},
];

function renderShell(opts) {
  opts = opts || {};
  const base = opts.base || "";
  const activeId = opts.active || "";
  const subNav = opts.subNav || [];

  // ---------- Topbar ----------
  const topbar = `
    <div id="topbar">
      <button id="nav-toggle" onclick="toggleSidebar()" aria-label="Navigation öffnen">☰</button>
      <a href="${base}index.html" class="logo" style="text-decoration:none">MU/TH/UR <span>9000</span> // <span>RECALL AUTHORITY</span></a>
      <div class="divider"></div>
      <div id="topbar-right">
        <div class="status-dot"></div>
        <div class="status-text">ONLINE</div>
      </div>
    </div>
  `;

  // ---------- Sidebar ----------
  let sidebarHtml = '';
  NAV.forEach(function(section) {
    if (section.cat) {
      sidebarHtml += '<div class="nav-cat">' + section.cat + '</div>';
    }
    section.items.forEach(function(item) {
      const isActive = item.id === activeId;
      const cls = isActive ? 'nav-item active' : 'nav-item';
      sidebarHtml += '<a class="' + cls + '" href="' + base + item.href + '">' + item.label + '</a>';
      // Inject sub-section switcher under the active item
      if (isActive && subNav.length > 0) {
        subNav.forEach(function(sub) {
          sidebarHtml += '<a class="sub-nav-item" data-section="' + sub.id + '" href="#" onclick="showSection(\'' + sub.id + '\'); return false;">' + sub.label + '</a>';
        });
      }
    });
  });

  const sidebar = `
    <aside id="sidebar">
      <nav class="nav-section">${sidebarHtml}</nav>
    </aside>
    <div id="sidebar-backdrop" onclick="toggleSidebar()"></div>
  `;

  document.body.insertAdjacentHTML("afterbegin", topbar + sidebar);

  // Show first section once DOM is ready
  if (subNav.length > 0) {
    document.addEventListener('DOMContentLoaded', function() {
      showSection(subNav[0].id);
    });
  }
}

function showSection(id) {
  document.querySelectorAll('.page-section').forEach(function(s) {
    s.classList.remove('active');
  });
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  document.querySelectorAll('.sub-nav-item').forEach(function(n) {
    n.classList.remove('active');
  });
  const navEl = document.querySelector('.sub-nav-item[data-section="' + id + '"]');
  if (navEl) navEl.classList.add('active');
}

function toggleLogSection(el) {
  el.closest('.log-section').classList.toggle('open');
}

function logSection(label, content) {
  return '<div class="log-section open"><div class="log-section-header" onclick="toggleLogSection(this)"><span>\u{1F4DF} ' + label + '</span><span class="log-chevron">›</span></div><div class="log-section-body"><div class="t-block">' + content + '</div></div></div>';
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const bd = document.getElementById('sidebar-backdrop');
  if (!sb) return;
  sb.classList.toggle('open');
  bd && bd.classList.toggle('visible');
}
