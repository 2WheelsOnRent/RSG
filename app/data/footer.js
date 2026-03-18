// API-ready: can be moved to API later
const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=9983391137&text=Hi%2C+I%E2%80%99m+interested+in+your+marble%C2%A0collection%21";
const INSTAGRAM_LINK = "https://www.instagram.com/rajasthanstone13?igsh=M2t4bzllbmkwb2p4";

export const POPULAR_SEARCHES = [
  "Marine Beige",
  "Apple Green",
  "Copa Fantasy",
  "Marine Black",
  "Ocean Green",
  "Opal White",
  "Lady Purple",
  "Ash Grey",
  "Sienna Black",
];

// Dynamic: add more countries here; use 2-letter ISO code for flagcdn.com
export const GLOBAL_PRESENCE_COUNTRIES = [
  { code: "cn", name: "China", description: "Raw granite blocks for local processing and infrastructure projects" },
  { code: "us", name: "United States", description: "A major importer of processed and finished products, such as kitchen countertops, flooring, and memorials" },
  // { code: "bd", name: "Bangladesh", description: "A high-volume but lower-price-per-ton market for construction-grade granite" },
  { code: "mv", name: "Maldives", description: "Noted as one of the top destinations by value in recent years" },
  { code: "ae", name: "United Arab Emirates", description: "A major importer of processed and finished products, such as kitchen countertops, flooring, and memorials" },
];

export const FOOTER_MENU = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Natural Stones", href: "/natural-stones" },
  { label: "Table Top", href: "/table-top" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "#privacy" },
];

// Marble Collections: now dynamic from naturalStones (getMarbleCollectionsForFooter)

export const FOOTER_CONTACT = {
  phones: ["+9111-9977-54", "+919983391137"],
  emails: ["Rajasthanstone13@gmail.com", "Businesswithluckymarble@gmail.com"],
  address: "G-286, RIICO Area, Rajsamand, Nogama, Rajasthan 313342",
  address2: "PREM MARBLES Pvt. Ltd., N.H 8, Amberi, Udaipur, Rajasthan 313004",
  locationLinks: [
    { url: "https://maps.app.goo.gl/3D2sbkD7ERpX7Rk69", label: "Location 1" },
    { url: "https://maps.app.goo.gl/UDaiqfp2RD8Tow5YA", label: "Location 2" },
  ],
  // Google Maps embed iframe src for Contact / Our Locations
  locationEmbeds: [
    {
      label: "Location 1",
      address: "G-286, RIICO Area, Rajsamand, Nogama, Rajasthan 313342",
      url: "https://maps.app.goo.gl/3D2sbkD7ERpX7Rk69",
      embedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0676035039132!2d73.88615217610607!3d25.03177973837955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39686d2c72019833%3A0x9b6697af8ded085e!2sLucky%20Marble%20and%20Granite!5e0!3m2!1sen!2sin!4v1773605987635!5m2!1sen!2sin",
    },
    {
      label: "Location 2",
      address: "PREM MARBLES Pvt. Ltd., N.H 8, Amberi, Udaipur, Rajasthan 313004",
      url: "https://maps.app.goo.gl/UDaiqfp2RD8Tow5YA",
      embedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.6442988727244!2d73.88822247610567!3d25.01219983916778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39686d00219a1d79%3A0x73548747d125dbd6!2sSupyar%20Marble%20%26%20Gainite!5e0!3m2!1sen!2sin!4v1773606130892!5m2!1sen!2sin",
    },
  ],
  partners: ["Sumer Singh Shekhawat", "Lakshman Singh Rathore"],
};

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
  { name: "Instagram", href: INSTAGRAM_LINK, icon: "instagram" },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { name: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
];

export { WHATSAPP_LINK, INSTAGRAM_LINK };
