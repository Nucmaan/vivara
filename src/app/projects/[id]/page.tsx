"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import {
  MapPin, Phone, Mail, ChevronLeft, CheckCircle2, Share2,
  CalendarCheck, Building2, Layers, TrendingUp
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Mogadishu Heights",
    developer: "Vivara Developments",
    type: "Apartments",
    location: "Hodan District, Mogadishu",
    price: "From $120,000",
    handover: "Q2 2026",
    status: "Off-Plan",
    statusColor: "bg-[#F59E0B]",
    image: "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
      "https://images.bayut.com/thumbnails/792684306-400x300.jpeg",
      "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
      "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
    ],
    description: "Mogadishu Heights is a landmark 25-storey residential tower offering breathtaking panoramic views of the city and the Indian Ocean. Developed by Vivara Developments, this off-plan masterpiece features 1, 2, and 3-bedroom apartments with floor-to-ceiling windows, smart home technology, and access to world-class amenities including an infinity pool, sky lounge, gymnasium, and children's play area.",
    units: "180 Units",
    floors: "25 Floors",
    paymentPlan: "20/80 Payment Plan",
    completionPct: 15,
    amenities: ["Infinity Pool", "Sky Lounge", "Gym", "Smart Home", "24/7 Security", "Covered Parking", "Concierge", "Children's Play Area", "Rooftop Garden", "EV Charging"],
    unitTypes: [
      { type: "1 Bedroom", size: "750 – 900 sqft", price: "From $120,000" },
      { type: "2 Bedroom", size: "1,200 – 1,500 sqft", price: "From $185,000" },
      { type: "3 Bedroom", size: "1,800 – 2,200 sqft", price: "From $260,000" },
    ],
    agent: { name: "Sahra Yusuf Osman", title: "New Projects Consultant", phone: "+252 63 777 2345", email: "sahra@vivara.so" },
  },
  {
    id: 2,
    title: "Hargeisa Park Residences",
    developer: "SomBuild Group",
    type: "Villas",
    location: "Gabiley Road, Hargeisa",
    price: "From $85,000",
    handover: "Q4 2026",
    status: "Off-Plan",
    statusColor: "bg-[#F59E0B]",
    image: "https://images.bayut.com/thumbnails/698364758-400x300.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/698364758-400x300.jpeg",
      "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
      "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
      "https://images.bayut.com/thumbnails/792684306-400x300.jpeg",
    ],
    description: "Hargeisa Park Residences is a prestigious gated community of 60 contemporary villas set within lush green parklands on Gabiley Road. Each villa is designed for modern family living with spacious interiors, private gardens, and dedicated parking. Community facilities include a clubhouse, swimming pool, jogging track, and a mosque.",
    units: "60 Villas",
    floors: "G + 1",
    paymentPlan: "30/70 Payment Plan",
    completionPct: 30,
    amenities: ["Private Gardens", "Clubhouse", "Community Pool", "Jogging Track", "Mosque", "Gated Security", "CCTV", "Children's Park", "Retail Shops", "Visitor Parking"],
    unitTypes: [
      { type: "3 Bedroom Villa", size: "2,200 sqft", price: "From $85,000" },
      { type: "4 Bedroom Villa", size: "3,000 sqft", price: "From $120,000" },
      { type: "5 Bedroom Villa", size: "4,000 sqft", price: "From $165,000" },
    ],
    agent: { name: "Omar Abdi Mohamed", title: "Investment Advisor", phone: "+252 61 987 6543", email: "omar@vivara.so" },
  },
  {
    id: 3,
    title: "Lido Beach Suites",
    developer: "Coast Realty Somalia",
    type: "Apartments",
    location: "Lido Beach, Mogadishu",
    price: "From $200,000",
    handover: "Q1 2027",
    status: "Under Construction",
    statusColor: "bg-[#3B82F6]",
    image: "https://images.bayut.com/thumbnails/792684306-400x300.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/792684306-400x300.jpeg",
      "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
      "https://images.bayut.com/thumbnails/698364758-400x300.jpeg",
      "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
    ],
    description: "Lido Beach Suites is an ultra-luxury beachfront development steps from the famous Lido Beach. Currently under construction and 45% complete, this exclusive 10-storey tower features hotel-branded residences with resort-style amenities, a private beach club, multiple dining outlets, and a state-of-the-art spa. Managed by an international hospitality brand.",
    units: "96 Suites",
    floors: "10 Floors",
    paymentPlan: "40/60 Payment Plan",
    completionPct: 45,
    amenities: ["Private Beach Club", "Spa & Wellness", "Fine Dining", "Infinity Pool", "Concierge", "Valet Parking", "Gym", "Yoga Studio", "Business Center", "Helipad"],
    unitTypes: [
      { type: "Studio Suite", size: "600 sqft", price: "From $200,000" },
      { type: "1 Bedroom Suite", size: "950 sqft", price: "From $310,000" },
      { type: "2 Bedroom Suite", size: "1,500 sqft", price: "From $480,000" },
    ],
    agent: { name: "Ahmed Hassan Farah", title: "Senior Property Consultant", phone: "+252 61 234 5678", email: "ahmed@vivara.so" },
  },
  {
    id: 4,
    title: "Wadajir Business Tower",
    developer: "Vivara Developments",
    type: "Commercial",
    location: "Wadajir District, Mogadishu",
    price: "From $350,000",
    handover: "Q3 2027",
    status: "Ready",
    statusColor: "bg-[#00875A]",
    image: "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
      "https://images.bayut.com/thumbnails/778062019-240x180.jpeg",
      "https://images.bayut.com/thumbnails/698364758-400x300.jpeg",
      "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
    ],
    description: "Wadajir Business Tower is Mogadishu's premier Grade-A commercial complex, now ready for occupation. The 18-storey tower offers flexible office floors, ground-floor retail space, and a rooftop event venue with panoramic city views. Designed to international standards with fully fitted offices, smart building systems, and sustainability features including solar panels and rainwater harvesting.",
    units: "120 Offices",
    floors: "18 Floors",
    paymentPlan: "Immediate Transfer",
    completionPct: 100,
    amenities: ["Grade-A Offices", "Retail Podium", "Rooftop Venue", "Smart Building", "EV Parking", "Backup Power", "High-Speed Lifts", "Central A/C", "CCTV", "Fibre Internet"],
    unitTypes: [
      { type: "Small Office", size: "500 – 800 sqft", price: "From $350,000" },
      { type: "Medium Office", size: "1,000 – 1,500 sqft", price: "From $650,000" },
      { type: "Full Floor", size: "5,000+ sqft", price: "From $2,500,000" },
    ],
    agent: { name: "Fadumo Ali Warsame", title: "Real Estate Specialist", phone: "+252 63 456 7890", email: "fadumo@vivara.so" },
  },
  {
    id: 5,
    title: "Medina Townhouses",
    developer: "SomBuild Group",
    type: "Townhouses",
    location: "Medina District, Mogadishu",
    price: "From $160,000",
    handover: "Q2 2027",
    status: "Off-Plan",
    statusColor: "bg-[#F59E0B]",
    image: "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/599566460-240x180.jpeg",
      "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
      "https://images.bayut.com/thumbnails/792684306-400x300.jpeg",
      "https://images.bayut.com/thumbnails/800265511-240x180.jpeg",
    ],
    description: "Medina Townhouses is an exclusive community of 45 elegantly designed townhouses in the heart of Medina District. Each home features premium imported finishes, double-height living rooms, a private rooftop, and a small courtyard garden. The community benefits from a shared clubhouse, swimming pool, children's play area, and 24/7 gated security.",
    units: "45 Townhouses",
    floors: "G + 2",
    paymentPlan: "25/75 Payment Plan",
    completionPct: 20,
    amenities: ["Private Rooftop", "Courtyard Garden", "Clubhouse", "Community Pool", "Children's Play Area", "Gated Entry", "CCTV", "Visitor Parking", "Mosque", "Retail Strip"],
    unitTypes: [
      { type: "3 Bed Townhouse", size: "1,800 sqft", price: "From $160,000" },
      { type: "4 Bed Townhouse", size: "2,400 sqft", price: "From $210,000" },
    ],
    agent: { name: "Khadija Nuur Salah", title: "Rental Specialist", phone: "+252 61 555 4321", email: "khadija@vivara.so" },
  },
  {
    id: 6,
    title: "Bosaso Bay Residences",
    developer: "Coast Realty Somalia",
    type: "Apartments",
    location: "Bosaso Bay, Puntland",
    price: "From $95,000",
    handover: "Q4 2027",
    status: "Off-Plan",
    statusColor: "bg-[#F59E0B]",
    image: "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
    images: [
      "https://images.bayut.com/thumbnails/418335249-240x180.jpeg",
      "https://images.bayut.com/thumbnails/698364758-400x300.jpeg",
      "https://images.bayut.com/thumbnails/800238984-400x300.jpeg",
      "https://images.bayut.com/thumbnails/778062019-240x180.jpeg",
    ],
    description: "Bosaso Bay Residences brings affordable coastal living to Puntland's fast-growing commercial hub. This 8-storey development offers studios, 1-bed, and 2-bed apartments with stunning bay views, modern interiors, and flexible payment plans. Located minutes from Bosaso International Airport and the city's main commercial strip, with excellent rental yield potential.",
    units: "112 Apartments",
    floors: "8 Floors",
    paymentPlan: "10/90 Payment Plan",
    completionPct: 10,
    amenities: ["Bay Views", "Rooftop Terrace", "Community Gym", "Prayer Room", "Covered Parking", "24/7 Security", "Elevator", "Laundry", "High-Speed Internet", "Close to Airport"],
    unitTypes: [
      { type: "Studio", size: "500 sqft", price: "From $95,000" },
      { type: "1 Bedroom", size: "850 sqft", price: "From $140,000" },
      { type: "2 Bedroom", size: "1,300 sqft", price: "From $195,000" },
    ],
    agent: { name: "Sahra Yusuf Osman", title: "New Projects Consultant", phone: "+252 63 777 2345", email: "sahra@vivara.so" },
  },
];

