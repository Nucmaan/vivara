"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Heart, Home, LayoutDashboard, LogOut, Settings, Star, User } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="bg-[#F8F9FA]">
      <Sidebar variant="inset" collapsible="icon" className="border-r border-[#E2E2E2] bg-white">
        <SidebarHeader className="pt-4 pb-2 px-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#00875A] font-black text-xl tracking-tight">VIVARA</span>
            <span className="text-[10px] uppercase tracking-wide text-[#666666] border-l border-[#E2E2E2] pl-2">
              Client
            </span>
          </Link>
        </SidebarHeader>

        <SidebarSeparator />

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Overview</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive>
                    <Link href="/dashboard">
                      <LayoutDashboard className="text-[#00875A]" />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/buy">
                      <Home />
                      <span>Browse properties</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/dashboard/favorites">
                      <Heart />
                      <span>Saved homes</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/dashboard/reviews">
                      <Star />
                      <span>Reviews</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/dashboard/profile">
                      <User />
                      <span>Profile &amp; details</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/dashboard/settings">
                      <Settings />
                      <span>Settings</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarSeparator />
          <div className="flex items-center gap-3 px-2 py-1.5">
            <Avatar className="h-8 w-8 border border-[#E2E2E2]">
              <AvatarFallback className="bg-[#E6F5EF] text-[#00875A] text-xs font-bold">AH</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-[#222222] truncate">Ali Hassan</p>
              <p className="text-[11px] text-[#777777] truncate">ali.hassan@example.com</p>
            </div>
            <button className="ml-auto text-[#999999] hover:text-[#222222]">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <header className="flex items-center justify-between px-6 py-4 border-b border-[#E2E2E2] bg-white">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="md:hidden" />
            <div>
              <h1 className="text-[20px] font-bold text-[#222222]">Dashboard</h1>
              <p className="text-[13px] text-[#777777]">
                Welcome back, <span className="text-[#00875A] font-semibold">Ali</span>. Here&apos;s your real estate
                snapshot in Somalia.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-[#E2E2E2] bg-[#F8F9FA] text-[11px] font-semibold">
              BUYER · SOMALIA
            </Badge>
            <button className="relative rounded-full border border-[#E2E2E2] w-9 h-9 flex items-center justify-center hover:bg-[#F8F9FA]">
              <Bell className="h-4 w-4 text-[#444444]" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#EF4444] text-[10px] text-white flex items-center justify-center font-semibold">
                3
              </span>
            </button>
          </div>
        </header>

        <main className="flex-1 bg-[#F8F9FA]">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

