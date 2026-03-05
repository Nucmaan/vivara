"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import {
  MapPin, BedDouble, Bath, Maximize2, Heart, Phone, Mail,
  ChevronLeft, CheckCircle2, Share2, Calendar, Home, Building2, TrendingUp
} from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Luxury Villa in Hodan District",
    type: "Villa",
    location: "Hodan District, Mogadishu",
    beds: 5,
    baths: 4,
    area: "5,200 sqft",
    price: "$420,000",
    pricePerSqft: "$80.7 / sqft",
    image: "https://images.bayut.com/thumbnails/792684306-400x300.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/792684306-400x300.jpeg",
      "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
      "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
      "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
    ],
    badge: "FEATURED",
    badgeColor: "bg-[#F59E0B]",
    description: "An extraordinary luxury villa in Hodan District, one of Mogadishu's most sought-after neighbourhoods. This 5-bedroom masterpiece spans over 5,200 sqft across two levels, featuring a grand reception hall, a gourmet kitchen, private home cinema, landscaped garden with a pool, and a rooftop terrace with sweeping city views. Built with the finest imported materials and smart home integration throughout.",
    features: ["Private Swimming Pool", "Home Cinema", "Smart Home", "Solar Panels", "Backup Generator", "Security System", "Maid's Room", "Driver's Room", "4-Car Garage", "Landscaped Garden"],
    agent: { name: "Ahmed Hassan Farah", title: "Senior Property Consultant", phone: "+252 61 234 5678", email: "ahmed@vivara.so", rating: 4.9, reviews: 87 },
    postedDate: "3 days ago",
    refNo: "VIV-BUY-001",
    floor: "G + 1",
    furnishing: "Unfurnished",
    ownership: "Freehold",
  },
  {
    id: 2,
    title: "Modern Apartment at Lido Beach",
    type: "Apartment",
    location: "Lido Beach, Mogadishu",
    beds: 3,
    baths: 2,
    area: "1,650 sqft",
    price: "$180,000",
    pricePerSqft: "$109 / sqft",
    image: "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
      "https://images.bayut.com/thumbnails/792684306-400x300.jpeg",
      "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
      "https://images.bayut.com/thumbnails/778062019-240x180.jpeg",
    ],
    badge: "VERIFIED",
    badgeColor: "bg-[#00875A]",
    description: "A breathtaking beachfront apartment at Lido Beach with floor-to-ceiling windows offering unobstructed ocean views. This 3-bedroom unit features an open-plan living and dining area, a modern fitted kitchen, and a spacious balcony perfect for watching sunsets over the Indian Ocean. Building amenities include a rooftop infinity pool, gym, and 24/7 security.",
    features: ["Sea View", "Infinity Pool", "Gym", "Balcony", "Covered Parking", "24/7 Security", "Elevator", "Concierge", "Beach Access", "Built-in Wardrobes"],
    agent: { name: "Khadija Nuur Salah", title: "Rental Specialist", phone: "+252 61 555 4321", email: "khadija@vivara.so", rating: 4.6, reviews: 42 },
    postedDate: "1 day ago",
    refNo: "VIV-BUY-002",
    floor: "8th Floor",
    furnishing: "Unfurnished",
    ownership: "Freehold",
  },
  {
    id: 3,
    title: "Commercial Building in Wadajir",
    type: "Commercial",
    location: "Wadajir District, Mogadishu",
    beds: 0,
    baths: 6,
    area: "8,000 sqft",
    price: "$950,000",
    pricePerSqft: "$118.75 / sqft",
    image: "https://images.bayut.com/thumbnails/698364758-400x300.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/698364758-400x300.jpeg",
      "https://images.bayut.com/thumbnails/778062019-240x180.jpeg",
      "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
      "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
    ],
    badge: "NEW",
    badgeColor: "bg-[#3B82F6]",
    description: "A prime 5-storey commercial building in the heart of Wadajir's business district, generating excellent rental income. Currently fully tenanted with long-term leases, the building comprises retail units on the ground floor, office spaces on floors 1-4, and a rooftop event space. Includes 20 covered parking bays and a dedicated loading bay.",
    features: ["Fully Tenanted", "Retail Units", "Office Floors", "Rooftop Space", "20 Parking Bays", "Loading Bay", "Backup Generator", "CCTV", "Fire System", "Freight Elevator"],
    agent: { name: "Omar Abdi Mohamed", title: "Investment Advisor", phone: "+252 61 987 6543", email: "omar@vivara.so", rating: 4.8, reviews: 55 },
    postedDate: "1 week ago",
    refNo: "VIV-BUY-003",
    floor: "G + 4",
    furnishing: "Fitted",
    ownership: "Freehold",
  },
  {
    id: 4,
    title: "Family Home in Medina District",
    type: "Townhouse",
    location: "Medina District, Mogadishu",
    beds: 4,
    baths: 3,
    area: "2,800 sqft",
    price: "$265,000",
    pricePerSqft: "$94.6 / sqft",
    image: "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
      "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
      "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
      "https://images.bayut.com/thumbnails/792684306-400x300.jpeg",
    ],
    badge: "VERIFIED",
    badgeColor: "bg-[#00875A]",
    description: "A beautifully designed family townhouse in a secure gated community in Medina District. Spread over three levels, the home features 4 large bedrooms, a double-height living room, a private garden, and a rooftop terrace. Close to top schools, hospitals, and shopping malls. An ideal family home with excellent investment potential.",
    features: ["Private Garden", "Rooftop Terrace", "Gated Community", "Double-Height Living", "Maid's Room", "Storage Room", "2-Car Garage", "Play Area", "CCTV Security", "Close to Schools"],
    agent: { name: "Fadumo Ali Warsame", title: "Real Estate Specialist", phone: "+252 63 456 7890", email: "fadumo@vivara.so", rating: 4.7, reviews: 63 },
    postedDate: "4 days ago",
    refNo: "VIV-BUY-004",
    floor: "G + 2",
    furnishing: "Unfurnished",
    ownership: "Freehold",
  },
  {
    id: 5,
    title: "Beachfront Apartment in Waberi",
    type: "Apartment",
    location: "Waberi District, Mogadishu",
    beds: 2,
    baths: 2,
    area: "1,200 sqft",
    price: "$130,000",
    pricePerSqft: "$108.3 / sqft",
    image: "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
      "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
      "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
      "https://images.bayut.com/thumbnails/778062019-240x180.jpeg",
    ],
    badge: "FEATURED",
    badgeColor: "bg-[#F59E0B]",
    description: "A stunning 2-bedroom beachfront apartment in Waberi with direct views of the Indian Ocean. Tastefully designed with modern finishes, the unit includes a large living room, fully fitted kitchen, and two en-suite bedrooms. The building has an outdoor pool, BBQ terrace, gym, and secure underground parking. A perfect investment or holiday home.",
    features: ["Ocean View", "Outdoor Pool", "BBQ Terrace", "Gym", "Underground Parking", "En-Suite Bedrooms", "Modern Kitchen", "24/7 Security", "Elevator", "Balcony"],
    agent: { name: "Ahmed Hassan Farah", title: "Senior Property Consultant", phone: "+252 61 234 5678", email: "ahmed@vivara.so", rating: 4.9, reviews: 87 },
    postedDate: "2 days ago",
    refNo: "VIV-BUY-005",
    floor: "5th Floor",
    furnishing: "Semi-Furnished",
    ownership: "Freehold",
  },
  {
    id: 6,
    title: "Investment Land in Hargeisa",
    type: "Land",
    location: "City Outskirts, Hargeisa",
    beds: 0,
    baths: 0,
    area: "12,000 sqft",
    price: "$75,000",
    pricePerSqft: "$6.25 / sqft",
    image: "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
      "https://images.bayut.com/thumbnails/698364758-400x300.jpeg",
      "https://images.bayut.com/thumbnails/792684306-400x300.jpeg",
      "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
    ],
    badge: "NEW",
    badgeColor: "bg-[#3B82F6]",
    description: "A prime investment land plot on the outskirts of Hargeisa city, ideal for residential or commercial development. The land is rectangular, fully fenced, and has road access on two sides. Located in a rapidly developing area with plans for a new highway and retail park nearby. Title deed and all documentation are clear and ready for transfer.",
    features: ["Clear Title Deed", "Road Access x2", "Fully Fenced", "Flat Terrain", "Near Highway", "Development Approved", "Utilities Nearby", "Survey Done", "Good ROI Potential", "Flexible Payment"],
    agent: { name: "Sahra Yusuf Osman", title: "New Projects Consultant", phone: "+252 63 777 2345", email: "sahra@vivara.so", rating: 4.9, reviews: 74 },
    postedDate: "5 days ago",
    refNo: "VIV-BUY-006",
    floor: "N/A",
    furnishing: "N/A",
    ownership: "Freehold",
  },
];

