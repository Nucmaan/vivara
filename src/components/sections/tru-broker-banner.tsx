import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const TruBrokerBanner = () => {
  // Data derived from the provided screenshots and assets
  const agents = [
    {
      name: "Eyad Ashek Hassan",
      image: "https://images.bayut.com/thumbnails/418335249-240x180.jpeg"
    },
    {
      name: "Shehryar Nadeem",
      image: "https://images.bayut.com/thumbnails/599566460-240x180.jpeg"
    },
    {
      name: "Youssef Maher",
      image: "https://images.bayut.com/thumbnails/778062019-240x180.jpeg"
    },
    {
      name: "Joe Feghaly",
      image: "https://images.bayut.com/thumbnails/800265511-240x180.jpeg"
    }
  ];

  return (
    <section className="w-full py-[60px] bg-white border-b border-[#E2E2E2]">
      <div className="container max-w-[1200px] mx-auto px-4 lg:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#F8F9FA] rounded-[12px] p-[24px] md:p-[32px] gap-8 shadow-sm">
          
          {/* Agent Portraits Stack */}
          <div className="flex -space-x-4 md:-space-x-6 overflow-hidden">
            {agents.map((agent, index) => (
              <div 
                key={index} 
                className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full border-[4px] border-white overflow-hidden bg-gray-200"
              >
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80px, 100px"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
              <h2 className="text-[24px] md:text-[28px] font-bold text-[#282828] leading-tight">
                Find a <span className="text-[#00875A]">Tru</span>Broker™
              </h2>
            </div>
            <p className="text-[14px] md:text-[16px] text-[#666666] leading-snug">
              Find trusted agents awarded for their excellent performance in Somalia
            </p>
          </div>

          {/* CTA Button */}
          <div className="w-full md:w-auto">
            <a 
              href="/brokers/" 
              role="banner"
              className="flex items-center justify-center gap-2 bg-[#00875A] hover:bg-[#2DAB6D] transition-premium text-white font-semibold text-[16px] px-[32px] py-[14px] rounded-[8px] whitespace-nowrap"
            >
              Find My Agent
              <ChevronRight className="w-4 h-4" strokeWidth={3} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TruBrokerBanner;