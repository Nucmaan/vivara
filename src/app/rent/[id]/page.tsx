"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import {
  MapPin, BedDouble, Bath, Maximize2, Heart, Phone, Mail,
  ChevronLeft, CheckCircle2, Share2, Calendar, Home, Building2
} from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Modern Apartment in Hodan District",
    type: "Apartment",
    purpose: "Rent",
    location: "Hodan District, Mogadishu",
    beds: 3,
    baths: 2,
    area: "1,800 sqft",
    price: "$1,200 / month",
    priceRaw: "$14,400 / year",
    image: "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
      "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
      "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
      "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
    ],
    badge: "VERIFIED",
    badgeColor: "bg-[#00875A]",
    description: "This stunning modern apartment in the heart of Hodan District offers breathtaking city views and premium finishes throughout. The spacious 3-bedroom layout features an open-plan kitchen and living area, floor-to-ceiling windows, and a large balcony perfect for entertaining. Building amenities include 24/7 security, covered parking, a fully equipped gym, and a rooftop terrace.",
    features: ["Air Conditioning", "Built-in Wardrobes", "Central A/C", "Covered Parking", "Gym", "Security", "Balcony", "View of Landmark", "24/7 Security", "Concierge Service"],
    agent: { name: "Ahmed Hassan Farah", title: "Senior Property Consultant", phone: "+252 61 234 5678", email: "ahmed@vivara.so", rating: 4.9, reviews: 87 },
    postedDate: "2 days ago",
    refNo: "VIV-RENT-001",
    floor: "12th Floor",
    furnishing: "Furnished",
  },
  {
    id: 2,
    title: "Spacious Villa Near Lido Beach",
    type: "Villa",
    purpose: "Rent",
    location: "Lido Beach Area, Mogadishu",
    beds: 5,
    baths: 4,
    area: "4,200 sqft",
    price: "$3,500 / month",
    priceRaw: "$42,000 / year",
    image: "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
      "https://images.bayut.com/thumbnails/792684306-400x300.jpeg",
      "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
      "https://images.bayut.com/thumbnails/778062019-240x180.jpeg",
    ],
    badge: "FEATURED",
    badgeColor: "bg-[#F59E0B]",
    description: "A magnificent 5-bedroom villa just steps from Lido Beach, offering the ultimate luxury coastal lifestyle in Mogadishu. Set across two floors, the villa features a grand entrance hall, a chef's kitchen with premium appliances, a private swimming pool, and a landscaped garden. The master suite includes a walk-in closet and en-suite bath with ocean views.",
    features: ["Private Pool", "Private Garden", "Maid's Room", "Study Room", "Driver's Room", "BBQ Area", "Private Parking", "Security", "Sea View", "Beach Access"],
    agent: { name: "Khadija Nuur Salah", title: "Rental Specialist", phone: "+252 61 555 4321", email: "khadija@vivara.so", rating: 4.6, reviews: 42 },
    postedDate: "1 week ago",
    refNo: "VIV-RENT-002",
    floor: "Ground + 1",
    furnishing: "Semi-Furnished",
  },
  {
    id: 3,
    title: "Office Space in Wadajir District",
    type: "Office",
    purpose: "Rent",
    location: "Wadajir District, Mogadishu",
    beds: 0,
    baths: 2,
    area: "900 sqft",
    price: "$800 / month",
    priceRaw: "$9,600 / year",
    image: "https://images.bayut.com/thumbnails/778062019-240x180.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/778062019-240x180.jpeg",
      "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
      "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
      "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
    ],
    badge: "NEW",
    badgeColor: "bg-[#3B82F6]",
    description: "Premium office space in the bustling Wadajir Business District, ideal for growing businesses and startups. This fully fitted office offers open-plan workspace for up to 15 people, a dedicated meeting room, a reception area, and a kitchenette. High-speed internet, backup generator, and 24/7 security are included.",
    features: ["High-Speed Internet", "Meeting Room", "Reception Area", "Backup Generator", "CCTV Security", "Covered Parking", "Central A/C", "Kitchenette", "Server Room", "Fire Suppression"],
    agent: { name: "Omar Abdi Mohamed", title: "Investment Advisor", phone: "+252 61 987 6543", email: "omar@vivara.so", rating: 4.8, reviews: 55 },
    postedDate: "3 days ago",
    refNo: "VIV-RENT-003",
    floor: "3rd Floor",
    furnishing: "Fitted",
  },
  {
    id: 4,
    title: "Furnished Apartment in Waberi",
    type: "Apartment",
    purpose: "Rent",
    location: "Waberi District, Mogadishu",
    beds: 2,
    baths: 1,
    area: "1,100 sqft",
    price: "$750 / month",
    priceRaw: "$9,000 / year",
    image: "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
      "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
      "https://images.bayut.com/thumbnails/778062019-240x180.jpeg",
      "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
    ],
    badge: "VERIFIED",
    badgeColor: "bg-[#00875A]",
    description: "Beautifully furnished 2-bedroom apartment in the heart of Waberi District, ready to move in. Modern furniture, fully equipped kitchen with appliances, and stylish bathrooms. The building has a rooftop terrace, children's play area, and 24/7 security. Close to schools, hospitals, and shopping centers.",
    features: ["Fully Furnished", "Children's Play Area", "Rooftop Terrace", "24/7 Security", "Covered Parking", "Laundry Room", "Satellite TV", "Central A/C", "Elevator", "Intercom"],
    agent: { name: "Fadumo Ali Warsame", title: "Real Estate Specialist", phone: "+252 63 456 7890", email: "fadumo@vivara.so", rating: 4.7, reviews: 63 },
    postedDate: "5 days ago",
    refNo: "VIV-RENT-004",
    floor: "7th Floor",
    furnishing: "Furnished",
  },
  {
    id: 5,
    title: "Penthouse in Medina District",
    type: "Apartment",
    purpose: "Rent",
    location: "Medina District, Mogadishu",
    beds: 4,
    baths: 3,
    area: "3,000 sqft",
    price: "$2,800 / month",
    priceRaw: "$33,600 / year",
    image: "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
      "https://images.bayut.com/thumbnails/792684306-400x300.jpeg",
      "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
      "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
    ],
    badge: "FEATURED",
    badgeColor: "bg-[#F59E0B]",
    description: "An exclusive top-floor penthouse in the prestigious Medina District with wraparound terrace and panoramic city views. This 4-bedroom masterpiece features double-height ceilings, a private cinema room, a chef's island kitchen, and two master suites. The building offers valet parking, a concierge, and a private pool for penthouse residents only.",
    features: ["Private Terrace", "Cinema Room", "Concierge", "Valet Parking", "Private Pool", "Smart Home", "Wine Cellar", "Staff Quarters", "Home Automation", "Panoramic Views"],
    agent: { name: "Ahmed Hassan Farah", title: "Senior Property Consultant", phone: "+252 61 234 5678", email: "ahmed@vivara.so", rating: 4.9, reviews: 87 },
    postedDate: "1 day ago",
    refNo: "VIV-RENT-005",
    floor: "Top Floor (20th)",
    furnishing: "Luxury Furnished",
  },
  {
    id: 6,
    title: "Studio in Hargeisa City Center",
    type: "Studio",
    purpose: "Rent",
    location: "City Center, Hargeisa",
    beds: 1,
    baths: 1,
    area: "550 sqft",
    price: "$400 / month",
    priceRaw: "$4,800 / year",
    image: "https://images.bayut.com/thumbnails/698364758-400x300.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/698364758-400x300.jpeg",
      "https://images.bayut.com/thumbnails/778062019-240x180.jpeg",
      "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
      "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
    ],
    badge: "NEW",
    badgeColor: "bg-[#3B82F6]",
    description: "A modern and stylish studio apartment in the vibrant Hargeisa City Center, perfect for young professionals and students. The open-plan layout maximizes every square foot with clever storage solutions, a modern kitchenette, and a sleek bathroom. Located walking distance to restaurants, cafes, government offices, and public transport.",
    features: ["Open-Plan Layout", "Built-in Wardrobes", "Kitchenette", "High-Speed Internet", "DSTV Ready", "Central A/C", "Security", "Elevator", "Laundry Facility", "Close to Transport"],
    agent: { name: "Sahra Yusuf Osman", title: "New Projects Consultant", phone: "+252 63 777 2345", email: "sahra@vivara.so", rating: 4.9, reviews: 74 },
    postedDate: "1 week ago",
    refNo: "VIV-RENT-006",
    floor: "4th Floor",
    furnishing: "Furnished",
  },
];

