"use client";

import { useEffect, useState } from "react";
import Sidebar from "./scholarship/components/sidebar";
import Header from "./scholarship/components/Header";
import useUserRole from "../useContext/useUserRole";
import UserSidebar from "./scholarship/user/components/user-sidebar";
import { UserProvider } from "../useContext/useUserData";
import { useSession } from "next-auth/react";

type UserAvatar = {
  avatar: string | undefined;
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userAvatar, setUserAvatar] = useState<UserAvatar | undefined>();

  const { userRole, loading } = useUserRole();
  const { data: session } = useSession();

  useEffect(() => {
    const userData = async () => {
      const user = await fetch(
        `http://localhost:5000/user/get-avatar?email=${session?.user?.email}`,
        {
          cache: "no-store",
        }
      );

      const userUpdateData = await user.json();
      setUserAvatar(userUpdateData);
    };

    userData();
  }, [session]);

  const avatar = userAvatar?.avatar;

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
              avatar={avatar}
            />
          )}

          {/* this sidebar for user */}
          {userRole === "user" && (
            <UserSidebar
              isOpen={sidebarOpen}
              onToggle={() => setSidebarOpen(!sidebarOpen)}
              avatar={avatar}
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
                avatar={avatar}
              />
            )}

            {/* this is user header */}
            {userRole === "user" && (
              <Header
                onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
                sidebarOpen={sidebarOpen}
                avatar={avatar}
              />
            )}
          </div>

          {children}
        </main>
      </UserProvider>
    </div>
  );
}
