import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Properties');
  const [purpose, setPurpose] = useState('Buy');
  const [location, setLocation] = useState('');
  const tabs = [
    { label: 'Properties', href: null },
    { label: 'New Projects', href: '/projects' },
    { label: 'Agents', href: '/agents' },
  ];

  return (
      <header className="relative w-full h-[620px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://static.bayut.com/assets/imageBackgroundLarge.dfd4657ef6577120e96eb5bfd71bb50d.jpg"
          alt="Real estate wallpaper"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Hero Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-10 h-full flex flex-col justify-center items-center text-white">

          {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="text-[48px] text-white font-bold leading-[1.2] mb-2 drop-shadow-md">
            Real homes live in East Africa. Find yours today.
          </h1>
          <h2 className="text-[22px] text-white font-medium tracking-wide opacity-95">
            Real Data. Real Brokers. Real Properties.
          </h2>
        </div>

        {/* Search Container */}
          <div className="w-full max-w-4xl mx-auto">
          {/* Tabs */}
            <div className="flex bg-black/30 backdrop-blur-md rounded-t-xl overflow-hidden w-fit mx-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => {
                    setActiveTab(tab.label);
                    if (tab.href) router.push(tab.href);
                  }}
                  className={`px-8 py-3.5 text-[15px] font-semibold transition-all relative whitespace-nowrap
                    ${activeTab === tab.label ? 'bg-white text-[#222222]' : 'text-white hover:bg-white/10'}
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          {/* Search Form Card */}
          <div className="bg-white rounded-xl lg:rounded-tl-none shadow-2xl p-6 text-[#222222]">
            <div className="flex flex-col gap-5">

              {/* Buy / Rent + Location + Search */}
              <div className="flex flex-col lg:flex-row items-center gap-4">

                {/* Buy / Rent Toggle */}
                <div className="flex bg-gray-100 p-1 rounded-lg border border-gray-200">
                  <button
                    onClick={() => setPurpose('Buy')}
                    className={`px-6 py-2.5 rounded-md text-[16px] font-bold transition-all ${purpose === 'Buy' ? 'bg-[#00875A] text-white shadow-sm' : 'text-gray-500 hover:bg-gray-200'}`}
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => setPurpose('Rent')}
                    className={`px-6 py-2.5 rounded-md text-[16px] font-bold transition-all ${purpose === 'Rent' ? 'bg-[#00875A] text-white shadow-sm' : 'text-gray-500 hover:bg-gray-200'}`}
                  >
                    Rent
                  </button>
                </div>

                  {/* Location Input */}
                  <div className="flex-1 w-full">
                    <div className="flex flex-col border border-gray-200 rounded-lg bg-gray-50 px-4 py-2 hover:border-[#00875A] transition-colors cursor-text">
                      <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">Location</label>
                      <input
                        type="text"
                        placeholder="Enter location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="bg-transparent border-none outline-none text-[16px] font-medium placeholder:text-gray-400 w-full"
                      />
                    </div>
                  </div>

                  {/* Search Button */}
                  <button
                    onClick={() => router.push(purpose === 'Buy' ? '/buy' : '/rent')}
                    className="w-full lg:w-40 bg-[#00875A] hover:bg-[#006644] text-white font-bold py-4 rounded-lg flex items-center justify-center transition-all text-[18px]"
                  >
                    Search
                  </button>
              </div>

              {/* AI Callout */}
              <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00875A] to-[#006644] flex items-center justify-center text-white">
                    <span className="text-[10px] font-black">AI</span>
                  </div>
                  <span className="text-[14px] font-medium text-gray-500">
                    Want to find out more about East Africa real estate using AI?
                  </span>
                </div>
                <button className="flex items-center gap-2 text-[#00875A] font-bold text-[14px] hover:underline mt-2 sm:mt-0 transition-all">
                  Try VivaraGPT
                  <div className="w-5 h-5 bg-[#00875A]/10 rounded-full flex items-center justify-center">
                    <ArrowRight size={14} />
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
