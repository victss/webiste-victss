import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CheckCircle, ArrowRight, Code, Globe, Smartphone, Zap } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Web Development Services | TechSolutions",
  description: "Custom web application development services tailored to your business needs. Responsive design, modern frameworks, and seamless user experiences.",
}

export default function WebDevelopmentPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Web Services
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Custom Web Development Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Create powerful, responsive, and user-friendly web applications tailored to your specific business needs.
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
                  <Link href="#technologies">Explore Technologies</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Web Development"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Web Development Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a comprehensive range of web development services to help you build a strong online presence.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Responsive Website Development</CardTitle>
                <CardDescription>
                  Create beautiful, mobile-friendly websites that look great on any device
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Modern, responsive design</li>
                  <li>• SEO optimization</li>
                  <li>• Content management systems</li>
                  <li>• Performance optimization</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Code className="h-10 w-10 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Web Application Development</CardTitle>
                <CardDescription>
                  Build powerful, custom web applications tailored to your business needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom functionality</li>
                  <li>• User authentication and authorization</li>
                  <li>• Database design and integration</li>
                  <li>• API development and integration</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Smartphone className="h-10 w-10 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Progressive Web Apps (PWAs)</CardTitle>
                <CardDescription>
                  Create web applications that offer a native app-like experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Offline functionality</li>
                  <li>• Push notifications</li>
                  <li>• Home screen installation</li>
                  <li>• Fast loading and performance</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>E-Commerce Development</CardTitle>
                <CardDescription>
                  Build powerful online stores with seamless shopping experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom e-commerce solutions</li>
                  <li>• Payment gateway integration</li>
                  <li>• Inventory management</li>
                  <li>• Order processing and fulfillment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="technologies" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technologies We Use</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We leverage the latest technologies and frameworks to build modern, scalable web applications.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React.js</li>
                  <li>• Next.js</li>
                  <li>• Vue.js</li>
                  <li>• Angular</li>
                  <li>• Tailwind CSS</li>
                  <li>• TypeScript</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Node.js</li>
                  <li>• Python (Django, Flask)</li>
                  <li>• PHP (Laravel)</li>
                  <li>• Java (Spring)</li>
                  <li>• .NET Core</li>
                  <li>• GraphQL</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Database & Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• MongoDB</li>
                  <li>• PostgreSQL</li>
                  <li>• MySQL</li>
                  <li>• AWS</li>
                  <li>• Azure</li>
                  <li>• Docker & Kubernetes</li>
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
                alt="Web Development Process"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Web Development Process</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  We follow a structured approach to ensure successful web development projects.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">1</div>
                  <div>
                    <h3 className="font-bold">Discovery & Planning</h3>
                    <p className="text-muted-foreground">We analyze your requirements, define project scope, and create a detailed roadmap.</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">2</div>
                  <div>
                    <h3 className="font-bold">Design & Prototyping</h3>
                    <p className="text-muted-foreground">We create wireframes and design mockups to visualize the user interface and experience.</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">3</div>
                  <div>
                    <h3 className="font-bold">Development</h3>
                    <p className="text-muted-foreground">Our developers build the application using the latest technologies and best practices.</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">4</div>
                  <div>
                    <h3 className="font-bold">Testing & QA</h3>
                    <p className="text-muted-foreground">We thoroughly test the application to ensure it meets quality standards and requirements.</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">5</div>
                  <div>
                    <h3 className="font-bold">Deployment & Support</h3>
                    <p className="text-muted-foreground">We deploy the application and provide ongoing maintenance and support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Build Your Web Application?</h2>
              <p className="max-w-[600px] md:text-xl/relaxed">
                Contact us today to schedule a free consultation and discover how our web development services can help you achieve your goals.
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
