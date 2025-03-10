"use client"

import React from "react"
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
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Image src="/logo.webp" alt="Logo" width={50} height={50} />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Verma ICT</span>
            <span className="text-gray-800">& Software Solutions</span>
          </Link>
          <div className="hidden md:flex items-center text-sm text-muted-foreground ml-4">
            <Phone className="h-4 w-4 mr-1" />
            <span>+91 83929 45644</span>
          </div>
        </div>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <ListItem key={service.title} title={service.title} href={service.href}>
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {solutions.map((solution) => (
                      <ListItem key={solution.title} title={solution.title} href={solution.href}>
                        {solution.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden md:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container py-4 space-y-4">
            <Link href="/" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <div className="py-2">
              <div className="font-medium mb-2">Services</div>
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="py-2">
              <div className="font-medium mb-2">Solutions</div>
              <div className="pl-4 space-y-2">
                {solutions.map((solution) => (
                  <Link
                    key={solution.title}
                    href={solution.href}
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {solution.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/contact" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
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
  },
  {
    title: "DevOps",
    href: "/services/devops",
    description: "Streamline your development and operations with our DevOps expertise.",
  },
  {
    title: "Web Application",
    href: "/services/web-development",
    description: "Custom web applications tailored to your specific business requirements.",
  },
  {
    title: "ERP Implementation",
    href: "/services/erp-implementation",
    description: "End-to-end ERP implementation and customization services.",
  },
  {
    title: "IT Consulting",
    href: "/services/it-consulting",
    description: "Strategic IT guidance to help your business achieve its goals.",
  },
  {
    title: "Mobile Application",
    href: "/services/mobile-development",
    description: "Native and cross-platform mobile app development.",
  },
  {
    title: "OnlyOffice Implementation",
    href: "/services/only-office",
    description: "Collaborative office suite that allows users to create, edit, and share documents, spreadsheets, and presentations online.",
  },
  {
    title: "MathType Implementation",
    href: "/services/math-type",
    description: "Make equations accessible to all users with MathML and screen reader support.",
  },
]

const solutions = [
  {
    title: "Wholesale",
    href: "/solutions/wholesale",
    description: "Specialized IT solutions for wholesale distribution businesses.",
    icon: "fas fa-boxes", // FontAwesome icon for Wholesale
    iconSize: "24px", // Icon size
  },
  {
    title: "Service Management",
    href: "/solutions/service-management",
    description: "Streamline service operations and improve customer satisfaction.",
    icon: "fas fa-cogs", // FontAwesome icon for Service Management
    iconSize: "24px",
  },
  {
    title: "Project Management",
    href: "/solutions/project-management",
    description: "Tools and systems to manage projects efficiently and effectively.",
    icon: "fas fa-tasks", // FontAwesome icon for Project Management
    iconSize: "24px",
  },
  {
    title: "Manufacturing",
    href: "/solutions/manufacturing",
    description: "Optimize manufacturing processes with our specialized solutions.",
    icon: "fas fa-industry", // FontAwesome icon for Manufacturing
    iconSize: "24px",
  },
  {
    title: "Logistics",
    href: "/solutions/logistics",
    description: "Enhance logistics operations with our technology solutions.",
    icon: "fas fa-truck", // FontAwesome icon for Logistics
    iconSize: "24px",
  },
  {
    title: "HRMS",
    href: "/solutions/hrms",
    description: "Comprehensive human resource management systems for your business.",
    icon: "fas fa-users", // FontAwesome icon for HRMS
    iconSize: "24px",
  },
  {
    title: "Hospitality Management",
    href: "/solutions/hospitality",
    description: "Specialized solutions for the hospitality industry.",
    icon: "fas fa-concierge-bell", // FontAwesome icon for Hospitality Management
    iconSize: "24px",
  },
]

