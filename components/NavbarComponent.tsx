"use client"
import { Home, User, Briefcase, FileText } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarComponent() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Assignments", url: "/all-assignments", icon: Briefcase },
  ]

  return <NavBar items={navItems} />
}