const ALGAE_DATA = {
  "species": [
    {
      "num": 3,
      "name": "Acrosiphonia spp",
      "code": "AP",
      "category": "Green Algae",
      "layer": "Turf",
      "facts": [
        "3 species in BC, low intertidal",
        "On boulders and bedrock",
        "Bright to dark green mats/tufts of coarse, repeatedly branched filaments to ~6cm",
        "Several branches (vs. Cladophora's one main axis)"
      ],
      "confuse": "Cladophora (CL) \u2014 has one main axis, not several branches",
      "images": [
        "sp03_0.jpg",
        "sp03_1.jpg"
      ],
      "commonName": "Green Rope",
      "commonNameUncertain": false
    },
    {
      "num": 4,
      "name": "Cladophora spp",
      "code": "CL",
      "category": "Green Algae",
      "layer": "Turf",
      "facts": [
        "8 species in BC",
        "Mid-upper intertidal tide pools, up to 20cm long",
        "Green to light green; repeatedly branched from one main axis",
        "Often forms extensive mats"
      ],
      "confuse": "Acrosiphonia (AP) \u2014 has several branches, not one main axis",
      "images": [
        "sp04_0.jpg",
        "sp04_1.jpg"
      ],
      "commonName": "Blanket Weed",
      "commonNameUncertain": false
    },
    {
      "num": 5,
      "name": "Codium fragile",
      "code": "CF",
      "category": "Green Algae",
      "layer": "Turf",
      "facts": [
        "Low intertidal/subtidal, on bedrock and boulders",
        "Up to 30cm tall",
        "Spongy dark green cylindrical branches, 3-8mm wide, forking dichotomously",
        "Broad spongy holdfast"
      ],
      "confuse": null,
      "images": [
        "sp05_0.jpg",
        "sp05_1.jpg"
      ],
      "commonName": "Dead Man's Fingers",
      "commonNameUncertain": false
    },
    {
      "num": 6,
      "name": "Codium setchelli",
      "code": "CS",
      "category": "Green Algae",
      "layer": "Turf",
      "facts": [
        "Low intertidal, on rocks in very exposed locations",
        "Smooth, dark green spongy cushions, irregular shape",
        "Up to 25cm diameter, 15mm thick"
      ],
      "confuse": null,
      "images": [
        "sp06_0.jpg",
        "sp06_1.jpg"
      ],
      "commonName": "Green Spongy Cushion",
      "commonNameUncertain": false
    },
    {
      "num": 7,
      "name": "Derbesia marina",
      "code": "DG",
      "category": "Green Algae",
      "layer": "Turf",
      "facts": [
        "\"Green Sea Grapes\"",
        "Low intertidal to subtidal, exposed/semi-exposed",
        "Hollow spherical ball with short stalk, to 15mm diameter",
        "Green with darker (female) or yellowish (male) patches"
      ],
      "confuse": null,
      "images": [
        "sp07_0.jpg",
        "sp07_1.jpg"
      ],
      "commonName": "Green Sea Grapes",
      "commonNameUncertain": false
    },
    {
      "num": 8,
      "name": "Ulva, Monostroma, Ulvaria, Enteromorpha",
      "code": "UL",
      "category": "Green Algae",
      "layer": "Turf",
      "facts": [
        "One code for several species hard to tell apart underwater",
        "Leaves up to 1m, various shades of green, often with small holes",
        "Discoid holdfast, blades sometimes translucent"
      ],
      "confuse": null,
      "images": [
        "sp08_0.jpg",
        "sp08_1.jpg"
      ],
      "commonName": "Sea Lettuce / Gutweed",
      "commonNameUncertain": false
    },
    {
      "num": 9,
      "name": "Agarum spp",
      "code": "AG",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Genus code \u2014 2 species in BC",
        "Use only when too small to identify to species (see AB, AF)"
      ],
      "confuse": null,
      "images": [],
      "commonName": "Sea Colander",
      "commonNameUncertain": false
    },
    {
      "num": 10,
      "name": "Agarum clathratum",
      "code": "AB",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Formerly Agarum cribrosum",
        "Extreme low intertidal/subtidal, on rocks",
        "Single undivided brown blade, stiff, riddled with small holes",
        "Blade to 90cm x 50cm, indistinct broad midrib"
      ],
      "confuse": "A. fimbriatum (AF) \u2014 has fimbriations on its short stipe",
      "images": [
        "sp10_0.jpg",
        "sp10_1.jpg"
      ],
      "commonName": "Sea Colander",
      "commonNameUncertain": false
    },
    {
      "num": 11,
      "name": "Agarum fimbriatum",
      "code": "AF",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Subtidal rocks or wood",
        "Short stipe with fimbriations along the margins",
        "Massive circular-to-elliptical blade, bullate surface, up to 80cm x 26cm",
        "Distal end often tattered/torn"
      ],
      "confuse": "A. clathratum (AB) \u2014 no fimbriations on the stipe",
      "images": [
        "sp11_0.jpg",
        "sp11_1.jpg"
      ],
      "commonName": "Fringed Sea Colander",
      "commonNameUncertain": false
    },
    {
      "num": 12,
      "name": "Alaria spp",
      "code": "AL",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Genus code for Alaria",
        "Use only when too small to ID to species (see AM, AA)",
        "Blade tips are often eroded away"
      ],
      "confuse": null,
      "images": [],
      "commonName": "Winged Kelp",
      "commonNameUncertain": false
    },
    {
      "num": 13,
      "name": "Alaria marginata",
      "code": "AM",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Mid-low intertidal rocks",
        "Single terminal vegetative blade to 3m x 20cm",
        "Thick solid midrib ~12mm wide",
        "20-40 sporophylls, length < 5x width"
      ],
      "confuse": "A. nana (AA) \u2014 sporophyll length > 5x width, smaller overall",
      "images": [
        "sp13_0.jpg",
        "sp13_1.jpg"
      ],
      "commonName": "Winged Kelp",
      "commonNameUncertain": false
    },
    {
      "num": 14,
      "name": "Alaria nana",
      "code": "AA",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Mid intertidal, olive brown",
        "Thick stipe, thick strap-shaped sporophylls",
        "Sporophyll length > 5x width",
        "Short root-like holdfast, smaller than A. marginata"
      ],
      "confuse": "A. marginata (AM) \u2014 sporophyll length < 5x width, larger",
      "images": [
        "sp14_0.jpg",
        "sp14_1.jpg"
      ],
      "commonName": "Dwarf Winged Kelp",
      "commonNameUncertain": false
    },
    {
      "num": 15,
      "name": "Colpomenia spp",
      "code": "CP",
      "category": "Brown Algae",
      "layer": "Turf",
      "facts": [
        "Mostly low intertidal, on rocks or epiphytic",
        "Golden brown, globular, \u22657cm diameter",
        "Solid when young, hollow & thin-walled with age",
        "Clusters of colorless hairs on surface"
      ],
      "confuse": "Leathesia (LE) \u2014 more 'brain-like', Colpomenia is more sac-like",
      "images": [
        "sp15_0.jpg",
        "sp15_1.jpg"
      ],
      "commonName": "Oyster Thief",
      "commonNameUncertain": false
    },
    {
      "num": 16,
      "name": "Costaria costata",
      "code": "CO",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Low intertidal to upper subtidal, on rocks",
        "Single yellowish-to-chocolate-brown oval blade",
        "Up to 2m x 35cm",
        "Five parallel ribs \u2014 no other local alga has this feature"
      ],
      "confuse": null,
      "images": [
        "sp16_0.jpg",
        "sp16_1.jpg"
      ],
      "commonName": "Five-Ribbed Kelp",
      "commonNameUncertain": false
    },
    {
      "num": 17,
      "name": "Cystoseira germinata",
      "code": "CG",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Not common; low intertidal/upper subtidal, on rock",
        "Richly branched, yellowish brown, up to 5m tall",
        "Terminal branchlets carry oval pneumatocysts \u2014 single, paired, or short chains"
      ],
      "confuse": "Sargassum (SA) \u2014 pneumatocysts are always single",
      "images": [
        "sp17_0.jpg",
        "sp17_1.jpg"
      ],
      "commonName": "Northern Bladder Chain",
      "commonNameUncertain": false
    },
    {
      "num": 18,
      "name": "Cymathere triplicata",
      "code": "CY",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Low intertidal/upper subtidal, on rocks & cobbles",
        "Yellowish-to-reddish-brown blades, to 4m x 18cm",
        "Three rib-like folds down the center \u2014 unique feature",
        "Unusual sweet smell like cut cucumber"
      ],
      "confuse": null,
      "images": [
        "sp18_0.jpg",
        "sp18_1.jpg"
      ],
      "commonName": "Three-Ribbed Kelp",
      "commonNameUncertain": false
    },
    {
      "num": 19,
      "name": "Desmarestia spp",
      "code": "DE",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Genus code for Desmarestia \u2014 use species-specific codes instead",
        "Blades have branched \"veins\" down the center (unlike most brown algae)",
        "Known as acid kelp \u2014 contains sulphuric acid, bleaches when removed from water"
      ],
      "confuse": null,
      "images": [],
      "commonName": "Acid Weed",
      "commonNameUncertain": false
    },
    {
      "num": 20,
      "name": "Desmarestia aculeata",
      "code": "DA",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Extreme low intertidal/upper subtidal, on rock & cobble",
        "Up to 2m, dark brown, coarsely cylindrical/wiry",
        "Alternate or irregular branching (opposite in D. viridis)",
        "Stiffer & darker than D. viridis"
      ],
      "confuse": "D. viridis (DV) \u2014 softer, branches in opposite pairs",
      "images": [
        "sp20_0.jpg",
        "sp20_1.jpg"
      ],
      "commonName": "Witch's Hair",
      "commonNameUncertain": false
    },
    {
      "num": 21,
      "name": "Desmarestia foliacea",
      "code": "DF",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Subtidal rocks",
        "Light brown, membranous, brittle blades to 1m x 15cm",
        "Unbranched, thicker than other Desmarestia, conspicuous midrib with lateral veins"
      ],
      "confuse": null,
      "images": [
        "sp21_0.jpg"
      ],
      "commonName": "Broad Acid Kelp",
      "commonNameUncertain": true
    },
    {
      "num": 22,
      "name": "Desmarestia ligulata",
      "code": "DL",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Extreme low intertidal/subtidal, flattened & highly branched",
        "Golden to olive-brown, blades to 80cm",
        "Central axis < 2cm wide with conspicuous midrib",
        "Side branches narrower & opposite"
      ],
      "confuse": "D. munda (DM) \u2014 central axis is wider (>2cm)",
      "images": [
        "sp22_0.jpg",
        "sp22_1.jpg"
      ],
      "commonName": "Sea Sorrel",
      "commonNameUncertain": false
    },
    {
      "num": 23,
      "name": "Desmarestia munda",
      "code": "DM",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Subtidal, up to 8m long",
        "Discoid holdfast ~4cm diameter",
        "Central axis >2cm wide; branches at least as wide as axis",
        "Not profusely branched"
      ],
      "confuse": "D. ligulata (DL) \u2014 central axis is narrower (<2cm)",
      "images": [
        "sp23_0.jpg",
        "sp23_1.jpg"
      ],
      "commonName": "Coarse Acid Kelp",
      "commonNameUncertain": true
    },
    {
      "num": 24,
      "name": "Desmarestia viridis",
      "code": "DV",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Extreme low intertidal & subtidal to 45m, on rocks",
        "Up to 120cm, light brown often with greenish areas",
        "Side branches mostly in opposite pairs",
        "More finely branched & softer than D. aculeata"
      ],
      "confuse": "D. aculeata (DA) \u2014 stiffer, darker, alternate branching",
      "images": [
        "sp24_0.jpg",
        "sp24_1.jpg"
      ],
      "commonName": "Stringy Acid Weed",
      "commonNameUncertain": false
    },
    {
      "num": 25,
      "name": "Dictyoneurum californicum",
      "code": "DN",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Note: code changed from DY",
        "Uncommon; extreme low intertidal to 10m, exposed habitats",
        "Blades to 3m with honeycomb/net-like pattern of veins"
      ],
      "confuse": null,
      "images": [
        "sp25_0.jpg",
        "sp25_1.jpg"
      ],
      "commonName": "Net-of-Cords Kelp",
      "commonNameUncertain": false
    },
    {
      "num": 26,
      "name": "Dictyota binghamiae",
      "code": "DB",
      "category": "Brown Algae",
      "layer": "Turf",
      "facts": [
        "Subtidal to 30m, on rocks",
        "Delicate, erect branched blades lacking midribs",
        "Light brown distally, darker near base",
        "Up to 35cm tall, blades up to 1.5cm wide"
      ],
      "confuse": null,
      "images": [
        "sp26_0.jpg",
        "sp26_1.jpg"
      ],
      "commonName": "Mermaid's Gloves",
      "commonNameUncertain": false
    },
    {
      "num": 27,
      "name": "Egregia menziesii",
      "code": "EG",
      "category": "Brown Algae",
      "layer": "Understory or Canopy",
      "facts": [
        "Mid-intertidal to subtidal (to 20m), on rock",
        "To 15m long, dark brown to olive green",
        "Massive branched holdfast to 25cm",
        "Flattened stipe fringed with small blades & pneumatocysts"
      ],
      "confuse": null,
      "images": [
        "sp27_0.jpg",
        "sp27_1.jpg"
      ],
      "commonName": "Feather Boa Kelp",
      "commonNameUncertain": false
    },
    {
      "num": 28,
      "name": "Eisenia arborea",
      "code": "EI",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Low intertidal to shallow subtidal, uncommon",
        "To 1.5m, stipe split into \"Y\" shape \u2014 resembles a palm tree",
        "Blades deeply/irregularly furrowed with toothed margins, up to 60cm x 5cm",
        "Profusely branched root-like holdfast"
      ],
      "confuse": "Postelsia (no code) \u2014 shorter, greener, intertidal high-exposure",
      "images": [
        "sp28_0.jpg",
        "sp28_1.jpg"
      ],
      "commonName": "Southern Sea Palm",
      "commonNameUncertain": false
    },
    {
      "num": 29,
      "name": "Fucus distichus (F. gardneri)",
      "code": "FU",
      "category": "Brown Algae",
      "layer": "Turf",
      "facts": [
        "Mid (occ. high) to low intertidal, sheltered to semi-exposed",
        "Flattened blades to 50cm x 15mm",
        "Branch dichotomously, air bladders at maturity",
        "Distinct midrib"
      ],
      "confuse": "Pelvetiopsis (PV) \u2014 lacks a midrib",
      "images": [
        "sp29_0.jpg",
        "sp29_1.jpg"
      ],
      "commonName": "Rockweed",
      "commonNameUncertain": false
    },
    {
      "num": 30,
      "name": "Laminaria farlowii",
      "code": "LF",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Subtidal, uncommon (Southern BC/Gulf Islands)",
        "Large unbranched blade to 5m (usually <1m)",
        "Blade covered in small wrinkled depressions (bullae)",
        "Branched holdfast, short 4-7cm stipe"
      ],
      "confuse": null,
      "images": [
        "sp30_0.jpg",
        "sp30_1.jpg"
      ],
      "commonName": "Sea Rods",
      "commonNameUncertain": false
    },
    {
      "num": 31,
      "name": "Laminaria setchelii",
      "code": "LT",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Low intertidal to upper subtidal, exposed habitats, on rock",
        "Dark brown blade splits longitudinally, to 2m x 40cm",
        "Stipe to 60cm x 15mm, unbranched, stiff, flattened near blade",
        "No midrib; branched haptera holdfast"
      ],
      "confuse": "Pterygophora (PT) \u2014 blades arise from sides of stipe, usually taller",
      "images": [
        "sp31_0.jpg",
        "sp31_1.jpg"
      ],
      "commonName": "Split Kelp",
      "commonNameUncertain": false
    },
    {
      "num": 32,
      "name": "Laminaria yezoensis",
      "code": "LY",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Extreme low intertidal/subtidal, semi-protected to exposed, uncommon",
        "Medium to dark brown",
        "Large disc/suction-cup holdfast (like L. ephemera)",
        "Stipe to 1m, blade nearly as wide as long"
      ],
      "confuse": null,
      "images": [
        "sp32_0.jpg",
        "sp32_1.jpg"
      ],
      "commonName": "Yezo Kelp",
      "commonNameUncertain": true
    },
    {
      "num": 33,
      "name": "Saccharina sessilis",
      "code": "HE",
      "category": "Brown Algae",
      "layer": "Turf or Understory",
      "facts": [
        "Formerly Hedophyllum sessile; includes Saccharina druehlii",
        "Mid-low intertidal rocks, exposed to semi-protected",
        "Up to 1.5m x 80cm, stipe-less blades from holdfast",
        "Medium-dark brown, blistered/puckered appearance"
      ],
      "confuse": null,
      "images": [
        "sp33_0.jpg",
        "sp33_1.jpg"
      ],
      "commonName": "Sea Cabbage",
      "commonNameUncertain": false
    },
    {
      "num": 34,
      "name": "Saccharina groenlandica",
      "code": "LG",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Note: code changed from LB",
        "Formerly Laminaria groenlandica",
        "Low intertidal to subtidal, up to 2m",
        "Short, somewhat flattened stipe; blade often split toward end"
      ],
      "confuse": "S. latissima (LS) \u2014 has 2 rows of ripples, L. setchellii has a long stipe",
      "images": [
        "sp34_0.jpg",
        "sp34_1.jpg"
      ],
      "commonName": "Greenland Kelp",
      "commonNameUncertain": true
    },
    {
      "num": 35,
      "name": "Saccharina latissima",
      "code": "LS",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Formerly Laminaria saccharina",
        "Low intertidal/subtidal (to 30m), protected to semi-protected",
        "Up to 3.5m long, \u226518cm wide, rich brown",
        "Two rows of ripples/puckers, no midrib"
      ],
      "confuse": "S. groenlandica (LG) lacks ripples; Pleurophycus (PL) has a midrib",
      "images": [
        "sp35_0.jpg",
        "sp35_1.jpg"
      ],
      "commonName": "Sugar Kelp",
      "commonNameUncertain": false
    },
    {
      "num": 36,
      "name": "Leathesia difformis",
      "code": "LE",
      "category": "Brown Algae",
      "layer": "Turf",
      "facts": [
        "Upper-mid to low intertidal, on rocks or epiphytic",
        "Yellowish-brown, hollow, globular/convoluted, grapefruit-sized",
        "Disintegrates into filaments when pressed",
        "Smaller & more 'brain-like' than Colpomenia"
      ],
      "confuse": "Colpomenia (CP) \u2014 larger, more sac-like",
      "images": [
        "sp36_0.jpg",
        "sp36_1.jpg"
      ],
      "commonName": "Sea Cauliflower",
      "commonNameUncertain": false
    },
    {
      "num": 37,
      "name": "Lessoniopsis littoralis",
      "code": "LO",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Low intertidal, extremely exposed rocks",
        "Dark brown to almost black, up to 2m tall",
        "Huge conical holdfast (to 20cm) with several woody stipes",
        "Up to 500 narrow blades per individual"
      ],
      "confuse": null,
      "images": [
        "sp37_0.jpg",
        "sp37_1.jpg"
      ],
      "commonName": "Strap Kelp",
      "commonNameUncertain": false
    },
    {
      "num": 38,
      "name": "Macrocystis pyrifera",
      "code": "MA",
      "category": "Brown Algae",
      "layer": "Canopy",
      "facts": [
        "Formerly M. integrifolia; subtidal, up to 30m",
        "Light yellowish-brown, wrinkled blades to 50cm x 20cm",
        "Blade margins have regular teeth",
        "Small pneumatocyst at base of each blade; several stipes per holdfast"
      ],
      "confuse": null,
      "images": [
        "sp38_0.jpg",
        "sp38_1.jpg"
      ],
      "commonName": "Giant Kelp",
      "commonNameUncertain": false
    },
    {
      "num": 39,
      "name": "Nereocystis luetkeana",
      "code": "NT",
      "category": "Brown Algae",
      "layer": "Canopy",
      "facts": [
        "Mostly subtidal to ~20m",
        "Stipes to 10m+ long",
        "Single large pneumatocyst with two bunches of up to 64 blades",
        "Blades up to 10m x 15cm"
      ],
      "confuse": null,
      "images": [
        "sp39_0.jpg",
        "sp39_1.jpg"
      ],
      "commonName": "Bull Kelp",
      "commonNameUncertain": false
    },
    {
      "num": 40,
      "name": "Pelvetiopsis limitata",
      "code": "PV",
      "category": "Brown Algae",
      "layer": "Turf",
      "facts": [
        "Upper intertidal, rocks in strong surf",
        "Up to 8cm tall, dichotomously branched, no central axis",
        "Branches mostly in one plane",
        "Lacks midrib seen in Fucus"
      ],
      "confuse": "Fucus (FU) \u2014 has a distinct midrib",
      "images": [
        "sp40_0.jpg",
        "sp40_1.jpg"
      ],
      "commonName": "Dwarf Rockweed",
      "commonNameUncertain": false
    },
    {
      "num": 41,
      "name": "Pleurophycus gardneri",
      "code": "PL",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Extreme low intertidal/upper subtidal",
        "Dark brown blade to 150cm x 28cm, little puckers near midrib",
        "Broad thick midrib up to 5cm wide",
        "Highly branched holdfast"
      ],
      "confuse": "S. latissima (LS) \u2014 lacks a midrib",
      "images": [
        "sp41_0.jpg",
        "sp41_1.jpg"
      ],
      "commonName": "Gardner's Kelp",
      "commonNameUncertain": false
    },
    {
      "num": 43,
      "name": "Pterygophora californica",
      "code": "PT",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Mostly subtidal, 7-20m, on rock/boulders/cobble",
        "Up to 2.3m tall, unbranched stipe (1.5m) to single terminal blade",
        "5-10 lateral blades per side, narrowly attached along stipe edges",
        "Stipe cylindrical at base, flattens where blades attach"
      ],
      "confuse": "L. setchellii (LT) \u2014 shorter, blades arise from stipe top",
      "images": [
        "sp43_0.jpg",
        "sp43_1.jpg"
      ],
      "commonName": "Stalked Kelp",
      "commonNameUncertain": false
    },
    {
      "num": 44,
      "name": "Sargassum muticum",
      "code": "SA",
      "category": "Brown Algae",
      "layer": "Understory",
      "facts": [
        "Low intertidal to ~5m, up to 2m tall",
        "Golden brown, lanceolate toothed blades, larger near base",
        "Small pneumatocysts occurring singly",
        "Tough, wiry, bushy; discoidal holdfast"
      ],
      "confuse": "Cystoseira germinata (CG) \u2014 pneumatocysts paired/in chains",
      "images": [
        "sp44_0.jpg",
        "sp44_1.jpg"
      ],
      "commonName": "Japanese Wireweed",
      "commonNameUncertain": false
    },
    {
      "num": 45,
      "name": "Scytosiphon lomentaria",
      "code": "SL",
      "category": "Brown Algae",
      "layer": "Turf",
      "facts": [
        "Mid-low intertidal rocks",
        "Olive-to-dark brown, erect tubular clusters up to 50cm tall",
        "Discoidal holdfast",
        "Tubes unbranched, larger ones constricted at intervals"
      ],
      "confuse": null,
      "images": [
        "sp45_0.jpg",
        "sp45_1.jpg"
      ],
      "commonName": "Sausage Weed",
      "commonNameUncertain": false
    },
    {
      "num": 46,
      "name": "Articulated coralline algae",
      "code": "AC",
      "category": "Red Algae",
      "layer": "Turf",
      "facts": [
        "General code for all articulated coralline algae species"
      ],
      "confuse": null,
      "images": [
        "sp46_0.jpg",
        "sp46_1.jpg"
      ],
      "commonName": "Coral Weed",
      "commonNameUncertain": false
    },
    {
      "num": 47,
      "name": "Botryocladia pseudodichotoma",
      "code": "BP",
      "category": "Red Algae",
      "layer": "Turf",
      "facts": [
        "\"Red Sea Grapes\"; subtidal, on rocks and other algae",
        "10-30cm tall, rose-red, irregular dichotomous branching",
        "Branches end in mucilage-filled pyriform/spherical sacs (4-7cm x 6-25mm)"
      ],
      "confuse": null,
      "images": [
        "sp47_0.jpg"
      ],
      "commonName": "Red Sea Grapes",
      "commonNameUncertain": false
    },
    {
      "num": 48,
      "name": "Constantinea spp",
      "code": "CN",
      "category": "Red Algae",
      "layer": "Turf",
      "facts": [
        "3 species in BC",
        "Low intertidal/upper subtidal rocks",
        "Dark red, saucer-shaped blade to 30cm, tears into wedge-shaped sections",
        "Conspicuously veined undersides"
      ],
      "confuse": null,
      "images": [
        "sp48_0.jpg",
        "sp48_1.jpg"
      ],
      "commonName": "Cup and Saucer",
      "commonNameUncertain": false
    },
    {
      "num": 49,
      "name": "Cryptopleura spp / Polyneura spp",
      "code": "CR",
      "category": "Red Algae",
      "layer": "Turf",
      "facts": [
        "Low intertidal/subtidal to 30m, on rocks",
        "Rose-red to purplish-red, flattened erect blades to 20cm, fan-shaped",
        "Deeply cleft into elongated, narrowing lobes",
        "Frilly margins, visible veins, often in dense clumps"
      ],
      "confuse": null,
      "images": [
        "sp49_0.jpg",
        "sp49_1.jpg"
      ],
      "commonName": "Grape Tongue",
      "commonNameUncertain": false
    },
    {
      "num": 50,
      "name": "Gloiocladia spp",
      "code": "FA",
      "category": "Red Algae",
      "layer": "Turf",
      "facts": [
        "2 species in BC; formerly Fauchea spp",
        "Low intertidal to subtidal",
        "Deep red with bluish iridescent sheen",
        "Thin soft leafy blades to 12cm, dichotomously branched, fan-shaped"
      ],
      "confuse": null,
      "images": [
        "sp50_0.jpg",
        "sp50_1.jpg"
      ],
      "commonName": "Blue Branching Seaweed",
      "commonNameUncertain": false
    },
    {
      "num": 51,
      "name": "Chondracanthus spp",
      "code": "GI",
      "category": "Red Algae",
      "layer": "Turf",
      "facts": [
        "3 species in BC; formerly Gigartina spp",
        "Low intertidal/subtidal to 18m",
        "Single erect blade to 50cm+ x 20cm, dark red to purple when young, iridescent wet",
        "Surface covered in small outgrowths \u2014 like a thick bath towel"
      ],
      "confuse": null,
      "images": [
        "sp51_0.jpg",
        "sp51_1.jpg"
      ],
      "commonName": "Turkish Towel",
      "commonNameUncertain": false
    },
    {
      "num": 52,
      "name": "Gracilaria spp / Sarcodiotheca spp",
      "code": "GR",
      "category": "Red Algae",
      "layer": "Turf",
      "facts": [
        "Mid intertidal to subtidal, on rocks or partially buried in mud/sand",
        "Gracilaria: sparse slender branching, uniform thickness, to 1m, brown-to-deep-red",
        "Sarcodiotheca: cylindrical fleshy branches, pointed tips, tree-shaped",
        "Disc holdfast"
      ],
      "confuse": null,
      "images": [
        "sp52_0.jpg",
        "sp52_1.jpg"
      ],
      "commonName": "Ogo / Red String Seaweed",
      "commonNameUncertain": false
    },
    {
      "num": 53,
      "name": "Halosaccion glandiforme",
      "code": "HA",
      "category": "Red Algae",
      "layer": "Turf",
      "facts": [
        "Mid intertidal rocks, often with Leathesia difformis",
        "Almost-perfect ellipsoid, up to ~15cm high x 2cm wide",
        "Young \"Sea Sacs\" bright purplish red, bleach to pale yellow with age"
      ],
      "confuse": null,
      "images": [
        "sp53_0.jpg",
        "sp53_1.jpg"
      ],
      "commonName": "Sea Sac",
      "commonNameUncertain": false
    },
    {
      "num": 54,
      "name": "Mazzaella spp",
      "code": "IR",
      "category": "Red Algae",
      "layer": "Turf",
      "facts": [
        "Formerly Iridea spp; 15 species in BC",
        "Intertidal/upper subtidal, semi-protected to exposed",
        "Thick blades up to 120cm (some only to 4cm); stipe to 6cm",
        "Yellowish-green to reddish/dark purple; iridescent, oily-looking sheen"
      ],
      "confuse": null,
      "images": [
        "sp54_0.jpg",
        "sp54_1.jpg"
      ],
      "commonName": "Iridescent Seaweed",
      "commonNameUncertain": false
    },
    {
      "num": 55,
      "name": "Neorhodomela spp",
      "code": "NA",
      "category": "Red Algae",
      "layer": "Turf",
      "facts": [
        "3 species in BC; recorded as RB by most divers before 2018",
        "Mid-low intertidal, on rocks",
        "Coarse thallus to 30cm, black to reddish/brownish-black to yellowish-brown",
        "Main axes with abundant short, radially-arranged branches"
      ],
      "confuse": null,
      "images": [
        "sp55_0.jpg",
        "sp55_1.jpg"
      ],
      "commonName": "Black Pine",
      "commonNameUncertain": false
    },
    {
      "num": 56,
      "name": "Opuntiella californica",
      "code": "OP",
      "category": "Red Algae",
      "layer": "Turf",
      "facts": [
        "Lowest intertidal/subtidal, exposed locations",
        "Named after Prickly Pear Cactus \u2014 \"cactus\" appearance",
        "Primary blade to 15cm diameter, whole alga to 20cm x 30cm",
        "Tough texture, dark red, small disc holdfast"
      ],
      "confuse": null,
      "images": [
        "sp56_0.jpg",
        "sp56_1.jpg"
      ],
      "commonName": "Prickly Pear Seaweed",
      "commonNameUncertain": false
    },
    {
      "num": 57,
      "name": "Porphyra spp",
      "code": "PO",
      "category": "Red Algae",
      "layer": "Turf",
      "facts": [
        "2 species in BC",
        "Low intertidal/upper subtidal, on rocks/dead shells, may be epiphytic",
        "Leaves to 1m, uniformly bright pink to reddish, paler & deeply ruffled margins",
        "Very thin"
      ],
      "confuse": "Palmaria mollis or other red foliose algae",
      "images": [
        "sp57_0.jpg",
        "sp57_1.jpg"
      ],
      "commonName": "Nori / Laver",
      "commonNameUncertain": false
    },
    {
      "num": 58,
      "name": "Prionitis spp",
      "code": "PR",
      "category": "Red Algae",
      "layer": "Turf",
      "facts": [
        "4 species in BC",
        "Low intertidal to subtidal (to 30m), semi-protected to exposed",
        "Red to reddish-purple to brownish-red to yellowish (yellow usually high intertidal)",
        "Flattened branches to 50cm tall, ~8mm wide, irregular dichotomous forking"
      ],
      "confuse": null,
      "images": [
        "sp58_0.jpg",
        "sp58_1.jpg"
      ],
      "commonName": "Bleach Weed",
      "commonNameUncertain": false
    },
    {
      "num": 59,
      "name": "Sparlingia pertusa",
      "code": "SU",
      "category": "Red Algae",
      "layer": "Turf",
      "facts": [
        "Low intertidal to subtidal, on rocks, semi-exposed to exposed",
        "Rose-red to yellowish-red (esp. at tip)",
        "Single blade to 60cm x 20cm, narrows to small disc holdfast",
        "Blade perforated with numerous small holes"
      ],
      "confuse": null,
      "images": [
        "sp59_0.jpg",
        "sp59_1.jpg"
      ],
      "commonName": "Red Eyelet Silk",
      "commonNameUncertain": false
    },
    {
      "num": 60,
      "name": "Phyllospadix spp",
      "code": "PH",
      "category": "Sea Grasses",
      "layer": "Understory",
      "facts": [
        "3 species in BC",
        "Mid intertidal to shallow subtidal, medium-full exposure, on rocks/bedrock",
        "Unbranched leaf blades to 2m x 8mm, from slender rhizomes"
      ],
      "confuse": null,
      "images": [
        "sp60_0.jpg",
        "sp60_1.jpg"
      ],
      "commonName": "Surfgrass",
      "commonNameUncertain": false
    },
    {
      "num": 61,
      "name": "Zostera spp",
      "code": "ZO",
      "category": "Sea Grasses",
      "layer": "Understory",
      "facts": [
        "2 species in BC",
        "Low intertidal to shallow subtidal, sheltered habitats, in mud or sand",
        "Green leaf blades to 2m x 12mm"
      ],
      "confuse": null,
      "images": [
        "sp61_0.jpg",
        "sp61_1.jpg"
      ],
      "commonName": "Eelgrass",
      "commonNameUncertain": false
    },
    {
      "num": 62,
      "name": "Beggiatoa sp",
      "code": "BT",
      "category": "Others",
      "layer": "Turf",
      "facts": [
        "White bacterial mats",
        "Grows on soft substrates (sand/mud), sometimes on algae (esp. drift algae)"
      ],
      "confuse": null,
      "images": [
        "sp62_0.jpg",
        "sp62_1.jpg"
      ],
      "commonName": "Sulfur Bacteria Mat",
      "commonNameUncertain": false
    },
    {
      "num": 63,
      "name": "Diatom mats",
      "code": "BH",
      "category": "Others",
      "layer": "Turf",
      "facts": [
        "Often mistaken for filamentous brown seaweed",
        "No true filaments or branching \u2014 breaks apart easily when rolled between fingers",
        "Often grows over sand, rock, or algae"
      ],
      "confuse": null,
      "images": [
        "sp63_0.jpg",
        "sp63_1.jpg"
      ],
      "commonName": "Diatom Film",
      "commonNameUncertain": false
    }
  ],
  "generalCodes": [
    {
      "code": "BB",
      "name": "Brown Branched",
      "desc": "Brown, tree-like branching morphology \u2014 used when not identified to species"
    },
    {
      "code": "GB",
      "name": "Green Branched",
      "desc": "Green, tree-like branching morphology \u2014 used when not identified to species"
    },
    {
      "code": "RB",
      "name": "Red Branched",
      "desc": "Red, tree-like branching morphology \u2014 used when not identified to species"
    },
    {
      "code": "BF",
      "name": "Brown Foliose",
      "desc": "Brown, leaf-like morphology \u2014 used when not identified to species"
    },
    {
      "code": "GF",
      "name": "Green Foliose",
      "desc": "Green, leaf-like morphology \u2014 used when not identified to species"
    },
    {
      "code": "RF",
      "name": "Red Foliose",
      "desc": "Red, leaf-like morphology \u2014 used when not identified to species"
    },
    {
      "code": "BH",
      "name": "Brown Filamentous",
      "desc": "Brown, hair-like morphology \u2014 includes diatom mats"
    },
    {
      "code": "GH",
      "name": "Green Filamentous",
      "desc": "Green, hair-like morphology \u2014 used when not identified to species"
    },
    {
      "code": "RH",
      "name": "Red Filamentous",
      "desc": "Red, hair-like morphology \u2014 used when not identified to species"
    }
  ]
};
