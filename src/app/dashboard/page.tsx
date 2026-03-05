"use client";

import { ArrowUpRight, Heart, Home, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
  {
    label: "Saved homes",
    value: 18,
    delta: "+4 this week",
    icon: Heart,
    color: "text-[#EC4899]",
    pill: "ACTIVE SEARCH",
  },
  {
    label: "Viewed this month",
    value: 72,
    delta: "+21 vs last month",
    icon: Home,
    color: "text-[#3B82F6]",
    pill: "ENGAGED",
  },
  {
    label: "Conversations with agents",
    value: 5,
    delta: "2 new replies",
    icon: TrendingUp,
    color: "text-[#22C55E]",
    pill: "IN PROGRESS",
  },
];

const recommended = [
  {
    id: 1,
    title: "Sea-view Apartment in Lido Beach",
    location: "Lido Beach, Mogadishu",
    price: "$185,000",
    badge: "MATCH · 92%",
    tag: "Based on saved homes",
  },
  {
    id: 2,
    title: "Family Villa in Hodan District",
    location: "Hodan, Mogadishu",
    price: "$410,000",
    badge: "MATCH · 88%",
    tag: "Similar to viewed listings",
  },
  {
    id: 3,
    title: "Modern Apartment in Waberi",
    location: "Waberi District, Mogadishu",
    price: "$132,000",
    badge: "MATCH · 86%",
    tag: "In your budget range",
  },
];

