import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, BarChart, Headphones, Cloud } from "lucide-react";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 transition-all duration-500"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 text-sm text-white shadow-lg">
              Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">
              Our IT Solutions
            </h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a comprehensive range of IT services with specialized expertise in Odoo implementation.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 overflow-hidden group hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 ease-in-out hover:-translate-y-2"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 ease-in-out">
                  <service.icon className="h-10 w-10" />
                </div>
                <h3 className="font-medium text-sm md:text-base font-sans text-gray-200 group-hover:text-blue-400 transition-colors duration-300 ease-in-out">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm text-center">{service.description}</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-500 group-hover:text-white/90 transition-colors duration-300">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Database,
    title: "Odoo Services",
    description: "Complete Odoo implementation, customization, and support services.",
    features: [
      "Odoo implementation & migration",
      "Custom module development",
      "Integration with third-party apps",
      "Odoo training & support",
    ],
  },
  {
    icon: Cloud,
    title: "DevOps",
    description: "Streamline your development and operations with our DevOps expertise.",
    features: [
      "CI/CD pipeline implementation",
      "Infrastructure as code",
      "Container orchestration",
      "Monitoring & logging",
    ],
  },
  {
    icon: Code,
    title: "Web Application",
    description: "Custom web applications tailored to your specific business requirements.",
    features: [
      "Responsive web design",
      "Progressive web apps",
      "E-commerce solutions",
      "Web portal development",
    ],
  },
  {
    icon: Database,
    title: "ERP Deployment",
    description: "End-to-end ERP implementation and customization services.",
    features: [
      "Business process analysis",
      "ERP system selection",
      "Implementation & configuration",
      "Data migration & training",
    ],
  },
  {
    icon: BarChart,
    title: "IT Consulting",
    description: "Strategic IT guidance to help your business achieve its goals.",
    features: [
      "IT strategy development",
      "Digital transformation",
      "Technology roadmapping",
      "IT governance",
    ],
  },
  {
    icon: Headphones,
    title: "Mobile Application",
    description: "Native and cross-platform mobile app development.",
    features: [
      "iOS & Android development",
      "React Native & Flutter",
      "App store optimization",
      "Mobile app maintenance",
    ],
  },
];
