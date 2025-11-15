"use client";

import Link from "next/link";
import { LayoutDashboard, FileText, Package, Building2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useUser } from "@/app/useContext/useUserData";


interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function UserSidebar({ isOpen, onToggle }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { user } = useUser();

  console.log("find the loggeding user", user);
  const { name, email, photo } = user;

  if (!user) {
    return <p>loading....</p>;
  }

  const handleOAuthSignOut = () => {
      setIsLoading(true);
  
      signOut()
        .then((result) => {
          if (result) {
            console.log("faild to sign out", result);
          }
          console.log("logout successfully");
          router.push("/auth/signin");
        })
        .catch((err) => {
          console.log("Find the error", err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

  const menuItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard/scholarship/user",
    },
    {
      label: "Application Status",
      icon: FileText,
      href: "/dashboard/scholarship/user/application-status",
    },
    {
      label: "Edit Application",
      icon: Package,
      href: "/dashboard/scholarship/user/edit-application",
    },
    {
      label: "Change mail",
      icon: Building2,
      href: "/dashboard/scholarship/user/change-mail",
    },
    {
      label: "Change Password",
      icon: Building2,
      href: "/dashboard/scholarship/user/change-password",
    },
  ];

  if(isLoading){
    return <p>loading.....</p>
  }

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
        <div className="flex flex-col flex-1">
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
          <div className="w-48 mx-auto mb-10 space-y-3">
            <div className="flex items-center gap-3 border-b border-gray-400 pb-4">
              <img
                src={`${photo}`}
                alt="User"
                className="h-8 w-8 rounded-full border-2 border-red-500"
              />
              <div className="min-w-0 text-black">
                <p className="truncate text-lg font-semibold">{name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {email}
                </p>
              </div>
            </div>
            <div className="w-full ">
              <Link href={`/profile?email=${email}`}
              className="flex items-center justify-center border-2 bg-red-300 border-gray-300 gap-3 px-4 py-2 rounded-lg transition-colors hover:bg-red-500 hover:text-white font-bold">Profile</Link>
              <button 
              onClick={handleOAuthSignOut}
              className="w-full flex items-center justify-center border-2 my-2 border-red-500 gap-3 px-4 py-2 rounded-lg transition-colors hover:bg-red-500 hover:text-white font-bold">Logout</button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
