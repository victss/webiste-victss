"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, X, Phone, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur shadow-md supports-[backdrop-filter]:bg-white/80" 
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 relative group">
            <div className="relative">
              <Image 
                src="/logo.webp" 
                alt="Logo" 
                width={54} 
                height={54} 
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transform transition-all duration-300 group-hover:translate-x-1">Verma ICT</span>
              <span className="text-gray-800 text-lg transform transition-all duration-300 group-hover:translate-x-1">&amp; Software Solutions</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center text-sm ml-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 py-1 px-3 rounded-full">
            <Phone className="h-4 w-4 mr-1 text-blue-600" />
            <span className="font-medium">+91 83929 45644</span>
          </div>
        </div>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    "font-medium bg-gradient-to-r from-blue-600/0 to-purple-600/0 hover:from-blue-600/10 hover:to-purple-600/10 transition-all"
                  )}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    "font-medium bg-gradient-to-r from-blue-600/0 to-purple-600/0 hover:from-blue-600/10 hover:to-purple-600/10 transition-all"
                  )}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem 
                onMouseEnter={() => setHoveredMenu('services')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <NavigationMenuTrigger className={cn(
                  "font-medium bg-gradient-to-r",
                  hoveredMenu === 'services' 
                    ? "from-blue-600/10 to-purple-600/10" 
                    : "from-blue-600/0 to-purple-600/0"
                )}>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[650px] rounded-xl shadow-xl bg-white/95">
                    {services.map((service) => (
                      <ListItem 
                        key={service.title} 
                        title={service.title} 
                        href={service.href}
                        icon={service.icon || null}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem
                onMouseEnter={() => setHoveredMenu('solutions')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <NavigationMenuTrigger className={cn(
                  "font-medium bg-gradient-to-r",
                  hoveredMenu === 'solutions' 
                    ? "from-blue-600/10 to-purple-600/10" 
                    : "from-blue-600/0 to-purple-600/0"
                )}>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[650px] rounded-xl shadow-xl bg-white/95">
                    {solutions.map((solution) => (
                      <ListItem 
                        key={solution.title} 
                        title={solution.title} 
                        href={solution.href}
                        icon={solution.icon || null}
                      >
                        {solution.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    "font-medium bg-gradient-to-r from-blue-600/0 to-purple-600/0 hover:from-blue-600/10 hover:to-purple-600/10 transition-all"
                  )}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden md:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 shadow-md hover:shadow-lg transform hover:translate-y-px transition-all"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden bg-gradient-to-r from-blue-600/5 to-purple-600/5" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container py-6 space-y-4">
          <Link 
            href="/" 
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition-colors" 
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="font-medium">Home</span>
          </Link>
          <Link 
            href="/about" 
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition-colors" 
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="font-medium">About</span>
          </Link>
          
          {/* Mobile Services accordion */}
          <div className="border-t border-gray-100 pt-2">
            <details className="group">
              <summary className="flex justify-between items-center px-4 py-2 cursor-pointer rounded-lg hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10">
                <span className="font-medium">Services</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-4 mt-2 space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </details>
          </div>
          
          {/* Mobile Solutions accordion */}
          <div className="border-t border-gray-100 pt-2">
            <details className="group">
              <summary className="flex justify-between items-center px-4 py-2 cursor-pointer rounded-lg hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10">
                <span className="font-medium">Solutions</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-4 mt-2 space-y-1">
                {solutions.map((solution) => (
                  <Link
                    key={solution.title}
                    href={solution.href}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {solution.title}
                  </Link>
                ))}
              </div>
            </details>
          </div>
          
          <Link 
            href="/contact" 
            className="flex items-center py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition-colors" 
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="font-medium">Contact</span>
          </Link>
          
          <div className="pt-4 border-t border-gray-100">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-6 font-medium text-base"
            >
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef(
  ({ className, title, children, href, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 group",
              className,
            )}
            {...props}
          >
            <div className="flex items-center gap-2">
              {icon && (
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-colors">
                  <span className="text-blue-600">{icon}</span>
                </div>
              )}
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-transform group-hover:translate-x-1">{title}</span>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-gray-600 mt-1 pl-10 group-hover:text-gray-800">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

const services = [
  {
    title: "Odoo Services",
    href: "/services/odoo-solutions",
    description: "Complete Odoo implementation, customization, and support services.",
    icon: "💼"
  },
  {
    title: "DevOps",
    href: "/services/devops",
    description: "Streamline your development and operations with our DevOps expertise.",
    icon: "⚙️"
  },
  {
    title: "Web Application",
    href: "/services/web-development",
    description: "Custom web applications tailored to your specific business requirements.",
    icon: "🌐"
  },
  {
    title: "ERP Implementation",
    href: "/services/erp-implementation",
    description: "End-to-end ERP implementation and customization services.",
    icon: "📊"
  },
  {
    title: "IT Consulting",
    href: "/services/it-consulting",
    description: "Strategic IT guidance to help your business achieve its goals.",
    icon: "💡"
  },
  {
    title: "Mobile Application",
    href: "/services/mobile-development",
    description: "Native and cross-platform mobile app development.",
    icon: "📱"
  },
  {
    title: "OnlyOffice Implementation",
    href: "/services/only-office",
    description: "Collaborative office suite for creating, editing, and sharing documents online.",
    icon: "📄"
  },
  {
    title: "MathType Implementation",
    href: "/services/math-type",
    description: "Make equations accessible to all users with MathML and screen reader support.",
    icon: "➗"
  },
]

const solutions = [
  {
    title: "Wholesale",
    href: "/coming-soon",
    description: "Specialized IT solutions for wholesale distribution businesses.",
    icon: "📦"
  },
  {
    title: "Service Management",
    href: "/coming-soon",
    description: "Streamline service operations and improve customer satisfaction.",
    icon: "🔧"
  },
  {
    title: "Project Management",
    href: "/coming-soon",
    description: "Tools and systems to manage projects efficiently and effectively.",
    icon: "📋"
  },
  {
    title: "Manufacturing",
    href: "/coming-soon",
    description: "Optimize manufacturing processes with our specialized solutions.",
    icon: "🏭"
  },
  {
    title: "Logistics",
    href: "/coming-soon",
    description: "Enhance logistics operations with our technology solutions.",
    icon: "🚚"
  },
  {
    title: "HRMS",
    href: "/coming-soon",
    description: "Comprehensive human resource management systems for your business.",
    icon: "👥"
  },
  {
    title: "Hospitality Management",
    href: "/coming-soon",
    description: "Specialized solutions for the hospitality industry.",
    icon: "🏨"
  },
]