export default function ProjectDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.id === Number(id));
  const [activeImg, setActiveImg] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] font-sans">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-40 text-[#888]">
          <Building2 size={48} className="mb-4 text-[#CCC]" />
          <p className="text-[20px] font-bold">Project not found</p>
          <button onClick={() => router.push("/projects")} className="mt-4 text-[#00875A] font-semibold hover:underline">← Back to Projects</button>
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
          <button onClick={() => router.push("/projects")} className="hover:text-[#00875A]">New Projects</button>
          <span>/</span>
          <span className="text-[#282828] font-medium truncate">{project.title}</span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 py-8">
        <button onClick={() => router.push("/projects")} className="flex items-center gap-1.5 text-[#00875A] font-semibold text-[14px] mb-6 hover:gap-2.5 transition-all">
          <ChevronLeft size={18} /> Back to New Projects
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E2E2] shadow-sm">
              <div className="relative w-full h-[380px]">
                <Image src={project.images[activeImg]} alt={project.title} fill className="object-cover" sizes="800px" />
                <span className={`absolute top-4 left-4 ${project.statusColor} text-white text-[12px] font-bold px-3 py-1 rounded-full`}>{project.status}</span>
                <button className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <Share2 size={16} className="text-[#888]" />
                </button>
              </div>
              <div className="flex gap-2 p-3 bg-[#F8F9FA]">
                {project.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${activeImg === i ? "border-[#00875A]" : "border-transparent opacity-60 hover:opacity-100"}`}>
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm">
              <p className="text-[12px] font-bold text-[#666] uppercase tracking-wider mb-1">{project.developer}</p>
              <h1 className="text-[26px] font-bold text-[#282828] mb-2">{project.title}</h1>
              <div className="flex items-center gap-1.5 text-[#666] text-[14px] mb-5">
                <MapPin size={14} className="text-[#00875A] shrink-0" />
                <span>{project.location}</span>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-[#F0F0F0]">
                <div className="flex items-center gap-2">
                  <TrendingUp size={20} className="text-[#00875A]" />
                  <div><p className="text-[15px] font-bold text-[#282828]">{project.price}</p><p className="text-[11px] text-[#999] uppercase">Launch Price</p></div>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarCheck size={20} className="text-[#00875A]" />
                  <div><p className="text-[15px] font-bold text-[#282828]">{project.handover}</p><p className="text-[11px] text-[#999] uppercase">Handover</p></div>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={20} className="text-[#00875A]" />
                  <div><p className="text-[15px] font-bold text-[#282828]">{project.floors}</p><p className="text-[11px] text-[#999] uppercase">Floors</p></div>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 size={20} className="text-[#00875A]" />
                  <div><p className="text-[15px] font-bold text-[#282828]">{project.units}</p><p className="text-[11px] text-[#999] uppercase">Total Units</p></div>
                </div>
              </div>
            </div>

            {/* Construction Progress */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm">
              <h2 className="text-[18px] font-bold text-[#282828] mb-4">Construction Progress</h2>
              <div className="flex items-center justify-between text-[14px] font-semibold text-[#282828] mb-2">
                <span>{project.completionPct}% Complete</span>
                <span className="text-[#00875A]">Handover: {project.handover}</span>
              </div>
              <div className="w-full bg-[#E2E2E2] rounded-full h-3">
                <div className="bg-[#00875A] h-3 rounded-full transition-all" style={{ width: `${project.completionPct}%` }} />
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm">
              <h2 className="text-[18px] font-bold text-[#282828] mb-3">About This Project</h2>
              <p className="text-[15px] text-[#555] leading-relaxed">{project.description}</p>
            </div>

            {/* Unit Types */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm">
              <h2 className="text-[18px] font-bold text-[#282828] mb-4">Available Units</h2>
              <div className="space-y-3">
                {project.unitTypes.map((u) => (
                  <div key={u.type} className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-xl border border-[#E2E2E2]">
                    <div>
                      <p className="text-[15px] font-bold text-[#282828]">{u.type}</p>
                      <p className="text-[13px] text-[#666]">{u.size}</p>
                    </div>
                    <p className="text-[15px] font-bold text-[#00875A]">{u.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm">
              <h2 className="text-[18px] font-bold text-[#282828] mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-[14px] text-[#444]">
                    <CheckCircle2 size={15} className="text-[#00875A] shrink-0" />{a}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agent / Enquiry Card */}
          <div>
            <div className="bg-white rounded-2xl p-6 border border-[#E2E2E2] shadow-sm sticky top-[90px]">
              <div className="bg-[#00875A] text-white text-center rounded-xl p-4 mb-5">
                <p className="text-[13px] font-bold uppercase tracking-wider opacity-80 mb-1">Payment Plan</p>
                <p className="text-[20px] font-bold">{project.paymentPlan}</p>
              </div>

              <div className="text-center mb-5">
                <div className="w-16 h-16 rounded-full bg-[#E8F5EF] flex items-center justify-center mx-auto mb-3 text-[22px] font-bold text-[#00875A]">
                  {project.agent.name.charAt(0)}
                </div>
                <h3 className="text-[15px] font-bold text-[#282828]">{project.agent.name}</h3>
                <p className="text-[12px] text-[#666]">{project.agent.title}</p>
                <p className="text-[11px] font-bold text-[#00875A] mt-0.5">Vivara Real Estate</p>
              </div>

              <div className="space-y-3">
                <a href={`tel:${project.agent.phone}`} className="w-full flex items-center justify-center gap-2 bg-[#00875A] hover:bg-[#006644] text-white font-bold py-3 rounded-xl transition-colors text-[14px]">
                  <Phone size={16} /> Enquire Now
                </a>
                <a href={`mailto:${project.agent.email}`} className="w-full flex items-center justify-center gap-2 border-2 border-[#00875A] text-[#00875A] hover:bg-[#E8F5EF] font-bold py-3 rounded-xl transition-colors text-[14px]">
                  <Mail size={16} /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
