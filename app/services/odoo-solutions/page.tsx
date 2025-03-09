import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Odoo Solutions | TechSolutions",
  description: "Leverage the power of Odoo's integrated business applications with our customization, implementation, and support services.",
}

export default function OdooSolutionsPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Odoo Services
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Comprehensive Odoo Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Leverage the power of Odoo's integrated business applications with our expert implementation, customization, and support services.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/contact">
                    Schedule a Consultation
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#modules">Explore Modules</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Odoo Solutions"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Odoo Modules We Specialize In</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer expertise across the full range of Odoo modules to provide comprehensive business solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Sales Management</CardTitle>
                <CardDescription>
                  Streamline your sales process from quotation to invoice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• CRM integration</li>
                  <li>• Quotation and order management</li>
                  <li>• Sales analytics and reporting</li>
                  <li>• Customer portal</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Inventory Management</CardTitle>
                <CardDescription>
                  Optimize your inventory operations and reduce costs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Real-time inventory tracking</li>
                  <li>• Automated reordering</li>
                  <li>• Barcode scanning</li>
                  <li>• Multi-warehouse management</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Manufacturing</CardTitle>
                <CardDescription>
                  Manage your production process efficiently
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bill of materials</li>
                  <li>• Production planning</li>
                  <li>• Quality control</li>
                  <li>• Maintenance management</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Accounting & Finance</CardTitle>
                <CardDescription>
                  Streamline financial operations and reporting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• General ledger</li>
                  <li>• Accounts payable/receivable</li>
                  <li>• Financial reporting</li>
                  <li>• Multi-currency support</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Human Resources</CardTitle>
                <CardDescription>
                  Manage your workforce and streamline HR processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Employee management</li>
                  <li>• Recruitment</li>
                  <li>• Time tracking</li>
                  <li>• Payroll integration</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>E-Commerce</CardTitle>
                <CardDescription>
                  Create and manage your online store seamlessly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Website builder</li>
                  <li>• Product catalog</li>
                  <li>• Payment gateway integration</li>
                  <li>• Order management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Odoo Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide end-to-end Odoo services to ensure successful implementation and ongoing optimization.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Odoo Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We provide comprehensive Odoo implementation services, from initial setup to deployment, ensuring a smooth transition to your new Odoo system.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Business process analysis</li>
                  <li>• System configuration</li>
                  <li>• Data migration</li>
                  <li>• User training</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Odoo Customization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We customize Odoo to match your specific business requirements, developing custom modules and features as needed.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom module development</li>
                  <li>• UI/UX customization</li>
                  <li>• Workflow automation</li>
                  <li>• Third-party integrations</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Odoo Hosting & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We provide secure and reliable hosting solutions for your Odoo system, along with ongoing maintenance and support.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cloud or on-premise hosting</li>
                  <li>• Regular backups</li>
                  <li>• Security updates</li>
                  <li>• Performance optimization</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Odoo Training & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We provide comprehensive training and ongoing support to ensure your team can effectively use and manage your Odoo system.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• User training programs</li>
                  <li>• Administrator training</li>
                  <li>• 24/7 technical support</li>
                  <li>• Documentation and resources</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Odoo Case Study"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Case Study
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Retail Odoo Implementation</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Learn how we deployed a custom Odoo solution for a retail chain, resulting in 45% improved inventory management.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Integrated POS, inventory, and e-commerce</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Automated inventory replenishment</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Centralized customer management</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Real-time sales and inventory analytics</span>
                </li>
              </ul>
              <div>
                <Button asChild>
                  <Link href="/resources/case-studies">
                    Read Full Case Study
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Transform Your Business with Odoo?</h2>
              <p className="max-w-[600px] md:text-xl/relaxed">
                Contact us today to schedule a free consultation and discover how our Odoo solutions can help you achieve your goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Schedule a Consultation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
