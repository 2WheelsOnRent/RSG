/**
 * Natural Stones data – Rajasthan Stone Gallery content.
 * Static for now; backend can return same shape (e.g. GET /api/natural-stones).
 * Images: Unsplash/placeholders; replace with your own for production.
 */

const BRAND = "Rajasthan Stone Gallery";

// Welcome section for Natural Stone Finishes page
export const WELCOME_CONTENT = {
  title: "Welcome to Rajasthan Stone Gallery",
  subtitle: "A trusted name in the natural stone industry",
  paragraphs: [
    "A trusted name in the natural stone industry, offering a wide range of premium marble, granite and stone products.",
    "With our own factory and a strong supply network, we ensure consistent quality, competitive pricing and reliable delivery for projects of all sizes.",
    "At Rajasthan Stone Gallery, we also specialize in manufacturing marble and granite tiles with precision finishing and strict quality control. Our in-house production facility allows us to deliver customized sizes and maintain high standards in every order.",
  ],
  whyChoose: [
    "Large stock of premium marble and granite",
    "Availability of export-quality materials",
    "Wide range of Indian and imported marble",
    "Marble and granite tile manufacturing",
    "Own factory with advanced processing",
    "Reliable supply for bulk and project orders",
  ],
  factoryAddress: "RIICO Area, Rajsamand, Rajasthan 313342",
};

// Helper to build productDetails from specs
function buildProductDetails(name, specs) {
  return {
    name,
    brand: BRAND,
    ...specs,
  };
}

