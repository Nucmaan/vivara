"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { Search, MapPin, BedDouble, Bath, Maximize2, Heart } from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Modern Apartment in Hodan District",
    type: "Apartment",
    location: "Hodan District, Mogadishu",
    beds: 3,
    baths: 2,
    area: "1,800 sqft",
    price: "$1,200 / month",
    image: "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
    badge: "VERIFIED",
    badgeColor: "bg-[#00875A]",
  },
  {
    id: 2,
    title: "Spacious Villa Near Lido Beach",
    type: "Villa",
    location: "Lido Beach Area, Mogadishu",
    beds: 5,
    baths: 4,
    area: "4,200 sqft",
    price: "$3,500 / month",
    image: "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
    badge: "FEATURED",
    badgeColor: "bg-[#F59E0B]",
  },
  {
    id: 3,
    title: "Office Space in Wadajir District",
    type: "Office",
    location: "Wadajir District, Mogadishu",
    beds: 0,
    baths: 2,
    area: "900 sqft",
    price: "$800 / month",
    image: "https://images.bayut.com/thumbnails/778062019-240x180.jpeg",
    badge: "NEW",
    badgeColor: "bg-[#3B82F6]",
  },
  {
    id: 4,
    title: "Furnished Apartment in Waberi",
    type: "Apartment",
    location: "Waberi District, Mogadishu",
    beds: 2,
    baths: 1,
    area: "1,100 sqft",
    price: "$750 / month",
    image: "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
    badge: "VERIFIED",
    badgeColor: "bg-[#00875A]",
  },
  {
    id: 5,
    title: "Penthouse in Medina District",
    type: "Apartment",
    location: "Medina District, Mogadishu",
    beds: 4,
    baths: 3,
    area: "3,000 sqft",
    price: "$2,800 / month",
    image: "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
    badge: "FEATURED",
    badgeColor: "bg-[#F59E0B]",
  },
  {
    id: 6,
    title: "Studio in Hargeisa City Center",
    type: "Studio",
    location: "City Center, Hargeisa",
    beds: 1,
    baths: 1,
    area: "550 sqft",
    price: "$400 / month",
    image: "https://images.bayut.com/thumbnails/698364758-400x300.jpeg",
    badge: "NEW",
    badgeColor: "bg-[#3B82F6]",
  },
];

const propertyTypes = ["All", "Apartment", "Villa", "Office", "Studio", "Townhouse"];

export default function RentPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("All");
  const [liked, setLiked] = useState<number[]>([]);

  const goToDetails = (id: number) => router.push(`/rent/${id}`);

  const filtered = listings.filter((l) => {
    const matchType = activeType === "All" || l.type === activeType;
    const matchSearch =
      l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.location.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans">
      <Navbar />

      {/* Page Header */}
      <div className="bg-white border-b border-[#E2E2E2]">
        <div className="max-w-[1200px] mx-auto px-5 py-8">
          <h1 className="text-[32px] font-bold text-[#282828] mb-1">
            Properties for <span className="text-[#00875A]">Rent</span> in Somalia
          </h1>
          <p className="text-[16px] text-[#666666]">
            Browse {listings.length} rental properties across Mogadishu, Hargeisa & more
          </p>

          {/* Search Bar */}
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-3 bg-[#F8F9FA] border border-[#E2E2E2] rounded-lg px-4 py-3 focus-within:border-[#00875A] transition-colors">
              <MapPin size={18} className="text-[#00875A] shrink-0" />
              <input
                type="text"
                placeholder="Search by location or property name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none text-[15px] w-full placeholder:text-gray-400"
              />
            </div>
            <button className="flex items-center gap-2 bg-[#00875A] hover:bg-[#006644] text-white font-bold px-8 py-3 rounded-lg transition-colors text-[15px]">
              <Search size={18} />
              Search
            </button>
          </div>

          {/* Property Type Filter */}
          <div className="mt-4 flex flex-wrap gap-2">
            {propertyTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-1.5 rounded-full text-[13px] font-semibold border transition-all ${
                  activeType === type
                    ? "bg-[#00875A] text-white border-[#00875A]"
                    : "bg-white text-[#444] border-[#E2E2E2] hover:border-[#00875A] hover:text-[#00875A]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#888] text-[18px]">No properties found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-xl overflow-hidden border border-[#E2E2E2] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                role="link"
                tabIndex={0}
                onClick={() => goToDetails(listing.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    goToDetails(listing.id);
                  }
                }}
              >
                {/* Image */}
                <div className="relative w-full h-[200px]">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                  <span className={`absolute top-3 left-3 ${listing.badgeColor} text-white text-[11px] font-bold px-2 py-0.5 rounded`}>
                    {listing.badge}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLiked((prev) =>
                        prev.includes(listing.id)
                          ? prev.filter((id) => id !== listing.id)
                          : [...prev, listing.id]
                      );
                    }}
                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  >
                    <Heart
                      size={15}
                      className={liked.includes(listing.id) ? "fill-red-500 text-red-500" : "text-[#888]"}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-[12px] text-[#00875A] font-bold uppercase mb-1">{listing.type}</p>
                  <h3 className="text-[16px] font-bold text-[#282828] leading-tight mb-1 truncate">
                    {listing.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[#666] text-[13px] mb-3">
                    <MapPin size={12} className="shrink-0" />
                    <span className="truncate">{listing.location}</span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-[#444] text-[13px] mb-4">
                    {listing.beds > 0 && (
                      <span className="flex items-center gap-1">
                        <BedDouble size={14} className="text-[#00875A]" />
                        {listing.beds} Beds
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Bath size={14} className="text-[#00875A]" />
                      {listing.baths} Baths
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize2 size={14} className="text-[#00875A]" />
                      {listing.area}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#F0F0F0]">
                    <span className="text-[18px] font-bold text-[#282828]">{listing.price}</span>
                    <button
                      className="bg-[#00875A] hover:bg-[#006644] text-white text-[13px] font-bold px-4 py-2 rounded-lg transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToDetails(listing.id);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
