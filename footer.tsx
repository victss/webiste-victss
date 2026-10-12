"use client";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white">
      {/* Dark Theme Background with Animated Elements */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-900 to-gray-950" />
        <div className="bg-grid-pattern absolute inset-0 opacity-5" />
      </div>
      {/* Glow Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="glow-line absolute top-0 h-px w-full animate-pulse-slow bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      </div>
      <div className="container relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <span
                className="font-bold text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                VICTSS
              </span>
              <span
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-sm font-medium text-transparent"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Verma ICT & Software Solutions
              </span>
            </Link>
            <p
              className="text-sm text-gray-400"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Unlock the future with Verma ICT & Software Solutions (VICTSS) -
              India's top Odoo service provider. Experience excellence through
              our innovative solutions, driving your business to new heights
              of success and efficiency.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-indigo-400"
              >
                <div className="rounded-full border border-gray-700 bg-gray-800 p-2 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-900/50">
                  <Facebook className="h-4 w-4" />
                </div>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-indigo-400"
              >
                <div className="rounded-full border border-gray-700 bg-gray-800 p-2 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-900/50">
                  <Twitter className="h-4 w-4" />
                </div>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:text-indigo-400"
              >
                <div className="rounded-full border border-gray-700 bg-gray-800 p-2 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-900/50">
                  <Linkedin className="h-4 w-4" />
                </div>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/victss.dev/"
                className="text-gray-400 transition-colors duration-300 hover:text-indigo-400"
              >
                <div className="rounded-full border border-gray-700 bg-gray-800 p-2 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-900/50">
                  <Instagram className="h-4 w-4" />
                </div>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          {/* Services */}
          <div className="space-y-4">
            <h3
              className="relative w-fit text-lg font-medium text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Services
              <span className="absolute -bottom-1 left-0 h-0.5 w-12 bg-indigo-500" />
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/services/odoo-solutions", label: "Odoo Services" },
                { href: "/services/devops", label: "DevOps" },
                {
                  href: "/services/web-development",
                  label: "Web Application",
                },
                {
                  href: "/services/erp-implementation",
                  label: "ERP Deployment",
                },
                { href: "/services/it-consulting", label: "IT Consulting" },
                {
                  href: "/services/mobile-development",
                  label: "Mobile Application",
                },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-gray-400 transition-colors duration-300 hover:text-indigo-300"
                  >
                    <ChevronRight className="mr-1 h-3 w-3 text-indigo-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Solutions */}
          <div className="space-y-4">
            <h3
              className="relative w-fit text-lg font-medium text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Solutions
              <span className="absolute -bottom-1 left-0 h-0.5 w-12 bg-indigo-500" />
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/coming-soon", label: "Wholesale" },
                { href: "/coming-soon", label: "Service Management" },
                { href: "/coming-soon", label: "Project Management" },
                { href: "/coming-soon", label: "Manufacturing" },
                { href: "/coming-soon", label: "Logistics" },
                { href: "/coming-soon", label: "HRMS" },
                { href: "/coming-soon", label: "Hospitality Management" },
              ].map((item, index) => (
                <li key={`${item.label}-${index}`}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-gray-400 transition-colors duration-300 hover:text-indigo-300"
                  >
                    <ChevronRight className="mr-1 h-3 w-3 text-indigo-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Us */}
          <div className="space-y-4">
            <h3
              className="relative w-fit text-lg font-medium text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 h-0.5 w-12 bg-indigo-500" />
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="group flex items-center">
                <div className="mr-3 rounded-full border border-gray-700 bg-gray-800 p-2 transition-all duration-300 group-hover:border-indigo-500/30 group-hover:bg-indigo-900/50">
                  <Mail className="h-4 w-4 text-indigo-400" />
                </div>
                <div>
                  <a
                    href="mailto:sales@victss.com"
                    className="text-gray-400 transition-colors duration-300 group-hover:text-indigo-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    sales@victss.com
                  </a>
                  <p className="text-xs text-gray-500">
                    For sales-related queries.
                  </p>
                </div>
              </li>
              <li className="group flex items-center">
                <div className="mr-3 rounded-full border border-gray-700 bg-gray-800 p-2 transition-all duration-300 group-hover:border-indigo-500/30 group-hover:bg-indigo-900/50">
                  <Mail className="h-4 w-4 text-indigo-400" />
                </div>
                <div>
                  <a
                    href="mailto:info@victss.com"
                    className="text-gray-400 transition-colors duration-300 group-hover:text-indigo-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    info@victss.com
                  </a>
                  <p className="text-xs text-gray-500">
                    For general information.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Branch Offices Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <h3
            className="relative mb-6 w-fit text-lg font-medium text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Our Branch Offices
            <span className="absolute -bottom-1 left-0 h-0.5 w-16 bg-indigo-500" />
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Ranchi Office - Head Office */}
            <div className="group flex items-start space-x-4">
              <div className="mt-1 rounded-lg border border-gray-700 bg-gray-800 p-3 transition-all duration-300 group-hover:border-indigo-500/30 group-hover:bg-indigo-900/30">
                <MapPin className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h4
                  className="font-medium text-white"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Ranchi Office{" "}
                  <span className="text-xs text-indigo-400">Head Office</span>
                </h4>
                <p
                  className="text-sm text-gray-400"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Airport Road
                  <br />
                  Ranchi, Jharkhand
                </p>
              </div>
            </div>
            {/* Dehradun Office */}
            <div className="group flex items-start space-x-4">
              <div className="mt-1 rounded-lg border border-gray-700 bg-gray-800 p-3 transition-all duration-300 group-hover:border-indigo-500/30 group-hover:bg-indigo-900/30">
                <MapPin className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h4
                  className="font-medium text-white"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Dehradun Office
                </h4>
                <p
                  className="text-sm text-gray-400"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Monal Enclave, Near Banjarawala
                  <br />
                  Dehradun, Uttarakhand
                </p>
              </div>
            </div>
            {/* Delhi Office */}
            <div className="group flex items-start space-x-4">
              <div className="mt-1 rounded-lg border border-gray-700 bg-gray-800 p-3 transition-all duration-300 group-hover:border-indigo-500/30 group-hover:bg-indigo-900/30">
                <MapPin className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h4
                  className="font-medium text-white"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Delhi Office
                </h4>
                <p
                  className="text-sm text-gray-400"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Rajapuri, Uttam Nagar
                  <br />
                  South West Delhi
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
          <p
            className="text-xs text-gray-500"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            © 2025 Verma ICT & Software Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms-of-service", label: "Terms of Service" },
              { href: "/sitemap", label: "Sitemap" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-gray-500 transition-colors duration-300 hover:text-indigo-400"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* CSS for Animated Elements */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite;
        }
        .bg-grid-pattern {
          background-image: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.1) 1px,
            transparent 1px
          );
          background-size: 30px 30px;
        }
      `}</style>
    </footer>
  );
}