export default function DashboardPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-6 space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((item) => (
          <Card
            key={item.label}
            className="border-[#E2E2E2] shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <div>
                <p className="text-[12px] font-semibold text-[#777777] uppercase tracking-wide">{item.label}</p>
                <p className="mt-1 text-[24px] font-bold text-[#222222]">{item.value}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <item.icon className={`h-5 w-5 ${item.color}`} />
                <Badge variant="outline" className="border-[#E2E2E2] bg-[#F8F9FA] text-[10px] font-semibold">
                  {item.pill}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[12px] text-[#16A34A] font-semibold">{item.delta}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Card className="border-[#E2E2E2] shadow-sm bg-white rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <div>
              <CardTitle className="text-[16px] font-bold text-[#222222]">Search journey</CardTitle>
              <p className="text-[13px] text-[#777777]">
                Track how close you are to finding the right property in Somalia.
              </p>
            </div>
            <Badge className="bg-[#00875A] hover:bg-[#006644] text-[11px] px-2.5 py-1 rounded-full">
              SMART GUIDANCE
            </Badge>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[13px] font-semibold text-[#444444]">Match to your ideal home</span>
                <span className="text-[13px] font-bold text-[#00875A]">68%</span>
              </div>
              <Progress value={68} className="h-2.5 bg-[#E5F3ED]" />
            </div>

            <div className="grid gap-3 md:grid-cols-3 text-[12px] text-[#555555]">
              <div className="rounded-lg border border-[#E2E2E2] bg-[#F9FAFB] p-3">
                <p className="font-semibold text-[#222222] mb-1">Saved homes</p>
                <p>Homes you save help us refine your recommendations.</p>
              </div>
              <div className="rounded-lg border border-[#E2E2E2] bg-[#F9FAFB] p-3">
                <p className="font-semibold text-[#222222] mb-1">Location signals</p>
                <p>We prioritize areas like Hodan, Waberi, and Lido Beach.</p>
              </div>
              <div className="rounded-lg border border-[#E2E2E2] bg-[#F9FAFB] p-3">
                <p className="font-semibold text-[#222222] mb-1">Budget fit</p>
                <p>Recommendations stay inside your current price window.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="default" className="bg-[#00875A] hover:bg-[#006644] text-[13px] font-bold">
                <Link href="/buy">
                  Continue search
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#E2E2E2] text-[13px]">
                <Link href="/dashboard/favorites">View saved homes</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#E2E2E2] shadow-sm bg-white rounded-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[16px] font-bold text-[#222222]">Next steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-[13px] text-[#555555]">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 h-6 w-6 rounded-full bg-[#E6F5EF] text-[#00875A] flex items-center justify-center text-[12px] font-bold">
                1
              </span>
              <div>
                <p className="font-semibold text-[#222222] mb-0.5">Complete your profile</p>
                <p>Add your preferred neighborhoods, bedroom count, and budget.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 h-6 w-6 rounded-full bg-[#E6F5EF] text-[#00875A] flex items-center justify-center text-[12px] font-bold">
                2
              </span>
              <div>
                <p className="font-semibold text-[#222222] mb-0.5">Save at least 5 homes</p>
                <p>We&apos;ll start surfacing stronger matches based on your taste.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 h-6 w-6 rounded-full bg-[#E6F5EF] text-[#00875A] flex items-center justify-center text-[12px] font-bold">
                3
              </span>
              <div>
                <p className="font-semibold text-[#222222] mb-0.5">Connect with a TruBroker agent</p>
                <p>Get local insight on real pricing and upcoming projects.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Card className="border-[#E2E2E2] shadow-sm bg-white rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <div>
              <CardTitle className="text-[16px] font-bold text-[#222222]">Recommended for you</CardTitle>
              <p className="text-[13px] text-[#777777]">Properties tailored to your activity in Somalia.</p>
            </div>
            <Badge variant="outline" className="border-[#E2E2E2] text-[11px]">
              REAL DATA · REAL MATCHES
            </Badge>
          </CardHeader>
          <CardContent className="space-y-3">
            {recommended.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-lg border border-[#F0F0F0] hover:border-[#00875A] hover:bg-[#F8FFFB] transition-colors px-3 py-3"
              >
                <div className="h-11 w-11 rounded-lg bg-[#E6F5EF] flex items-center justify-center">
                  <Home className="h-5 w-5 text-[#00875A]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[14px] font-semibold text-[#222222] truncate">{item.title}</p>
                    <span className="text-[13px] font-bold text-[#00875A] whitespace-nowrap">{item.price}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="flex items-center gap-1 text-[12px] text-[#777777]">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </span>
                    <Badge className="bg-[#00875A] hover:bg-[#006644] text-[11px]">{item.badge}</Badge>
                  </div>
                  <p className="mt-1 text-[11px] text-[#888888]">{item.tag}</p>
                </div>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-[#E2E2E2] text-[11px] whitespace-nowrap"
                >
                  <Link href={`/buy/${item.id}`}>View</Link>
                </Button>
              </div>
            ))}
            <div className="pt-1">
              <Button
                asChild
                variant="ghost"
                className="h-8 px-0 text-[13px] font-semibold text-[#00875A] hover:bg-transparent"
              >
                <Link href="/buy">
                  See all matching homes
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#E2E2E2] shadow-sm bg-white rounded-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[16px] font-bold text-[#222222]">Activity timeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-[12px] text-[#555555]">
            <div className="flex gap-3">
              <div className="mt-1 w-1 rounded-full bg-[#00875A]" />
              <div className="space-y-1">
                <p className="font-semibold text-[#222222]">Saved 3 homes in Hodan District</p>
                <p>We&apos;ll prioritize villas and townhouses in this area.</p>
                <p className="text-[11px] text-[#999999]">Today · 10:24 AM</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 w-1 rounded-full bg-[#22C55E]" />
              <div className="space-y-1">
                <p className="font-semibold text-[#222222]">Viewed new Lido Beach listings</p>
                <p>Beachfront apartments between $150K - $220K.</p>
                <p className="text-[11px] text-[#999999]">Yesterday · 7:18 PM</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 w-1 rounded-full bg-[#3B82F6]" />
              <div className="space-y-1">
                <p className="font-semibold text-[#222222]">Contacted TruBroker agent</p>
                <p>Awaiting follow-up for a viewing schedule this week.</p>
                <p className="text-[11px] text-[#999999]">2 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

