import React from 'react';
import { ArrowRight } from 'lucide-react';

const SellerLeadsBanner = () => {
  return (
    <div className="container mx-auto px-4 my-[60px]">
      <div 
        aria-label="Seller leads banner" 
        className="relative flex items-center justify-between w-full h-[120px] px-[40px] rounded-[16px] overflow-hidden bg-primary"
        style={{
          background: 'linear-gradient(263deg, #00875A 0%, #2DAB6D 100%)'
        }}
      >
        {/* Decorative SVG Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1100 0L1200 120H900L800 0H1100Z"
              fill="white"
              fillOpacity="0.1"
            />
            <path
              d="M300 120L200 0H500L600 120H300Z"
              fill="white"
              fillOpacity="0.05"
            />
            <circle cx="50" cy="60" r="40" stroke="white" strokeWidth="2" strokeOpacity="0.1" />
            <circle cx="1150" cy="20" r="60" stroke="white" strokeWidth="1" strokeOpacity="0.08" />
          </svg>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col justify-center max-w-[70%]">
          <div className="flex items-center gap-2 mb-1">
             <span className="bg-white/20 text-white text-[10px] font-bold uppercase py-0.5 px-2 rounded-sm tracking-wider">
              New
            </span>
          </div>
          <h2 className="text-white text-[24px] lg:text-[28px] font-bold leading-tight">
            Sell or Rent Your Property with Confidence
          </h2>
          <p className="text-white/90 text-[14px] lg:text-[16px] font-normal">
            Connect with a trusted agent to secure the best deal, faster.
          </p>
        </div>

        {/* Action Button */}
        <div className="relative z-10">
          <button 
            aria-label="Get started now"
            className="flex items-center justify-center gap-2 bg-white text-primary hover:bg-[#F8F9FA] transition-premium px-8 py-3 rounded-[8px] font-semibold text-[16px] shadow-sm whitespace-nowrap"
          >
            Get Started
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerLeadsBanner;