const sites = [
  {
    id: "albert-cuyp",
    no: "02",
    name: "Albert Cuypgarage",
    city: "Amsterdam",
    date: "05 Sep",
    scale: "Building / street",
    primary: "Infrastructure",
    lenses: ["Infrastructure", "Development"],
    lat: 52.3557,
    lng: 4.8946,
    coords: "52.3557° N / 4.8946° E",
    context: "A 260-metre underground parking structure beneath the Boerenwetering canal, combining mobility infrastructure with the restoration of water and public space above.",
    field: "The project reads as a three-dimensional urban section: water above, infrastructure below and public life along both edges.",
    insight: "When mobility is buried, its value should be measured by the civic surface it releases, not only by the spaces it stores.",
    facts: [["Typology", "Sub-canal parking"], ["Capacity", "600 cars"], ["Levels", "2 below water"], ["Opened", "2018"]],
    source: "https://www.zja.nl/en/Albert-Cuyp-parking-garage"
  },
  {
    id: "schoonschip",
    no: "03",
    name: "Schoonschip",
    city: "Amsterdam",
    date: "05 Sep",
    scale: "Neighbourhood",
    primary: "Community",
    lenses: ["Community", "Development"],
    lat: 52.4008,
    lng: 4.9085,
    coords: "52.4008° N / 4.9085° E",
    context: "A resident-led floating neighbourhood with 30 water plots and 46 homes, developed through a shared framework for energy, mobility and collective life.",
    field: "The shared jetty works simultaneously as street, threshold, service corridor and social room.",
    insight: "Climate adaptation becomes durable when residents are not end users of a finished product, but co-authors of its governance and infrastructure.",
    facts: [["Homes", "46"], ["Water plots", "30"], ["Model", "Resident-led"], ["Completed", "2021"]],
    source: "https://www.spaceandmatter.nl/project/schoonschip"
  },
  {
    id: "sluishuis",
    no: "04",
    name: "Sluishuis",
    city: "Amsterdam",
    date: "05 Sep",
    scale: "Building / district",
    primary: "Development",
    lenses: ["Development", "Community"],
    lat: 52.3516,
    lng: 5.0015,
    coords: "52.3516° N / 5.0015° E",
    context: "A mixed-use residential block at IJburg that extends over the water while keeping a public route through its courtyard and onto its roofscape.",
    field: "Its strongest move is not the silhouette alone, but the conversion of a private residential envelope into a publicly traversable edge.",
    insight: "Waterfront value can be captured without turning the waterline into a closed amenity, if public access is treated as project infrastructure.",
    facts: [["Programme", "Housing / mixed use"], ["Design", "BIG + Barcode"], ["Condition", "Waterfront"], ["Access", "Public roof route"]],
    source: "https://big.dk/projects/sluishuis-2070"
  },
  {
    id: "waterlinie",
    no: "01",
    name: "Waterliniemuseum",
    city: "Utrecht",
    date: "03 Sep",
    scale: "Territory / heritage",
    primary: "Water security",
    lenses: ["Water security", "Governance"],
    lat: 52.0676,
    lng: 5.1759,
    coords: "52.0676° N / 5.1759° E",
    context: "A museum within Fort bij Vechten that interprets the New Dutch Waterline, where controlled inundation was used as territorial defence.",
    field: "The landscape is the primary defensive architecture; forts operate as nodes within a much larger hydrological system.",
    insight: "The waterline reframes infrastructure as a territorial agreement between military strategy, land control and long-term maintenance.",
    facts: [["System", "New Dutch Waterline"], ["Scale", "Territorial"], ["Mechanism", "Controlled inundation"], ["Status", "UNESCO landscape"]],
    source: "https://waterliniemuseum.nl/"
  },
  {
    id: "benthemplein",
    no: "06",
    name: "Benthemplein",
    city: "Rotterdam",
    date: "12 Sep",
    scale: "Public space",
    primary: "Infrastructure",
    lenses: ["Infrastructure", "Community"],
    lat: 51.9282,
    lng: 4.4762,
    coords: "51.9282° N / 4.4762° E",
    context: "A water square that temporarily stores stormwater in three basins while functioning as a sports, gathering and performance space in dry weather.",
    field: "Its blue basins make a normally hidden drainage function legible, inhabitable and open to appropriation.",
    insight: "The project earns social value twice: once as everyday public space, and again as visible proof that climate infrastructure can belong to civic life.",
    facts: [["Typology", "Water square"], ["Storage", "≈1.7m litres"], ["Design", "De Urbanisten"], ["Opened", "2013"]],
    source: "https://www.urbanisten.nl/work/benthemplein"
  },
  {
    id: "kinderdijk",
    no: "05",
    name: "Kinderdijk",
    city: "Molenlanden",
    date: "11 Sep",
    scale: "Polder / landscape",
    primary: "Water security",
    lenses: ["Water security", "Governance"],
    lat: 51.8825,
    lng: 4.6333,
    coords: "51.8825° N / 4.6333° E",
    context: "A historic drainage landscape of canals, reservoirs, pumping stations and 19 windmills, developed to keep the Alblasserwaard polder habitable.",
    field: "The iconic windmills are only the most visible components of a continuous system of water levels, storage and collective maintenance.",
    insight: "Resilience is not a single object. It is an operating culture that keeps many ordinary components aligned over centuries.",
    facts: [["Windmills", "19"], ["Landscape", "Polder system"], ["Core task", "Drainage"], ["Status", "UNESCO"]],
    source: "https://whc.unesco.org/en/list/818/"
  },
  {
    id: "parksluizen",
    no: "08",
    name: "Parksluizen",
    city: "Rotterdam",
    date: "13 Sep",
    scale: "City / lock",
    primary: "Infrastructure",
    lenses: ["Infrastructure", "Governance"],
    lat: 51.9088,
    lng: 4.4471,
    coords: "51.9088° N / 4.4471° E",
    context: "A working lock complex connecting Rotterdam's urban waterways while negotiating changing water levels, road crossings and daily boat traffic.",
    field: "Unlike monumental barriers, the lock reveals water management as a repetitive urban operation embedded in ordinary movement.",
    insight: "The overlooked maintenance interface may explain a city's resilience more clearly than its celebrated landmark projects.",
    facts: [["Typology", "Urban lock"], ["Condition", "Active infrastructure"], ["Interface", "Road / water"], ["Reading", "Daily operation"]],
    source: "https://www.rotterdam.nl/"
  },
  {
    id: "maeslantkering",
    no: "07",
    name: "Maeslantkering",
    city: "Hoek van Holland",
    date: "12 Sep",
    scale: "Delta / megastructure",
    primary: "Water security",
    lenses: ["Water security", "Governance", "Development"],
    lat: 51.9538,
    lng: 4.1638,
    coords: "51.9538° N / 4.1638° E",
    context: "An automatically controlled storm-surge barrier with two 210-metre gates, designed to protect South Holland while keeping the Nieuwe Waterweg open to shipping.",
    field: "The barrier is powerful because it normally remains absent: dormant machinery preserves both the port economy and the defensive threshold.",
    insight: "Its real design problem is not strength alone, but deciding when protection justifies interrupting an open economic system.",
    facts: [["Gate length", "210 m each"], ["Control", "Automatic"], ["Built", "1991–1997"], ["Protected", "≈2m people"]],
    source: "https://www.rijkswaterstaat.nl/water/waterbeheer/bescherming-tegen-het-water/waterkeringen/deltawerken/maeslantkering"
  }
];

