"use client";

import Link from "next/link";
import { LayoutDashboard, FileText, Package, Building2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  avatar: string | undefined;
}

export default function Sidebar({ isOpen, onToggle, avatar }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Dashboard");


  const menuItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard/scholarship/admin",
    },
    {
      label: "Manage Applications",
      icon: FileText,
      href: "/dashboard/scholarship/admin/manage-student-application",
    },
    {
      label: "Manage Packages",
      icon: Package,
      href: "/dashboard/scholarship/admin/manage-student-packages",
    },
    {
      label: "Manage University",
      icon: Building2,
      href: "/dashboard/scholarship/admin/manage-student-university",
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={onToggle}
        />
      )}

      <aside
        className={cn(
          "fixed md:relative w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-300 ease-in-out z-40",
          "md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">GZM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-sidebar-foreground">GZM</span>
              <span className="text-xs text-sidebar-foreground/60">International</span>
            </div> */}
            <Link href="/">
              <img
                src="https://i.postimg.cc/0QFKdBLv/Frame-3.png"
                alt=""
                className="w-28 h-28"
              />
            </Link>
          </div>
          <button
            onClick={onToggle}
            className="md:hidden p-1 hover:bg-sidebar-accent rounded transition-colors"
          >
            <X className="w-5 h-5 text-sidebar-foreground" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {menuItems.map((item) => {
            const isActive = activeItem === item.label;
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                  isActive
                    ? "bg-red-500 text-white"
                    : "text-sidebar-foreground hover:bg-red-500"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
