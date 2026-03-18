// API-ready: Replace with fetch('/api/about/infrastructure-images') etc. when backend is ready.
// Image shape: { id, src, alt } — src can be relative path or full URL from API.

export const INFRASTRUCTURE_IMAGES = [
  { id: 1, src: "/images/infrastructure/1.png", alt: "Industrial facility exterior" },
  { id: 2, src: "/images/infrastructure/2.png", alt: "Factory interior with marble slabs" },
  { id: 3, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop", alt: "Factory interior" },
  { id: 4, src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop", alt: "Industrial machinery" },
  { id: 5, src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=400&fit=crop", alt: "Processing equipment" },
  { id: 6, src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop", alt: "Stone cutting" },
  { id: 7, src: "https://images.unsplash.com/photo-1605640840605-14ac1859527b?w=400&h=400&fit=crop", alt: "Raw material storage" },
  { id: 8, src: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=400&h=400&fit=crop", alt: "Quarry operations" },
];

export const PACKAGING_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1565000098222-d268f6b2d59f?w=400&h=300&fit=crop", alt: "Shipping container" },
  { id: 2, src: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&h=300&fit=crop", alt: "Wooden crates" },
  { id: 3, src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop", alt: "Packaged slabs" },
  { id: 4, src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop", alt: "Secure packaging" },
  { id: 5, src: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&h=300&fit=crop", alt: "Heavy-duty frames" },
  { id: 6, src: "https://images.unsplash.com/photo-1565000098222-d268f6b2d59f?w=400&h=300&fit=crop", alt: "Container loading" },
];

export const INFRASTRUCTURE_TEXT = `At Prem Marbles Pvt. Ltd., we believe that excellence is built on the perfect synergy of three key pillars: Man, Machine and Material. By seamlessly integrating these elements, we are able to deliver unparalleled quality and service to our clients. Our commitment to innovation and precision is reflected in our state-of-the-art infrastructure. We boast exclusive quarries, strategically located to procure the finest quality marble, ensuring that each piece meets the highest standards.`;

export const PACKAGING_SUBTITLE = "Reliable, Secure and Efficient Packaging & Delivery - Adhering to Global Standards";
export const PACKAGING_PARAS = [
  "At Prem Marbles, we believe that the packaging of our products is just as important as the quality of the stones themselves. We never compromise on materials, ensuring every shipment is securely packed with the highest attention to detail. Our packing process is built on International standards, prioritizing both safety and precision.",
  "We take great care in ensuring that random and custom-cut slab is carefully packed in robust, seaworthy, heavy-duty wooden frames. We understand that quality packing is essential to maintaining the integrity of your investment, and we go the extra mile to uphold your trust in us.",
];

export const CSR_ITEMS = [
  { title: "Community Development", description: "We support local communities around our quarries and manufacturing units through education, healthcare, and livelihood initiatives." },
  { title: "Environmental Stewardship", description: "Sustainable mining practices, water recycling, and reclamation of mined areas to minimize environmental impact." },
  { title: "Worker Welfare", description: "Safe working conditions, fair wages, and skill development programs for our workforce." },
  { title: "Ethical Sourcing", description: "Responsible sourcing of raw materials and transparency in our supply chain." },
];

export const ACHIEVEMENTS_ITEMS = [
  { year: "1983", title: "Foundation", description: "Prem Marbles Pvt. Ltd. established with a vision to deliver premium natural stone." },
  { year: "40+", title: "Years of Excellence", description: "Decades of expertise in marble mining, processing, and global export." },
  { year: "22+", title: "Countries", description: "Serving clients across the globe with quality and reliability." },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    tag: "— THE PILLAR OF FOUNDATION",
    name: "Mr. Parmeshwar Agrawal",
    role: "Founder of Prem Marbles",
    bio: "With over 40 years of unparalleled experience in the stone industry, Mr. Parmeshwar Agrawal is the driving force behind the foundation and growth of Prem Marbles. His expertise and passion for quality have been instrumental in shaping the company's legacy of success. Under his leadership, the organization has flourished, consistently pushing the boundaries of what's possible in the industry.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    imageLeft: true,
  },
  {
    id: 2,
    tag: "— THE VISIONARY OF TOMORROW",
    name: "Mr. Karan Agrawal",
    role: "Chairman of Prem Marbles",
    bio: "Joining the business at a young age, Mr. Karan Agrawal brought with him fresh ideas, innovative thinking and a deep understanding of modern business practices. His visionary leadership, coupled with his keen insight into emerging trends and technologies, has introduced a dynamic blend of experience and forward-thinking strategy to Prem Marbles. Mr. Agrawal's contribution has been pivotal in steering the company toward new heights, ensuring that it remains at the forefront of the stone industry.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    imageLeft: false,
  },
];

export const COMPANY_OVERVIEW_PARAS = [
  "Founded in 1983, Prem Marbles Pvt. Ltd. has emerged as a leader in the natural stone industry. Our expertise spans marble mining, processing, and manufacturing, with a distinct focus on the elegant flute finish. With flagship presence in Udaipur, Mumbai, and Silvassa, we extend our reach across India and beyond.",
  "We offer an exclusive range of marble, granite, and stone products, distinguished by our unique flute finish that brings sophistication, refinement, and durability to residential and commercial projects—redefining the perception of natural stone globally.",
];
