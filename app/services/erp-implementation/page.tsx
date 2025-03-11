"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

export default function ERPImplementationPage() {
  return (
    <>
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

      {/* Dark Theme Background with Animated Particles */}
      <section className="w-full py-12 md:py-24 lg:py-32 text-white relative overflow-hidden">
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
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-block rounded-lg bg-indigo-500/20 px-3 py-1 text-sm text-indigo-200 hover:bg-indigo-500/30 transition-colors backdrop-blur-sm border border-indigo-500/30">
                  ERP Services
                </div>
              </motion.div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Enterprise Resource Planning Implementation
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="max-w-[600px] text-gray-300 md:text-xl/relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Streamline your business processes with our comprehensive ERP solutions tailored to your specific industry and business needs.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col gap-2 min-[400px]:flex-row"
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg shadow-indigo-900/30">
                  <Link href="/contact">
                    Schedule a Consultation
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10">
                  <Link href="#benefits">Explore Benefits</Link>
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
                <Image
                  src="https://azka.tech/wp-content/uploads/2019/11/erp-2.png?height=550&width=550"
                  width={550}
                  height={550}
                  alt="ERP Implementation"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our ERP Implementation Approach Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" style={{ fontFamily: "'Poppins', sans-serif" }}>Our ERP Implementation Approach</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                We follow a proven methodology to ensure successful ERP implementation that aligns with your business goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
            <Card className="relative overflow-hidden bg-gray-800 border-gray-700">
              <div className="absolute top-0 left-0 h-2 w-full bg-indigo-500"></div>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500/10 text-indigo-400 text-xl font-bold mb-4">1</div>
                <CardTitle className="text-white">Discovery & Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  We analyze your current business processes, identify pain points, and define clear objectives for your ERP implementation.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden bg-gray-800 border-gray-700">
              <div className="absolute top-0 left-0 h-2 w-full bg-indigo-500"></div>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500/10 text-indigo-400 text-xl font-bold mb-4">2</div>
                <CardTitle className="text-white">Design & Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  We design and configure your ERP solution to match your specific business requirements and workflows.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden bg-gray-800 border-gray-700">
              <div className="absolute top-0 left-0 h-2 w-full bg-indigo-500"></div>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500/10 text-indigo-400 text-xl font-bold mb-4">3</div>
                <CardTitle className="text-white">Implementation & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  We deploy your ERP system, migrate data, and provide comprehensive training to ensure user adoption.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden bg-gray-800 border-gray-700 md:col-span-3">
              <div className="absolute top-0 left-0 h-2 w-full bg-indigo-500"></div>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500/10 text-indigo-400 text-xl font-bold mb-4">4</div>
                <CardTitle className="text-white">Support & Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  We provide ongoing support, maintenance, and continuous optimization to ensure your ERP system evolves with your business needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" style={{ fontFamily: "'Poppins', sans-serif" }}>Benefits of Our ERP Implementation</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Discover how our ERP solutions can transform your business operations and drive growth.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-indigo-400 mb-2" />
                <CardTitle className="text-white">Increased Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Automate manual processes, eliminate redundancies, and streamline workflows to improve operational efficiency.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-indigo-400 mb-2" />
                <CardTitle className="text-white">Real-time Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Access real-time data and analytics to make informed decisions and respond quickly to market changes.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-indigo-400 mb-2" />
                <CardTitle className="text-white">Cost Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Reduce operational costs through improved inventory management, optimized resource allocation, and eliminated waste.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-indigo-400 mb-2" />
                <CardTitle className="text-white">Enhanced Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Break down silos between departments and facilitate seamless communication and collaboration across your organization.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-indigo-400 mb-2" />
                <CardTitle className="text-white">Scalability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Implement a flexible ERP solution that can scale with your business and adapt to changing requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-indigo-400 mb-2" />
                <CardTitle className="text-white">Compliance & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Ensure regulatory compliance and enhance data security with robust ERP systems and best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <Image
                src="https://www.matiyas.com/wp-content/uploads/2024/06/erp-implementation-1024x1024.png?height=550&width=550"
                width={550}
                height={550}
                alt="ERP Case Study"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-indigo-500/20 px-3 py-1 text-sm text-indigo-200 hover:bg-indigo-500/30 transition-colors backdrop-blur-sm border border-indigo-500/30">
                  Case Study
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl" style={{ fontFamily: "'Poppins', sans-serif" }}>Manufacturing ERP Success Story</h2>
                <p className="text-gray-300 md:text-xl/relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Learn how we helped a mid-sized manufacturer reduce operational costs by 30% through comprehensive ERP implementation.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-indigo-400 mt-0.5" />
                  <span>Streamlined production planning and scheduling</span>
                </li>
                {/* Repeat for other list items */}
              </ul>
              <div>
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg shadow-indigo-900/30">
                  <Link href="/resources/case-studies">
                    Read Full Case Study
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  )
}