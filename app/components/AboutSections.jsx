"use client";

import Image from "next/image";
import {
  COMPANY_OVERVIEW_PARAS,
  INFRASTRUCTURE_TEXT,
  INFRASTRUCTURE_IMAGES,
  PACKAGING_SUBTITLE,
  PACKAGING_PARAS,
  PACKAGING_IMAGES,
  CSR_ITEMS,
  ACHIEVEMENTS_ITEMS,
  TEAM_MEMBERS,
} from "../data/about";

const SECTION_STYLE = "scroll-mt-24 py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto";

function SectionHeading({ subtitle, title }) {
  return (
    <div className="mb-8">
      {subtitle && (
        <div className="flex items-center gap-3 mb-2">
          <span className="w-12 h-0.5 bg-red-600" />
          <p className="text-red-600 uppercase tracking-widest text-sm font-semibold">{subtitle}</p>
        </div>
      )}
      <h2 className="text-2xl md:text-4xl font-bold text-[#333]">{title}</h2>
    </div>
  );
}

export function CompanyOverview() {
  return (
    <section id="company-overview" className={`bg-[#faf8f6] ${SECTION_STYLE}`}>
      <SectionHeading subtitle="— ABOUT US" title="Company Overview" />
      <div className="prose prose-gray max-w-none text-[#333] space-y-4">
        {COMPANY_OVERVIEW_PARAS.map((p, i) => (
          <p key={i} className="text-justify leading-relaxed">{p}</p>
        ))}
      </div>
    </section>
  );
}

export function InfrastructureSection() {
  return (
    <section id="infrastructure" className={`bg-white ${SECTION_STYLE}`}>
      <SectionHeading title="Infrastructure" />
      <p className="text-[#333] leading-relaxed mb-10 max-w-4xl">{INFRASTRUCTURE_TEXT}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {INFRASTRUCTURE_IMAGES.map((img) => (
          <div key={img.id} className="relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
          </div>
        ))}
      </div>
    </section>
  );
}

export function PackagingSection() {
  return (
    <section id="packaging" className={`bg-[#faf8f6] ${SECTION_STYLE}`}>
      <SectionHeading title="Packaging" />
      <p className="text-red-600 font-semibold text-sm md:text-base mb-4">{PACKAGING_SUBTITLE}</p>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="space-y-4 text-[#333] leading-relaxed">
          {PACKAGING_PARAS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {PACKAGING_IMAGES.slice(0, 4).map((img) => (
            <div key={img.id} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {PACKAGING_IMAGES.map((img) => (
          <div key={img.id} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 33vw" />
          </div>
        ))}
      </div>
    </section>
  );
}

export function AchievementsSection() {
  return (
    <section id="achievements" className={`bg-white ${SECTION_STYLE}`}>
      <SectionHeading title="Achievements" />
      <div className="grid md:grid-cols-3 gap-8">
        {ACHIEVEMENTS_ITEMS.map((item) => (
          <div key={item.year} className="text-center p-6 border border-gray-200 rounded-lg">
            <p className="text-red-600 font-bold text-3xl mb-2">{item.year}</p>
            <h3 className="text-xl font-semibold text-[#333] mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CSRSection() {
  return (
    <section id="csr" className={`bg-[#faf8f6] ${SECTION_STYLE}`}>
      <SectionHeading subtitle="— OUR COMMITMENT" title="Corporate Social Responsibility" />
      <ul className="space-y-6 max-w-4xl">
        {CSR_ITEMS.map((item, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-semibold">{i + 1}</span>
            <div>
              <h3 className="font-semibold text-[#333] mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TeamSection() {
  return (
    <section id="team" className={`bg-white ${SECTION_STYLE}`}>
      <SectionHeading title="Our Team" />
      <p className="text-[#333] leading-relaxed mb-12 max-w-3xl">
        At Prem Marbles, our success is a reflection of the vision, dedication, and expertise of our leadership. Our team is built on a foundation of experience, innovation, and a shared commitment to excellence.
      </p>
      <div className="space-y-16">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.id}
            className={`grid md:grid-cols-2 gap-8 items-center ${member.imageLeft ? "" : "md:direction-rtl"}`}
            style={member.imageLeft ? {} : { direction: "ltr" }}
          >
            <div className={member.imageLeft ? "order-1" : "order-2"}>
              <div className="relative aspect-square max-w-sm rounded-lg overflow-hidden shadow-lg">
                <Image src={member.image} alt={member.name} fill className="object-cover" sizes="400px" />
              </div>
            </div>
            <div className={member.imageLeft ? "order-2" : "order-1"}>
              <p className="text-red-600 uppercase tracking-wider text-xs font-semibold mb-2">{member.tag}</p>
              <h3 className="text-2xl font-bold text-[#333] mb-1">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-[#333] leading-relaxed">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AboutSections() {
  return (
    <>
      <CompanyOverview />
      <InfrastructureSection />
      <PackagingSection />
      <AchievementsSection />
      <CSRSection />
      <TeamSection />
    </>
  );
}
