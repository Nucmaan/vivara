"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import {
  MapPin, Phone, Mail, ChevronLeft, CheckCircle2, Star,
  BedDouble, Home, MessageCircle
} from "lucide-react";

const agents = [
  {
    id: 1,
    name: "Ahmed Hassan Farah",
    title: "Senior Property Consultant",
    agency: "Vivara Real Estate",
    location: "Mogadishu, Somalia",
    phone: "+252 61 234 5678",
    email: "ahmed@vivara.so",
    specialties: ["Residential", "Luxury Villas"],
    rating: 4.9,
    reviews: 87,
    listings: 34,
    deals: 120,
    verified: true,
    truBroker: true,
    image: "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
    languages: ["Somali", "Arabic", "English"],
    bio: "Ahmed Hassan Farah is one of Vivara Real Estate's most decorated consultants with over 10 years of experience in Somalia's luxury property market. Specialising in high-end villas and penthouse apartments in Mogadishu's most prestigious neighbourhoods, Ahmed has facilitated over 120 successful transactions worth more than $40 million. He is known for his deep market knowledge, transparent approach, and exceptional client service.",
    yearsExp: 10,
    activeSince: "2015",
    recentListings: [
      { title: "Luxury Villa in Hodan", price: "$420,000", type: "Villa", image: "https://images.bayut.com/thumbnails/792684306-400x300.jpeg", href: "/buy/1" },
      { title: "Modern Apartment at Lido Beach", price: "$180,000", type: "Apartment", image: "https://images.bayut.com/thumbnails/800238984-400x300.jpeg", href: "/buy/2" },
      { title: "Penthouse in Medina District", price: "$2,800/mo", type: "Penthouse", image: "https://images.bayut.com/thumbnails/800238984-400x300.jpeg", href: "/rent/5" },
    ],
  },
  {
    id: 2,
    name: "Fadumo Ali Warsame",
    title: "Real Estate Specialist",
    agency: "Vivara Real Estate",
    location: "Hargeisa, Somalia",
    phone: "+252 63 456 7890",
    email: "fadumo@vivara.so",
    specialties: ["Apartments", "Commercial"],
    rating: 4.7,
    reviews: 63,
    listings: 21,
    deals: 85,
    verified: true,
    truBroker: true,
    image: "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
    languages: ["Somali", "English"],
    bio: "Fadumo Ali Warsame is Vivara's top-performing specialist in Hargeisa, with a proven track record in apartment sales and commercial real estate. Over her 7-year career, Fadumo has helped hundreds of families find their dream homes and assisted investors in building strong commercial property portfolios across Somaliland. Her honest, client-first approach has earned her a loyal client base.",
    yearsExp: 7,
    activeSince: "2018",
    recentListings: [
      { title: "Family Home in Medina", price: "$265,000", type: "Townhouse", image: "https://images.bayut.com/thumbnails/800265511-240x180.jpeg", href: "/buy/4" },
      { title: "Furnished Apartment in Waberi", price: "$750/mo", type: "Apartment", image: "https://images.bayut.com/thumbnails/800265511-240x180.jpeg", href: "/rent/4" },
      { title: "Investment Land in Hargeisa", price: "$75,000", type: "Land", image: "https://images.bayut.com/thumbnails/418335249-240x180.jpeg", href: "/buy/6" },
    ],
  },
  {
    id: 3,
    name: "Omar Abdi Mohamed",
    title: "Investment Advisor",
    agency: "Vivara Real Estate",
    location: "Mogadishu, Somalia",
    phone: "+252 61 987 6543",
    email: "omar@vivara.so",
    specialties: ["Off-Plan", "Investment Properties"],
    rating: 4.8,
    reviews: 55,
    listings: 18,
    deals: 70,
    verified: true,
    truBroker: false,
    image: "https://images.bayut.com/thumbnails/778062019-240x180.jpeg",
    languages: ["Somali", "Arabic"],
    bio: "Omar Abdi Mohamed is Vivara's leading investment property advisor, focusing exclusively on off-plan developments and high-yield commercial assets. With 8 years in the industry, Omar has guided investors from the diaspora and local businesses in securing prime development opportunities across Mogadishu and Puntland. He provides detailed ROI analysis and full lifecycle support from purchase to handover.",
    yearsExp: 8,
    activeSince: "2017",
    recentListings: [
      { title: "Mogadishu Heights", price: "From $120,000", type: "Off-Plan", image: "https://images.bayut.com/thumbnails/800238984-400x300.jpeg", href: "/projects/1" },
      { title: "Hargeisa Park Residences", price: "From $85,000", type: "Off-Plan", image: "https://images.bayut.com/thumbnails/698364758-400x300.jpeg", href: "/projects/2" },
      { title: "Office Space in Wadajir", price: "$800/mo", type: "Office", image: "https://images.bayut.com/thumbnails/778062019-240x180.jpeg", href: "/rent/3" },
    ],
  },
  {
    id: 4,
    name: "Khadija Nuur Salah",
    title: "Rental Specialist",
    agency: "Vivara Real Estate",
    location: "Mogadishu, Somalia",
    phone: "+252 61 555 4321",
    email: "khadija@vivara.so",
    specialties: ["Rentals", "Furnished Apartments"],
    rating: 4.6,
    reviews: 42,
    listings: 29,
    deals: 98,
    verified: true,
    truBroker: true,
    image: "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
    languages: ["Somali", "English", "Italian"],
    bio: "Khadija Nuur Salah is Vivara's most experienced rental specialist, managing one of the largest portfolios of furnished and serviced apartments in Mogadishu. With a background in hospitality, Khadija brings a unique perspective to the rental market, ensuring both landlords and tenants enjoy a seamless experience. She speaks three languages and has an extensive network of corporate clients.",
    yearsExp: 6,
    activeSince: "2019",
    recentListings: [
      { title: "Modern Apartment in Hodan", price: "$1,200/mo", type: "Apartment", image: "https://images.bayut.com/thumbnails/418335249-240x180.jpeg", href: "/rent/1" },
      { title: "Spacious Villa Near Lido", price: "$3,500/mo", type: "Villa", image: "https://images.bayut.com/thumbnails/599566460-240x180.jpeg", href: "/rent/2" },
      { title: "Medina Townhouses", price: "From $160,000", type: "Townhouse", image: "https://images.bayut.com/thumbnails/599566460-240x180.jpeg", href: "/projects/5" },
    ],
  },
  {
    id: 5,
    name: "Abdirahman Hirsi Duale",
    title: "Commercial Property Expert",
    agency: "Vivara Real Estate",
    location: "Bosaso, Puntland",
    phone: "+252 68 123 9876",
    email: "abdirahman@vivara.so",
    specialties: ["Commercial", "Warehouses"],
    rating: 4.5,
    reviews: 31,
    listings: 14,
    deals: 50,
    verified: false,
    truBroker: false,
    image: "https://images.bayut.com/thumbnails/792684306-400x300.jpeg",
    languages: ["Somali", "Arabic"],
    bio: "Abdirahman Hirsi Duale is Vivara's Puntland specialist, focusing on commercial properties, warehouses, and industrial real estate in the Bosaso region. As one of the fastest-growing commercial hubs in the Horn of Africa, Bosaso offers exceptional opportunities for businesses and investors, and Abdirahman is the go-to expert for navigating this dynamic market.",
    yearsExp: 5,
    activeSince: "2020",
    recentListings: [
      { title: "Commercial Building in Wadajir", price: "$950,000", type: "Commercial", image: "https://images.bayut.com/thumbnails/698364758-400x300.jpeg", href: "/buy/3" },
      { title: "Bosaso Bay Residences", price: "From $95,000", type: "Off-Plan", image: "https://images.bayut.com/thumbnails/418335249-240x180.jpeg", href: "/projects/6" },
      { title: "Wadajir Business Tower", price: "From $350,000", type: "Commercial", image: "https://images.bayut.com/thumbnails/800265511-240x180.jpeg", href: "/projects/4" },
    ],
  },
  {
    id: 6,
    name: "Sahra Yusuf Osman",
    title: "New Projects Consultant",
    agency: "Vivara Real Estate",
    location: "Hargeisa, Somalia",
    phone: "+252 63 777 2345",
    email: "sahra@vivara.so",
    specialties: ["New Projects", "Off-Plan"],
    rating: 4.9,
    reviews: 74,
    listings: 26,
    deals: 110,
    verified: true,
    truBroker: true,
    image: "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
    languages: ["Somali", "English"],
    bio: "Sahra Yusuf Osman is one of Somalia's most recognised new projects consultants with a stellar reputation for matching investors with the right off-plan opportunities. Her deep knowledge of upcoming developments, developer relationships, and market trends has helped her clients secure properties at launch prices with outstanding appreciation. Sahra is Vivara's highest-rated consultant two years running.",
    yearsExp: 9,
    activeSince: "2016",
    recentListings: [
      { title: "Lido Beach Suites", price: "From $200,000", type: "Off-Plan", image: "https://images.bayut.com/thumbnails/792684306-400x300.jpeg", href: "/projects/3" },
      { title: "Studio in Hargeisa", price: "$400/mo", type: "Studio", image: "https://images.bayut.com/thumbnails/698364758-400x300.jpeg", href: "/rent/6" },
      { title: "Bosaso Bay Residences", price: "From $95,000", type: "Off-Plan", image: "https://images.bayut.com/thumbnails/418335249-240x180.jpeg", href: "/projects/6" },
    ],
  },
];

