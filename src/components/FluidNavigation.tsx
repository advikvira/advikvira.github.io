"use client"

import { MenuItem, MenuContainer } from "./ui/fluid-menu"
import { Menu as MenuIcon, X, Home, Mail, User, Settings, BookOpen, FileText } from "lucide-react"

export function FluidNavigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <MenuContainer>
      <MenuItem
        icon={
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
              <MenuIcon size={24} strokeWidth={1.5} />
            </div>
            <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
              <X size={24} strokeWidth={1.5} />
            </div>
          </div>
        }
      />
      <MenuItem
        icon={<User size={24} strokeWidth={1.5} />}
        onClick={() => scrollToSection('about')}
      />
      <MenuItem
        icon={<BookOpen size={24} strokeWidth={1.5} />}
        onClick={() => scrollToSection('research')}
      />
      <MenuItem
        icon={<FileText size={24} strokeWidth={1.5} />}
        onClick={() => scrollToSection('publications')}
      />
      <MenuItem
        icon={<Mail size={24} strokeWidth={1.5} />}
        onClick={() => scrollToSection('contact')}
      />
    </MenuContainer>
  )
}