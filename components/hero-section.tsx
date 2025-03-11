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
    "Experience Excellence with",
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
      {/* Dark Theme Background with Animated Particles */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-gray-900 to-gray-950"></div>
        <div className="particle-container absolute inset-0"></div>
      </div>
      
      {/* Subtle Animated Glow Lines */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        <div className="glow-line absolute h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent top-1/4 animate-pulse-slow"></div>
        <div className="glow-line absolute h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent top-2/4 animate-pulse-slower"></div>
        <div className="glow-line absolute h-px w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent top-3/4 animate-pulse-slowest"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="w-fit bg-indigo-500/20 text-indigo-200 hover:bg-indigo-500/30 transition-colors backdrop-blur-sm border border-indigo-500/30">
                India's Top Odoo Service Provider
              </Badge>
            </motion.div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
                <div className="h-[40px] sm:h-[40px] md:h-[48px] lg:h-[56px] overflow-hidden font-light">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -30, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="h-full flex items-center font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {slides[currentSlide]}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-bold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Verma ICT & Software Solutions - VICTSS
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="max-w-[600px] text-gray-300 md:text-lg"
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
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg shadow-indigo-900/30">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg shadow-indigo-900/30">
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
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-[0_0_25px_rgba(79,70,229,0.15)] border border-indigo-500/20">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  alt="IT Solutions Team"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={images[currentImage]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/90 to-transparent backdrop-blur-sm">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-indigo-500/10 text-indigo-200 border-indigo-500/30 backdrop-blur-sm">
                    Odoo
                  </Badge>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-200 border-blue-500/30 backdrop-blur-sm">
                    DevOps
                  </Badge>
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-200 border-purple-500/30 backdrop-blur-sm">
                    Web Application
                  </Badge>
                  <Badge variant="outline" className="bg-indigo-500/10 text-indigo-200 border-indigo-500/30 backdrop-blur-sm">
                    ERP Deployment
                  </Badge>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-200 border-blue-500/30 backdrop-blur-sm">
                    Mobile Application
                  </Badge>
                </div>
              </div>

              {/* Enhanced Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/60 text-white p-3 rounded-full hover:bg-indigo-600/80 transition-colors backdrop-blur-sm border border-white/10 w-10 h-10 flex items-center justify-center shadow-lg"
              >
                &#8249;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/60 text-white p-3 rounded-full hover:bg-indigo-600/80 transition-colors backdrop-blur-sm border border-white/10 w-10 h-10 flex items-center justify-center shadow-lg"
              >
                &#8250;
              </button>
              
              {/* Image Indicator Dots */}
              <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImage === index 
                        ? "bg-indigo-400 w-4" 
                        : "bg-gray-400/50 hover:bg-gray-300/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add these styles to your global CSS or as a style tag */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        @keyframes pulse-slowest {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 12s infinite;
        }
        .animate-pulse-slowest {
          animation: pulse-slowest 15s infinite;
        }
        
        .particle-container {
          background-image: radial-gradient(circle, rgba(79, 70, 229, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        /* Make sure to add font imports to your main CSS */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Poppins:wght@400;600;700&display=swap');
      `}</style>
    </section>
  )
}