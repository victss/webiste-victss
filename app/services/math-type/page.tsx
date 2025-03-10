import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "MathType Implementation | TechSolutions",
  description: "Enhance your document creation with MathType, the leading equation editor. We provide expert implementation, customization, and support services.",
}

export default function MathTypeImplementationPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  MathType Solutions
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Expert MathType Implementation
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Enhance your document creation with MathType, the leading equation editor. We provide expert implementation, customization, and support services to help you integrate MathType seamlessly into your workflow.
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
                src="https://www.wiris.com/wp-content/uploads/2024/02/smooth-integration-platforms-03.svg"
                width={550}
                height={550}
                alt="MathType Implementation"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features of MathType</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                MathType offers a comprehensive suite of tools for creating and editing mathematical equations with ease.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Equation Editing</CardTitle>
                <CardDescription>
                  Create and edit complex mathematical equations effortlessly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Intuitive equation editor</li>
                  <li>• Handwriting recognition</li>
                  <li>• LaTeX support</li>
                  <li>• Symbol palettes</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Integration</CardTitle>
                <CardDescription>
                  Seamlessly integrate MathType with popular platforms and tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Microsoft Word</li>
                  <li>• Google Docs</li>
                  <li>• Learning Management Systems</li>
                  <li>• Content Management Systems</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Accessibility</CardTitle>
                <CardDescription>
                  Make equations accessible to all users with MathML and screen reader support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• MathML support</li>
                  <li>• Screen reader compatibility</li>
                  <li>• High-contrast mode</li>
                  <li>• Keyboard shortcuts</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Customization</CardTitle>
                <CardDescription>
                  Tailor MathType to meet your specific needs and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom styles</li>
                  <li>• User-defined shortcuts</li>
                  <li>• Font and color options</li>
                  <li>• Template creation</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Collaboration</CardTitle>
                <CardDescription>
                  Collaborate on equations with your team in real-time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Real-time co-editing</li>
                  <li>• Version history</li>
                  <li>• Comments and feedback</li>
                  <li>• Cloud storage integration</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Cross-Platform Support</CardTitle>
                <CardDescription>
                  Use MathType on multiple platforms and devices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Windows and macOS</li>
                  <li>• iOS and Android</li>
                  <li>• Web-based editor</li>
                  <li>• Offline mode</li>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our MathType Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide end-to-end MathType services to ensure seamless integration and ongoing success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>MathType Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We handle the entire implementation process, from initial setup to deployment, ensuring a smooth transition to MathType.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• System configuration</li>
                  <li>• Integration with existing tools</li>
                  <li>• User training</li>
                  <li>• Data migration</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>MathType Customization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We customize MathType to match your specific requirements, including styles, shortcuts, and templates.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom styles and fonts</li>
                  <li>• User-defined shortcuts</li>
                  <li>• Template creation</li>
                  <li>• Workflow automation</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>MathType Training & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We provide comprehensive training and 24/7 support to ensure your team can effectively use MathType.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• User training programs</li>
                  <li>• Administrator training</li>
                  <li>• 24/7 technical support</li>
                  <li>• Documentation and resources</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <CardTitle>MathType Hosting & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We provide secure and reliable hosting solutions for MathType, along with ongoing maintenance and updates.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cloud or on-premise hosting</li>
                  <li>• Regular backups</li>
                  <li>• Security updates</li>
                  <li>• Performance optimization</li>
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
                src="https://www.wiris.com/wp-content/uploads/2021/01/il.lustracions-cover-office-tools_page-img-mathtype-office-tools-copia-2.png"
                width={550}
                height={550}
                alt="MathType Case Study"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Case Study
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">MathType for Education</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Learn how we implemented MathType for a university, enabling seamless equation creation and collaboration for students and faculty.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Integration with LMS and Microsoft Word</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Custom templates for academic use</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Accessibility features for visually impaired users</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Training programs for faculty and students</span>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Enhance Your Equation Creation?</h2>
              <p className="max-w-[600px] md:text-xl/relaxed">
                Contact us today to schedule a free consultation and discover how MathType can revolutionize your workflow.
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