const lenses = ["All", "Water security", "Infrastructure", "Community", "Development", "Governance"];
const orderedSites = [...sites].sort((a, b) => Number(a.no) - Number(b.no));
let activeLens = "All";
let activeSiteId = orderedSites[0].id;
let activeView = "map";
let fieldMap = null;
const fieldMarkerElements = new Map();

const siteList = document.querySelector("#siteList");
const recordPanel = document.querySelector("#recordPanel");
const filters = document.querySelector("#filters");
const resultCount = document.querySelector("#resultCount");
const timelineTrack = document.querySelector("#timelineTrack");
const indexBody = document.querySelector("#indexBody");
const coordinateReadout = document.querySelector("#coordinateReadout");

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[character]));

function buildInterface() {
  filters.innerHTML = lenses.map((lens) => `<button class="filter-button${lens === activeLens ? " is-active" : ""}" type="button" data-lens="${escapeHtml(lens)}">${escapeHtml(lens)}</button>`).join("");
  siteList.innerHTML = orderedSites.map(site => `
    <button class="site-card" type="button" data-site="${site.id}">
      <span class="site-number">${site.no}</span>
      <span><span class="site-name">${site.name}</span><span class="site-meta">${site.city} · ${site.primary}</span></span>
      <span class="site-arrow" aria-hidden="true">↗</span>
    </button>`).join("");
  timelineTrack.innerHTML = orderedSites.map(site => `
    <button class="timeline-item" type="button" data-site="${site.id}">
      <span class="timeline-date">${site.date}</span>
      <h3>${site.name}</h3>
      <p>${site.city}<br>${site.scale}</p>
      <b>${site.primary} ↗</b>
    </button>`).join("");
  indexBody.innerHTML = orderedSites.map(site => `
    <tr data-row="${site.id}">
      <td>${site.no}</td><td>${site.name}</td><td>${site.city}</td><td>${site.scale}</td><td>${site.primary}</td>
      <td><button class="index-open" type="button" data-site="${site.id}" aria-label="Open ${site.name}">↗</button></td>
    </tr>`).join("");
}

