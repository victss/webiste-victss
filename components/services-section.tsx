import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, BarChart, Headphones, Cloud } from "lucide-react";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50 transition-all duration-500"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white">
              Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our IT Solutions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a comprehensive range of IT services with specialized expertise in Odoo implementation.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative pb-2">
                <service.icon className="h-12 w-12 text-blue-600 mb-2 group-hover:text-white transition-colors duration-300" />
                <CardTitle className="group-hover:text-white transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="group-hover:text-white/80 transition-colors duration-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="list-disc pl-5 space-y-1 text-sm group-hover:text-white/90 transition-colors duration-300">
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