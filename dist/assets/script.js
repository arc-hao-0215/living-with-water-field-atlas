const sites = [
  {
    id: "waterlinie", no: "01", name: "Waterliniemuseum", city: "Utrecht", date: "03 Sep", scale: "Territory / heritage", primary: "Water security",
    lenses: ["Water security", "Governance"], lat: 52.0676, lng: 5.1759, coords: "52.0676° N / 5.1759° E",
    context: "A museum within Fort bij Vechten that interprets the New Dutch Waterline, where controlled inundation was used as territorial defence.",
    field: "The landscape is the primary defensive architecture; forts operate as nodes within a much larger hydrological system.",
    insight: "The waterline reframes infrastructure as a territorial agreement between military strategy, land control and long-term maintenance.",
    facts: [["System", "New Dutch Waterline"], ["Scale", "Territorial"], ["Mechanism", "Controlled inundation"], ["Status", "UNESCO landscape"]],
    image: "./assets/images/waterlinie.jpg", imageAlt: "Entrance cut through the earthwork at Fort bij Vechten", imageCredit: "HenkvD · CC BY-SA 3.0", imageSource: "https://commons.wikimedia.org/wiki/File:Fort_bij_Vechten_Entree_Coupure.jpg",
    source: "https://waterliniemuseum.nl/"
  },
  {
    id: "oudegracht", no: "02", name: "Oudegracht", city: "Utrecht", date: "03 Sep", scale: "Canal / urban section", primary: "Infrastructure",
    lenses: ["Infrastructure", "Community", "Governance"], lat: 52.0907, lng: 5.1214, coords: "52.0907° N / 5.1214° E",
    context: "Utrecht's medieval canal pairs street level with lower wharves and cellars extending beneath the road, creating a rare three-level urban section.",
    field: "The canal edge is not a single boundary. Street, cellar, quay and water form a continuous logistics and public-space system.",
    insight: "Infrastructure becomes civic space when access, servicing and inhabitation are designed as one section rather than separated into zones.",
    facts: [["Origin", "12th century"], ["Section", "Street / wharf / water"], ["Element", "Wharf cellars"], ["Current use", "Public waterfront"]],
    image: "./assets/images/oudegracht.jpg", imageAlt: "Oudegracht canal with its lower wharves and canal houses", imageCredit: "Andy Li · CC0", imageSource: "https://commons.wikimedia.org/wiki/File:View_of_Oudegracht_from_Vollersbrug,_Utrecht_2024-11-28.jpg",
    source: "https://www.discover-utrecht.com/"
  },
  {
    id: "canal-ring", no: "03", name: "Amsterdam Canal Ring", city: "Amsterdam", date: "05 Sep", scale: "City / water network", primary: "Governance",
    lenses: ["Governance", "Infrastructure", "Development"], lat: 52.3691, lng: 4.8864, coords: "52.3691° N / 4.8864° E",
    context: "The seventeenth-century canal district joined drainage, mobility, parcel development and civic representation within a coordinated expansion plan.",
    field: "Water structure, street hierarchy and narrow plots remain mutually dependent; the urban image is an outcome of the operating system.",
    insight: "Long-term urban value emerges when infrastructure establishes a durable framework that can absorb centuries of changing uses.",
    facts: [["Plan", "17th-century expansion"], ["Form", "Concentric canals"], ["Status", "UNESCO"], ["Reading", "Water + parcels"]],
    image: "./assets/images/canal-ring.jpg", imageAlt: "Amsterdam canal ring and canal houses", imageCredit: "Lies Thru a Lens · CC BY 2.0", imageSource: "https://commons.wikimedia.org/wiki/File:Amsterdam_-_the_Canal_Ring_(8652262148).jpg",
    source: "https://whc.unesco.org/en/list/1349/"
  },
  {
    id: "albert-cuyp", no: "04", name: "Albert Cuypgarage", city: "Amsterdam", date: "05 Sep", scale: "Building / street", primary: "Infrastructure",
    lenses: ["Infrastructure", "Development"], lat: 52.3557, lng: 4.8946, coords: "52.3557° N / 4.8946° E",
    context: "A 260-metre underground parking structure beneath the Boerenwetering canal, combining mobility infrastructure with the restoration of water and public space above.",
    field: "The project reads as a three-dimensional urban section: water above, infrastructure below and public life along both edges.",
    insight: "When mobility is buried, its value should be measured by the civic surface it releases, not only by the spaces it stores.",
    facts: [["Typology", "Sub-canal parking"], ["Capacity", "600 cars"], ["Levels", "2 below water"], ["Opened", "2018"]],
    image: "./assets/images/albert-cuyp.jpg", imageAlt: "Entrance to the Albert Cuyp underground parking garage", imageCredit: "Ceescamel · CC BY-SA 4.0", imageSource: "https://commons.wikimedia.org/wiki/File:Albert_Cuypgarage,_ingang.jpg",
    source: "https://www.zja.nl/en/Albert-Cuypgarage-Amsterdam"
  },
  {
    id: "waterbuurt-west", no: "05", name: "Waterbuurt West", city: "Amsterdam", date: "05 Sep", scale: "Neighbourhood / water", primary: "Development",
    lenses: ["Development", "Community", "Water security"], lat: 52.3654, lng: 4.9794, coords: "52.3654° N / 4.9794° E",
    context: "A large floating-housing district at IJburg that translates the Dutch terraced-house tradition into buoyant concrete hulls connected to shared jetties.",
    field: "The neighbourhood behaves like an ordinary street while every dwelling remains a moving object tied to piles, utilities and fluctuating water levels.",
    insight: "Floating housing scales beyond an object only when mooring, access, servicing and collective space are designed as urban infrastructure.",
    facts: [["Typology", "Floating housing"], ["Setting", "IJburg"], ["Access", "Shared jetties"], ["System", "Mooring + utilities"]],
    image: "./assets/images/waterbuurt-west.jpg", imageAlt: "Floating houses along Brigantijnkade in IJburg", imageCredit: "Gabriele Giuseppini · CC BY 3.0", imageSource: "https://commons.wikimedia.org/wiki/File:Floating_Houses_on_Brigantijnkade_-_panoramio.jpg",
    source: "https://www.archdaily.com/120238/waterbuurt-west-architectenbureau-marlies-rohmer"
  },
  {
    id: "schoonschip", no: "06", name: "Schoonschip", city: "Amsterdam", date: "05 Sep", scale: "Neighbourhood", primary: "Community",
    lenses: ["Community", "Development"], lat: 52.4008, lng: 4.9085, coords: "52.4008° N / 4.9085° E",
    context: "A resident-led floating neighbourhood with 30 water plots and 46 homes, developed through a shared framework for energy, mobility and collective life.",
    field: "The shared jetty works simultaneously as street, threshold, service corridor and social room.",
    insight: "Climate adaptation becomes durable when residents are not end users of a finished product, but co-authors of its governance and infrastructure.",
    facts: [["Homes", "46"], ["Water plots", "30"], ["Model", "Resident-led"], ["Completed", "2021"]],
    image: "./assets/images/schoonschip.webp", imageAlt: "Schoonschip floating neighbourhood and shared jetty", imageCredit: "Space&Matter · Project image", imageSource: "https://www.spaceandmatter.nl/project/schoonschip",
    source: "https://www.spaceandmatter.nl/project/schoonschip"
  },
  {
    id: "sluishuis", no: "07", name: "Sluishuis", city: "Amsterdam", date: "05 Sep", scale: "Building / district", primary: "Development",
    lenses: ["Development", "Community"], lat: 52.3516, lng: 5.0015, coords: "52.3516° N / 5.0015° E",
    context: "A mixed-use residential block at IJburg that extends over the water while keeping a public route through its courtyard and onto its roofscape.",
    field: "Its strongest move is not the silhouette alone, but the conversion of a private residential envelope into a publicly traversable edge.",
    insight: "Waterfront value can be captured without turning the waterline into a closed amenity, if public access is treated as project infrastructure.",
    facts: [["Programme", "Housing / mixed use"], ["Design", "BIG + Barcode"], ["Condition", "Waterfront"], ["Access", "Public roof route"]],
    image: "./assets/images/sluishuis.jpg", imageAlt: "Sluishuis rising over the water at IJburg", imageCredit: "Hay Kranen · CC BY 4.0", imageSource: "https://commons.wikimedia.org/wiki/File:Sluishuis_IJburg_Amsterdam_2022_(Q107141506)_-_1.jpg",
    source: "https://big.dk/projects/sluishuis-2070"
  },
  {
    id: "mvrdv-exchange", no: "08", name: "MVRDV Exchange", city: "Rotterdam", date: "07 Sep", scale: "Practice / knowledge", primary: "Development",
    lenses: ["Development", "Governance"], lat: 51.9238, lng: 4.4901, coords: "51.9238° N / 4.4901° E",
    context: "A practice visit and conversation examining how architecture, urban research and development constraints are negotiated inside a global design office.",
    field: "Research lens: how project ambition relates to client structure, municipal coordination, delivery risk and the organisation of design knowledge. This is an analytical framework, not a transcript of the exchange.",
    insight: "A design practice influences development most when spatial ideas are translated into decisions that clients, authorities and delivery teams can act on.",
    facts: [["Format", "Office exchange"], ["Practice", "MVRDV"], ["Focus", "Design + delivery"], ["Location", "MVRDV House"]],
    image: "./assets/images/mvrdv-exchange.jpg", imageAlt: "Het Industriegebouw in Rotterdam, home of MVRDV House", imageCredit: "Frans Berkelaar · CC BY-SA 2.0", imageSource: "https://commons.wikimedia.org/wiki/File:Industriegebouw_Goudsesingel_-_zijde_Kipstraat_-_City_of_Rotterdam_-_Rijksmonument_(22569396560).jpg",
    source: "https://www.mvrdv.com/projects/247/mvrdv-house"
  },
  {
    id: "floating-office", no: "09", name: "Floating Office Rotterdam", city: "Rotterdam", date: "07 Sep", scale: "Building / harbour", primary: "Water security",
    lenses: ["Water security", "Development", "Infrastructure"], lat: 51.8994, lng: 4.4887, coords: "51.8994° N / 4.4887° E",
    context: "A timber office building on a floating concrete base in Rijnhaven, developed as the headquarters of the Global Center on Adaptation.",
    field: "Its climate response combines buoyancy, demountable timber construction and heat exchange with harbour water rather than relying on a single visible device.",
    insight: "Adaptation can support development value when a building's structure, energy system and future relocation strategy reinforce one another.",
    facts: [["Structure", "Timber"], ["Foundation", "Floating concrete"], ["Energy", "Harbour heat exchange"], ["Use", "Office + public"]],
    image: "./assets/images/floating-office.jpg", imageAlt: "Floating Office Rotterdam in the Rijnhaven", imageCredit: "Lark Ascending · Public domain", imageSource: "https://commons.wikimedia.org/wiki/File:The_Netherlands,_Rotterdam,_Rijnhaven,_Floating_office_designed_by_the_Powerhouse_Company,_2023.jpg",
    source: "https://gca.org/gca-moves-to-worlds-largest-floating-office-a-model-of-self-sufficient-climate-resilient-design/"
  },
  {
    id: "posadmaxwan-exchange", no: "10", name: "PosadMaxwan Exchange", city: "The Hague", date: "08 Sep", scale: "Urban strategy / knowledge", primary: "Governance",
    lenses: ["Governance", "Infrastructure", "Development"], lat: 52.0715, lng: 4.3323, coords: "52.0715° N / 4.3323° E",
    context: "A research exchange on how spatial strategy, data and design are combined to address national and metropolitan transitions.",
    field: "Research lens: the relationship between regional systems, municipal choices and implementable urban projects. This framework does not attribute specific statements to the exchange participants.",
    insight: "Strategic planning becomes effective when evidence is converted into spatial choices, responsible actors and a credible path to implementation.",
    facts: [["Format", "Practice exchange"], ["Practice", "PosadMaxwan"], ["Focus", "Strategy + data"], ["Scale", "Region to project"]],
    image: "./assets/images/posadmaxwan-exchange.jpg", imageAlt: "Mixed industrial and waterfront fabric of Binckhorst in The Hague", imageCredit: "Nanda Sluijsmans · CC BY-SA 2.0", imageSource: "https://commons.wikimedia.org/wiki/File:Binckhorst_Den_Haag_(28351993261).jpg",
    source: "https://posadmaxwan.nl/en/office"
  },
  {
    id: "fenix-rijnhaven", no: "11", name: "Fenix / Rijnhaven", city: "Rotterdam", date: "09 Sep", scale: "Waterfront / adaptive reuse", primary: "Development",
    lenses: ["Development", "Community", "Governance"], lat: 51.9006, lng: 4.4867, coords: "51.9006° N / 4.4867° E",
    context: "The former harbour warehouse at Katendrecht has become a museum and public destination within the wider transformation of the Rijnhaven waterfront.",
    field: "The project layers new cultural circulation and a public interior onto robust port fabric while the surrounding harbour shifts toward mixed urban use.",
    insight: "Waterfront regeneration gains legitimacy when new landmark investment retains industrial memory and produces genuinely public ground.",
    facts: [["Original use", "Port warehouse"], ["Current use", "Migration museum"], ["Intervention", "Adaptive reuse"], ["District", "Rijnhaven"]],
    image: "./assets/images/fenix-rijnhaven.jpg", imageAlt: "Historic Fenix warehouse on Rotterdam's Rijnhaven", imageCredit: "Stadsarchief Rotterdam · CC0", imageSource: "https://commons.wikimedia.org/wiki/File:Loods_Fenix_aan_de_Rijnhaven_Rotterdam_-_NL-RtSA_4100_1984-590-01.jpg",
    source: "https://fenix.nl/en/over-fenix/"
  },
  {
    id: "delft-canal", no: "12", name: "Delft Canal System", city: "Delft", date: "10 Sep", scale: "City / historic water", primary: "Infrastructure",
    lenses: ["Infrastructure", "Governance", "Community"], lat: 52.0114, lng: 4.3552, coords: "52.0114° N / 4.3552° E",
    context: "Delft developed around the dug watercourse that gave the city its name, later connecting trade and drainage through the Schie toward the Maas.",
    field: "Narrow canals are embedded within streets, bridges, front doors and institutional buildings, making water management part of everyday urban orientation.",
    insight: "A water network remains resilient when it is not treated as leftover engineering space but as a continuous civic address.",
    facts: [["Primary canal", "Oude Delft"], ["Connection", "Delftse Schie"], ["Role", "Drainage + trade"], ["Condition", "Historic city"]],
    image: "./assets/images/delft-canal.jpg", imageAlt: "Oude Delft canal seen from Peperstraat", imageCredit: "Ymblanter · CC BY-SA 4.0", imageSource: "https://commons.wikimedia.org/wiki/File:Oude_Delft_from_Peperstraat.jpg",
    source: "https://www.delft.com/"
  },
  {
    id: "tu-delft-exchange", no: "13", name: "TU Delft Exchange", city: "Delft", date: "10 Sep", scale: "Academic / knowledge", primary: "Community",
    lenses: ["Community", "Governance", "Development"], lat: 51.9990, lng: 4.3735, coords: "51.9990° N / 4.3735° E",
    context: "An academic exchange at BK City connecting Dutch design education, research culture and professional pathways in architecture and urbanism.",
    field: "Research lens: how studios, models, exhibitions and informal discussion connect within a reused institutional building. Detailed exchange notes remain to be added from the field record.",
    insight: "Research has greater public value when institutions make ideas visible, discussable and transferable between education and practice.",
    facts: [["Format", "Academic exchange"], ["Faculty", "Architecture + Built Environment"], ["Setting", "BK City"], ["Focus", "Research + practice"]],
    image: "./assets/images/tu-delft-exchange.jpg", imageAlt: "Historic faculty building at TU Delft", imageCredit: "Michiel1972 · CC BY-SA 3.0", imageSource: "https://commons.wikimedia.org/wiki/File:Gebouw_TU_Delft.jpg",
    source: "https://www.tudelft.nl/en/architecture-and-the-built-environment/about-the-faculty/facilities"
  },
  {
    id: "kinderdijk", no: "14", name: "Kinderdijk", city: "Molenlanden", date: "11 Sep", scale: "Polder / landscape", primary: "Water security",
    lenses: ["Water security", "Governance"], lat: 51.8825, lng: 4.6333, coords: "51.8825° N / 4.6333° E",
    context: "A historic drainage landscape of canals, reservoirs, pumping stations and 19 windmills, developed to keep the Alblasserwaard polder habitable.",
    field: "The iconic windmills are only the most visible components of a continuous system of water levels, storage and collective maintenance.",
    insight: "Resilience is not a single object. It is an operating culture that keeps many ordinary components aligned over centuries.",
    facts: [["Windmills", "19"], ["Landscape", "Polder system"], ["Core task", "Drainage"], ["Status", "UNESCO"]],
    image: "./assets/images/kinderdijk.jpg", imageAlt: "Windmills and water landscape at Kinderdijk", imageCredit: "Tarod · CC BY-SA 3.0 NL", imageSource: "https://commons.wikimedia.org/wiki/File:The_windmills_of_Kinderdijk.JPG",
    source: "https://whc.unesco.org/en/list/818/"
  },
  {
    id: "wisboomgemaal", no: "15", name: "Wisboomgemaal", city: "Kinderdijk", date: "11 Sep", scale: "Pumping station / polder", primary: "Infrastructure",
    lenses: ["Infrastructure", "Water security", "Governance"], lat: 51.8857, lng: 4.6381, coords: "51.8857° N / 4.6381° E",
    context: "A former steam-powered pumping station at Kinderdijk that demonstrates the transition from wind-driven drainage to mechanised polder management.",
    field: "The building makes a systemic shift visible: energy source, pump technology and institutional control changed while the territorial drainage task remained.",
    insight: "Resilient infrastructure evolves by replacing components without losing the operating logic and governance that connect the wider system.",
    facts: [["Typology", "Pumping station"], ["Historic power", "Steam"], ["System", "Overwaard drainage"], ["Current use", "Visitor centre"]],
    image: "./assets/images/wisboomgemaal.jpg", imageAlt: "Historic Wisboom pumping station at Kinderdijk", imageCredit: "Gerard Dukker / RCE · CC BY-SA 4.0", imageSource: "https://commons.wikimedia.org/wiki/File:OVERZICHT_-_Kinderdijk_-_20266462_-_RCE.jpg",
    source: "https://kinderdijk.com/museums/"
  },
  {
    id: "benthemplein", no: "16", name: "Benthemplein", city: "Rotterdam", date: "12 Sep", scale: "Public space", primary: "Infrastructure",
    lenses: ["Infrastructure", "Community"], lat: 51.9282, lng: 4.4762, coords: "51.9282° N / 4.4762° E",
    context: "A water square that temporarily stores stormwater in three basins while functioning as a sports, gathering and performance space in dry weather.",
    field: "Its blue basins make a normally hidden drainage function legible, inhabitable and open to appropriation.",
    insight: "The project earns social value twice: once as everyday public space, and again as visible proof that climate infrastructure can belong to civic life.",
    facts: [["Typology", "Water square"], ["Storage", "≈1.7m litres"], ["Design", "De Urbanisten"], ["Opened", "2013"]],
    image: "./assets/images/benthemplein.webp", imageAlt: "Blue water-storage basins at Benthemplein", imageCredit: "Ossip van Duivenbode / De Urbanisten", imageSource: "https://www.urbanisten.nl/work/benthemplein",
    source: "https://www.urbanisten.nl/work/benthemplein"
  },
  {
    id: "maeslantkering", no: "17", name: "Maeslantkering", city: "Hoek van Holland", date: "12 Sep", scale: "Delta / megastructure", primary: "Water security",
    lenses: ["Water security", "Governance", "Development"], lat: 51.9538, lng: 4.1638, coords: "51.9538° N / 4.1638° E",
    context: "An automatically controlled storm-surge barrier with two 210-metre gates, designed to protect South Holland while keeping the Nieuwe Waterweg open to shipping.",
    field: "The barrier is powerful because it normally remains absent: dormant machinery preserves both the port economy and the defensive threshold.",
    insight: "Its real design problem is not strength alone, but deciding when protection justifies interrupting an open economic system.",
    facts: [["Gate length", "210 m each"], ["Control", "Automatic"], ["Built", "1991–1997"], ["Protected", "≈2m people"]],
    image: "./assets/images/maeslantkering.jpg", imageAlt: "Panoramic view of the Maeslant storm surge barrier", imageCredit: "JHvW · CC BY-SA 3.0", imageSource: "https://commons.wikimedia.org/wiki/File:Maeslantkering_panorama.jpg",
    source: "https://www.rijkswaterstaat.nl/water/waterbeheer/bescherming-tegen-het-water/waterkeringen/deltawerken/maeslantkering"
  },
  {
    id: "parksluizen", no: "18", name: "Parksluizen", city: "Rotterdam", date: "13 Sep", scale: "City / lock", primary: "Infrastructure",
    lenses: ["Infrastructure", "Governance"], lat: 51.9088, lng: 4.4471, coords: "51.9088° N / 4.4471° E",
    context: "A working lock complex connecting Rotterdam's urban waterways while negotiating changing water levels, road crossings and daily boat traffic.",
    field: "Unlike monumental barriers, the lock reveals water management as a repetitive urban operation embedded in ordinary movement.",
    insight: "The overlooked maintenance interface may explain a city's resilience more clearly than its celebrated landmark projects.",
    facts: [["Typology", "Urban lock"], ["Condition", "Active infrastructure"], ["Interface", "Road / water"], ["Reading", "Daily operation"]],
    image: "./assets/images/parksluizen.jpg", imageAlt: "Parksluizen lock complex in Rotterdam", imageCredit: "Hanhil · Public domain", imageSource: "https://commons.wikimedia.org/wiki/File:Parksluizen.jpg",
    source: "https://www.rotterdam.nl/"
  }
];