export default function RentDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const listing = listings.find((l) => l.id === Number(id));
  const [activeImg, setActiveImg] = useState(0);
  const [liked, setLiked] = useState(false);

  if (!listing) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] font-sans">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-40 text-[#888]">
          <Home size={48} className="mb-4 text-[#CCC]" />
          <p className="text-[20px] font-bold">Property not found</p>
          <button onClick={() => router.push("/rent")} className="mt-4 text-[#00875A] font-semibold hover:underline">
            ← Back to Rent
          </button>
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
          <button onClick={() => router.push("/")} className="hover:text-[#00875A] transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => router.push("/rent")} className="hover:text-[#00875A] transition-colors">Rent</button>
          <span>/</span>
          <span className="text-[#282828] font-medium truncate">{listing.title}</span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.push("/rent")}
          className="flex items-center gap-1.5 text-[#00875A] font-semibold text-[14px] mb-6 hover:gap-2.5 transition-all"
        >
          <ChevronLeft size={18} /> Back to Rent Listings
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E2E2] shadow-sm">
              <div className="relative w-full h-[380px]">
                <Image
                  src={listing.images[activeImg]}
                  alt={listing.title}
                  fill
                  className="object-cover"
                  sizes="800px"
                />
                <span className={`absolute top-4 left-4 ${listing.badgeColor} text-white text-[12px] font-bold px-3 py-1 rounded-full`}>
                  {listing.badge}
                </span>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setLiked(!liked)}
                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                  >
                    <Heart size={16} className={liked ? "fill-red-500 text-red-500" : "text-[#888]"} />
                  </button>
                  <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                    <Share2 size={16} className="text-[#888]" />
                  </button>
                </div>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-2 p-3 bg-[#F8F9FA]">
                {listing.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${activeImg === i ? "border-[#00875A]" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>

            {/* Title & Price */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-[12px] font-bold text-[#00875A] uppercase tracking-wider mb-1">{listing.type} · FOR RENT</p>
                  <h1 className="text-[26px] font-bold text-[#282828] leading-tight mb-2">{listing.title}</h1>
                  <div className="flex items-center gap-1.5 text-[#666] text-[14px]">
                    <MapPin size={14} className="text-[#00875A] shrink-0" />
                    <span>{listing.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[28px] font-bold text-[#282828]">{listing.price}</p>
                  <p className="text-[13px] text-[#999]">{listing.priceRaw}</p>
                </div>
              </div>

              {/* Key Stats */}
              <div className="flex flex-wrap gap-4 mt-5 pt-5 border-t border-[#F0F0F0]">
                {listing.beds > 0 && (
                  <div className="flex items-center gap-2 text-[#444]">
                    <BedDouble size={20} className="text-[#00875A]" />
                    <div>
                      <p className="text-[16px] font-bold text-[#282828]">{listing.beds}</p>
                      <p className="text-[11px] text-[#999] uppercase">Bedrooms</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2 text-[#444]">
                  <Bath size={20} className="text-[#00875A]" />
                  <div>
                    <p className="text-[16px] font-bold text-[#282828]">{listing.baths}</p>
                    <p className="text-[11px] text-[#999] uppercase">Bathrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#444]">
                  <Maximize2 size={20} className="text-[#00875A]" />
                  <div>
                    <p className="text-[16px] font-bold text-[#282828]">{listing.area}</p>
                    <p className="text-[11px] text-[#999] uppercase">Area</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#444]">
                  <Building2 size={20} className="text-[#00875A]" />
                  <div>
                    <p className="text-[16px] font-bold text-[#282828]">{listing.floor}</p>
                    <p className="text-[11px] text-[#999] uppercase">Floor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm">
              <h2 className="text-[18px] font-bold text-[#282828] mb-3">Description</h2>
              <p className="text-[15px] text-[#555] leading-relaxed">{listing.description}</p>
            </div>

            {/* Details */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm">
              <h2 className="text-[18px] font-bold text-[#282828] mb-4">Property Details</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Type", value: listing.type },
                  { label: "Purpose", value: "For Rent" },
                  { label: "Furnishing", value: listing.furnishing },
                  { label: "Reference No.", value: listing.refNo },
                  { label: "Floor", value: listing.floor },
                  { label: "Posted", value: listing.postedDate },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <p className="text-[12px] text-[#999] uppercase font-semibold">{item.label}</p>
                    <p className="text-[15px] text-[#282828] font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm">
              <h2 className="text-[18px] font-bold text-[#282828] mb-4">Amenities & Features</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {listing.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-[14px] text-[#444]">
                    <CheckCircle2 size={15} className="text-[#00875A] shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Agent Card */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm sticky top-[90px]">
              <div className="text-center mb-5">
                <div className="w-20 h-20 rounded-full bg-[#E8F5EF] flex items-center justify-center mx-auto mb-3 text-[28px] font-bold text-[#00875A]">
                  {listing.agent.name.charAt(0)}
                </div>
                <h3 className="text-[16px] font-bold text-[#282828]">{listing.agent.name}</h3>
                <p className="text-[13px] text-[#666]">{listing.agent.title}</p>
                <p className="text-[12px] font-bold text-[#00875A] mt-0.5">Vivara Real Estate</p>
                <div className="flex items-center justify-center gap-1 mt-1.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-[13px] ${i < Math.floor(listing.agent.rating) ? "text-[#F59E0B]" : "text-[#DDD]"}`}>★</span>
                  ))}
                  <span className="text-[12px] text-[#888] ml-1">({listing.agent.reviews})</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${listing.agent.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#00875A] hover:bg-[#006644] text-white font-bold py-3 rounded-xl transition-colors text-[14px]"
                >
                  <Phone size={16} /> {listing.agent.phone}
                </a>
                <a
                  href={`mailto:${listing.agent.email}`}
                  className="w-full flex items-center justify-center gap-2 border-2 border-[#00875A] text-[#00875A] hover:bg-[#E8F5EF] font-bold py-3 rounded-xl transition-colors text-[14px]"
                >
                  <Mail size={16} /> Email Agent
                </a>
              </div>

              {/* Quick Info */}
              <div className="mt-5 pt-5 border-t border-[#F0F0F0] space-y-3">
                <div className="flex items-center gap-2 text-[13px] text-[#666]">
                  <Calendar size={14} className="text-[#00875A]" /> Posted {listing.postedDate}
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#666]">
                  <CheckCircle2 size={14} className="text-[#00875A]" /> Reference: {listing.refNo}
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
