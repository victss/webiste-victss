import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Odoo Solutions | TechSolutions",
  description: "Leverage the power of Odoo's integrated business applications with our customization, implementation, and support services.",
};

export default function OdooSolutionsPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-white text-blue-500 px-4 py-1 text-sm font-semibold">
                  Odoo Services
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Comprehensive Odoo Solutions
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Leverage the power of Odoo's integrated business applications with our expert implementation, customization, and support services.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/contact" className="transition-transform transform hover:scale-105">
                    Schedule a Consultation
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#modules" className="transition-transform transform hover:scale-105">Explore Modules</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://guru.com/blog/wp-content/uploads/2022/11/what-is-odoo-used-for.jpg?height=550&width=550"
                width={550}
                height={550}
                alt="Odoo Solutions"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Odoo Modules We Specialize In</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                We offer expertise across the full range of Odoo modules to provide comprehensive business solutions.
              </p>
            </div>
          </div>
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
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{module.title}</CardTitle>
                  <CardDescription className="text-gray-500">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    {module.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Odoo Services</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                We provide end-to-end Odoo services to ensure successful implementation and ongoing optimization.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            {[
              {
                title: "Odoo Implementation",
                description: "We provide comprehensive Odoo implementation services, from initial setup to deployment, ensuring a smooth transition to your new Odoo system.",
                features: [
                  "Business process analysis",
                  "System configuration",
                  "Data migration",
                  "User  training",
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
                  "User  training programs",
                  "Administrator training",
                  "24/7 technical support",
                  "Documentation and resources",
                ],
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 text-gray-600">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <Image
                src="https://www.images.cybrosys.com/blog/Uploads/BlogImage/odoo-a-retail-management-erp-1.png?height=550&width=550"
                width={550}
                height={550}
                alt="Odoo Case Study"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-white text-blue-500 px-4 py-1 text-sm font-semibold">
                  Case Study
                </div>
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-4xl">Retail Odoo Implementation</h2>
                <p className="text-gray-200 md:text-xl">
                  Learn how we deployed a custom Odoo solution for a retail chain, resulting in 45% improved inventory management.
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  "Integrated POS, inventory, and e-commerce",
                  "Automated inventory replenishment",
                  "Centralized customer management",
                  "Real-time sales and inventory analytics",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-white mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <Button asChild>
                  <Link href="/resources/case-studies" className="transition-transform transform hover:scale-105">
                    Read Full Case Study
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Ready to Transform Your Business with Odoo?</h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Contact us today to schedule a free consultation and discover how our Odoo solutions can help you achieve your goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact" className="transition-transform transform hover:scale-105">
                  Schedule a Consultation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white transition-transform transform hover:scale-105" asChild>
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}