export default function BuyDetailPage() {
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
          <button onClick={() => router.push("/buy")} className="mt-4 text-[#00875A] font-semibold hover:underline">← Back to Buy</button>
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
          <button onClick={() => router.push("/buy")} className="hover:text-[#00875A]">Buy</button>
          <span>/</span>
          <span className="text-[#282828] font-medium truncate">{listing.title}</span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 py-8">
        <button onClick={() => router.push("/buy")} className="flex items-center gap-1.5 text-[#00875A] font-semibold text-[14px] mb-6 hover:gap-2.5 transition-all">
          <ChevronLeft size={18} /> Back to Buy Listings
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E2E2] shadow-sm">
              <div className="relative w-full h-[380px]">
                <Image src={listing.images[activeImg]} alt={listing.title} fill className="object-cover" sizes="800px" />
                <span className={`absolute top-4 left-4 ${listing.badgeColor} text-white text-[12px] font-bold px-3 py-1 rounded-full`}>{listing.badge}</span>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button onClick={() => setLiked(!liked)} className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                    <Heart size={16} className={liked ? "fill-red-500 text-red-500" : "text-[#888]"} />
                  </button>
                  <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                    <Share2 size={16} className="text-[#888]" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 p-3 bg-[#F8F9FA]">
                {listing.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${activeImg === i ? "border-[#00875A]" : "border-transparent opacity-60 hover:opacity-100"}`}>
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>

            {/* Title & Price */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-[12px] font-bold text-[#00875A] uppercase tracking-wider mb-1">{listing.type} · FOR SALE</p>
                  <h1 className="text-[26px] font-bold text-[#282828] leading-tight mb-2">{listing.title}</h1>
                  <div className="flex items-center gap-1.5 text-[#666] text-[14px]">
                    <MapPin size={14} className="text-[#00875A] shrink-0" />
                    <span>{listing.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[28px] font-bold text-[#282828]">{listing.price}</p>
                  <p className="text-[13px] text-[#999]">{listing.pricePerSqft}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-5 pt-5 border-t border-[#F0F0F0]">
                {listing.beds > 0 && (
                  <div className="flex items-center gap-2">
                    <BedDouble size={20} className="text-[#00875A]" />
                    <div><p className="text-[16px] font-bold text-[#282828]">{listing.beds}</p><p className="text-[11px] text-[#999] uppercase">Bedrooms</p></div>
                  </div>
                )}
                {listing.baths > 0 && (
                  <div className="flex items-center gap-2">
                    <Bath size={20} className="text-[#00875A]" />
                    <div><p className="text-[16px] font-bold text-[#282828]">{listing.baths}</p><p className="text-[11px] text-[#999] uppercase">Bathrooms</p></div>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Maximize2 size={20} className="text-[#00875A]" />
                  <div><p className="text-[16px] font-bold text-[#282828]">{listing.area}</p><p className="text-[11px] text-[#999] uppercase">Area</p></div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp size={20} className="text-[#00875A]" />
                  <div><p className="text-[16px] font-bold text-[#282828]">{listing.ownership}</p><p className="text-[11px] text-[#999] uppercase">Ownership</p></div>
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
                  { label: "Purpose", value: "For Sale" },
                  { label: "Furnishing", value: listing.furnishing },
                  { label: "Ownership", value: listing.ownership },
                  { label: "Reference No.", value: listing.refNo },
                  { label: "Posted", value: listing.postedDate },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <p className="text-[12px] text-[#999] uppercase font-semibold">{item.label}</p>
                    <p className="text-[15px] text-[#282828] font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm">
              <h2 className="text-[18px] font-bold text-[#282828] mb-4">Amenities & Features</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {listing.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-[14px] text-[#444]">
                    <CheckCircle2 size={15} className="text-[#00875A] shrink-0" />{f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agent Card */}
          <div>
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
                <a href={`tel:${listing.agent.phone}`} className="w-full flex items-center justify-center gap-2 bg-[#00875A] hover:bg-[#006644] text-white font-bold py-3 rounded-xl transition-colors text-[14px]">
                  <Phone size={16} /> {listing.agent.phone}
                </a>
                <a href={`mailto:${listing.agent.email}`} className="w-full flex items-center justify-center gap-2 border-2 border-[#00875A] text-[#00875A] hover:bg-[#E8F5EF] font-bold py-3 rounded-xl transition-colors text-[14px]">
                  <Mail size={16} /> Email Agent
                </a>
              </div>
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