// Flat list: each product has unique id for detail page (/natural-stones/[id])
export const NATURAL_STONES_DATA = [
  // ---- BLACK GRANITES (1-6) ----
  {
    id: 1,
    slug: "absolute-black-granite",
    name: "Absolute Black Granite",
    category: "Black Granites",
    features: ["Smooth and shiny", "Perfect for countertop", "Best for kitchen"],
    specifications: { "Slab thickness": "15mm, 18mm", "Slab size": "8×3 ft and above", "Finish": "High gloss polished" },
    description: "Absolute Black Granite offers a smooth, shiny finish ideal for kitchen countertops. With high gloss polish and consistent black tone, it is a top choice for modern interiors.",
    image: "/images/naturalStone/absolute-black-granite.jpg",
    productDetails: buildProductDetails("Absolute Black Granite", { "Slab thickness": "15mm, 18mm", "Slab size": "8×3 ft and above", "Finish": "High gloss polished" }),
  },
  {
    id: 2,
    slug: "bengal-black-granite",
    name: "Bengal Black Granite",
    category: "Black Granites",
    features: ["Accurate dimensions", "Perfect finish"],
    specifications: { "Slab thickness": "16mm", "Slab size": "8×3 ft and above", "Finish": "High gloss polished", "Note": "Striking colors" },
    description: "Bengal Black Granite comes with accurate dimensions and a perfect finish, making it suitable for countertops and flooring.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=800&fit=crop",
    productDetails: buildProductDetails("Bengal Black Granite", { "Slab thickness": "16mm", "Slab size": "8×3 ft and above", "Finish": "High gloss polished" }),
  },
  {
    id: 3,
    slug: "black-galaxy-granite",
    name: "Black Galaxy Granite",
    category: "Black Granites",
    features: ["Accurate dimensions", "Ideal for countertop and flooring", "Windows and door frames"],
    specifications: { "Slab thickness": "15mm, 18mm", "Slab size": "8×3 ft and above", "Finish": "Linner gloss polished", "Origin": "Indian granite", "Note": "Slab and tiles available; heat resistant" },
    description: "Black Galaxy Granite is ideal for countertops, flooring, and windows and door frames. Indian granite with slab and tiles available.",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=800&fit=crop",
    productDetails: buildProductDetails("Black Galaxy Granite", { "Slab thickness": "15mm, 18mm", "Slab size": "8×3 ft and above", "Finish": "Linner gloss polished" }),
  },
  {
    id: 4,
    slug: "majestic-black-granite",
    name: "Majestic Black Granite",
    category: "Black Granites",
    features: ["Polished surface", "Multipurpose application", "Thickness 15mm–20mm"],
    specifications: { "Slab thickness": "15mm, 18mm", "Slab size": "8×3 ft and above", "Finish": "Linner gloss polished" },
    description: "Majestic Black Granite has a polished surface and is used for multipurpose applications. Available in 15mm–20mm thickness.",
    image: "/images/naturalStone/majestic-black-granite.jpeg",
    productDetails: buildProductDetails("Majestic Black Granite", { "Slab thickness": "15mm, 18mm", "Slab size": "8×3 ft and above", "Finish": "Linner gloss polished" }),
  },
  {
    id: 5,
    slug: "majestic-black-lappato-granite",
    name: "Majestic Black Lappato Granite",
    category: "Black Granites",
    features: ["Anti-skid / non slippery", "Car parking area", "Perfect for bathroom floor"],
    specifications: { "Slab thickness": "15mm, 16mm", "Slab size": "8×3 ft and above", "Finish": "Lappato finish surface" },
    description: "Majestic Black Lappato Granite is anti-skid and non-slippery, ideal for car parking areas and bathroom floors.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=800&fit=crop",
    productDetails: buildProductDetails("Majestic Black Lappato Granite", { "Slab thickness": "15mm, 16mm", "Slab size": "8×3 ft and above", "Finish": "Lappato" }),
  },
  {
    id: 6,
    slug: "premium-black-granite",
    name: "Premium Black Granite",
    category: "Black Granites",
    features: ["Accurate dimensions", "Perfect finish"],
    specifications: { "Slab thickness": "15mm, 18mm", "Slab size": "8×3 ft and above", "Finish": "Linner gloss polished", "Origin": "Indian granite", "Note": "Slab and tiles available" },
    description: "Premium Black Granite offers accurate dimensions and a perfect finish. Slab and tiles available for sale.",
    image: "/images/naturalStone/premium-black-granite.jpeg",
    productDetails: buildProductDetails("Premium Black Granite", { "Slab thickness": "15mm, 18mm", "Slab size": "8×3 ft and above", "Finish": "Linner gloss polished" }),
  },
  // ---- WHITE GRANITES (7-11) ----
  {
    id: 7,
    slug: "alaska-pink-granite",
    name: "Alaska Pink Granite",
    category: "White Granites",
    features: ["Durable", "High strength", "Best for bathroom and kitchen countertop"],
    specifications: { "Slab thickness": "18mm", "Slab size": "9×3 ft and above", "Finish": "High gloss polished", "Note": "Low water absorption" },
    description: "Alaska Pink Granite is durable with high strength, ideal for bathroom and kitchen countertops. Low water absorption.",
    image: "/images/naturalStone/alaska-pink-granite.jpeg",
    productDetails: buildProductDetails("Alaska Pink Granite", { "Slab thickness": "18mm", "Slab size": "9×3 ft and above", "Finish": "High gloss polished" }),
  },
  {
    id: 8,
    slug: "alaska-white-granite",
    name: "Alaska White Granite",
    category: "White Granites",
    features: ["Durable", "High strength", "Best for bathroom and kitchen countertop"],
    specifications: { "Slab thickness": "18mm", "Slab size": "9×3 ft and above", "Finish": "High gloss polished", "Note": "Low water absorption" },
    description: "Alaska White Granite is durable with high strength, ideal for bathroom and kitchen countertops.",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&h=800&fit=crop",
    productDetails: buildProductDetails("Alaska White Granite", { "Slab thickness": "18mm", "Slab size": "9×3 ft and above", "Finish": "High gloss polished" }),
  },
  {
    id: 9,
    slug: "p-white-granite",
    name: "P White Granite",
    category: "White Granites",
    features: ["Economical and highly durable", "Processed from calcite stone", "Perfect for flooring"],
    specifications: { "Slab thickness": "15mm–16mm", "Slab size": "8×3 ft and above", "Finish": "Polished surface" },
    description: "P White Granite is economical and highly durable, processed from calcite stone. Perfect choice for flooring.",
    image: "/images/naturalStone/p-white-granite.jpeg",
    productDetails: buildProductDetails("P White Granite", { "Slab thickness": "15mm–16mm", "Slab size": "8×3 ft and above", "Finish": "Polished" }),
  },
  {
    id: 10,
    slug: "pearl-white-granite",
    name: "Pearl White Granite",
    category: "White Granites",
    features: ["Fine finishing", "White texture"],
    specifications: { "Slab thickness": "15mm–16mm", "Slab size": "8×3 ft and above", "Finish": "Gloss polished" },
    description: "Pearl White Granite has fine finishing and a clean white texture, suitable for countertops and flooring.",
    image: "/images/naturalStone/pearl-white-granite.jpeg",
    productDetails: buildProductDetails("Pearl White Granite", { "Slab thickness": "15mm–16mm", "Slab size": "8×3 ft and above", "Finish": "Gloss polished" }),
  },
  {
    id: 11,
    slug: "sira-grey-south-granite",
    name: "Sira Grey South Granite",
    category: "White Granites",
    features: ["Natural granite stone", "Ideal for countertop and decorations", "Smooth, polished, honed surface", "Grey texture"],
    specifications: { "Slab thickness": "15mm–18mm", "Slab size": "8×3 ft and above", "Finish": "High gloss polished" },
    description: "Sira Grey South Granite is a natural stone ideal for countertops and decorations with a smooth, polished, honed surface.",
    image: "/images/naturalStone/sira-grey-south-granite.jpeg",
    productDetails: buildProductDetails("Sira Grey South Granite", { "Slab thickness": "15mm–18mm", "Slab size": "8×3 ft and above", "Finish": "High gloss polished" }),
  },
  // ---- BROWN GRANITES (12-16) ----
  {
    id: 12,
    slug: "madhulika-brown-granite",
    name: "Madhulika Brown Granite",
    category: "Brown Granites",
    features: ["Economical and highly durable", "Processed from calcite stone", "Perfect for flooring"],
    specifications: { "Slab thickness": "16mm", "Slab size": "9×3 ft and above", "Finish": "High gloss polished" },
    description: "Madhulika Brown Granite is economical and highly durable, perfect for flooring.",
    image: "/images/naturalStone/madhulika-brown-granite.jpeg",
    productDetails: buildProductDetails("Madhulika Brown Granite", { "Slab thickness": "16mm", "Slab size": "9×3 ft and above", "Finish": "High gloss polished" }),
  },
  {
    id: 13,
    slug: "atlantic-brown-granite",
    name: "Atlantic Brown Granite",
    category: "Brown Granites",
    features: ["Economical and highly durable", "Perfect for flooring"],
    specifications: { "Slab thickness": "16mm", "Slab size": "9×3 ft and above", "Finish": "High gloss polished" },
    description: "Atlantic Brown Granite is economical and highly durable, perfect for flooring.",
    image: "/images/naturalStone/atlantic-brown-granite.jpeg",
    productDetails: buildProductDetails("Atlantic Brown Granite", { "Slab thickness": "16mm", "Slab size": "9×3 ft and above", "Finish": "High gloss polished" }),
  },
  {
    id: 14,
    slug: "brown-lappato-granite",
    name: "Brown Lappato Granite",
    category: "Brown Granites",
    features: ["Nice color and pattern", "Staircase, flooring, wall cladding", "Easy installation & maintenance", "Anti-skid, non-slippery"],
    specifications: { "Thickness": "16mm (customizable)", "Slab size": "8×3 ft and above", "Finish": "Polished surface" },
    description: "Brown Lappato Granite has striking colors and pattern, used for staircase, flooring and wall cladding. Anti-skid, non-slippery.",
    image: "/images/naturalStone/brown-lappato-granite.jpeg",
    productDetails: buildProductDetails("Brown Lappato Granite", { "Thickness": "16mm", "Slab size": "8×3 ft and above", "Finish": "Polished" }),
  },
  {
    id: 15,
    slug: "cheema-pink-granite",
    name: "Cheema Pink | North India Granite",
    category: "Brown Granites",
    features: ["Nice color and pattern", "Staircase, flooring, wall cladding", "Easy installation & maintenance", "Indian granite stone"],
    specifications: { "Thickness": "16mm (customizable)", "Slab size": "8×3 ft and above", "Finish": "Polished surface" },
    description: "Cheema Pink is North India granite with nice color and pattern, ideal for staircase, flooring and wall cladding.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=800&fit=crop",
    productDetails: buildProductDetails("Cheema Pink Granite", { "Thickness": "16mm", "Slab size": "8×3 ft and above", "Finish": "Polished" }),
  },
  {
    id: 16,
    slug: "desert-brown-granite",
    name: "Desert Brown Granite",
    category: "Brown Granites",
    features: ["Natural color and shine", "Decent look", "Highly durable and water resistant"],
    specifications: { "Slab thickness": "16mm", "Slab size": "8×3 ft and above", "Finish": "Polished surface" },
    description: "Desert Brown Granite has natural color and shine, highly durable and water resistant.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
    productDetails: buildProductDetails("Desert Brown Granite", { "Slab thickness": "16mm", "Slab size": "8×3 ft and above", "Finish": "Polished" }),
  },
  // ---- GOLD GRANITES (17-18) ----
  {
    id: 17,
    slug: "alaska-gold-granite",
    name: "Alaska Gold Granite",
    category: "Gold Granites",
    features: ["Imported granite stone", "Ideal for countertop and flooring"],
    specifications: { "Slab thickness": "18mm", "Slab size": "8×3 ft and above", "Finish": "Gloss polished", "Note": "Negligible water absorption" },
    description: "Alaska Gold Granite is an imported granite stone ideal for countertop and flooring.",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&h=800&fit=crop",
    productDetails: buildProductDetails("Alaska Gold Granite", { "Slab thickness": "18mm", "Slab size": "8×3 ft and above", "Finish": "Gloss polished" }),
  },
  {
    id: 18,
    slug: "alaska-red-granite",
    name: "Alaska Red | Exotic Granite",
    category: "Gold Granites",
    features: ["Italian texture", "Crystalized look", "Imported granite", "Ideal for countertop, flooring and wall"],
    specifications: { "Slab thickness": "20mm", "Slab size": "8×3 ft and above", "Finish": "Gloss polished", "Note": "Low water absorbent" },
    description: "Alaska Red is an exotic granite with Italian texture and crystalized look, ideal for countertop, flooring and wall.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=800&fit=crop",
    productDetails: buildProductDetails("Alaska Red Granite", { "Slab thickness": "20mm", "Slab size": "8×3 ft and above", "Finish": "Gloss polished" }),
  },
  // ---- WHITE MARBLES (19-25) ----
  {
    id: 19,
    slug: "makrana-pure-white-marble",
    name: "Makrana Pure White Marble",
    category: "White Marbles",
    features: ["Durable", "Easy installation and maintenance"],
    specifications: { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished", "Origin": "Indian stone", "Note": "Striking white colour; no chemical processing" },
    description: "Makrana Pure White Marble is durable with easy installation and maintenance. Striking white colour, Indian stone.",
    image: "/images/naturalStone/makrana-pure-white-marble.jpeg",
    productDetails: buildProductDetails("Makrana Pure White Marble", { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished" }),
  },
  {
    id: 20,
    slug: "makrana-albeta-marble",
    name: "Makrana Albeta Marble",
    category: "White Marbles",
    features: ["Smooth surface", "Beautiful appearance", "Long lasting"],
    specifications: { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished", "Note": "Heat resistance, durable, calcite stone" },
    description: "Makrana Albeta Marble has a smooth surface and beautiful appearance, long lasting and heat resistant.",
    image: "/images/naturalStone/makrana-albeta-marble.jpeg",
    productDetails: buildProductDetails("Makrana Albeta Marble", { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished" }),
  },
  {
    id: 21,
    slug: "agaria-pure-white-marble",
    name: "Agaria Pure White Marble",
    category: "White Marbles",
    features: ["Smooth and polished surface", "Long-lasting shine", "Easy cleaning and maintenance"],
    specifications: { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished" },
    description: "Agaria Pure White Marble has a smooth, polished surface with long-lasting shine and easy maintenance.",
    image: "/images/naturalStone/agaria-pure-white-marble.jpeg",
    productDetails: buildProductDetails("Agaria Pure White Marble", { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished" }),
  },
  {
    id: 22,
    slug: "zanjhar-white-marble",
    name: "Zanjhar White Marble",
    category: "White Marbles",
    features: ["High quality", "Fine finish"],
    specifications: { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished", "Note": "High efficiency, attractive look" },
    description: "Zanjhar White Marble offers high quality and fine finish, with high efficiency and attractive look.",
    image: "/images/naturalStone/zanjhar-white-marble.jpeg",
    productDetails: buildProductDetails("Zanjhar White Marble", { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished" }),
  },
  {
    id: 23,
    slug: "nizarna-white-marble",
    name: "Nizarna White Marble",
    category: "White Marbles",
    features: ["Polished smooth and honed surface", "Natural Indian stone", "Long-lasting shine"],
    specifications: { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished" },
    description: "Nizarna White Marble has a polished smooth and honed surface, natural Indian stone with long-lasting shine.",
    image: "/images/naturalStone/nizarna-white-marble.jpeg",
    productDetails: buildProductDetails("Nizarna White Marble", { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished" }),
  },
  {
    id: 24,
    slug: "vanni-spotted-white-marble",
    name: "Vanni Spotted White Marble",
    category: "White Marbles",
    features: ["Indian marble stone", "Ideal for flooring", "Polished surface"],
    specifications: { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished" },
    description: "Vanni Spotted White is Indian marble stone, ideal for flooring with polished surface.",
    image: "/images/naturalStone/vanni-spotted-white-marble.jpeg",
    productDetails: buildProductDetails("Vanni Spotted White Marble", { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished" }),
  },
  // ---- BROWN MARBLES (25-28) ----
  {
    id: 25,
    slug: "line-brown-marble",
    name: "Line Brown Marble",
    category: "Brown Marbles",
    features: ["Beautiful stripes pattern", "Polished surface finish", "Natural Indian stone"],
    specifications: { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished" },
    description: "Line Brown Marble has beautiful stripes pattern with polished surface finish, natural Indian stone.",
    image: "/images/naturalStone/line-brown-marble.jpeg",
    productDetails: buildProductDetails("Line Brown Marble", { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished" }),
  },
  {
    id: 26,
    slug: "brown-white-shade-marble",
    name: "Brown & White Shade Marble",
    category: "Brown Marbles",
    features: ["Smooth surface", "Flawless look"],
    specifications: { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished", "Note": "Easy maintenance, durable" },
    description: "Brown & White Shade Marble has a smooth surface and flawless look, easy maintenance and durable.",
    image: "/images/naturalStone/brown-white-shade-marble.jpeg",
    productDetails: buildProductDetails("Brown & White Shade Marble", { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished" }),
  },
  {
    id: 27,
    slug: "agariya-brown-lehariya-marble",
    name: "Agariya Brown Lehariya Marble",
    category: "Brown Marbles",
    features: ["Uniqueness and elegance", "Great polish", "High-grade"],
    specifications: { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished", "Note": "High efficiency, long-lasting" },
    description: "Agariya Brown Lehariya Marble offers uniqueness and elegance with great polish, high-grade and long-lasting.",
    image: "/images/naturalStone/agariya-brown-lehariya-marble.jpeg",
    productDetails: buildProductDetails("Agariya Brown Lehariya Marble", { "Slab thickness": "15mm–18mm", "Slab size": "5×3 ft and above", "Finish": "Unpolished" }),
  },
  // ---- INDIAN MARBLE TILES (28) ----
  {
    id: 28,
    slug: "export-marble-granite-onyx-tiles",
    name: "Export Marble, Granite & Onyx Marble Tiles",
    category: "Indian Marble Tiles",
    features: ["Premium natural stone", "Elegant white & grey veins", "High polished surface", "Strong & long lasting", "Ideal for luxury interiors", "Export quality"],
    specifications: { "Material": "Natural marble tile", "Finish": "Polished, non polished", "Size": "12×24 in / custom", "Thickness": "15–18 mm", "Usage": "Flooring, wall cladding, bathrooms, living areas", "Origin": "Rajasthan, India" },
    description: "Export quality marble, granite and onyx marble tiles. Premium natural stone with elegant veins, high polished surface. Bulk orders, export packing, factory direct supply.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=800&fit=crop",
    productDetails: buildProductDetails("Export Marble, Granite & Onyx Tiles", { "Material": "Natural marble tile", "Size": "12×24 in / custom", "Thickness": "15–18 mm", "Origin": "Rajasthan, India" }),
  },
];

// 6 featured stones for Footer "Marble Collections" – dynamic: derived from data
export const FEATURED_STONE_IDS_FOR_FOOTER = [1, 3, 8, 19, 22, 28];

export function getMarbleCollectionsForFooter() {
  return FEATURED_STONE_IDS_FOR_FOOTER.map((id) => {
    const stone = NATURAL_STONES_DATA.find((s) => s.id === id);
    return stone ? { label: stone.name, href: `/natural-stones/${stone.id}` } : null;
  }).filter(Boolean);
}

export function getStoneById(id) {
  const numId = typeof id === "string" ? parseInt(id, 10) : id;
  if (Number.isNaN(numId)) return null;
  return NATURAL_STONES_DATA.find((s) => s.id === numId) ?? null;
}

export function getStonesByCategory(categoryName) {
  return NATURAL_STONES_DATA.filter((s) => s.category === categoryName);
}
