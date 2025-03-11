"use client";
import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const featuresData = [
    {
      title: "Odoo Certified Experts",
      description: "Team of certified Odoo professionals with deep technical expertise"
    },
    {
      title: "Customized Solutions",
      description: "Tailored Odoo implementations aligned with your business processes"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical assistance whenever you need it"
    },
    {
      title: "Rapid Implementation",
      description: "Quick deployment with minimal disruption to your business"
    },
    {
      title: "Cost-Effective",
      description: "Optimized IT spending with transparent pricing"
    },
    {
      title: "Industry Expertise",
      description: "Specialized knowledge across multiple business sectors"
    }
  ];
  
  return (
    <section id="about" className="w-full py-12 md:py-20 lg:py-24 bg-gray-950 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="inline-block rounded-full bg-blue-900 px-3 py-1 text-xs font-medium text-blue-100 animate-pulse">
              Why Choose Us
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">
              India's Top Odoo<br />Service Provider
            </h2>
            <p className="text-base text-gray-300 md:text-lg max-w-lg">
              With years of experience in Odoo implementation and customization, we've helped hundreds of businesses transform their operations and achieve their goals.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2 mt-6">
              {featuresData.map((feature, index) => (
                <div
                  key={index}
                  className="group flex flex-col p-3 rounded-xl bg-gray-900 hover:bg-blue-900 transition-all duration-300 border border-gray-800 hover:-translate-y-1"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-start gap-2 mb-1">
                    <CheckCircle2
                      className={`h-5 w-5 flex-shrink-0 mt-0.5 transition-all duration-300 ${hoveredIndex === index ? 'text-blue-300 scale-110' : 'text-blue-400'}`}
                    />
                    <h3 className="font-medium text-sm text-gray-100">{feature.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 pl-7">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="absolute w-4/5 h-4/5 bg-blue-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                alt="Odoo Implementation"
                className="w-full h-auto rounded-2xl object-cover object-center"
                src="https://miro.medium.com/v2/resize:fit:1400/1*bh3mJaLwwFizWU64l8cwxg.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/70 to-gray-900/30 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;