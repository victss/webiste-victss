import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, ClipboardList, BarChart3, Factory, Truck, Users, UtensilsCrossed } from "lucide-react"

export default function SolutionsPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Industry-Specific Solutions
              </h1>
              <p className="max-w-[700px] text-blue-100 md:text-xl">
                We provide tailored IT solutions for various industries, helping businesses optimize operations, improve
                efficiency, and drive growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <IndustrySolutionCard
              icon={<Building2 className="h-10 w-10 text-blue-600" />}
              title="Wholesale"
              description="Streamline your wholesale distribution operations with our comprehensive IT solutions."
              features={[
                "Inventory management and optimization",
                "Order processing and fulfillment",
                "Supplier relationship management",
                "Customer management and CRM",
                "Financial management and reporting",
              ]}
              href="/solutions/wholesale"
            />

            <IndustrySolutionCard
              icon={<ClipboardList className="h-10 w-10 text-purple-600" />}
              title="Service Management"
              description="Enhance your service delivery and customer satisfaction with our service management solutions."
              features={[
                "Service scheduling and dispatch",
                "Field service management",
                "Customer portal for service requests",
                "Service level agreement tracking",
                "Service analytics and reporting",
              ]}
              href="/solutions/service-management"
            />

            <IndustrySolutionCard
              icon={<BarChart3 className="h-10 w-10 text-green-600" />}
              title="Project Management"
              description="Manage your projects efficiently with our comprehensive project management solutions."
              features={[
                "Project planning and scheduling",
                "Resource allocation and management",
                "Task tracking and management",
                "Project budgeting and cost control",
                "Project reporting and analytics",
              ]}
              href="/solutions/project-management"
            />

            <IndustrySolutionCard
              icon={<Factory className="h-10 w-10 text-orange-600" />}
              title="Manufacturing"
              description="Optimize your manufacturing processes with our specialized manufacturing solutions."
              features={[
                "Production planning and scheduling",
                "Inventory and warehouse management",
                "Quality control and assurance",
                "Equipment maintenance management",
                "Manufacturing analytics and reporting",
              ]}
              href="/solutions/manufacturing"
            />

            <IndustrySolutionCard
              icon={<Truck className="h-10 w-10 text-red-600" />}
              title="Logistics"
              description="Streamline your logistics operations with our comprehensive logistics solutions."
              features={[
                "Route planning and optimization",
                "Fleet management and tracking",
                "Warehouse management",
                "Order tracking and delivery management",
                "Logistics analytics and reporting",
              ]}
              href="/solutions/logistics"
            />

            <IndustrySolutionCard
              icon={<Users className="h-10 w-10 text-indigo-600" />}
              title="HRMS"
              description="Manage your human resources efficiently with our comprehensive HRMS solutions."
              features={[
                "Employee information management",
                "Recruitment and onboarding",
                "Time and attendance tracking",
                "Performance management",
                "Payroll and benefits administration",
              ]}
              href="/solutions/hrms"
            />

            <IndustrySolutionCard
              icon={<UtensilsCrossed className="h-10 w-10 text-yellow-600" />}
              title="Hospitality Management"
              description="Enhance guest experience and streamline operations with our hospitality management solutions."
              features={[
                "Reservation and booking management",
                "Front desk and guest management",
                "Housekeeping and maintenance",
                "Restaurant and inventory management",
                "Hospitality analytics and reporting",
              ]}
              href="/solutions/hospitality"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Our Approach</div>
              <h2 className="text-3xl font-bold tracking-tighter">Tailored Solutions for Your Industry</h2>
              <p className="text-muted-foreground md:text-lg">
                We understand that each industry has its unique challenges and requirements. That's why we take a
                tailored approach to developing solutions that address the specific needs of your industry.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Our team of experts works closely with you to understand your business processes, identify areas for
                improvement, and develop solutions that drive real business value. Whether you're in wholesale,
                manufacturing, logistics, or any other industry, we have the expertise to help you succeed.
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Link href="/contact">Discuss Your Industry Needs</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Industry Solutions"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-xl"
                src="/placeholder.svg?height=400&width=600"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Ready to Transform Your Business?</h2>
          <p className="max-w-[800px] mx-auto text-xl text-blue-100 mb-8">
            Contact us today to discuss how our industry-specific solutions can help your business optimize operations,
            improve efficiency, and drive growth.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

function IndustrySolutionCard({
  icon,
  title,
  description,
  features,
  href,
}: {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  href: string
}) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 pb-4">
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Link href={href}>Learn More</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

