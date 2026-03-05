"use client";

import React, { useState } from "react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Star, CheckCircle2, Search } from "lucide-react";

const agents = [
  {
    id: 1,
    name: "Ahmed Hassan Farah",
    title: "Senior Property Consultant",
    agency: "Vivara Real Estate",
    location: "Mogadishu, Somalia",
    phone: "+252 61 234 5678",
    specialties: ["Residential", "Luxury Villas"],
    rating: 4.9,
    reviews: 87,
    listings: 34,
    deals: 120,
    verified: true,
    truBroker: true,
    image: "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
    languages: ["Somali", "Arabic", "English"],
  },
  {
    id: 2,
    name: "Fadumo Ali Warsame",
    title: "Real Estate Specialist",
    agency: "Vivara Real Estate",
    location: "Hargeisa, Somalia",
    phone: "+252 63 456 7890",
    specialties: ["Apartments", "Commercial"],
    rating: 4.7,
    reviews: 63,
    listings: 21,
    deals: 85,
    verified: true,
    truBroker: true,
    image: "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
    languages: ["Somali", "English"],
  },
  {
    id: 3,
    name: "Omar Abdi Mohamed",
    title: "Investment Advisor",
    agency: "Vivara Real Estate",
    location: "Mogadishu, Somalia",
    phone: "+252 61 987 6543",
    specialties: ["Off-Plan", "Investment Properties"],
    rating: 4.8,
    reviews: 55,
    listings: 18,
    deals: 70,
    verified: true,
    truBroker: false,
    image: "https://images.bayut.com/thumbnails/778062019-240x180.jpeg",
    languages: ["Somali", "Arabic"],
  },
  {
    id: 4,
    name: "Khadija Nuur Salah",
    title: "Rental Specialist",
    agency: "Vivara Real Estate",
    location: "Mogadishu, Somalia",
    phone: "+252 61 555 4321",
    specialties: ["Rentals", "Furnished Apartments"],
    rating: 4.6,
    reviews: 42,
    listings: 29,
    deals: 98,
    verified: true,
    truBroker: true,
    image: "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
    languages: ["Somali", "English", "Italian"],
  },
  {
    id: 5,
    name: "Abdirahman Hirsi Duale",
    title: "Commercial Property Expert",
    agency: "Vivara Real Estate",
    location: "Bosaso, Puntland",
    phone: "+252 68 123 9876",
    specialties: ["Commercial", "Warehouses"],
    rating: 4.5,
    reviews: 31,
    listings: 14,
    deals: 50,
    verified: false,
    truBroker: false,
    image: "https://images.bayut.com/thumbnails/792684306-400x300.jpeg",
    languages: ["Somali", "Arabic"],
  },
  {
    id: 6,
    name: "Sahra Yusuf Osman",
    title: "New Projects Consultant",
    agency: "Vivara Real Estate",
    location: "Hargeisa, Somalia",
    phone: "+252 63 777 2345",
    specialties: ["New Projects", "Off-Plan"],
    rating: 4.9,
    reviews: 74,
    listings: 26,
    deals: 110,
    verified: true,
    truBroker: true,
    image: "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
    languages: ["Somali", "English"],
  },
];

const specialties = ["All", "Residential", "Apartments", "Commercial", "Off-Plan", "Rentals", "New Projects"];

