"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Menu } from "lucide-react"

interface HeaderProps {
  onMenuToggle: () => void
  sidebarOpen: boolean
}

export default function Header({ onMenuToggle, sidebarOpen }: HeaderProps) {
  return (
    <header className="bg-background border-b border-border px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onMenuToggle} className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors">
          <Menu className="w-5 h-5 text-foreground" />
        </button>

        <h1 className="text-2xl font-bold text-foreground">
          Admin <span className="text-red-600">Dashboard</span>
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-foreground hover:bg-muted rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">Mr. admin</p>
          </div>
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