sites.forEach(site => { site.status = "visited"; });
sites.push(...window.atlasResearch.suggested);
const lenses = ["All", "Water security", "Infrastructure", "Community", "Development", "Governance"];
const orderedSites = [...sites].sort((a, b) => Number(a.no) - Number(b.no));
let activeLens = "All";
let activeStatus = "all";
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

function siteSymbol(site) {
  const [label, path] = window.atlasSymbols[site.id] || ["Research site", "M6 6h20v20H6z"];
  return `<span class="site-symbol ${site.status}" title="${escapeHtml(label)}"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="${path}"/></svg></span>`;
}

function renderDrawings(site) {
  const drawings = window.atlasResearch.drawings[site.id] || [];
  if (!drawings.length) return `<section class="drawing-empty"><h3>Source drawings</h3><p>A verified original drawing is not yet available in this atlas.</p><a href="${site.source}" target="_blank" rel="noreferrer">Explore the source archive ↗</a></section>`;
  return `<section class="source-drawings"><div class="section-heading"><h2>Drawings &amp; documents</h2><span>${drawings.length} sources</span></div>${drawings.map((drawing, index) => drawing.image ? `
    <figure class="published-drawing">
      <button type="button" class="drawing-open" data-drawing="${site.id}:${index}" aria-label="Enlarge ${escapeHtml(drawing.title)}">
        <img src="${drawing.image}" alt="${escapeHtml(drawing.title)}" loading="lazy" />
        <span class="enlarge-label">Enlarge ↗</span>
      </button>
      <figcaption><span class="drawing-type">${escapeHtml(drawing.type)}</span><strong>${escapeHtml(drawing.title)}</strong><p>${escapeHtml(drawing.note || "")}</p><a href="${drawing.source}" target="_blank" rel="noreferrer">${escapeHtml(drawing.credit)} ↗</a></figcaption>
    </figure>` : `<article class="drawing-document"><span class="drawing-type">${escapeHtml(drawing.type)}</span><h3>${escapeHtml(drawing.title)}</h3><p>${escapeHtml(drawing.note)}</p><a href="${drawing.original || drawing.source}" target="_blank" rel="noreferrer">Open original document ↗</a><small>${escapeHtml(drawing.credit)}</small></article>`).join("")}</section>`;
}

