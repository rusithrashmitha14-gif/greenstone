export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  galleryImages: string[];
  tagline: string;
  fullDescription: string;
  whoItsFor: string;
  floridaFocus: string;
  benefits: string[];
  features: { title: string; description: string }[];
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'landscape-design',
    slug: 'landscape-design',
    title: 'Landscape Design',
    tagline: 'Master plans engineered for Florida architectural elegance',
    shortDescription:
      'Complete master planning, 3D architectural rendering, and bespoke spatial design tailored to your property’s layout and Florida sun exposure.',
    heroImage:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=1200&q=80',
    ],
    fullDescription:
      'Our landscape design process transforms blank yards and dated layouts into cohesive outdoor sanctuaries. Every plan balances architectural symmetry, natural elevation transitions, and functional living zones tailored specifically to Tampa Bay’s climate.',
    whoItsFor:
      'Homeowners undertaking comprehensive property renovations, new custom home builds, and clients seeking an elevated cohesive aesthetic.',
    floridaFocus:
      'Strategic microclimate zoning, salt-tolerant and wind-resistant plant palettes, and rainy-season stormwater drainage grading.',
    benefits: [
      'Comprehensive 2D blueprint and photorealistic 3D visualization before construction',
      'Unified flow between indoor architecture and outdoor living zones',
      'Sustainable plant palettes that thrive in Tampa heat with minimal water waste',
      'Significant boost to curb appeal and long-term appraisal value',
    ],
    features: [
      {
        title: 'Site Analysis & Elevation Survey',
        description:
          'Detailed inspection of sunlight patterns, soil drainage, existing canopy, and utility easements.',
      },
      {
        title: 'Architectural Concept Modeling',
        description:
          'Full-color 3D layouts showing seasonal blooms, nighttime lighting angles, and hardscape proportions.',
      },
      {
        title: 'Precision Planting Schematics',
        description:
          'Botanical selections specified by genus, mature height, canopy spread, and root behavior.',
      },
    ],
    deliverables: [
      'Concept schematic & moodboard',
      'Full CAD landscape construction blueprint',
      'Botanical specification schedule',
      'Hardscape & lighting layout overlays',
    ],
  },
  {
    id: 'lawn-care-maintenance',
    slug: 'lawn-care-maintenance',
    title: 'Lawn Care & Maintenance',
    tagline: 'Proactive estate turf management for vibrant, dense Florida turf',
    shortDescription:
      'Precision mowing, targeted soil nutrient balancing, pest management, and custom seasonal programs to keep Florida sod pristine year-round.',
    heroImage:
      'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    ],
    fullDescription:
      'Maintaining a luxury lawn in Tampa requires specialized agronomic knowledge. Our dedicated maintenance team monitors turf health, root depth, weed encroachment, and fungal pressures caused by Florida humidity.',
    whoItsFor:
      'Discerning residential homeowners, gated estate properties, and boutique residential communities demanding immaculate turf aesthetics.',
    floridaFocus:
      'Customized treatments for St. Augustine (Floratam, CitraBlue), Zoysia (Empire), and Bermuda grass varieties facing summer heat and rainy season fungal risks.',
    benefits: [
      'Consistent razor-sharp blade mowing and clean concrete edging every visit',
      'Proactive pest prevention against chinch bugs, sod webworms, and grubs',
      'Soil nutrient optimization tailored to sandy Florida coastal ground',
      'Dedicated estate manager for consistent oversight and communication',
    ],
    features: [
      {
        title: 'Agronomic Soil Testing',
        description:
          'Scientific pH and mineral testing to ensure roots absorb maximum nutrition without runoff.',
      },
      {
        title: 'Integrated Pest & Fungus Control',
        description:
          'Early intervention protocols targeting Tampa lawn pests before irreversible damage occurs.',
      },
      {
        title: 'Irrigation Audit & Calibration',
        description:
          'Quarterly head alignment, pressure checks, and rain sensor testing to comply with county watering regulations.',
      },
    ],
    deliverables: [
      'Scheduled weekly/bi-weekly estate service visits',
      'Seasonal aeration & organic soil conditioning',
      'Precision perimeter edging and debris removal',
      'Monthly turf diagnostic report',
    ],
  },
  {
    id: 'hardscaping-patios',
    slug: 'hardscaping-patios',
    title: 'Hardscaping & Patios',
    tagline: 'Enduring stone, travertine, and architectural outdoor structures',
    shortDescription:
      'Artisanal travertine pool decks, natural stone patios, custom outdoor kitchens, retaining walls, and permeable pavers built to withstand coastal elements.',
    heroImage:
      'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&q=80',
    ],
    fullDescription:
      'Hardscape elements form the timeless backbone of luxury outdoor living. We engineer stable aggregate foundations, precision joint lines, and premium natural stone pavers designed to stay cool under barefoot sun exposure.',
    whoItsFor:
      'Properties needing expanded entertainment surfaces, pool patio resurfacing, fire pit terraces, or structural grade leveling.',
    floridaFocus:
      'Slip-resistant, heat-deflecting French pattern travertine, premium porcelain pavers, and reinforced compacted sub-bases that resist Florida sandy soil shifting.',
    benefits: [
      'Cool-touch surfaces comfortable under intense Florida midday sunlight',
      'Engineered drainage systems that prevent standing water during tropical storms',
      'Durable construction resistant to chlorine, salt air, and heavy foot traffic',
      'Seamless visual continuity connecting patio doors to pool edges',
    ],
    features: [
      {
        title: 'Engineered Foundation Compaction',
        description:
          'Deep excavation, geotextile membrane stabilization, and crushed aggregate bedding to eliminate settlement.',
      },
      {
        title: 'Artisan Stone Cutting & Jointing',
        description:
          'Diamond-blade precision coping, bullnose pool borders, and polymeric joint sand locking.',
      },
      {
        title: 'Retaining & Seat Wall Construction',
        description:
          'Solid concrete masonry core walls faced with stacked stone, integrated low-voltage step lights.',
      },
    ],
    deliverables: [
      'Engineered structural layout and slope calculations',
      'Stone material samples and finish selections',
      'Full installation with integrated sub-surface drainage',
      'Protective sealant application and craftsmanship warranty',
    ],
  },
  {
    id: 'garden-design-planting',
    slug: 'garden-design-planting',
    title: 'Garden Design & Planting',
    tagline: 'Lush subtropical botanical compositions and perennial borders',
    shortDescription:
      'Curated botanical gardens featuring native Florida flora, architectural palms, vibrant blooming perennials, and multi-layered foliage textures.',
    heroImage:
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=1200&q=80',
    ],
    fullDescription:
      'A great garden combines depth, organic movement, and fragrance. We source healthy nursery-grown specimens acclimated to Tampa’s Zone 9b/10a conditions, layering tall structural palms with soft understory ferns and vibrant floral accents.',
    whoItsFor:
      'Homeowners wishing to soften modern architecture, create private tropical courtyards, or establish wildlife-friendly native habitats.',
    floridaFocus:
      'Florida-Friendly Landscaping™ principles utilizing drought-tolerant coontie, silver saw palmetto, firebush, and low-maintenance tropical foliage.',
    benefits: [
      'Rich multi-season color without continuous replacement replanting',
      'Natural privacy screening blocking neighboring second-story windows',
      'Reduced water consumption once established with drip micro-irrigation',
      'Enriched organic compost soil amendment for long-term botanical vigor',
    ],
    features: [
      {
        title: 'Layered Botanical Architecture',
        description:
          'Harmonious tiered arrangement combining canopy trees, intermediate shrubs, and groundcovers.',
      },
      {
        title: 'Soil Microbiome Conditioning',
        description:
          'High-grade organic amendments blended with native soil to retain moisture and beneficial biology.',
      },
      {
        title: 'Premium Hardwood Mulching',
        description:
          'Triple-shredded cypress or pine bark mulching for weed suppression and root temperature moderation.',
      },
    ],
    deliverables: [
      'Custom planting plan and specimen catalog',
      'Soil preparation and micro-irrigation retrofitting',
      'Installation of mature hand-selected nursery stock',
      'Detailed seasonal plant maintenance guide',
    ],
  },
  {
    id: 'tree-shrub-care',
    slug: 'tree-shrub-care',
    title: 'Tree & Shrub Care',
    tagline: 'Canopy health, hurricane preparation, and structural sculpting',
    shortDescription:
      'Specialized care for mature specimen palms, native live oaks, ornamental flowering trees, and hedge shaping with strict arboricultural standards.',
    heroImage:
      'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80',
    ],
    fullDescription:
      'Tampa’s iconic palms and grand live oaks require deliberate canopy thinning, root zone nutrition, and storm mitigation. Our tree and shrub care protects your green assets while keeping outdoor spaces safe and beautiful.',
    whoItsFor:
      'Properties with valuable mature specimen trees, estate perimeter hedges, or newly planted ornamental collections.',
    floridaFocus:
      'Hurricane season structural pruning, magnesium/potassium deficiency correction in specimen palms, and lethal bronzing disease prevention.',
    benefits: [
      'Decreased storm vulnerability through aerodynamic canopy thinning',
      'Vigorous frond growth and rich deep green foliage coloration',
      'Crisp, architectural hedge trimming that enhances property boundaries',
      'Safe deadwood clearance preventing falling branch hazards',
    ],
    features: [
      {
        title: 'Canopy Thinning & Weight Reduction',
        description:
          'Careful selective thinning allowing storm winds to pass freely through dense branches.',
      },
      {
        title: 'Deep Root Micro-Nutrient Injections',
        description:
          'Direct sub-surface fertilization targeting feeder roots for rapid nutrient uptake in sandy soil.',
      },
      {
        title: 'Palm Booting & Sanitary Pruning',
        description:
          'Clean trunk peeling and removal of spent seed pods without harming the delicate terminal bud.',
      },
    ],
    deliverables: [
      'Arboricultural health evaluation and canopy audit',
      'Scheduled seasonal pruning and hedge maintenance',
      'Targeted micro-nutrient palm injection treatments',
      'Emergency storm preparation response plan',
    ],
  },
  {
    id: 'outdoor-living-spaces',
    slug: 'outdoor-living-spaces',
    title: 'Outdoor Living Spaces',
    tagline: 'Year-round al fresco dining, fire features, and ambient nightscapes',
    shortDescription:
      'Architectural pergolas, outdoor chef kitchens, custom fire features, and smart LED night lighting for comfortable evening entertaining.',
    heroImage:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    ],
    fullDescription:
      'Extend your home’s footprint with functional, luxurious outdoor rooms. We design sheltered pavilions, integrated kitchen counters, fire tables, and subtle architectural lighting that make evening gatherings unforgettable.',
    whoItsFor:
      'Clients who love entertaining outdoors, hosting family poolside, and enjoying Florida’s balmy evenings year-round.',
    floridaFocus:
      'Marine-grade 304/316 stainless steel cabinetry, motorized louvered pergolas for tropical downpours, and warm 2700K brass low-voltage lighting fixtures.',
    benefits: [
      'Full exterior cooking capabilities with grills, sinks, and refrigeration',
      'Comfortable shaded refuge from high midday Florida sun exposure',
      'Mesmerizing evening ambiance with energy-efficient warm LED illumination',
      'Durable weather-sealed materials designed for high humidity and salt air',
    ],
    features: [
      {
        title: 'Custom Outdoor Chef Kitchens',
        description:
          'Stone-clad islands, built-in natural gas grills, granite countertops, and weather-sealed cabinetry.',
      },
      {
        title: 'Architectural Pergolas & Shade Structures',
        description:
          'Powder-coated aluminum and treated timber structures engineered to Tampa wind load specs.',
      },
      {
        title: 'Low-Voltage Nightscape Lighting',
        description:
          'Solid brass path lights, palm uplighting, and step illumination with smart smartphone automation.',
      },
    ],
    deliverables: [
      'Complete outdoor architectural space plan',
      'Utility coordination (gas, electric, plumbing schematics)',
      'Cabinetry, stone, and appliance procurement',
      'Lighting zoning and smart controller setup',
    ],
  },
];