export default function AgentProfilePage() {
  const { id } = useParams();
  const router = useRouter();
  const agent = agents.find((a) => a.id === Number(id));

  if (!agent) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] font-sans">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-40 text-[#888]">
          <Home size={48} className="mb-4 text-[#CCC]" />
          <p className="text-[20px] font-bold">Agent not found</p>
          <button onClick={() => router.push("/agents")} className="mt-4 text-[#00875A] font-semibold hover:underline">← Back to Agents</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E2E2E2]">
        <div className="max-w-[1200px] mx-auto px-5 py-3 flex items-center gap-2 text-[13px] text-[#888]">
          <button onClick={() => router.push("/")} className="hover:text-[#00875A]">Home</button>
          <span>/</span>
          <button onClick={() => router.push("/agents")} className="hover:text-[#00875A]">Agents</button>
          <span>/</span>
          <span className="text-[#282828] font-medium">{agent.name}</span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 py-8">
        <button onClick={() => router.push("/agents")} className="flex items-center gap-1.5 text-[#00875A] font-semibold text-[14px] mb-6 hover:gap-2.5 transition-all">
          <ChevronLeft size={18} /> Back to Agents
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left — Profile */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E2E2] shadow-sm">
              {agent.truBroker && (
                <div className="bg-[#00875A] text-white text-[12px] font-bold text-center py-2 tracking-widest uppercase">
                  ★ TruBroker™ Verified Agent
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start gap-5">
                  <div className="relative w-[100px] h-[100px] rounded-2xl overflow-hidden border-2 border-[#E2E2E2] shrink-0">
                    <Image src={agent.image} alt={agent.name} fill className="object-cover" sizes="100px" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h1 className="text-[24px] font-bold text-[#282828]">{agent.name}</h1>
                      {agent.verified && <CheckCircle2 size={18} className="text-[#00875A]" />}
                    </div>
                    <p className="text-[15px] text-[#666] mt-0.5">{agent.title}</p>
                    <p className="text-[13px] font-bold text-[#00875A] mt-0.5">{agent.agency}</p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <MapPin size={13} className="text-[#999] shrink-0" />
                      <span className="text-[13px] text-[#999]">{agent.location}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className={i < Math.floor(agent.rating) ? "fill-[#F59E0B] text-[#F59E0B]" : "text-[#DDD]"} />
                        ))}
                      </div>
                      <span className="text-[14px] font-bold text-[#282828]">{agent.rating}</span>
                      <span className="text-[13px] text-[#999]">({agent.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-3 mt-6 pt-5 border-t border-[#F0F0F0]">
                  {[
                    { label: "Listings", value: agent.listings },
                    { label: "Deals", value: agent.deals },
                    { label: "Reviews", value: agent.reviews },
                    { label: "Years Exp.", value: agent.yearsExp },
                  ].map((s) => (
                    <div key={s.label} className="text-center bg-[#F8F9FA] rounded-xl p-3 border border-[#E2E2E2]">
                      <p className="text-[22px] font-bold text-[#282828]">{s.value}</p>
                      <p className="text-[11px] text-[#999] uppercase font-semibold">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm">
              <h2 className="text-[18px] font-bold text-[#282828] mb-3">About {agent.name.split(" ")[0]}</h2>
              <p className="text-[15px] text-[#555] leading-relaxed">{agent.bio}</p>
            </div>

            {/* Details */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm">
              <h2 className="text-[18px] font-bold text-[#282828] mb-4">Agent Details</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Agency", value: agent.agency },
                  { label: "Location", value: agent.location },
                  { label: "Active Since", value: agent.activeSince },
                  { label: "Experience", value: `${agent.yearsExp} Years` },
                  { label: "Languages", value: agent.languages.join(", ") },
                  { label: "Verification", value: agent.verified ? "Verified ✓" : "Unverified" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[12px] text-[#999] uppercase font-semibold">{item.label}</p>
                    <p className="text-[15px] text-[#282828] font-medium mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#F0F0F0]">
                <p className="text-[13px] text-[#999] uppercase font-semibold mb-2">Specialties</p>
                <div className="flex flex-wrap gap-2">
                  {agent.specialties.map((s) => (
                    <span key={s} className="bg-[#E8F5EF] text-[#00875A] text-[12px] font-semibold px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Listings */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm">
              <h2 className="text-[18px] font-bold text-[#282828] mb-4">
                <BedDouble size={18} className="inline mr-2 text-[#00875A]" />
                Recent Listings
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {agent.recentListings.map((listing) => (
                  <button key={listing.title} onClick={() => router.push(listing.href)} className="text-left group">
                    <div className="relative w-full h-[130px] rounded-xl overflow-hidden mb-2 border border-[#E2E2E2]">
                      <Image src={listing.image} alt={listing.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="200px" />
                    </div>
                    <p className="text-[13px] text-[#00875A] font-semibold uppercase">{listing.type}</p>
                    <p className="text-[14px] font-bold text-[#282828] leading-tight">{listing.title}</p>
                    <p className="text-[14px] font-bold text-[#555] mt-0.5">{listing.price}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact Card */}
          <div>
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm sticky top-[90px]">
              <h3 className="text-[16px] font-bold text-[#282828] mb-4 text-center">Contact {agent.name.split(" ")[0]}</h3>

              <div className="space-y-3">
                <a href={`tel:${agent.phone}`} className="w-full flex items-center justify-center gap-2 bg-[#00875A] hover:bg-[#006644] text-white font-bold py-3 rounded-xl transition-colors text-[14px]">
                  <Phone size={16} /> {agent.phone}
                </a>
                <a href={`mailto:${agent.email}`} className="w-full flex items-center justify-center gap-2 border-2 border-[#00875A] text-[#00875A] hover:bg-[#E8F5EF] font-bold py-3 rounded-xl transition-colors text-[14px]">
                  <Mail size={16} /> Send Email
                </a>
                <button className="w-full flex items-center justify-center gap-2 bg-[#F0FDF4] border border-[#00875A] text-[#00875A] hover:bg-[#E8F5EF] font-bold py-3 rounded-xl transition-colors text-[14px]">
                  <MessageCircle size={16} /> WhatsApp
                </button>
              </div>

              <div className="mt-5 pt-5 border-t border-[#F0F0F0] space-y-2">
                <div className="flex items-center gap-2 text-[13px] text-[#666]">
                  <CheckCircle2 size={14} className="text-[#00875A]" /> Active since {agent.activeSince}
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#666]">
                  <Star size={14} className="text-[#F59E0B]" /> {agent.rating} rating · {agent.reviews} reviews
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#666]">
                  <Home size={14} className="text-[#00875A]" /> {agent.deals} deals closed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
