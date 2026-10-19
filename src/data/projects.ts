export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  categoryKey: 'landscape-design' | 'garden-design' | 'hardscaping' | 'outdoor-living' | 'lawn-transformation';
  location: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  designObjectives: string[];
  keyFeatures: string[];
  materials: string[];
  completionTime: string;
  heroImage: string;
  galleryImages: string[];
  metrics: { label: string; value: string }[];
}

export const projectsData: ProjectItem[] = [
  {
    slug: 'modern-backyard-transformation',
    title: 'Modern Backyard Transformation',
    category: 'Outdoor Living',
    categoryKey: 'outdoor-living',
    location: 'Davis Islands, Tampa, FL',
    shortDescription:
      'A seamless transition from indoor modern architecture to an architectural outdoor sanctuary with silver travertine, custom pergola, and night lighting.',
    overview:
      'This signature waterfront transformation on Davis Islands replaces an uninspired turf lawn with clean-lined silver travertine paving, a cantilevered steel pergola, integrated linear gas fire feature, and layered architectural palms that maximize bay breezes.',
    challenge:
      'High coastal water table, intense afternoon sun exposure, and strict municipal setback requirements requiring specialized zero-runoff permeable drainage.',
    solution:
      'Engineered sub-surface gravel reservoirs beneath permeable travertine pavers, paired with heat-tolerant Sylvester palms and motorized louvered roof systems for rain protection.',
    designObjectives: [
      'Create distinct dining, lounging, and poolside entertainment zones',
      'Integrate architectural lighting for evening entertaining',
      'Preserve sightlines toward the water while ensuring privacy from neighboring homes',
      'Select salt-tolerant subtropical plants requiring zero synthetic chemical inputs',
    ],
    keyFeatures: [
      '1,800 sq ft unfilled brushed silver travertine pool deck',
      'Motorized architectural pergola with integrated downlights & rain sensors',
      'Custom linear gas fire pit with lava rock and basalt stone coping',
      'Specimen Bismarck palms and architectural white bird of paradise borders',
      'Smart 2700K low-voltage brass landscape lighting system',
    ],
    materials: [
      'Silver Travertine Pavers (French Pattern & Large Format)',
      'Black Powder-Coated Marine-Grade Aluminum',
      'Honed Charcoal Basalt Stone Coping',
      'FX Luminaire Solid Brass Warm LED Fixtures',
    ],
    completionTime: '8 Weeks',
    heroImage:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    ],
    metrics: [
      { label: 'Hardscape Area', value: '2,200 sq ft' },
      { label: 'Native Palms', value: '14 Specimens' },
      { label: 'Lighting Zones', value: '6 Smart Zones' },
      { label: 'Drainage Capacity', value: '100% Permeable' },
    ],
  },
  {
    slug: 'tropical-front-garden',
    title: 'Tropical Front Garden',
    category: 'Garden Design',
    categoryKey: 'garden-design',
    location: 'Hyde Park, Tampa, FL',
    shortDescription:
      'A lush multi-tiered botanical front entrance blending historic historic bungalow charm with architectural tropical textures and stone steppers.',
    overview:
      'A high-impact street appeal transformation in Tampa’s historic Hyde Park neighborhood. The design replaces overgrown hedges with sculptural Foxtail palms, clumping bamboo privacy screens, native coontie, and warm limestone stepping paths set in river rock.',
    challenge:
      'A tight shaded street frontage bordered by mature grand live oaks competing for moisture and sunlight, creating patchy soil and root obstructions.',
    solution:
      'Specially blended shade-tolerant subtropical understory plantings, custom raised corten steel planters to protect oak roots, and micro-drip irrigation.',
    designObjectives: [
      'Elevate curb appeal without clashing with the historic neighborhood character',
      'Design a welcoming, resort-inspired pedestrian arrival path',
      'Address deep root competition from century-old canopy oaks',
      'Provide privacy from street traffic using organic green screening',
    ],
    keyFeatures: [
      'Limestone rectilinear stepping stones bordered by Mexican beach pebbles',
      'Architectural specimen Foxtail palms and Cardboard cycads',
      'Low-profile corten steel edging retaining enriched organic soil',
      'Subtle brass pathway and tree canopy uplighting',
    ],
    materials: [
      'Indiana Limestone Flamed Finish Pavers',
      'Mexican Beach Pebbles & River Rock',
      '1/4" Weathering Corten Steel Planter Walls',
      'Triple-Shredded Pine Bark Organic Mulch',
    ],
    completionTime: '4 Weeks',
    heroImage:
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=1200&q=80',
    ],
    metrics: [
      { label: 'Plant Species', value: '28 Varieties' },
      { label: 'Water Savings', value: '45% Reduction' },
      { label: 'Walkway Length', value: '65 Linear Ft' },
      { label: 'Shade Tolerance', value: 'High Canopy' },
    ],
  },
  {
    slug: 'contemporary-stone-patio',
    title: 'Contemporary Stone Patio',
    category: 'Hardscaping',
    categoryKey: 'hardscaping',
    location: 'Palma Ceia, Tampa, FL',
    shortDescription:
      'A minimalist outdoor terrace crafted with large-format bluestone pavers, integrated seating benches, and flush zero-threshold doorways.',
    overview:
      'Showcasing contemporary precision hardscaping in Palma Ceia. The project centers around an expansive entertainment terrace featuring clean orthogonal geometry, integrated seating walls with recessed LED lighting, and lush turf joints.',
    challenge:
      'Existing concrete patio had shifted unevenly due to Tampa’s sandy subsoil and poor drainage slope, causing puddling against the home’s foundation.',
    solution:
      'Excavated down 14 inches, installed geotextile soil stabilization fabric, open-graded crushed aggregate base, and channel drains hidden beneath the paver joints.',
    designObjectives: [
      'Achieve a true flush-floor threshold between the interior living room and terrace',
      'Incorporate permanent stone bench seating for large social gatherings',
      'Ensure zero standing water during Florida’s intense 3-inch/hour summer downpours',
      'Complement modern mid-century residential architecture',
    ],
    keyFeatures: [
      '24" x 36" thermal bluestone pavers on precision aggregate base',
      'Concealed linear slot drains connected to sub-surface dry wells',
      'Floating cedar bench seats anchored into stacked stone retaining walls',
      'Architectural podocarpus privacy hedges along property perimeter',
    ],
    materials: [
      'Pennsylvania Thermal-Finished Bluestone',
      'Stacked Gray Slate Veneer',
      'Western Red Cedar Timber Tops',
      'Heavy-Gauge Polymeric Joint Binder',
    ],
    completionTime: '5 Weeks',
    heroImage:
      'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80',
    ],
    metrics: [
      { label: 'Paver Area', value: '1,450 sq ft' },
      { label: 'Built-in Seating', value: '32 Linear Ft' },
      { label: 'Drainage Rate', value: 'Zero Puddling' },
      { label: 'Base Depth', value: '10" Compacted' },
    ],
  },
  {
    slug: 'florida-garden-refresh',
    title: 'Florida Garden Refresh',
    category: 'Landscape Design',
    categoryKey: 'landscape-design',
    location: 'Carrollwood, Tampa, FL',
    shortDescription:
      'A revitalized subtropical paradise featuring native drought-tolerant species, restored organic soil health, and micro-spray irrigation.',
    overview:
      'A showcase of Florida-Friendly botanical revitalization in Carrollwood. Dated, overgrown ficus hedges and failing turf were replaced with layered native firebush, coontie, ginger, and colorful crotons, framed by deep dark mulch and boulder accents.',
    challenge:
      'Tired depleted sandy soil, high irrigation bills, and aggressive invasive weeds that overwhelmed the previous homeowner’s landscaping.',
    solution:
      'Complete soil remediation with organic compost and mycorrhizal inoculants, multi-layered weed barriers, and smart soil moisture sensor conversion.',
    designObjectives: [
      'Drastically reduce weekly maintenance and irrigation water consumption',
      'Attract native butterflies and hummingbirds with pollinator-friendly Florida blooms',
      'Create year-round visual texture and vibrant seasonal color shifts',
      'Incorporate natural fieldstone boulders as architectural anchor points',
    ],
    keyFeatures: [
      'Florida-Friendly Landscaping™ certified plant selections',
      'Smart WiFi-enabled weather-adjusting irrigation controller',
      'Locally sourced Tennessee fieldstone landscape boulders',
      'Premium triple-ground pine straw mulch retaining moisture',
    ],
    materials: [
      'Organic Leaf-Compost Soil Conditioning',
      'Tennessee Fieldstone Landscape Boulders',
      'Hunter Hydrawise Smart WiFi Controller',
      'Commercial Non-Woven Geotextile Weed Barrier',
    ],
    completionTime: '3 Weeks',
    heroImage:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80',
    ],
    metrics: [
      { label: 'Water Reduction', value: '55% Monthly' },
      { label: 'Native Varieties', value: '18 Florida Species' },
      { label: 'Compost Applied', value: '30 Cu. Yards' },
      { label: 'Maintenance Rating', value: 'Low Effort' },
    ],
  },
  {
    slug: 'outdoor-entertaining-space',
    title: 'Outdoor Entertaining Space',
    category: 'Outdoor Living',
    categoryKey: 'outdoor-living',
    location: 'South Tampa, FL',
    shortDescription:
      'A complete backyard resort with an outdoor chef’s kitchen, dining pavilion, ambient perimeter sound, and integrated landscape lighting.',
    overview:
      'The pinnacle of residential outdoor entertaining in South Tampa. Features a full outdoor kitchen island faced in stacked travertine, a natural gas grill, quartz countertops, covered dining pavilion, and warm night illumination.',
    challenge:
      'Intense summer humidity, sudden afternoon squalls, and proximity to neighbor boundaries requiring acoustic and visual buffering.',
    solution:
      'Designed an insulated aluminum pavilion with ceiling fans and gutters, matched with dense clumping bamboo perimeter barriers for quiet privacy.',
    designObjectives: [
      'Build a durable luxury outdoor kitchen that resists coastal corrosion',
      'Provide comfortable covered dining during both rain showers and sunny afternoons',
      'Incorporate acoustic dampening landscaping for privacy during events',
      'Integrate seamless lighting scenes for cocktails, dining, and late-night lounge',
    ],
    keyFeatures: [
      'Marine-grade stainless outdoor kitchen with 42" built-in gas grill and beverage cooler',
      'Covered tongue-and-groove cypress wood ceiling pavilion with outdoor fans',
      'Integrated Sonos landscape audio system camouflaged in planting beds',
      'Large-format shellstone paving that stays cool barefoot in 95°F heat',
    ],
    materials: [
      'Artisanal Shellstone Pavers',
      '316 Marine-Grade Stainless Steel Fixtures',
      'Solid Southern Cypress Timber Ceilings',
      'Honed White Macaubas Quartzite Slabs',
    ],
    completionTime: '9 Weeks',
    heroImage:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=1200&q=80',
    ],
    metrics: [
      { label: 'Kitchen Length', value: '18 Linear Ft' },
      { label: 'Pavilion Shelter', value: '450 sq ft' },
      { label: 'Audio Speakers', value: '8 Sub-surface' },
      { label: 'Entertaining Capacity', value: '25+ Guests' },
    ],
  },
  {
    slug: 'residential-lawn-transformation',
    title: 'Residential Lawn Transformation',
    category: 'Lawn Transformation',
    categoryKey: 'lawn-transformation',
    location: 'Beach Park, Tampa, FL',
    shortDescription:
      'A weed-choked estate lawn revitalized into a pristine, dense emerald carpet of drought-hardy Empire Zoysia with precision laser grading.',
    overview:
      'A complete estate turf rehabilitation in Beach Park. The existing compromised lawn was cleared, re-graded for positive runoff away from the foundation, and fitted with premium Empire Zoysia sod and smart rotary irrigation.',
    challenge:
      'Severe weed infestation, soil compaction, and low-lying spots prone to water pooling during Tampa’s tropical rainy season.',
    solution:
      'Laser-guided grade recontouring, core aeration, application of organic humates, and precision high-efficiency MP Rotator sprinkler zoning.',
    designObjectives: [
      'Establish a lush, carpet-like emerald green lawn resistant to foot traffic and pet activity',
      'Correct surface grading to channel stormwater naturally into bioswales',
      'Install uniform sod lines with razor-clean transitions to stone edges',
      'Reduce mowing frequency through slow-growing, dense-canopy Zoysia turf',
    ],
    keyFeatures: [
      'Certified Empire Zoysia turf with superior drought and chinch bug tolerance',
      'High-efficiency MP Rotator nozzles reducing overspray on walkways',
      'Deep core mechanical aeration and humic acid biological amendment',
      'Crisp steel landscape edging separating sod from botanical beds',
    ],
    materials: [
      'Certified Florida-Grown Empire Zoysia Sod',
      'Heavy-Gauge Col-Met Steel Edging',
      'Hunter MP Rotator Precision Nozzles',
      'Granular Bio-Nutrient Humic Acid Conditioner',
    ],
    completionTime: '2 Weeks',
    heroImage:
      'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=1200&q=80',
    ],
    metrics: [
      { label: 'Turf Installed', value: '11,500 sq ft' },
      { label: 'Soil Grade Leveling', value: '3 Acres Precision' },
      { label: 'Irrigation Efficiency', value: '+35% Uniformity' },
      { label: 'Establishment Time', value: '21 Days' },
    ],
  },
];
