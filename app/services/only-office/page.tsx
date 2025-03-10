import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "OnlyOffice Implementation | TechSolutions",
  description: "As an authorized OnlyOffice partner, we provide expert implementation, customization, and support services to help you leverage the full power of OnlyOffice.",
}

export default function OnlyOfficeImplementationPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  OnlyOffice Partner
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Expert OnlyOffice Implementation
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  As an authorized OnlyOffice partner, we provide end-to-end implementation, customization, and support services to help you unlock the full potential of OnlyOffice for seamless document collaboration.
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
                  <Link href="#features">Explore Features</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://static-www.onlyoffice.com/v9.5.0/images/solutions/for-developers/seafile.png"
                width={550}
                height={550}
                alt="OnlyOffice Implementation"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features of OnlyOffice</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                OnlyOffice offers a comprehensive suite of tools for document management, collaboration, and productivity.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Document Editing</CardTitle>
                <CardDescription>
                  Create and edit documents, spreadsheets, and presentations in real-time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Word processing</li>
                  <li>• Spreadsheet editing</li>
                  <li>• Presentation creation</li>
                  <li>• PDF editing</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Real-Time Collaboration</CardTitle>
                <CardDescription>
                  Collaborate with your team in real-time with co-editing and commenting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Co-editing</li>
                  <li>• Version history</li>
                  <li>• Comments and mentions</li>
                  <li>• Track changes</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Cloud Integration</CardTitle>
                <CardDescription>
                  Seamlessly integrate with popular cloud platforms like Nextcloud, SharePoint, and more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Nextcloud</li>
                  <li>• SharePoint</li>
                  <li>• Seafile</li>
                  <li>• OwnCloud</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Security & Compliance</CardTitle>
                <CardDescription>
                  Ensure your data is secure with advanced encryption and compliance features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• End-to-end encryption</li>
                  <li>• GDPR compliance</li>
                  <li>• Access control</li>
                  <li>• Audit logs</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Customization</CardTitle>
                <CardDescription>
                  Tailor OnlyOffice to meet your specific business needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom branding</li>
                  <li>• API integrations</li>
                  <li>• Plugin development</li>
                  <li>• Workflow automation</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Mobile Access</CardTitle>
                <CardDescription>
                  Access and edit documents on the go with mobile apps.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• iOS and Android apps</li>
                  <li>• Offline editing</li>
                  <li>• Sync with cloud storage</li>
                  <li>• Mobile collaboration</li>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our OnlyOffice Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                As an authorized OnlyOffice partner, we provide end-to-end services to ensure a seamless implementation and ongoing success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>OnlyOffice Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We handle the entire implementation process, from initial setup to deployment, ensuring a smooth transition to OnlyOffice.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• System configuration</li>
                  <li>• Data migration</li>
                  <li>• User training</li>
                  <li>• Integration with existing systems</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>OnlyOffice Customization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We customize OnlyOffice to match your specific business requirements, including branding, workflows, and integrations.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom branding</li>
                  <li>• API integrations</li>
                  <li>• Plugin development</li>
                  <li>• Workflow automation</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>OnlyOffice Hosting & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We provide secure and reliable hosting solutions for OnlyOffice, along with ongoing maintenance and support.
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
                <CardTitle>OnlyOffice Training & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We provide comprehensive training and 24/7 support to ensure your team can effectively use OnlyOffice.
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
                src="https://www.onlyoffice.com/images/solutions/for-developers/add_your_service.svg"
                width={550}
                height={550}
                alt="OnlyOffice Case Study"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Case Study
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">OnlyOffice for Education</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Learn how we implemented OnlyOffice for a university, enabling seamless collaboration among students and faculty.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Centralized document management</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Real-time collaboration for research teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Secure access control for sensitive data</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Integration with existing LMS</span>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Transform Your Document Collaboration?</h2>
              <p className="max-w-[600px] md:text-xl/relaxed">
                Contact us today to schedule a free consultation and discover how OnlyOffice can revolutionize your workflow.
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