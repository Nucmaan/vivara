import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const columns = [
    {
      heading: "Popular Searches",
      links: [
        "Properties for Sale in Mogadishu",
        "Properties for Rent in Mogadishu",
        "Villas for Sale in Hargeisa",
        "Apartments for Rent in Bosaso",
        "Commercial Properties in Somalia",
        "New Projects in Mogadishu",
      ],
    },
    {
      heading: "Neighborhoods",
      links: [
        "Hodan District",
        "Wadajir District",
        "Waberi District",
        "Lido Beach",
        "Medina District",
        "Wardhiigley District",
      ],
    },
    {
      heading: "Property Types",
      links: [
        "Apartments in Somalia",
        "Villas in Somalia",
        "Townhouses in Somalia",
        "Commercial Spaces",
        "Land & Plots",
        "Offices for Rent",
      ],
    },
    {
      heading: "Company",
      links: [
        "About Vivara Real Estate",
        "Contact Us",
        "Careers",
        "Blog & News",
        "Privacy Policy",
        "Terms of Use",
      ],
    },
  ];

  return (
    <footer className="bg-[#F8F9FA] border-t border-[#E2E2E2]">
      {/* Main Footer Links */}
      <div className="max-w-[1200px] mx-auto px-4 py-[60px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="text-[14px] font-bold text-[#282828] uppercase tracking-wider mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href="#"
                      className="text-[14px] text-[#666666] hover:text-[#00875A] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* App Store Badges + Social */}
      <div className="border-t border-[#E2E2E2]">
        <div className="max-w-[1200px] mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* App Store Badges */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-[#282828] text-white px-4 py-2.5 rounded-lg hover:bg-black transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-[9px] uppercase font-medium opacity-80">Download on the</span>
                <span className="text-[14px] font-bold">App Store</span>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-[#282828] text-white px-4 py-2.5 rounded-lg hover:bg-black transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.33.18.7.22 1.06.13l12.4-12.4L13.28 8.1 3.18 23.76zm16.57-10.29c.5-.49.78-1.16.78-1.47 0-.31-.28-.97-.77-1.46L17.5 9.27l-3.45 3.45 3.45 3.45 2.25-2.7zm-14.9-8.24a1.54 1.54 0 00-.47 1.14v16.64c0 .5.18.94.47 1.14L3.4 24 14.96 12.5 3.85 5.23z" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-[9px] uppercase font-medium opacity-80">Get it on</span>
                <span className="text-[14px] font-bold">Google Play</span>
              </div>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Youtube, href: "#" },
              { Icon: Linkedin, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E2E2E2] text-[#666666] hover:text-[#00875A] hover:border-[#00875A] transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E2E2E2] bg-white">
        <div className="max-w-[1200px] mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-[#666666]">
          <div className="flex items-center gap-1">
            <span className="text-[#00875A] font-black text-base tracking-tight">VIVARA</span>
            <span className="font-normal ml-1 text-xs uppercase border-l border-[#E2E2E2] pl-2">Real Estate</span>
            <span className="ml-2">© {new Date().getFullYear()} Vivara Real Estate. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-[#00875A] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#00875A] transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-[#00875A] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
