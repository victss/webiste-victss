import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Products | Verma ICT & Software Solutions",
  description: "Explore our partner products, including greytHR Full-Suite HRMS for payroll, attendance, and HR automation.",
}

export default function ProductsPage() {
  return (
    <section className="container py-16 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Products</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Partner Solutions</h1>
        <p className="mx-auto max-w-3xl text-muted-foreground">
          Discover products we partner with to bring enterprise-grade HR, productivity, and business automation solutions to your organization.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="group hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-3 text-blue-600">
              <Zap className="h-6 w-6" />
              <CardTitle>greytHR Full-Suite HRMS</CardTitle>
            </div>
            <CardDescription>Complete HR management for payroll, attendance, leave, recruitment, and compliance.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-6">
              Our greytHR partnership gives you access to a powerful HRMS backed by implementation and support from Verma ICT.
            </p>
            <Button asChild>
              <Link href="/products/greythr">
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
