import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  type: string;
  location: string;
  price: string;
  handover: string;
  link: string;
}

const ProjectCard = ({ image, title, type, location, price, handover, link }: ProjectCardProps) => {
  return (
    <div className="relative flex-none w-[320px] bg-white rounded-lg overflow-hidden border border-[#E2E2E2] shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
      {/* Listing Link Overlay */}
      <a href={link} className="absolute inset-0 z-10" aria-label={`View details for ${title}`}>
        <span className="sr-only">View Listing</span>
      </a>

      {/* Image Container */}
      <div className="relative w-full h-[200px]">
        <Image
          src={image}
          alt={`${title} - Cover Image`}
          fill
          className="object-cover"
          sizes="320px"
        />
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h4 className="text-[18px] font-bold text-[#282828] leading-tight truncate">
            {title}
          </h4>
          <div className="text-[14px] font-medium text-[#666666]">
            {type}
          </div>
          <div className="flex items-start gap-1 mt-1">
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-[#666666] mt-0.5 shrink-0"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div className="text-[12px] text-[#666666] leading-snug line-clamp-2">
              {location}
            </div>
          </div>
        </div>

        {/* Badges Area */}
        <div className="flex gap-2">
          <div className="flex-1 bg-[#F8F9FA] rounded p-2 border border-[#E2E2E2]">
            <div className="text-[10px] text-[#666666] uppercase font-bold mb-0.5">Launch Price</div>
            <div className="text-[14px] font-bold text-[#282828] flex items-baseline gap-0.5">
              <span className="text-[10px] font-bold">AED</span>
              {price}
            </div>
          </div>
          <div className="flex-1 bg-[#F8F9FA] rounded p-2 border border-[#E2E2E2]">
            <div className="text-[10px] text-[#666666] uppercase font-bold mb-0.5">Handover</div>
            <div className="text-[14px] font-bold text-[#282828]">
              {handover}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="px-4 pb-4 relative z-20">
        <button 
          className="w-full h-10 bg-[#00875A] hover:bg-[#2DAB6D] text-white font-bold rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
          aria-label="Contact via WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="text-[16px]">WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default function NewProjectsSlider() {
  const projects = [
    {
      title: "Mogadishu Heights",
      type: "Apartments",
      location: "Mogadishu Heights, Hodan District, Mogadishu, Somalia",
      price: "120K",
      handover: "Q2 2026",
      image: "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
      link: "#",
    },
    {
      title: "Hargeisa Park Residences",
      type: "Villas",
      location: "Hargeisa Park Residences, Gabiley Road, Hargeisa, Somaliland",
      price: "85K",
      handover: "Q4 2026",
      image: "https://images.bayut.com/thumbnails/698364758-400x300.jpeg",
      link: "#",
    },
    {
      title: "Lido Beach Suites",
      type: "Apartments",
      location: "Lido Beach Suites, Lido Beach Area, Mogadishu, Somalia",
      price: "200K",
      handover: "Q1 2027",
      image: "https://images.bayut.com/thumbnails/792684306-400x300.jpeg",
      link: "#",
    },
  ];

  return (
    <section className="bg-white py-[60px]">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="flex flex-col gap-6">
          {/* Header Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] font-bold text-[#282828] leading-[1.3]">
              Browse New Projects in Somalia
            </h2>
            <div className="flex items-center gap-2">
              <h3 className="text-[22px] font-semibold text-[#282828] border-b-4 border-[#00875A] pb-1">
                Mogadishu
              </h3>
            </div>
          </div>

          {/* Horizontal Slider */}
          <div className="relative overflow-hidden">
            <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
              
              {/* Optional: Add a "View All" card logic or placeholder for more */}
              <div className="flex-none w-[320px] bg-[#F8F9FA] rounded-lg border border-dashed border-[#E2E2E2] flex items-center justify-center p-6 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-[#E2E2E2]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00875A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                  <span className="text-[16px] font-bold text-[#282828]">Explore More Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}