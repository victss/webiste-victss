import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Database, Code, Server } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Comprehensive IT solutions tailored to your business needs with specialized expertise in Odoo
            implementation.
          </p>
        </div>
      </div>

      <Tabs defaultValue="odoo" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
          <TabsTrigger value="odoo">Odoo Services</TabsTrigger>
          <TabsTrigger value="devops">DevOps</TabsTrigger>
          <TabsTrigger value="web">Web Applications</TabsTrigger>
          <TabsTrigger value="erp">ERP Deployment</TabsTrigger>
          <TabsTrigger value="consulting">IT Consulting</TabsTrigger>
          <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
        </TabsList>

        <TabsContent value="odoo" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Odoo Implementation & Customization</h2>
              <p className="text-muted-foreground mb-6">
                As India's top Odoo service provider, we offer comprehensive implementation, customization, and support
                services to help businesses leverage the full power of Odoo.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Complete Odoo implementation from planning to deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Custom module development to meet specific business requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Integration with third-party applications and systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Data migration from legacy systems to Odoo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Comprehensive training and ongoing support</span>
                </li>
              </ul>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Get Started with Odoo</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Odoo Implementation"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Odoo Implementation</CardTitle>
                <CardDescription>End-to-end Odoo setup and deployment</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We handle everything from requirements analysis and system design to configuration, testing, and
                  deployment, ensuring a smooth transition to Odoo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Custom Development</CardTitle>
                <CardDescription>Tailored Odoo modules and features</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our developers create custom Odoo modules and features that address your specific business
                  requirements, extending Odoo's functionality to match your workflows.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Server className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Odoo Support</CardTitle>
                <CardDescription>Ongoing maintenance and assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We provide comprehensive support services, including bug fixes, performance optimization, security
                  updates, and user assistance to keep your Odoo system running smoothly.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="devops" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">DevOps Services</h2>
              <p className="text-muted-foreground mb-6">
                Our DevOps services help organizations streamline their development and operations processes, enabling
                faster delivery of high-quality software.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>CI/CD pipeline implementation and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Infrastructure as code with Terraform, Ansible, and more</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Container orchestration with Kubernetes and Docker</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Monitoring, logging, and alerting solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>DevSecOps implementation for secure development</span>
                </li>
              </ul>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Explore DevOps Solutions</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img src="/placeholder.svg?height=400&width=500" alt="DevOps Services" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="web" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Web Application Development</h2>
              <p className="text-muted-foreground mb-6">
                We build custom web applications that help businesses streamline operations, improve customer
                experiences, and drive growth.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Responsive web applications that work on all devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Progressive Web Apps (PWAs) for enhanced user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>E-commerce solutions with secure payment integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Custom web portals for customers, partners, and employees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>API development and integration services</span>
                </li>
              </ul>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Start Your Web Project</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Web Application Development"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="erp" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">ERP Deployment Services</h2>
              <p className="text-muted-foreground mb-6">
                Our ERP deployment services help businesses implement robust enterprise resource planning solutions that
                integrate all aspects of operations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Business process analysis and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>ERP system selection and planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Implementation and configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Data migration from legacy systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>User training and change management</span>
                </li>
              </ul>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Transform Your Business</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img src="/placeholder.svg?height=400&width=500" alt="ERP Deployment" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="consulting" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">IT Consulting Services</h2>
              <p className="text-muted-foreground mb-6">
                Our IT consulting services provide strategic guidance to help businesses leverage technology for growth
                and competitive advantage.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>IT strategy development and roadmapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Digital transformation planning and execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Technology assessment and recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>IT governance and compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Cost optimization and efficiency improvements</span>
                </li>
              </ul>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Get Expert Guidance</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img src="/placeholder.svg?height=400&width=500" alt="IT Consulting" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="mobile" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Mobile Application Development</h2>
              <p className="text-muted-foreground mb-6">
                We develop high-performance, user-friendly mobile applications for iOS and Android platforms that help
                businesses engage customers and streamline operations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Native iOS and Android app development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Cross-platform development with React Native and Flutter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Mobile app UI/UX design and prototyping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>App store optimization and deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Mobile app maintenance and support</span>
                </li>
              </ul>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Build Your Mobile App</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Mobile App Development"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-24 text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground mb-8">
          Contact us today to discuss how our IT solutions can help your business grow, save costs, and improve
          efficiency.
        </p>
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </div>
    </div>
  )
}