function initFieldMap() {
  const container = document.querySelector("#fieldMap");
  if (!window.L) {
    container.innerHTML = '<p class="map-error">The geographic basemap could not load. Field records remain available in the index.</p>';
    return;
  }

  fieldMap = L.map(container, {
    center: [52.13, 4.67],
    zoom: 8,
    minZoom: 7.3,
    maxZoom: 18,
    maxBounds: [[51.55, 3.55], [52.75, 5.65]],
    zoomControl: false,
    attributionControl: true,
    preferCanvas: true
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(fieldMap);
  L.control.zoom({position: "bottomright"}).addTo(fieldMap);
  L.control.scale({position: "bottomleft", imperial: false, maxWidth: 90}).addTo(fieldMap);

  orderedSites.forEach(site => {
    const marker = document.createElement("button");
    marker.type = "button";
    marker.className = "field-marker";
    marker.dataset.site = site.id;
    marker.setAttribute("aria-label", `Open ${site.name}`);
    marker.innerHTML = `<span>${escapeHtml(site.no)}</span>`;
    const icon = L.divIcon({
      html: marker,
      className: "field-marker-shell",
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });
    L.marker([site.lat, site.lng], {icon, keyboard: false}).addTo(fieldMap);
    fieldMarkerElements.set(site.id, marker);
  });

  fitVisibleSites(orderedSites, 0);
  renderRecord();
}

function fitVisibleSites(visible, duration = 500) {
  if (!fieldMap || visible.length === 0) return;
  const bounds = L.latLngBounds(visible.map(site => [site.lat, site.lng]));
  fieldMap.fitBounds(bounds, {
    paddingTopLeft: [58, 68],
    paddingBottomRight: [58, 78],
    maxZoom: 10,
    animate: duration > 0 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    duration: duration / 1000
  });
}

function renderRecord() {
  const site = sites.find(item => item.id === activeSiteId) || orderedSites[0];
  recordPanel.innerHTML = `
    <article class="record-inner">
      <div class="record-kicker"><span>Field record ${site.no}</span><span>${site.date} 2026</span></div>
      <h1 class="record-title">${site.name}</h1>
      <p class="record-location">${site.city}, The Netherlands<br>${site.scale}</p>
      <div class="record-lenses">${site.lenses.map(lens => `<span class="record-lens">${lens}</span>`).join("")}</div>
      <section class="record-block"><h3>01 / Verified context</h3><p>${site.context}</p></section>
      <section class="record-block"><h3>02 / Field reading</h3><p>${site.field}</p></section>
      <section class="record-block insight"><h3>03 / Research insight</h3><p>${site.insight}</p></section>
      <div class="record-facts">${site.facts.map(([label, value]) => `<div class="fact"><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>
      <a class="source-link" href="${site.source}" target="_blank" rel="noreferrer">Open primary source ↗</a>
    </article>`;
  coordinateReadout.textContent = site.coords;
  document.querySelectorAll("[data-site]").forEach(element => element.classList.toggle("is-active", element.dataset.site === activeSiteId));
}

function filteredSites() {
  return activeLens === "All" ? orderedSites : orderedSites.filter(site => site.lenses.includes(activeLens));
}

function applyFilter(lens) {
  activeLens = lens;
  const visible = filteredSites();
  if (!visible.some(site => site.id === activeSiteId)) activeSiteId = visible[0]?.id || orderedSites[0].id;
  document.querySelectorAll(".filter-button").forEach(button => button.classList.toggle("is-active", button.dataset.lens === activeLens));
  document.querySelectorAll(".site-card").forEach(card => { card.hidden = !visible.some(site => site.id === card.dataset.site); });
  document.querySelectorAll(".field-marker").forEach(marker => marker.classList.toggle("is-filtered", !visible.some(site => site.id === marker.dataset.site)));
  document.querySelectorAll(".timeline-item").forEach(item => { item.hidden = !visible.some(site => site.id === item.dataset.site); });
  document.querySelectorAll("[data-row]").forEach(row => row.classList.toggle("is-filtered", !visible.some(site => site.id === row.dataset.row)));
  resultCount.textContent = `${String(visible.length).padStart(2, "0")} field records`;
  renderRecord();
  fitVisibleSites(visible);
}

function selectSite(id, scrollOnMobile = false) {
  activeSiteId = id;
  renderRecord();
  if (activeView !== "map") switchView("map");
  const site = sites.find(item => item.id === id);
  if (fieldMap && site) {
    fieldMap.flyTo([site.lat, site.lng], Math.max(fieldMap.getZoom(), 10), {
      animate: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      duration: .55
    });
  }
  if (scrollOnMobile && window.matchMedia("(max-width: 640px)").matches) recordPanel.scrollIntoView({behavior: "smooth", block: "start"});
}

function switchView(view) {
  activeView = view;
  document.querySelectorAll(".view-button").forEach(button => button.classList.toggle("is-active", button.dataset.view === view));
  document.querySelectorAll(".stage-view").forEach(panel => panel.classList.toggle("is-active", panel.dataset.panel === view));
  if (view === "map" && fieldMap) requestAnimationFrame(() => fieldMap.invalidateSize());
}

buildInterface();
initFieldMap();
applyFilter("All");

filters.addEventListener("click", event => {
  const button = event.target.closest("[data-lens]");
  if (button) applyFilter(button.dataset.lens);
});
document.querySelector(".view-switch").addEventListener("click", event => {
  const button = event.target.closest("[data-view]");
  if (button) switchView(button.dataset.view);
});
document.addEventListener("click", event => {
  const target = event.target.closest("[data-site]");
  if (target) selectSite(target.dataset.site, true);
});
const methodDialog = document.querySelector("#methodDialog");
document.querySelector("#methodButton").addEventListener("click", () => methodDialog.showModal());
document.querySelector("#closeMethod").addEventListener("click", () => methodDialog.close());
methodDialog.addEventListener("click", event => { if (event.target === methodDialog) methodDialog.close(); });