export default function AgentsPage() {
  const [search, setSearch] = useState("");
  const [activeSpec, setActiveSpec] = useState("All");

  const filtered = agents.filter((a) => {
    const matchSpec =
      activeSpec === "All" || a.specialties.some((s) => s.includes(activeSpec));
    const matchSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.location.toLowerCase().includes(search.toLowerCase());
    return matchSpec && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans">
      <Navbar />

      {/* Page Header */}
      <div className="bg-white border-b border-[#E2E2E2]">
        <div className="max-w-[1200px] mx-auto px-5 py-10">
          <h1 className="text-[32px] font-bold text-[#282828] mb-1">
            Find a <span className="text-[#00875A]">Tru</span>Broker™ in Somalia
          </h1>
          <p className="text-[16px] text-[#666666] mb-6">
            Connect with verified, top-performing real estate agents across Somalia
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-3 bg-[#F8F9FA] border border-[#E2E2E2] rounded-lg px-4 py-3 focus-within:border-[#00875A] transition-colors">
              <Search size={18} className="text-[#00875A] shrink-0" />
              <input
                type="text"
                placeholder="Search agents by name or location..."
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

          {/* Specialty Filters */}
          <div className="mt-4 flex flex-wrap gap-2">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setActiveSpec(spec)}
                className={`px-4 py-1.5 rounded-full text-[13px] font-semibold border transition-all ${
                  activeSpec === spec
                    ? "bg-[#00875A] text-white border-[#00875A]"
                    : "bg-white text-[#444] border-[#E2E2E2] hover:border-[#00875A] hover:text-[#00875A]"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        <p className="text-[14px] text-[#666] mb-6">{filtered.length} agents found</p>
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#888] text-[18px]">No agents found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((agent) => (
              <div
                key={agent.id}
                className="bg-white rounded-xl overflow-hidden border border-[#E2E2E2] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top accent */}
                {agent.truBroker && (
                  <div className="bg-[#00875A] text-white text-[11px] font-bold text-center py-1.5 tracking-widest uppercase">
                    ★ TruBroker™ Verified Agent
                  </div>
                )}

                <div className="p-5">
                  {/* Agent Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-[#E2E2E2] shrink-0">
                      <Image
                        src={agent.image}
                        alt={agent.name}
                        fill
                        className="object-cover"
                        sizes="72px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-[16px] font-bold text-[#282828] truncate">{agent.name}</h3>
                        {agent.verified && (
                          <CheckCircle2 size={15} className="text-[#00875A] shrink-0" />
                        )}
                      </div>
                      <p className="text-[13px] text-[#666]">{agent.title}</p>
                      <p className="text-[12px] font-bold text-[#00875A]">{agent.agency}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin size={11} className="text-[#999] shrink-0" />
                        <span className="text-[12px] text-[#999]">{agent.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className={i < Math.floor(agent.rating) ? "fill-[#F59E0B] text-[#F59E0B]" : "text-[#DDD]"}
                        />
                      ))}
                    </div>
                    <span className="text-[13px] font-bold text-[#282828]">{agent.rating}</span>
                    <span className="text-[12px] text-[#999]">({agent.reviews} reviews)</span>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-2 mb-4">
                    <div className="flex-1 bg-[#F8F9FA] rounded-lg p-2.5 text-center border border-[#E2E2E2]">
                      <p className="text-[18px] font-bold text-[#282828]">{agent.listings}</p>
                      <p className="text-[10px] text-[#999] uppercase font-semibold">Listings</p>
                    </div>
                    <div className="flex-1 bg-[#F8F9FA] rounded-lg p-2.5 text-center border border-[#E2E2E2]">
                      <p className="text-[18px] font-bold text-[#282828]">{agent.deals}</p>
                      <p className="text-[10px] text-[#999] uppercase font-semibold">Deals</p>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {agent.specialties.map((s) => (
                      <span key={s} className="bg-[#E8F5EF] text-[#00875A] text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Languages */}
                  <p className="text-[12px] text-[#999] mb-4">
                    Languages: <span className="text-[#444] font-medium">{agent.languages.join(", ")}</span>
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-[#00875A] hover:bg-[#006644] text-white font-bold py-2.5 rounded-lg transition-colors text-[13px]">
                      <Phone size={14} />
                      Contact
                    </button>
                    <Link
                      href={`/agents/${agent.id}`}
                      className="flex-1 flex items-center justify-center gap-2 border border-[#00875A] text-[#00875A] hover:bg-[#E8F5EF] font-bold py-2.5 rounded-lg transition-colors text-[13px]"
                    >
                      View Profile
                    </Link>
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
