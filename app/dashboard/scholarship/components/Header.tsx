"use client";

import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Menu } from "lucide-react";
import { useSession } from "next-auth/react";

interface HeaderProps {
  onMenuToggle: () => void;
  sidebarOpen: boolean;
}

export default function Header({ onMenuToggle, sidebarOpen }: HeaderProps) {
  // const session = useSess

  const { data: session, status } = useSession();

  const email = session?.user?.email;
  const name = session?.user?.name;

  const photo = session?.user?.image;

  return (
    <header className="bg-background border-b border-border px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </button>

        <h1 className="text-2xl font-bold text-foreground">
          User <span className="text-red-600">Dashboard</span>
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-foreground hover:bg-muted rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">{name}</p>
          </div>
          <Avatar>
            {!photo ? (
              <span className="absolute inset-0 flex items-center justify-center bg-red-200 text-gray-600 font-semibold">
                {name ? name.charAt(0).toUpperCase() : "U"}
              </span>
            ) : (
              <img
                src={photo}
                alt="User avatar"
                className="h-full w-full object-cover"
              />
            )}
          </Avatar>
        </div>
      </div>
    </header>
  );
}
