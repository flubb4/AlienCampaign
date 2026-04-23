/* Shell for every page in AlienCampaign.
   Renders topbar + sidebar from a single nav definition, with
   the current page highlighted via `active`. */

const NAV = [
  { cat: "Kampagne", items: [
    { href: "campaign/overview.html",       label: "Overview",      id: "overview" },
    { href: "campaign/timeline.html",       label: "Timeline",      id: "timeline" },
    { href: "campaign/lore.html",           label: "Lore",          id: "lore" },
    { href: "campaign/hook-register.html",  label: "Hook-Register", id: "hooks" },
  ]},
  { cat: "Charaktere", group: "pcs", items: [
    { href: "characters/pcs/mae.html",      label: "Maelys Harlan", id: "mae" },
    { href: "characters/pcs/silas.html",    label: "Silas",         id: "silas" },
    { href: "characters/pcs/scott.html",    label: "Scott Reynolds",id: "scott" },
    { href: "characters/pcs/isabella.html", label: "Isabella Cruz", id: "isabella" },
  ]},
  { cat: "Missionen", group: "missions", items: [
    { href: "missions/01-routine-exchange.html",  label: "01 — Routine Exchange",  id: "m01" },
    { href: "missions/02-theta-persei.html",      label: "02 — Theta Persei",      id: "m02" },
    { href: "missions/03-jeremiah-vi.html",       label: "03 — Jeremiah VI",       id: "m03" },
    { href: "missions/04-atlas-station.html",     label: "04 — Atlas Station",     id: "m04" },
    { href: "missions/05-arceon-station.html",    label: "05 — Arceon Station",    id: "m05" },
    { href: "missions/06-lambda-aurigae.html",    label: "06 — Lambda Aurigae",    id: "m06" },
    { href: "missions/07-tiamat-iv.html",         label: "07 — Tiamat IV",         id: "m07" },
    { href: "missions/08-van-maanens-star.html",  label: "08 — Van Maanen's Star", id: "m08" },
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
  const base = opts.base || "";            // "", "../", "../../"
  const activeId = opts.active || "";      // matches item.id

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
  NAV.forEach(section => {
    sidebarHtml += `<div class="nav-cat">${section.cat}</div>`;
    section.items.forEach(item => {
      const cls = item.id === activeId ? 'nav-item active' : 'nav-item';
      sidebarHtml += `<a class="${cls}" href="${base}${item.href}">${item.label}</a>`;
    });
  });
  const sidebar = `
    <aside id="sidebar">
      <nav class="nav-section">${sidebarHtml}</nav>
    </aside>
    <div id="sidebar-backdrop" onclick="toggleSidebar()"></div>
  `;

  document.body.insertAdjacentHTML("afterbegin", topbar + sidebar);
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const bd = document.getElementById('sidebar-backdrop');
  if (!sb) return;
  sb.classList.toggle('open');
  bd && bd.classList.toggle('visible');
}
