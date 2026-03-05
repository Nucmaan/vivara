import React from 'react';
import { ChevronRight } from 'lucide-react';

const QuickLinksCards = () => {
  const cards = [
    {
      title: 'TruEstimate™',
      description: 'Find out how much your property is worth',
      href: '/property-market-analysis/tru-estimate/',
      bgImage: 'https://static.bayut.com/assets/tru_estimate_bg.png', // Fallback pattern or inferred asset
      // Note: Based on visual analysis of similar sites, these cards often use background images or gradients.
      // The HTML structure shows specific classes for backgrounds.
      className: 'bg-[#00875A]', // Base branding green for TruEstimate
      titleColor: 'text-white',
      descColor: 'text-white/90',
      isTru: true
    },
    {
      title: 'Search 2.0',
      description: 'Find homes by drive time',
      href: '/for-sale/property/uae/?map_active=true&commute_active=true',
      className: 'bg-[#282828]', // Charcoal black for Search 2.0
      titleColor: 'text-white',
      descColor: 'text-white/90',
      isTru: false
    },
    {
      title: 'Map View',
      description: 'Search for properties in preferred areas using a map',
      href: '/for-sale/property/uae/?map_active=true',
      className: 'bg-[#F8F9FA] border border-[#E2E2E2]', // Light bg for Map View
      titleColor: 'text-[#282828]',
      descColor: 'text-[#666666]',
      isTru: false
    }
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className={`group flex flex-col justify-between h-[160px] p-6 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl relative overflow-hidden ${card.className}`}
            >
              {/* Card Title Section */}
              <div className="relative z-10">
                <h2 className={`text-[22px] font-bold leading-tight ${card.titleColor}`}>
                  {card.isTru ? (
                    <span>
                      Tru<span className="text-[#D4A017]">Estimate</span>™
                    </span>
                  ) : (
                    card.title
                  )}
                </h2>
              </div>

              {/* Card Bottom Section */}
              <div className="flex items-center justify-between relative z-10">
                <p className={`text-[14px] font-medium max-w-[80%] ${card.descColor}`}>
                  {card.description}
                </p>
                <div className={`flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300 group-hover:translate-x-1 ${card.titleColor === 'text-white' ? 'bg-white/20' : 'bg-black/5'}`}>
                  <ChevronRight size={14} className={card.titleColor} strokeWidth={3} />
                </div>
              </div>

              {/* Decorative elements to match original UI feel if needed */}
              {card.isTru && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksCards;