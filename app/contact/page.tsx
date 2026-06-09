"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function ContactPage() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 text-white relative overflow-hidden">
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
        <motion.div
          className="grid gap-6 lg:grid-cols-2 lg:gap-12"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Left Section */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <div>
              <h1 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Contact Us
              </h1>
              <p className="text-gray-300 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="grid gap-6">
              {/* Ranchi Office */}
              <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                <MapPin className="h-6 w-6 text-indigo-400 flex-shrink-0" />
                <div>
                  <h3 className="font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>Ranchi Office (Head Office)</h3>
                  <p className="text-sm text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Airport Road
                    <br />
                    Ranchi, Jharkhand
                  </p>
                </div>
              </motion.div>
              {/* Dehradun Office */}
              <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                <MapPin className="h-6 w-6 text-indigo-400 flex-shrink-0" />
                <div>
                  <h3 className="font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>Dehradun Office</h3>
                  <p className="text-sm text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Monal Enclave, Near Banjarawala
                    <br />
                    Dehradun, Uttarakhand
                  </p>
                </div>
              </motion.div>
              {/* Haldwani Office */}
              <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                <MapPin className="h-6 w-6 text-indigo-400 flex-shrink-0" />
                <div>
                  <h3 className="font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>Haldwani Office</h3>
                  <p className="text-sm text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Kathgodam, Haldwani
                    <br />
                    Nainital, Uttarakhand
                  </p>
                </div>
              </motion.div>
              {/* Email */}
              <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                <Mail className="h-6 w-6 text-indigo-400 flex-shrink-0" />
                <div>
                  <h3 className="font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>Email</h3>
                  <p className="text-sm text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    sales@victss.com <span className="text-xs text-gray-500">(For sales-related queries)</span>
                    <br />
                    info@victss.com <span className="text-xs text-gray-500">(For general information)</span>
                    <br />
                    contact@victss.com <span className="text-xs text-gray-500">(For contact-related queries)</span>
                    <br />
                    support@victss.com <span className="text-xs text-gray-500">(For support-related queries)</span>
                  </p>
                </div>
              </motion.div>
              {/* Hours */}
              <motion.div className="flex items-start gap-4" variants={fadeInUp}>
                <Clock className="h-6 w-6 text-indigo-400 flex-shrink-0" />
                <div>
                  <h3 className="font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>Hours</h3>
                  <p className="text-sm text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Monday - Friday: 9am - 5pm
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div variants={fadeInUp}>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Send us a message</CardTitle>
                <CardDescription className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Fill out the form below and our team will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>First name</Label>
                      <Input id="first-name" placeholder="John" className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>Last name</Label>
                      <Input id="last-name" placeholder="Doe" className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>Phone</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide as much detail as possible..."
                      className="min-h-32 bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg shadow-indigo-900/30"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
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
    </div>
  );
}
