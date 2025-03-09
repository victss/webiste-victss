import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, ClipboardList, BarChart3, Factory, Truck, Users, UtensilsCrossed } from "lucide-react"

export function IndustriesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Industries <span className="text-blue-600">we work</span> <span className="text-purple-600">with</span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our expertise spans across multiple industries, providing tailored IT solutions for diverse business
              needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 md:mt-12">
          <IndustryCard icon={<Building2 className="h-10 w-10" />} title="Wholesale" />
          <IndustryCard icon={<ClipboardList className="h-10 w-10" />} title="Service Management" />
          <IndustryCard icon={<BarChart3 className="h-10 w-10" />} title="Project Management" />
          <IndustryCard icon={<Factory className="h-10 w-10" />} title="Manufacturing" />
          <IndustryCard icon={<Truck className="h-10 w-10" />} title="Logistics" />
          <IndustryCard icon={<Users className="h-10 w-10" />} title="HRMS" />
          <IndustryCard icon={<UtensilsCrossed className="h-10 w-10" />} title="Hospitality Management" />
          <IndustryCard icon={<Building2 className="h-10 w-10" />} title="Retail" />
        </div>
      </div>
    </section>
  )
}

function IndustryCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 overflow-hidden group">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
          {icon}
        </div>
        <h3 className="font-medium text-sm md:text-base">{title}</h3>
      </CardContent>
    </Card>
  )
}

