"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  const slides = [
    "Experience Excellence wityth",
    "Transform Your Business with",
    "Achieve Growth with",
    "Unlock Potential with",
    "Innovate Solutions with",
  ]

  const images = [
    "main.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ]

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => {
      clearInterval(slideInterval)
      clearInterval(imageInterval)
    }
  }, [slides.length, images.length])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-white relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-800 animate-gradient"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="w-fit bg-white/10 text-white hover:bg-white/20 transition-colors">
                India's Top Odoo Service Provider
              </Badge>
            </motion.div>
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
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent"
                >
                  Verma ICT & Software Solutions - VICTSS
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="max-w-[600px] text-blue-100 md:text-xl"
              >
                Unlock the future with Verma ICT & Software Solutions (VICTSS) - India&apos;s top Odoo service provider. Experience
                excellence through our innovative solutions, driving your business to new heights of success and
                efficiency.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="#services">Explore Services</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  alt="IT Solutions Team"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={images[currentImage]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
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

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 transition-colors"
              >
                &lt;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 transition-colors"
              >
                &gt;
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}