"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    "Experience Excellence with",
    "Transform Your Business with",
    "Achieve Growth with",
    "Unlock Potential with",
    "Innovate Solutions with",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <Badge className="w-fit bg-white/10 text-white hover:bg-white/20 transition-colors">
              India's Top Odoo Service Provider
            </Badge>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-5xl lg:text-5xl/none">
                <div className="h-[60px] sm:h-[50px] md:h-[60px] lg:h-[72px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="h-full flex items-center"
                    >
                      {slides[currentSlide]}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Verma ICT & Softawre Solutions - VICTSS
                </span>
              </h1>
              <p className="max-w-[600px] text-blue-100 md:text-xl">
                Unlock the future with Verma ICT & Softawre Solutions (VICTSS) - India&apos;s top Odoo service provider. Experience
                excellence through our innovative solutions, driving your business to new heights of success and
                efficiency.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="IT Solutions Team"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="main.jpg"
                // src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/64b6ce52c9e9b5001d6f504a.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900/80 to-transparent">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white/10 text-white border-none">
                    Odoo
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-none">
                    DevOps
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-none">
                    Web Application
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-none">
                    ERP Deployment
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-none">
                    Mobile Application
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

