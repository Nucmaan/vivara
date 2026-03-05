import React from 'react';
import Link from 'next/link';
import { Menu, Globe, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E2E2E2]">
      <div className="container mx-auto max-w-[1200px] h-[72px] px-5 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="relative w-[125px] h-[32px] flex items-center">
            <span className="text-[#00875A] font-black text-2xl tracking-tighter flex items-center">
              VIVARA<span className="text-[#282828] font-normal ml-1 text-sm tracking-normal uppercase border-l border-[#E2E2E2] pl-2 self-center">Real Estate</span>
            </span>
          </Link>
        </div>

          {/* Navigation Items */}
          <nav className="hidden lg:flex items-center gap-6">

           <Link 
              href="/" 
              className="text-[14.98px] font-semibold text-[#222222] hover:text-[#00875A] transition-premium"
            >
              Home
            </Link>

            <Link 
              href="/rent" 
              className="text-[14.98px] font-semibold text-[#222222] hover:text-[#00875A] transition-premium"
            >
              Rent
            </Link>

            <Link 
              href="/buy" 
              className="text-[14.98px] font-semibold text-[#222222] hover:text-[#00875A] transition-premium"
            >
              Buy
            </Link>

            <Link 
              href="/agents" 
              className="text-[14.98px] font-semibold text-[#222222] hover:text-[#00875A] transition-premium"
            >
              Agents
            </Link>

             <Link 
              href="/projects" 
              className="text-[14.98px] font-semibold text-[#222222] hover:text-[#00875A] transition-premium"
            >
              New Projects
            </Link>

          {/* Settings / Dropdown */}
          <div className="flex items-center gap-4 ml-2 pl-4 border-l border-[#E2E2E2]">
            <button className="flex items-center gap-1.5 text-[14px] font-medium text-[#222222]">
              <Globe size={18} className="text-[#666666]" />
              <div className="flex flex-col items-start leading-[1.2]">
                <span className="text-[10px] text-[#666666] uppercase font-bold">Currency</span>
                <span className="flex items-center gap-1">USD <ChevronDown size={12} /></span>
              </div>
            </button>
            
            <button className="p-2 hover:bg-[#F8F9FA] rounded-full transition-colors">
              <Menu size={24} className="text-[#222222]" />
            </button>

            <Link
              href="/auth"
              className="bg-[#00875A] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#2DAB6D] transition-premium"
            >
              Sign up or Log in
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button className="p-2">
            <Menu size={28} className="text-[#222222]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;