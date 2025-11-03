"use client"

import { useState } from "react"
import { Users, Clock, CheckCircle, XCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import ApplicationTable from "../components/ApplicatoinTable"
import Header from "../components/Header"
import Sidebar from "../components/sidebar"
import StatCard from "../components/stat_card"


export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      {/* <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} /> */}

      <main className="flex-1 flex flex-col overflow-hidden">
        {/* <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} /> */}

        <div className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Total Students"
                value="1.2K+"
                icon={<Users className="w-5 h-5 text-green-500" />}
                trend="up"
              />
              <StatCard
                title="Pending Applications"
                value="40+"
                icon={<Clock className="w-5 h-5 text-orange-500" />}
                trend="up"
              />
              <StatCard
                title="Approved Applications"
                value="50+"
                icon={<CheckCircle className="w-5 h-5 text-green-500" />}
                trend="up"
              />
              <StatCard
                title="Rejected Applications"
                value="20+"
                icon={<XCircle className="w-5 h-5 text-red-500" />}
                trend="down"
              />
            </div>

            {/* Application List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">Application List</h2>
                <Button variant="outline" size="sm">
                  All <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <ApplicationTable />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
