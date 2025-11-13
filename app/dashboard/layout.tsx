"use client";

import { useState } from "react";
import Sidebar from "./scholarship/components/sidebar";
import Header from "./scholarship/components/Header";
import useUserRole from "../useContext/useUserRole";
import UserSidebar from "./scholarship/user/components/user-sidebar";
import { UserProvider } from "../useContext/useUserData";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const { userRole, loading } = useUserRole();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen overflow-auto">
      <UserProvider>
        <div className="max-w-64 w-full">
          {/* this sidebar for admin */}

          {userRole === "admin" && (
            <Sidebar
              isOpen={sidebarOpen}
              onToggle={() => setSidebarOpen(!sidebarOpen)}
            />
          )}

          {/* this sidebar for user */}
          {userRole === "user" && (
            <UserSidebar
              isOpen={sidebarOpen}
              onToggle={() => setSidebarOpen(!sidebarOpen)}
            />
          )}
        </div>
        <main className="flex-1 p-6 ">
          <div className="mb-10">
            {/* this is admin header */}
            {userRole === "admin" && (
              <Header
                onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
                sidebarOpen={sidebarOpen}
              />
            )}

            {/* this is user header */}
            {userRole === "user" && (
              <Header
                onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
                sidebarOpen={sidebarOpen}
              />
            )}
          </div>

          {children}
        </main>
      </UserProvider>
    </div>
  );
}
