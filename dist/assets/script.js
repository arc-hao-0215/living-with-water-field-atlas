const sites = [
  {
    id: "waterlinie", no: "01", name: "Waterliniemuseum", city: "Utrecht", date: "03 Sep", scale: "Territory / heritage", primary: "Water security",
    lenses: ["Water security", "Governance"], lat: 52.0676, lng: 5.1759, coords: "52.0676° N / 5.1759° E",
    context: "A museum within Fort bij Vechten that interprets the New Dutch Waterline, where controlled inundation was used as territorial defence.",
    field: "The landscape is the primary defensive architecture; forts operate as nodes within a much larger hydrological system.",
    insight: "The waterline reframes infrastructure as a territorial agreement between military strategy, land control and long-term maintenance.",
    facts: [["System", "New Dutch Waterline"], ["Scale", "Territorial"], ["Mechanism", "Controlled inundation"], ["Status", "UNESCO landscape"]],
    image: "./assets/images/waterlinie.jpg", imageAlt: "Entrance cut through the earthwork at Fort bij Vechten", imageCredit: "HenkvD · CC BY-SA 3.0", imageSource: "https://commons.wikimedia.org/wiki/File:Fort_bij_Vechten_Entree_Coupure.jpg",
    diagram: "inundation", diagramTitle: "Territorial inundation sequence", diagramCaption: "Fort, sluice and controlled floodplain operate as one defensive landscape.",
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
    diagram: "canal-section", diagramTitle: "Street to canal section", diagramCaption: "The wharf level mediates between city traffic, storage cellars and water transport.",
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
    diagram: "ring-network", diagramTitle: "Canal and parcel framework", diagramCaption: "Concentric water corridors organise access, drainage and narrow development plots.",
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
    diagram: "stacked-section", diagramTitle: "Water above, mobility below", diagramCaption: "A restored canal and civic edges sit above two levels of parking infrastructure.",
    source: "https://www.zja.nl/en/Albert-Cuyp-parking-garage"
  },
  {
    id: "waterbuurt-west", no: "05", name: "Waterbuurt West", city: "Amsterdam", date: "05 Sep", scale: "Neighbourhood / water", primary: "Development",
    lenses: ["Development", "Community", "Water security"], lat: 52.3654, lng: 4.9794, coords: "52.3654° N / 4.9794° E",
    context: "A large floating-housing district at IJburg that translates the Dutch terraced-house tradition into buoyant concrete hulls connected to shared jetties.",
    field: "The neighbourhood behaves like an ordinary street while every dwelling remains a moving object tied to piles, utilities and fluctuating water levels.",
    insight: "Floating housing scales beyond an object only when mooring, access, servicing and collective space are designed as urban infrastructure.",
    facts: [["Typology", "Floating housing"], ["Setting", "IJburg"], ["Access", "Shared jetties"], ["System", "Mooring + utilities"]],
    image: "./assets/images/waterbuurt-west.jpg", imageAlt: "Floating houses along Brigantijnkade in IJburg", imageCredit: "Gabriele Giuseppini · CC BY 3.0", imageSource: "https://commons.wikimedia.org/wiki/File:Floating_Houses_on_Brigantijnkade_-_panoramio.jpg",
    diagram: "floating-grid", diagramTitle: "Mooring and access grid", diagramCaption: "Floating plots plug into a fixed network of piles, jetties and utility connections.",
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
    diagram: "shared-jetty", diagramTitle: "Collective energy and access", diagramCaption: "A common jetty links homes, utilities, energy exchange and shared governance.",
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
    diagram: "public-loop", diagramTitle: "Public waterfront loop", diagramCaption: "The route moves from quay to courtyard, water edge and stepped roof.",
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
    diagram: "exchange-network", diagramTitle: "Practice decision network", diagramCaption: "Research, design, client and public approvals converge through iterative project decisions.",
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
    diagram: "floating-section", diagramTitle: "Buoyant timber section", diagramCaption: "Timber superstructure, concrete pontoon and harbour-water energy form one reversible system.",
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
    diagram: "systems-matrix", diagramTitle: "From evidence to implementation", diagramCaption: "Data and research are translated across regional strategy, urban design and delivery.",
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
    diagram: "adaptive-waterfront", diagramTitle: "Warehouse to public waterfront", diagramCaption: "A retained industrial frame receives new circulation, civic programme and harbour access.",
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
    diagram: "canal-network", diagramTitle: "Canal as civic address", diagramCaption: "Bridges, plots and institutions attach directly to a continuous urban water spine.",
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
    diagram: "exchange-network", diagramTitle: "Academic knowledge exchange", diagramCaption: "Field observation, research, studio discussion and professional practice form a feedback loop.",
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
    diagram: "polder-loop", diagramTitle: "Multi-stage polder drainage", diagramCaption: "Polder water is lifted through storage basins toward the river across managed levels.",
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
    diagram: "pumping-section", diagramTitle: "Polder pumping section", diagramCaption: "Mechanical energy lifts water from the low polder channel to the higher basin.",
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
    diagram: "storage-section", diagramTitle: "Dry use / storm event", diagramCaption: "Public basins shift from sports and gathering space to staged rainwater storage.",
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
    diagram: "surge-gate", diagramTitle: "Open channel / closed threshold", diagramCaption: "Two floating sector gates preserve navigation until a storm-surge decision closes the channel.",
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
    diagram: "lock-sequence", diagramTitle: "Urban lock sequence", diagramCaption: "Gates, chamber and changing water levels choreograph boats through the city system.",
    source: "https://www.rotterdam.nl/"
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

const diagramGeometry = {
  inundation: `<path d="M24 175H616"/><path class="water-fill" d="M206 142H590V175H206Z"/><path d="M118 175v-42h76v42m-38-42V83m-22 18h44"/><path d="M238 142v-32h26v32m-13-32V76"/><path class="flow" d="M292 126h214"/><circle cx="558" cy="126" r="9"/>`,
  "canal-section": `<path d="M24 170h172v-52h86v52h334"/><path class="water-fill" d="M282 132h168v38H282Z"/><path d="M450 170v-52h86v52M196 118h86m168 0h86"/><path d="M112 170v-82h84v82m340 0V88h72v82"/><path class="flow" d="M310 150h112"/>`,
  "ring-network": `<path d="M90 184c36-122 144-150 242-106 75 34 139 36 218-10"/><path d="M126 199c42-96 126-114 205-82 80 33 144 31 212-9"/><path d="M174 211c38-68 102-77 158-55 68 26 124 22 185-8"/><path class="flow" d="M74 48l468 162"/><path d="M210 68l-54 132m126-104-47 119m132-100-30 115m119-98-12 87"/>`,
  "stacked-section": `<path class="water-fill" d="M82 72h476v40H82Z"/><path d="M36 112h568M112 112v82h416v-82M112 153h416"/><path d="M154 129h92m44 0h92m44 0h58M154 171h92m44 0h92m44 0h58"/><path class="flow" d="M120 92h400"/>`,
  "floating-grid": `<path class="water-fill" d="M24 154h592v50H24Z"/><path d="M72 154v-54h92v54m32 0v-76h92v76m32 0v-62h92v62m32 0v-84h92v84"/><path d="M118 100V48m124 30V48m124 44V48m122 22V48"/><path class="flow" d="M44 178h544"/>`,
  "shared-jetty": `<path class="water-fill" d="M20 150h600v58H20Z"/><path d="M72 150v-54h82v54m44 0V76h82v74m44 0V92h82v58m44 0V70h82v80"/><path d="M112 166h400M156 166v28m84-28v28m84-28v28m84-28v28m60-28v28"/><circle cx="112" cy="166" r="7"/><circle cx="512" cy="166" r="7"/>`,
  "public-loop": `<path class="water-fill" d="M28 174h584v34H28Z"/><path d="M120 174V82l102-34 198 18 98 108"/><path d="M175 174V108l88-28 114 12 82 82"/><path class="flow" d="M88 184c76-90 122-99 180-65 66 39 106 15 174-30"/>`,
  "exchange-network": `<circle cx="320" cy="120" r="40"/><circle cx="108" cy="66" r="24"/><circle cx="108" cy="184" r="24"/><circle cx="532" cy="66" r="24"/><circle cx="532" cy="184" r="24"/><path d="M132 72l150 38M132 178l150-48M358 110l150-38M358 132l150 44"/><path class="flow" d="M156 120h116m96 0h116"/>`,
  "floating-section": `<path class="water-fill" d="M24 166h592v42H24Z"/><path d="M132 166v-76h376v76M170 90V58h300v32M220 58V34m200 24V34"/><path d="M112 166h416l-32 28H144Z"/><path class="flow" d="M178 180h284"/>`,
  "systems-matrix": `<path d="M86 52h468v140H86Z M242 52v140M398 52v140M86 98h468M86 146h468"/><circle cx="164" cy="75" r="10"/><circle cx="320" cy="122" r="10"/><circle cx="476" cy="169" r="10"/><path class="flow" d="M174 80l136 36m20 10 136 38"/>`,
  "adaptive-waterfront": `<path class="water-fill" d="M24 178h592v30H24Z"/><path d="M72 178V94h328v84M98 94V68h276v26M128 122h64v56m30-56h64v56m30-56h58v56"/><path d="M432 178V72m0 0c70 4 92 42 108 106"/><path class="flow" d="M412 190h158"/>`,
  "canal-network": `<path class="water-fill" d="M298 24h44v192h-44Z"/><path d="M56 62h242m44 0h242M56 120h242m44 0h242M56 178h242m44 0h242"/><path d="M88 42v40m70-40v40m70-40v40m184-40v40m70-40v40m70-40v40"/><path class="flow" d="M320 40v160"/>`,
  "polder-loop": `<path d="M28 180h160V142h132V102h132V62h160"/><path class="water-fill" d="M28 162h160v18H28Zm160-36h132v16H188Zm132-40h132v16H320Zm132-40h160v16H452Z"/><path class="flow" d="M92 148l78-18m76-18 58-18m74-18 58-18m74-18 74-12"/>`,
  "pumping-section": `<path d="M28 180h242V126h106V78h236"/><path class="water-fill" d="M28 154h242v26H28Zm348-100h236v24H376Z"/><circle cx="322" cy="126" r="38"/><path d="M322 88v76m-38-38h76m-65-27 54 54m0-54-54 54"/><path class="flow" d="M244 144h38m80-38h48"/>`,
  "storage-section": `<path d="M28 92h132l32 74h256l32-74h132"/><path class="water-fill" d="M188 138h264l-10 28H198Z"/><path class="flow" d="M66 70l90 16m418-16-90 16"/><path d="M248 166v34m72-34v34m72-34v34"/>`,
  "surge-gate": `<path class="water-fill" d="M24 158h592v50H24Z"/><path d="M52 158h118m300 0h118M170 158V84l96 74m204 0V84l-96 74"/><circle cx="170" cy="158" r="18"/><circle cx="470" cy="158" r="18"/><path class="flow" d="M218 184h204"/>`,
  "lock-sequence": `<path class="water-fill" d="M24 152h152v38H24Zm176-18h240v56H176Zm440 4h176v52H440Z"/><path d="M176 92v112m264-112v112M196 120h224"/><path class="flow" d="M60 170h78m72 0h194m72 0h90"/><path d="M164 104l24 18-24 18m264-18 24 18-24 18"/>`
};

function renderDiagram(site) {
  const geometry = diagramGeometry[site.diagram] || diagramGeometry["exchange-network"];
  return `<figure class="analysis-drawing">
    <div class="drawing-heading"><span>Analytical diagram</span><strong>${escapeHtml(site.diagramTitle)}</strong></div>
    <svg viewBox="0 0 640 240" role="img" aria-label="${escapeHtml(site.diagramTitle)}">${geometry}</svg>
    <figcaption>${escapeHtml(site.diagramCaption)} Original schematic, not to scale; not an architect's construction drawing.</figcaption>
  </figure>`;
}

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
      <div class="record-media">
        <figure class="record-photo">
          <img src="${site.image}" alt="${escapeHtml(site.imageAlt)}" />
          <figcaption><span>Field reference</span><a href="${site.imageSource}" target="_blank" rel="noreferrer">${escapeHtml(site.imageCredit)} ↗</a></figcaption>
        </figure>
        ${renderDiagram(site)}
      </div>
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