function buildInterface() {
  filters.innerHTML = lenses.map((lens) => `<button class="filter-button${lens === activeLens ? " is-active" : ""}" type="button" data-lens="${escapeHtml(lens)}">${escapeHtml(lens)}</button>`).join("");
  siteList.innerHTML = orderedSites.map(site => `
    <button class="site-card ${site.status}" type="button" data-site="${site.id}">
      ${siteSymbol(site)}
      <span><span class="site-name">${site.name}</span><span class="site-meta">${site.city} · ${site.status === "suggested" ? "Not visited" : site.primary}</span></span>
      <span class="site-arrow" aria-hidden="true">↗</span>
    </button>`).join("");
  timelineTrack.innerHTML = orderedSites.filter(site => site.status === "visited").map(site => `
    <button class="timeline-item" type="button" data-site="${site.id}">
      <span class="timeline-date">${siteSymbol(site)} ${site.date}</span>
      <h3>${site.name}</h3>
      <p>${site.city}<br>${site.scale}</p>
      <b>${site.primary} ↗</b>
    </button>`).join("");
  indexBody.innerHTML = orderedSites.map(site => `
    <tr data-row="${site.id}">
      <td>${siteSymbol(site)}</td><td>${site.name}</td><td>${site.city}</td><td>${site.scale}</td><td><span class="status-label ${site.status}">${site.status === "suggested" ? "To study · Not visited" : "Visited"}</span>${site.primary}</td>
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
    minZoom: 6,
    maxZoom: 18,
    maxBounds: [[50.6, 2.8], [53.8, 7.4]],
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
    marker.className = `field-marker ${site.status}`;
    marker.dataset.site = site.id;
    marker.setAttribute("aria-label", `Open ${site.name}${site.status === "suggested" ? ", not visited" : ""}`);
    marker.title = site.name;
    marker.innerHTML = siteSymbol(site);
    const icon = L.divIcon({
      html: marker,
      className: "field-marker-shell",
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });
    L.marker([site.lat, site.lng], {icon, keyboard: false}).bindTooltip(escapeHtml(site.name), {direction: "top", offset: [0, -20]}).addTo(fieldMap);
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
  const note = site.status === "visited" ? window.atlasFieldNotes?.[site.id] : null;
  recordPanel.innerHTML = `
    <article class="record-inner ${site.status}">
      <div class="record-kicker"><span>${siteSymbol(site)} ${site.status === "suggested" ? "To study · Not visited" : "Field record"}</span><span>${site.status === "suggested" ? "Desk research" : site.date + " 2026"}</span></div>
      <h1 class="record-title">${site.name}</h1>
      <p class="record-location">${site.city}, The Netherlands<br>${site.scale}</p>
      <div class="record-lenses">${site.lenses.map(lens => `<span class="record-lens">${lens}</span>`).join("")}</div>
      <div class="record-media">
        ${site.image ? `<figure class="record-photo">
          <img src="${site.image}" alt="${escapeHtml(site.imageAlt)}" />
          <figcaption><span>${escapeHtml(site.imageAlt)}</span><a href="${site.imageSource}" target="_blank" rel="noreferrer">${escapeHtml(site.imageCredit)} ↗</a></figcaption>
        </figure>` : ""}
      </div>
      ${renderDrawings(site)}
      <section class="record-block"><h3>Project context</h3><p>${site.context}</p></section>
      ${note ? `
      <section class="record-block"><h3>Field notes &amp; spatial reading</h3><h2>${escapeHtml(note.title)}</h2>${note.reading.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join("")}</section>
      <section class="record-block insight"><h3>Takeaway · Research interpretation</h3><p>${escapeHtml(note.takeaway)}</p></section>
      <section class="record-block"><h3>Question to pursue</h3><p>${escapeHtml(note.question)}</p></section>
      <section class="record-block evidence-basis"><h3>Evidence basis</h3><p>${escapeHtml(note.basis)}</p></section>
      ` : `
      <section class="record-block"><h3>${site.status === "suggested" ? "Why study this site" : "Field reading"}</h3><p>${escapeHtml(site.field)}</p></section>
      <section class="record-block insight"><h3>${site.status === "suggested" ? "Research question" : "Research insight"}</h3><p>${escapeHtml(site.insight)}</p></section>`}
      <div class="record-facts">${site.facts.map(([label, value]) => `<div class="fact"><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>
      <a class="source-link" href="${site.source}" target="_blank" rel="noreferrer">Open primary source ↗</a>
    </article>`;
  coordinateReadout.textContent = site.coords;
  document.querySelectorAll("[data-site]").forEach(element => element.classList.toggle("is-active", element.dataset.site === activeSiteId));
}

function filteredSites() {
  return orderedSites.filter(site => (activeLens === "All" || site.lenses.includes(activeLens)) && (activeStatus === "all" || site.status === activeStatus));
}

function applyFilter(lens) {
  activeLens = lens;
  const visible = filteredSites();
  if (!visible.some(site => site.id === activeSiteId)) activeSiteId = visible[0]?.id || orderedSites[0].id;
  document.querySelectorAll(".filter-button").forEach(button => { button.classList.toggle("is-active", button.dataset.lens === activeLens); button.setAttribute("aria-pressed", String(button.dataset.lens === activeLens)); });
  document.querySelectorAll("[data-status]").forEach(button => { button.classList.toggle("is-active", button.dataset.status === activeStatus); button.setAttribute("aria-pressed", String(button.dataset.status === activeStatus)); });
  document.querySelectorAll(".site-card").forEach(card => { card.hidden = !visible.some(site => site.id === card.dataset.site); });
  document.querySelectorAll(".field-marker").forEach(marker => marker.classList.toggle("is-filtered", !visible.some(site => site.id === marker.dataset.site)));
  document.querySelectorAll(".timeline-item").forEach(item => { item.hidden = !visible.some(site => site.id === item.dataset.site); });
  document.querySelectorAll("[data-row]").forEach(row => row.classList.toggle("is-filtered", !visible.some(site => site.id === row.dataset.row)));
  resultCount.textContent = `${visible.filter(s => s.status === "visited").length} visited / ${visible.filter(s => s.status === "suggested").length} to study`;
  document.querySelector("#railCount").textContent = `${visible.length} sites`;
  if (visible.length) renderRecord();
  else recordPanel.innerHTML = '<div class="record-inner"><h2>No matching sites</h2><p>Choose another research lens or visit status.</p></div>';
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
  if (view === "timeline" && activeStatus === "suggested") { activeStatus = "visited"; applyFilter(activeLens); }
  activeView = view;
  document.querySelectorAll(".view-button").forEach(button => button.classList.toggle("is-active", button.dataset.view === view));
  document.querySelectorAll(".stage-view").forEach(panel => { panel.classList.toggle("is-active", panel.dataset.panel === view); panel.hidden = panel.dataset.panel !== view; });
  if (view === "map" && fieldMap) requestAnimationFrame(() => fieldMap.invalidateSize());
}

buildInterface();
initFieldMap();
applyFilter("All");

document.querySelector(".status-filters").addEventListener("click", event => {
  const button = event.target.closest("[data-status]");
  if (button) { activeStatus = button.dataset.status; if (activeStatus === "suggested" && activeView === "timeline") switchView("map"); applyFilter(activeLens); }
});

const drawingDialog = document.querySelector("#drawingDialog");
document.addEventListener("click", event => {
  const button = event.target.closest("[data-drawing]");
  if (!button) return;
  const [id, index] = button.dataset.drawing.split(":");
  const drawing = window.atlasResearch.drawings[id][Number(index)];
  document.querySelector("#drawingTitle").textContent = drawing.title;
  document.querySelector("#drawingImage").src = drawing.image;
  document.querySelector("#drawingImage").alt = drawing.title;
  document.querySelector("#drawingCredit").textContent = `${drawing.credit}. ${drawing.note || ""}`;
  document.querySelector("#drawingSource").href = drawing.source;
  document.querySelector("#drawingOriginal").href = drawing.original || drawing.image;
  drawingDialog.showModal();
});
document.querySelector("#closeDrawing").addEventListener("click", () => drawingDialog.close());
drawingDialog.addEventListener("click", event => { if (event.target === drawingDialog) drawingDialog.close(); });

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
