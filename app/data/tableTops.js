/**
 * Table Top Stone Finishes – static for now, API-ready.
 * Replace with fetch('/api/table-tops') when backend is ready.
 * Names and content aligned with natural stone catalogue; can be sourced from same API.
 */

const BRAND = "Rajasthan Stone Gallery";

// API-ready: same shape as natural stones for consistency; backend can return this.
export const TABLE_TOPS_DATA = [
  {
    id: 1,
    slug: "apple-green-table-top",
    name: "Apple Green Table Top",
    features: ["Rich apple-green natural tone", "Ideal for table tops and countertops", "Durable and polished surface"],
    specifications: { "Slab thickness": "18mm, 20mm", "Slab size": "8×3 ft and above", "Finish": "Polished", "Category": "Table Top" },
    description: "Apple Green Table Top is crafted from vibrant natural green granite with a rich, deep colour and polished finish. A striking choice for dining tables, kitchen islands, and countertops.",
    image: "/images/tableTops/apple-green-table-top.png",
    productDetails: { name: "Apple Green Table Top", brand: BRAND, "Slab thickness": "18mm, 20mm", "Slab size": "8×3 ft and above", "Finish": "Polished", "Category": "Table Top" },
  },
  {
    id: 2,
    slug: "alaska-pink-table-top",
    name: "Alaska Pink Table Top",
    features: ["Durable and high strength", "Elegant pink tone for tabletops", "High gloss polished surface"],
    specifications: { "Slab thickness": "18mm, 20mm", "Slab size": "8×3 ft and above", "Finish": "Polished", "Category": "Table Top" },
    description: "Alaska Pink Table Top is crafted from premium Alaska Pink granite with a naturally elegant pink tone and high gloss polished finish. Perfect for dining tables, reception desks, and feature surfaces.",
    image: "/images/tableTops/alaska-pink-table-top.jpeg",
    productDetails: { name: "Alaska Pink Table Top", brand: BRAND, "Slab thickness": "18mm, 20mm", "Slab size": "8×3 ft and above", "Finish": "Polished", "Category": "Table Top" },
  },
];

export function getTableTopById(id) {
  const numId = typeof id === "string" ? parseInt(id, 10) : id;
  if (Number.isNaN(numId)) return null;
  return TABLE_TOPS_DATA.find((s) => s.id === numId) ?? null;
}
