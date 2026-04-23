/* Renders the top navigation bar. Call renderTopNav(basePath) from each page.
   basePath is "" for root, "../" for one level deep, "../../" for two. */

function renderTopNav(basePath) {
  basePath = basePath || "";
  const nav = `
    <nav class="topnav">
      <span class="brand">RECALL AUTHORITY</span>
      <a href="${basePath}index.html">Hub</a>
      <a href="${basePath}campaign/overview.html">Overview</a>
      <a href="${basePath}campaign/timeline.html">Timeline</a>
      <a href="${basePath}campaign/hook-register.html">Hooks</a>
      <a href="${basePath}characters/pcs/mae.html">PCs</a>
      <a href="${basePath}missions/">Missions</a>
      <a href="${basePath}handouts/">Handouts</a>
      <a href="${basePath}tools/starmap.html">Starmap</a>
    </nav>
  `;
  document.body.insertAdjacentHTML("afterbegin", nav);
}
