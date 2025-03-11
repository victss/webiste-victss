"use client"; // Mark this component as a Client Component

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white">
      {/* Dark Theme Background with Animated Elements */}
      <div className="absolute inset-0 z-0">
        <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-900 to-gray-950 h-full w-full"></div>
        {/* Particle effect */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      {/* Glow Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="glow-line absolute h-px w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent top-0 animate-pulse-slow"></div>
      </div>

      <div className="container relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="text-white font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                VICTSS
              </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-sm font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Verma ICT & Software Solutions
              </span>
            </Link>
            <p className="text-sm text-gray-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Unlock the future with Verma ICT & Software Solutions (VICTSS) - India's top Odoo service provider. Experience excellence
              through our innovative solutions, driving your business to new heights of success and efficiency.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/victss.dev/" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <div className="p-2 rounded-full bg-gray-800 hover:bg-indigo-900/50 border border-gray-700 hover:border-indigo-500/30 transition-all duration-300">
                  <Facebook className="h-4 w-4" />
                </div>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://x.com/victss_dev" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <div className="p-2 rounded-full bg-gray-800 hover:bg-indigo-900/50 border border-gray-700 hover:border-indigo-500/30 transition-all duration-300">
                  <Twitter className="h-4 w-4" />
                </div>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.linkedin.com/company/victss" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <div className="p-2 rounded-full bg-gray-800 hover:bg-indigo-900/50 border border-gray-700 hover:border-indigo-500/30 transition-all duration-300">
                  <Linkedin className="h-4 w-4" />
                </div>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.instagram.com/victss.dev/" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <div className="p-2 rounded-full bg-gray-800 hover:bg-indigo-900/50 border border-gray-700 hover:border-indigo-500/30 transition-all duration-300">
                  <Instagram className="h-4 w-4" />
                </div>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white relative w-fit" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Services
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-indigo-500"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/services/odoo-solutions", label: "Odoo Services" },
                { href: "/coming-soon", label: "DevOps" },
                { href: "/services/web-development", label: "Web Application" },
                { href: "/services/erp-implementation", label: "ERP Deployment" },
                { href: "/services/it-consulting", label: "IT Consulting" },
                { href: "/coming-soon", label: "Mobile Application" }
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-400 hover:text-indigo-300 transition-colors duration-300 flex items-center group">
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1 text-indigo-400" />
                    <span style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white relative w-fit" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Solutions
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-indigo-500"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/coming-soon", label: "Wholesale" },
                { href: "/coming-soon", label: "Service Management" },
                { href: "/coming-soon", label: "Project Management" },
                { href: "/coming-soon", label: "Manufacturing" },
                { href: "/coming-soon", label: "Logistics" },
                { href: "/coming-soon", label: "HRMS" },
                { href: "/coming-soon", label: "Hospitality Management" }
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-400 hover:text-indigo-300 transition-colors duration-300 flex items-center group">
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1 text-indigo-400" />
                    <span style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white relative w-fit" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Contact Us
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-indigo-500"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center group">
                <div className="p-2 mr-3 rounded-full bg-gray-800 group-hover:bg-indigo-900/50 border border-gray-700 group-hover:border-indigo-500/30 transition-all duration-300">
                  <Phone className="h-4 w-4 text-indigo-400" />
                </div>
                <span className="text-gray-400 group-hover:text-indigo-300 transition-colors duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>+91 83929 45644</span>
              </li>
              <li className="flex items-center group">
                <div className="p-2 mr-3 rounded-full bg-gray-800 group-hover:bg-indigo-900/50 border border-gray-700 group-hover:border-indigo-500/30 transition-all duration-300">
                  <Mail className="h-4 w-4 text-indigo-400" />
                </div>
                <div>
                  <span className="text-gray-400 group-hover:text-indigo-300 transition-colors duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>sales@victss.com</span>
                  <p className="text-xs text-gray-500">For sales-related queries.</p>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="p-2 mr-3 rounded-full bg-gray-800 group-hover:bg-indigo-900/50 border border-gray-700 group-hover:border-indigo-500/30 transition-all duration-300">
                  <Mail className="h-4 w-4 text-indigo-400" />
                </div>
                <div>
                  <span className="text-gray-400 group-hover:text-indigo-300 transition-colors duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>info@victss.com</span>
                  <p className="text-xs text-gray-500">For general information.</p>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="p-2 mr-3 rounded-full bg-gray-800 group-hover:bg-indigo-900/50 border border-gray-700 group-hover:border-indigo-500/30 transition-all duration-300">
                  <Mail className="h-4 w-4 text-indigo-400" />
                </div>
                <div>
                  <span className="text-gray-400 group-hover:text-indigo-300 transition-colors duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>contact@victss.com</span>
                  <p className="text-xs text-gray-500">For contact-related queries.</p>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="p-2 mr-3 rounded-full bg-gray-800 group-hover:bg-indigo-900/50 border border-gray-700 group-hover:border-indigo-500/30 transition-all duration-300">
                  <Mail className="h-4 w-4 text-indigo-400" />
                </div>
                <div>
                  <span className="text-gray-400 group-hover:text-indigo-300 transition-colors duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>support@victss.com</span>
                  <p className="text-xs text-gray-500">For support-related queries.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Branch Offices Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-medium mb-6 text-white relative w-fit" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Our Branch Offices
            <span className="absolute -bottom-1 left-0 w-16 h-0.5 bg-indigo-500"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ranchi Office - Head Office */}
            <div className="flex items-start space-x-4 group">
              <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-indigo-900/30 border border-gray-700 group-hover:border-indigo-500/30 transition-all duration-300 mt-1">
                <MapPin className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Ranchi Office <span className="text-indigo-400 text-xs">Head Office</span></h4>
                <p className="text-sm text-gray-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Airport Road
                  <br />
                  Ranchi, Jharkhand
                </p>
              </div>
            </div>

            {/* Dehradun Office */}
            <div className="flex items-start space-x-4 group">
              <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-indigo-900/30 border border-gray-700 group-hover:border-indigo-500/30 transition-all duration-300 mt-1">
                <MapPin className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Dehradun Office</h4>
                <p className="text-sm text-gray-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Monal Enclave, Near Banjarawala
                  <br />
                  Dehradun, Uttarakhand
                </p>
              </div>
            </div>

            {/* Haldwani Office */}
            <div className="flex items-start space-x-4 group">
              <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-indigo-900/30 border border-gray-700 group-hover:border-indigo-500/30 transition-all duration-300 mt-1">
                <MapPin className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Haldwani Office</h4>
                <p className="text-sm text-gray-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Kathgodam, Haldwani
                  <br />
                  Nainital, Uttarakhand
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500" style={{ fontFamily: "'Montserrat', sans-serif" }}>© 2025 Verma ICT & Software Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {[
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms-of-service", label: "Terms of Service" },
              { href: "/sitemap", label: "Sitemap" }
            ].map((item, index) => (
              <Link key={index} href={item.href} className="text-xs text-gray-500 hover:text-indigo-400 transition-colors duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for Animated Elements */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        /* Make sure to add font imports to your main CSS */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Poppins:wght@400;600;700&display=swap');
      `}</style>
    </footer>
  );
}
