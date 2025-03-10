import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "ERP Implementation Services | TechSolutions",
  description: "Streamline your business processes with our comprehensive ERP implementation services. Custom solutions, seamless integration, and ongoing support.",
}

export default function ERPImplementationPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  ERP Services
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Enterprise Resource Planning Implementation
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Streamline your business processes with our comprehensive ERP solutions tailored to your specific industry and business needs.
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
                  <Link href="#benefits">Explore Benefits</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://azka.tech/wp-content/uploads/2019/11/erp-2.png?height=550&width=550"
                width={550}
                height={550}
                alt="ERP Implementation"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our ERP Implementation Approach</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We follow a proven methodology to ensure successful ERP implementation that aligns with your business goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 h-2 w-full bg-primary"></div>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary text-xl font-bold mb-4">1</div>
                <CardTitle>Discovery & Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We analyze your current business processes, identify pain points, and define clear objectives for your ERP implementation.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 h-2 w-full bg-primary"></div>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary text-xl font-bold mb-4">2</div>
                <CardTitle>Design & Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We design and configure your ERP solution to match your specific business requirements and workflows.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 h-2 w-full bg-primary"></div>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary text-xl font-bold mb-4">3</div>
                <CardTitle>Implementation & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We deploy your ERP system, migrate data, and provide comprehensive training to ensure user adoption.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden md:col-span-3">
              <div className="absolute top-0 left-0 h-2 w-full bg-primary"></div>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary text-xl font-bold mb-4">4</div>
                <CardTitle>Support & Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide ongoing support, maintenance, and continuous optimization to ensure your ERP system evolves with your business needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Benefits of Our ERP Implementation</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how our ERP solutions can transform your business operations and drive growth.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Increased Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automate manual processes, eliminate redundancies, and streamline workflows to improve operational efficiency.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Real-time Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access real-time data and analytics to make informed decisions and respond quickly to market changes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Cost Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reduce operational costs through improved inventory management, optimized resource allocation, and eliminated waste.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Enhanced Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Break down silos between departments and facilitate seamless communication and collaboration across your organization.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Scalability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Implement a flexible ERP solution that can scale with your business and adapt to changing requirements.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Compliance & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ensure regulatory compliance and enhance data security with robust ERP systems and best practices.
                </p>
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
                src="https://www.matiyas.com/wp-content/uploads/2024/06/erp-implementation-1024x1024.png?height=550&width=550"
                width={550}
                height={550}
                alt="ERP Case Study"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Case Study
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Manufacturing ERP Success Story</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Learn how we helped a mid-sized manufacturer reduce operational costs by 30% through comprehensive ERP implementation.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Streamlined production planning and scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Improved inventory management and reduced carrying costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Enhanced quality control and reduced waste</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Integrated financial management and reporting</span>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Transform Your Business?</h2>
              <p className="max-w-[600px] md:text-xl/relaxed">
                Contact us today to schedule a free consultation and discover how our ERP solutions can help you achieve your goals.
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
