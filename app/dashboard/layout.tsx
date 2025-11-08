"use client";

import { useState } from "react";
import Sidebar from "./scholarship/components/sidebar";
import Header from "./scholarship/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex min-h-screen overflow-auto">
      <div className="max-w-64 w-full">
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>
      <main className="flex-1 p-6">
        <Header
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
        />
        {children}
      </main>
    </div>
  );
}
