"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { MapPin, Phone, CalendarCheck } from "lucide-react";

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
    description: "Luxurious high-rise apartments with panoramic views of Mogadishu, featuring modern amenities and smart home technology.",
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
    description: "Gated community of contemporary villas surrounded by greenery, perfect for families seeking comfort and security.",
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
    description: "Beachfront resort-style suites steps away from Lido Beach with private pools and world-class dining.",
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
    description: "State-of-the-art commercial tower with Grade A office spaces, retail units, and underground parking.",
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
    description: "Elegant townhouses in the heart of Medina with private gardens, double-height living rooms and premium finishes.",
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
    description: "Affordable coastal apartments in Bosaso with stunning bay views, modern facilities and flexible payment plans.",
  },
];

const statuses = ["All", "Off-Plan", "Under Construction", "Ready"];

export default function ProjectsPage() {
  const router = useRouter();
  const [activeStatus, setActiveStatus] = useState("All");

  const goToDetails = (id: number) => router.push(`/projects/${id}`);

  const filtered = projects.filter(
    (p) => activeStatus === "All" || p.status === activeStatus
  );

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans">
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-[#00875A] text-white">
        <div className="max-w-[1200px] mx-auto px-5 py-12">
          <p className="text-[13px] font-bold uppercase tracking-widest text-white/70 mb-2">Discover</p>
          <h1 className="text-[36px] font-bold mb-2">
            New Projects in Somalia
          </h1>
          <p className="text-[16px] text-white/85">
            Explore off-plan and ready developments by Somalia&apos;s top developers
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border-b border-[#E2E2E2] sticky top-[72px] z-30">
        <div className="max-w-[1200px] mx-auto px-5 py-4 flex items-center gap-3 flex-wrap">
          <span className="text-[13px] font-bold text-[#666] uppercase tracking-wider mr-2">Status:</span>
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setActiveStatus(s)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-semibold border transition-all ${
                activeStatus === s
                  ? "bg-[#00875A] text-white border-[#00875A]"
                  : "bg-white text-[#444] border-[#E2E2E2] hover:border-[#00875A] hover:text-[#00875A]"
              }`}
            >
              {s}
            </button>
          ))}
          <span className="ml-auto text-[13px] text-[#666]">{filtered.length} projects</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden border border-[#E2E2E2] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              role="link"
              tabIndex={0}
              onClick={() => goToDetails(project.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goToDetails(project.id);
                }
              }}
            >
              {/* Image */}
              <div className="relative w-full h-[210px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
                <span className={`absolute top-3 left-3 ${project.statusColor} text-white text-[11px] font-bold px-2.5 py-1 rounded`}>
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-[12px] text-[#666] font-semibold uppercase mb-1">{project.developer}</p>
                <h3 className="text-[18px] font-bold text-[#282828] mb-1">{project.title}</h3>
                <div className="flex items-center gap-1 text-[#666] text-[13px] mb-3">
                  <MapPin size={12} className="shrink-0 text-[#00875A]" />
                  <span>{project.location}</span>
                </div>
                <p className="text-[13px] text-[#666] leading-snug mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Price + Handover */}
                <div className="flex gap-3 mb-4">
                  <div className="flex-1 bg-[#F8F9FA] rounded-lg p-3 border border-[#E2E2E2]">
                    <p className="text-[10px] uppercase font-bold text-[#999] mb-0.5">Launch Price</p>
                    <p className="text-[14px] font-bold text-[#282828]">{project.price}</p>
                  </div>
                  <div className="flex-1 bg-[#F8F9FA] rounded-lg p-3 border border-[#E2E2E2]">
                    <p className="text-[10px] uppercase font-bold text-[#999] mb-0.5">Handover</p>
                    <div className="flex items-center gap-1">
                      <CalendarCheck size={12} className="text-[#00875A]" />
                      <p className="text-[14px] font-bold text-[#282828]">{project.handover}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="w-full flex items-center justify-center gap-2 bg-[#00875A] hover:bg-[#006644] text-white font-bold py-3 rounded-lg transition-colors text-[14px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToDetails(project.id);
                  }}
                >
                  <Phone size={15} />
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
