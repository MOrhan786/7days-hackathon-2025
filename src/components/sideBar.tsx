// src\components\sideBar.tsx
"use client"

import * as React from "react"
import { Moon, Sun, Home, Car, BarChart3, Wallet, MessageSquare, Calendar, Settings, HelpCircle, Briefcase, LogOut } from 'lucide-react'
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

interface NavItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
}

const NavItem = ({ icon, label, isActive }: NavItemProps) => (
  <Button
    variant={isActive ? "default" : "ghost"}
    className={cn(
      "w-full justify-start gap-3",
      isActive ? "bg-[#3563E9] text-[#FFFFFF]" : "text-[#90A3BF]"
    )}
  >
    {icon}
    <span className="font-medium   ">{label}</span>
  </Button>
)

export function SideBar() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  return (
   
    <aside className="w-[286px] h-[900px] col-span-1 row-span-3  border-r border-[#F3F5F7] bg-white p-8">
      <div className="flex flex-col gap-[60px]">
        {/* Main Menu Section */}
        <div className="space-y-[42px]">
          <span className="text-xs font-semibold tracking-tight text-[#94A7CB]/40">
            M A I N M E N U
          </span>
          <nav className="space-y-8">
            <NavItem icon={<Home size={24} />} label="Dashboard" isActive />
            <NavItem icon={<Car size={24} />} label="Car Rent" />
            <NavItem icon={<BarChart3 size={24} />} label="Insight" />
            <NavItem icon={<Wallet size={24} />} label="Reimburse" />
            <NavItem icon={<MessageSquare size={24} />} label="Inbox" />
            <NavItem icon={<Calendar size={24} />} label="Calender" />
          </nav>
        </div>

        {/* Preferences Section */}
        <div className="space-y-7">
          <span className="text-xs font-semibold tracking-tight text-[#94A7CB]/40">
            P R E F E R E N C E S
          </span>
          <nav className="space-y-8">
            <NavItem icon={<Settings size={24} />} label="Settings" />
            <NavItem icon={<HelpCircle size={24} />} label="Help & Center" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-[#90A3BF]">
                <Briefcase size={24} />
                <span className="font-medium">Dark Mode</span>
              </div>
              <Switch
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="bg-[#F6F7F9] data-[state=checked]:bg-primary"
              >
                <div className="flex h-[34px] w-[68px] items-center justify-between rounded-full bg-[#F6F7F9] p-[3px]">
                  <div className={cn("h-7 w-7 rounded-full transition-transform", isDarkMode ? "translate-x-[34px] bg-primary" : "bg-white")}>
                    {isDarkMode ? (
                      <Moon className="h-4 w-4 translate-x-[6px] translate-y-[6px] text-[#90A3BF]" />
                    ) : (
                      <Sun className="h-4 w-4 translate-x-[6px] translate-y-[6px] text-primary" />
                    )}
                  </div>
                </div>
              </Switch>
            </div>
          </nav>
        </div>
      </div>

      {/* Logout Button */}
      <Button variant="ghost" className="mt-[60px] mr-[140px] gap-3 text-[#90A3BF]">
        <LogOut size={20} />
        <span className="font-medium">Log Out</span>
      </Button>

    </aside>
  
  )
}

