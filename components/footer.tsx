"use client"; // Mark this component as a Client Component

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="animate-gradient bg-gradient-to-r from-blue-800 to-purple-800 via-blue-900 h-full w-full"></div>
      </div>

      <div className="container relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="text-white">VICTSS</span>
              <span className="text-blue-200"></span>
            </Link>
            <p className="text-sm text-blue-200">
              Unlock the future with Verma ICT & Software Solutions (VICTSS) - India's top Odoo service provider. Experience excellence
              through our innovative solutions, driving your business to new heights of success and efficiency.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-200 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.instagram.com/victss.dev/" className="text-blue-200 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/odoo-solutions" className="text-blue-200 hover:text-white">
                  Odoo Services
                </Link>
              </li>
              <li>
                <Link href="/services/devops" className="text-blue-200 hover:text-white">
                  DevOps
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-blue-200 hover:text-white">
                  Web Application
                </Link>
              </li>
              <li>
                <Link href="/services/erp-implementation" className="text-blue-200 hover:text-white">
                  ERP Deployment
                </Link>
              </li>
              <li>
                <Link href="/services/it-consulting" className="text-blue-200 hover:text-white">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="text-blue-200 hover:text-white">
                  Mobile Application
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions/wholesale" className="text-blue-200 hover:text-white">
                  Wholesale
                </Link>
              </li>
              <li>
                <Link href="/solutions/service-management" className="text-blue-200 hover:text-white">
                  Service Management
                </Link>
              </li>
              <li>
                <Link href="/solutions/project-management" className="text-blue-200 hover:text-white">
                  Project Management
                </Link>
              </li>
              <li>
                <Link href="/solutions/manufacturing" className="text-blue-200 hover:text-white">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/solutions/logistics" className="text-blue-200 hover:text-white">
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="/solutions/hrms" className="text-blue-200 hover:text-white">
                  HRMS
                </Link>
              </li>
              <li>
                <Link href="/solutions/hospitality" className="text-blue-200 hover:text-white">
                  Hospitality Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-300 mr-2" />
                <span className="text-blue-200">+91 83929 45644</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-300 mr-2" />
                <span className="text-blue-200">info@victss.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Branch Offices Section */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <h3 className="text-lg font-medium mb-6">Our Branch Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ranchi Office - Head Office */}
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-300 mt-1" />
              <div>
                <h4 className="font-medium">Ranchi Office <span className="text-blue-300 text-sm">(Head Office)</span></h4>
                <p className="text-sm text-blue-200">
                  Airport Road, Kunwar Singh Colony
                  <br />
                  Doranda, Ranchi, Jharkhand - 560001
                </p>
              </div>
            </div>

            {/* Dehradun Office */}
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-300 mt-1" />
              <div>
                <h4 className="font-medium">Dehradun Office</h4>
                <p className="text-sm text-blue-200">
                  Monal Enclave, Near Banjarawala
                  <br />
                  Dehradun, Uttarakhand - 248001
                </p>
              </div>
            </div>

            {/* Haldwani Office */}
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-300 mt-1" />
              <div>
                <h4 className="font-medium">Haldwani Office</h4>
                <p className="text-sm text-blue-200">
                  Kathgodam, Haldwani
                  <br />
                  Nainital, Uttarakhand - 263126
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-blue-300">© 2025 Verma ICT & Software Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-blue-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-blue-300 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-xs text-blue-300 hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* CSS for Animated Background */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }
      `}</style>
    </footer>
  );
}