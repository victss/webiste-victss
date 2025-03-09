import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, BarChart, Headphones, Cloud } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Services</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our IT Solutions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a comprehensive range of IT services with specialized expertise in Odoo implementation.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
          <Card>
            <CardHeader className="pb-2">
              <Database className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>Odoo Services</CardTitle>
              <CardDescription>Complete Odoo implementation, customization, and support services.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Odoo implementation & migration</li>
                <li>Custom module development</li>
                <li>Integration with third-party apps</li>
                <li>Odoo training & support</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Cloud className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>DevOps</CardTitle>
              <CardDescription>Streamline your development and operations with our DevOps expertise.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>CI/CD pipeline implementation</li>
                <li>Infrastructure as code</li>
                <li>Container orchestration</li>
                <li>Monitoring & logging</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Code className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>Web Application</CardTitle>
              <CardDescription>
                Custom web applications tailored to your specific business requirements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Responsive web design</li>
                <li>Progressive web apps</li>
                <li>E-commerce solutions</li>
                <li>Web portal development</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Database className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>ERP Deployment</CardTitle>
              <CardDescription>End-to-end ERP implementation and customization services.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Business process analysis</li>
                <li>ERP system selection</li>
                <li>Implementation & configuration</li>
                <li>Data migration & training</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <BarChart className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>IT Consulting</CardTitle>
              <CardDescription>Strategic IT guidance to help your business achieve its goals.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>IT strategy development</li>
                <li>Digital transformation</li>
                <li>Technology roadmapping</li>
                <li>IT governance</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Headphones className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>Mobile Application</CardTitle>
              <CardDescription>Native and cross-platform mobile app development.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>iOS & Android development</li>
                <li>React Native & Flutter</li>
                <li>App store optimization</li>
                <li>Mobile app maintenance</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

