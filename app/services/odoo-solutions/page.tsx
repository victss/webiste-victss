"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OdooSolutionsPage() {
  return (
    <>
      {/* Hero Section - Styled to match the Hero template */}
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
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge className="w-fit bg-indigo-500/20 text-indigo-200 hover:bg-indigo-500/30 transition-colors backdrop-blur-sm border border-indigo-500/30">
                  Odoo Services
                </Badge>
              </motion.div>
              <div className="space-y-2">
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none"
                >
                  <motion.span
                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-bold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Comprehensive Odoo Solutions
                  </motion.span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="max-w-[600px] text-gray-300 md:text-lg"
                >
                  Leverage the power of Odoo's integrated business applications with our expert implementation, customization, and support services.
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
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg shadow-indigo-900/30">
                  <Link href="#modules">Explore Modules</Link>
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
                  src="https://www.silvertouchinc.com/wp-content/uploads/2023/05/New-Images-011.png"
                  width={550}
                  height={550}
                  alt="Odoo Solutions"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/90 to-transparent backdrop-blur-sm">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-indigo-500/10 text-indigo-200 border-indigo-500/30 backdrop-blur-sm">
                      Implementation
                    </Badge>
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-200 border-blue-500/30 backdrop-blur-sm">
                      Customization
                    </Badge>
                    <Badge variant="outline" className="bg-purple-500/10 text-purple-200 border-purple-500/30 backdrop-blur-sm">
                      Integration
                    </Badge>
                    <Badge variant="outline" className="bg-indigo-500/10 text-indigo-200 border-indigo-500/30 backdrop-blur-sm">
                      Training
                    </Badge>
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-200 border-blue-500/30 backdrop-blur-sm">
                      Support
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Dark Theme Background */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-900 to-gray-950"></div>
        </div>
        
        {/* Subtle Animated Glow Line */}
        <div className="absolute inset-0 z-1 overflow-hidden">
          <div className="glow-line absolute h-px w-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent top-1/3 animate-pulse-slow"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Odoo Modules We Specialize In
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl">
                We offer expertise across the full range of Odoo modules to provide comprehensive business solutions.
              </p>
            </div>
          </motion.div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Sales Management",
                description: "Streamline your sales process from quotation to invoice",
                features: [
                  "CRM integration",
                  "Quotation and order management",
                  "Sales analytics and reporting",
                  "Customer portal",
                ],
              },
              {
                title: "Inventory Management",
                description: "Optimize your inventory operations and reduce costs",
                features: [
                  "Real-time inventory tracking",
                  "Automated reordering",
                  "Barcode scanning",
                  "Multi-warehouse management",
                ],
              },
              {
                title: "Manufacturing",
                description: "Manage your production process efficiently",
                features: [
                  "Bill of materials",
                  "Production planning",
                  "Quality control",
                  "Maintenance management",
                ],
              },
              {
                title: "Accounting & Finance",
                description: "Streamline financial operations and reporting",
                features: [
                  "General ledger",
                  "Accounts payable/receivable",
                  "Financial reporting",
                  "Multi-currency support",
                ],
              },
              {
                title: "Human Resources",
                description: "Manage your workforce and streamline HR processes",
                features: [
                  "Employee management",
                  "Recruitment",
                  "Time tracking",
                  "Payroll integration",
                ],
              },
              {
                title: "E-Commerce",
                description: "Create and manage your online store seamlessly",
                features: [
                  "Website builder",
                  "Product catalog",
                  "Payment gateway integration",
                  "Order management",
                ],
              },
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="group bg-gray-800/40 backdrop-blur-sm border border-indigo-500/20 hover:shadow-[0_0_25px_rgba(79,70,229,0.2)] transition-all duration-300 transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-indigo-200">{module.title}</CardTitle>
                    <CardDescription className="text-gray-400">{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-300">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Dark Theme Background */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-gray-900 to-gray-950"></div>
        </div>
        
        {/* Subtle Animated Glow Lines */}
        <div className="absolute inset-0 z-1 overflow-hidden">
          <div className="glow-line absolute h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent top-2/3 animate-pulse-slower"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Our Odoo Services
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl">
                We provide end-to-end Odoo services to ensure successful implementation and ongoing optimization.
              </p>
            </div>
          </motion.div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            {[
              {
                title: "Odoo Implementation",
                description: "We provide comprehensive Odoo implementation services, from initial setup to deployment, ensuring a smooth transition to your new Odoo system.",
                features: [
                  "Business process analysis",
                  "System configuration",
                  "Data migration",
                  "User training",
                ],
              },
              {
                title: "Odoo Customization",
                description: "We customize Odoo to match your specific business requirements, developing custom modules and features as needed.",
                features: [
                  "Custom module development",
                  "UI/UX customization",
                  "Workflow automation",
                  "Third-party integrations",
                ],
              },
              {
                title: "Odoo Hosting & Maintenance",
                description: "We provide secure and reliable hosting solutions for your Odoo system, along with ongoing maintenance and support.",
                features: [
                  "Cloud or on-premise hosting",
                  "Regular backups",
                  "Security updates",
                  "Performance optimization",
                ],
              },
              {
                title: "Odoo Training & Support",
                description: "We provide comprehensive training and ongoing support to ensure your team can effectively use and manage your Odoo system.",
                features: [
                  "User training programs",
                  "Administrator training",
                  "24/7 technical support",
                  "Documentation and resources",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="bg-gray-800/40 backdrop-blur-sm border border-indigo-500/20 hover:shadow-[0_0_25px_rgba(79,70,229,0.2)] transition-all duration-300 transform hover:scale-105">
                  <CardHeader>
                    <CheckCircle className="h-10 w-10 text-indigo-400 mb-2" />
                    <CardTitle className="text-lg font-semibold text-indigo-200">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 text-gray-300">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Dark Theme Background with Animated Particles */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-gray-900 to-gray-950"></div>
          <div className="particle-container absolute inset-0"></div>
        </div>
        
        {/* Subtle Animated Glow Lines */}
        <div className="absolute inset-0 z-1 overflow-hidden">
          <div className="glow-line absolute h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent top-1/4 animate-pulse-slow"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-[0_0_25px_rgba(79,70,229,0.15)] border border-indigo-500/20">
                <Image
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20240430151317/Benefits-of-Odoo.png"
                  width={550}
                  height={550}
                  alt="Odoo Case Study"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <Badge className="w-fit bg-indigo-500/20 text-indigo-200 hover:bg-indigo-500/30 transition-colors backdrop-blur-sm border border-indigo-500/30">
                  Case Study
                </Badge>
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Retail Odoo Implementation
                </h2>
                <p className="text-gray-300 md:text-xl">
                  Learn how we deployed a custom Odoo solution for a retail chain, resulting in 45% improved inventory management.
                </p>
              </div>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Integrated POS, inventory, and e-commerce",
                  "Automated inventory replenishment",
                  "Centralized customer management",
                  "Real-time sales and inventory analytics",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-indigo-400 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg shadow-indigo-900/30">
                  <Link href="/resources/case-studies">
                    Read Full Case Study
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Dark Theme Background */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-900 to-gray-950"></div>
        </div>
        
        {/* Subtle Animated Glow Lines */}
        <div className="absolute inset-0 z-1 overflow-hidden">
          <div className="glow-line absolute h-px w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent top-3/4 animate-pulse-slowest"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-6 text-center"
          >
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Ready to Transform Your Business with Odoo?
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Contact us today to schedule a free consultation and discover how our Odoo solutions can help you achieve your goals.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg shadow-indigo-900/30">
                <Link href="/contact">
                  Schedule a Consultation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-indigo-400 border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-300 hover:border-indigo-400" asChild>
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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
    </>
  );
}