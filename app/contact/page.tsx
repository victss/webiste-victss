"use client";
import { MapPin, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
const stagger = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
export default function ContactPage() {
  return (
    <div className="relative w-full overflow-hidden py-12 text-white md:py-24 lg:py-32">
      {/* Dark Theme Background with Animated Particles */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-gray-900 to-gray-950" />
        <div className="particle-container absolute inset-0" />
      </div>
      {/* Subtle Animated Glow Lines */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <div className="glow-line absolute top-1/4 h-px w-full animate-pulse-slow bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="glow-line absolute top-2/4 h-px w-full animate-pulse-slower bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="glow-line absolute top-3/4 h-px w-full animate-pulse-slowest bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          className="grid gap-6 lg:grid-cols-2 lg:gap-12"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Left Section - Contact Details */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <div>
              <h1
                className="text-3xl font-bold tracking-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Contact Us
              </h1>
              <p
                className="mt-2 text-gray-300"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                We'd love to hear from you. Get in touch with us using the
                contact information below.
              </p>
            </div>
            <div className="grid gap-6">
              {/* Ranchi Office */}
              <motion.div
                className="flex items-start gap-4"
                variants={fadeInUp}
              >
                <MapPin className="h-6 w-6 flex-shrink-0 text-indigo-400" />
                <div>
                  <h3
                    className="font-medium"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Ranchi Office (Head Office)
                  </h3>
                  <p
                    className="text-sm text-gray-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Airport Road
                    <br />
                    Ranchi, Jharkhand
                  </p>
                </div>
              </motion.div>
              {/* Dehradun Office */}
              <motion.div
                className="flex items-start gap-4"
                variants={fadeInUp}
              >
                <MapPin className="h-6 w-6 flex-shrink-0 text-indigo-400" />
                <div>
                  <h3
                    className="font-medium"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Dehradun Office
                  </h3>
                  <p
                    className="text-sm text-gray-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Monal Enclave, Near Banjarawala
                    <br />
                    Dehradun, Uttarakhand
                  </p>
                </div>
              </motion.div>
              {/* Delhi Office */}
              <motion.div
                className="flex items-start gap-4"
                variants={fadeInUp}
              >
                <MapPin className="h-6 w-6 flex-shrink-0 text-indigo-400" />
                <div>
                  <h3
                    className="font-medium"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Delhi Office
                  </h3>
                  <p
                    className="text-sm text-gray-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Rajapuri, Uttam Nagar,
                    <br />
                    South West Delhi
                  </p>
                </div>
              </motion.div>
              {/* Email Details */}
              <motion.div
                className="flex items-start gap-4"
                variants={fadeInUp}
              >
                <Mail className="h-6 w-6 flex-shrink-0 text-indigo-400" />
                <div>
                  <h3
                    className="font-medium"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Email
                  </h3>
                  <p
                    className="text-sm text-gray-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    sales@victss.com{" "}
                    <span className="text-xs text-gray-500">
                      (For sales-related queries)
                    </span>
                    <br />
                    info@victss.com{" "}
                    <span className="text-xs text-gray-500">
                      (For general information)
                    </span>
                  </p>
                </div>
              </motion.div>
              {/* Business Hours */}
              <motion.div
                className="flex items-start gap-4"
                variants={fadeInUp}
              >
                <Clock className="h-6 w-6 flex-shrink-0 text-indigo-400" />
                <div>
                  <h3
                    className="font-medium"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Hours
                  </h3>
                  <p
                    className="text-sm text-gray-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Monday - Friday: 9am - 5pm
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Animated Background Styles */}
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
        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        @keyframes pulse-slowest {
          0%,
          100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.15;
          }
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
          background-image: radial-gradient(
            circle,
            rgba(79, 70, 229, 0.1) 1px,
            transparent 1px
          );
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}