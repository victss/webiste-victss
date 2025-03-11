"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, TrendingUp, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function AboutPage() {
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
          <motion.div
            className="grid gap-6 lg:grid-cols-2 lg:gap-12"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <div className="inline-block rounded-lg bg-indigo-500/20 px-3 py-1 text-sm text-indigo-200 hover:bg-indigo-500/30 transition-colors backdrop-blur-sm border border-indigo-500/30">
                About Us
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
                India's Leading Odoo Service Provider
              </h1>
              <p className="text-xl text-blue-100" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                VICTSS is a premier IT service provider specializing in ERP Odoo implementation, customization,
                and support. With years of experience and a team of experts, we help businesses transform
                their operations and achieve their goals.
              </p>
            </motion.div>
            <motion.div className="flex items-center justify-center" variants={fadeInUp}>
              <img
                alt="VICTSS Team"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-[0_0_25px_rgba(79,70,229,0.15)] border border-indigo-500/20"
                src="https://www.infinitivehost.com/blog/wp-content/uploads/2024/06/Getting-Started-with-Odoo-A-Beginners-Guide-1170x700.webp?height=400&width=600"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid gap-6 lg:grid-cols-2 lg:gap-12"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <div className="inline-block rounded-lg bg-indigo-500/20 px-3 py-1 text-sm text-indigo-200 hover:bg-indigo-500/30 transition-colors backdrop-blur-sm border border-indigo-500/30">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter" style={{ fontFamily: "'Poppins', sans-serif" }}>
                From Humble Beginnings to Industry Leaders
              </h2>
              <p className="text-gray-300 md:text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Founded in 2022, VICTSS began as a small team of passionate IT professionals with a vision
                to provide high-quality, affordable IT solutions to businesses of all sizes. Over the years, we've grown
                into a leading IT service provider with a focus on Odoo implementation and customization.
              </p>
              <p className="text-gray-300 md:text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Our journey has been marked by continuous learning, innovation, and a commitment to excellence. Today,
                we're proud to be recognized as India's top Odoo service provider, helping businesses across various
                industries streamline their operations and achieve their goals.
              </p>
              <p className="text-gray-300 md:text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                What sets us apart is our deep understanding of business processes, our technical expertise, and our
                customer-centric approach. We don't just implement software; we partner with our clients to understand
                their unique challenges and deliver solutions that drive real business value.
              </p>
            </motion.div>
            <motion.div className="grid grid-cols-2 gap-4" variants={fadeInUp}>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-indigo-400 mb-4" />
                  <h3 className="text-gray-300 font-bold">5+</h3>
                  <p className="text-gray-300">Team Members</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Award className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-gray-300 font-bold">5+</h3>
                  <p className="text-gray-300">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
                  <h3 className="text-gray-300 font-bold">10+</h3>
                  <p className="text-gray-300">Projects Completed</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Globe className="h-12 w-12 text-orange-400 mb-4" />
                  <h3 className="text-gray-300 font-bold">5+</h3>
                  <p className="text-gray-300">Countries Served</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-indigo-500/20 px-3 py-1 text-sm text-indigo-200 hover:bg-indigo-500/30 transition-colors backdrop-blur-sm border border-indigo-500/30">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter" style={{ fontFamily: "'Poppins', sans-serif" }}>
                What Drives Us
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Our core values guide everything we do, from how we develop solutions to how we interact with our
                clients.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-gray-300 font-bold">Excellence</h3>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  We strive for excellence in everything we do, from the solutions we develop to the service we provide.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-gray-300 font-bold">Collaboration</h3>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  We believe in working closely with our clients, understanding their needs, and collaborating to
                  deliver the best solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-gray-300 font-bold">Innovation</h3>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  We continuously explore new technologies and approaches to deliver innovative solutions that drive
                  business growth.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-gray-300 font-bold">Reliability</h3>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  We deliver on our promises, meeting deadlines and providing reliable solutions that our clients can
                  depend on.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-gray-300 font-bold">Quality</h3>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  We maintain the highest standards of quality in our work, ensuring that our solutions are robust,
                  secure, and efficient.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-gray-300 font-bold">Integrity</h3>
                <p className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  We conduct our business with integrity, transparency, and honesty, building trust with our clients and
                  partners.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid gap-6 lg:grid-cols-2 lg:gap-12"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div className="flex items-center justify-center" variants={fadeInUp}>
              <img
                alt="Our Team"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-[0_0_25px_rgba(79,70,229,0.15)] border border-indigo-500/20"
                src="https://www.businessalligators.com/wp-content/uploads/2019/08/IT-team-building.jpg?height=400&width=600"
              />
            </motion.div>
            <motion.div className="space-y-4" variants={fadeInUp}>
              <div className="inline-block rounded-lg bg-indigo-500/20 px-3 py-1 text-sm text-indigo-200 hover:bg-indigo-500/30 transition-colors backdrop-blur-sm border border-indigo-500/30">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Meet the Experts Behind Our Success
              </h2>
              <p className="text-gray-300 md:text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Our team consists of certified Odoo experts, experienced developers, project managers, and business
                analysts who are passionate about delivering exceptional IT solutions.
              </p>
              <p className="text-gray-300 md:text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                With diverse skills and expertise, our team works collaboratively to understand your business challenges
                and develop tailored solutions that drive results. We're committed to continuous learning and staying
                updated with the latest technologies to provide you with cutting-edge solutions.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <Badge className="bg-indigo-500/10 text-indigo-200 hover:bg-indigo-500/20">Odoo Certified Developers</Badge>
                <Badge className="bg-purple-500/10 text-purple-200 hover:bg-purple-500/20">DevOps Engineers</Badge>
                <Badge className="bg-green-500/10 text-green-200 hover:bg-green-500/20">Web Developers</Badge>
                <Badge className="bg-orange-500/10 text-orange-200 hover:bg-orange-500/20">Mobile App Developers</Badge>
                                <Badge className="bg-red-500/10 text-red-200 hover:bg-red-500/20">UI/UX Designers</Badge>
                <Badge className="bg-yellow-500/10 text-yellow-200 hover:bg-yellow-500/20">Project Managers</Badge>
                <Badge className="bg-blue-500/10 text-blue-200 hover:bg-blue-500/20">Business Analysts</Badge>
              </div>
              <div className="mt-6">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg shadow-indigo-900/30"
                >
                  <Link href="/contact">Join Our Team</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
        <div className="container px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Ready to Transform Your Business?
            </h2>
            <p className="max-w-[800px] mx-auto text-xl text-blue-100 mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Contact us today to discuss how our IT solutions can help your business grow, save costs, and improve
              efficiency.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg shadow-indigo-900/30"
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}