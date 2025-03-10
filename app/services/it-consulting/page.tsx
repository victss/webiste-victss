import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "IT Consulting & Product Services | TechSolutions",
  description: "We provide expert IT consulting, product-related services, and participate in tenders through GEM to deliver innovative solutions for your business.",
}

export default function ITConsultingPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  IT Consulting & Product Services
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Expert IT Consulting & Product Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  We provide end-to-end IT consulting, product-related services, and participate in tenders through GEM to deliver innovative and scalable solutions for your business.
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
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://www.zensoftwaresolutions.com/web/image/product.template/8/image_1024?unique=27211b9/550x550"
                width={550}
                height={550}
                alt="IT Consulting & Product Services"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our IT Consulting & Product Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a wide range of IT consulting and product-related services to help businesses achieve their goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>IT Strategy Consulting</CardTitle>
                <CardDescription>
                  Develop a robust IT strategy aligned with your business objectives.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• IT roadmap development</li>
                  <li>• Digital transformation</li>
                  <li>• Technology assessment</li>
                  <li>• Risk management</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Product Development</CardTitle>
                <CardDescription>
                  Build innovative and scalable products tailored to your needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom software development</li>
                  <li>• MVP development</li>
                  <li>• UI/UX design</li>
                  <li>• Product lifecycle management</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Cloud Solutions</CardTitle>
                <CardDescription>
                  Migrate to the cloud and optimize your infrastructure for scalability.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cloud migration</li>
                  <li>• Cloud-native development</li>
                  <li>• DevOps implementation</li>
                  <li>• Cost optimization</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Cybersecurity</CardTitle>
                <CardDescription>
                  Protect your business from cyber threats with advanced security solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Vulnerability assessment</li>
                  <li>• Penetration testing</li>
                  <li>• Security audits</li>
                  <li>• Incident response</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Data Analytics</CardTitle>
                <CardDescription>
                  Leverage data to make informed business decisions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Business intelligence</li>
                  <li>• Data visualization</li>
                  <li>• Predictive analytics</li>
                  <li>• Big data solutions</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>GEM Tender Participation</CardTitle>
                <CardDescription>
                  We actively participate in tenders through GEM to deliver government projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Tender documentation</li>
                  <li>• Bid submission</li>
                  <li>• Project execution</li>
                  <li>• Compliance management</li>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Expertise in Action</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We have successfully delivered IT consulting and product-related services across various industries.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="https://www.comarch.com/files-com/file_828/cloud_in_reatailv2.png"
                width={400}
                height={300}
                alt="Cloud Migration for a Retail Chain"
                className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Cloud Migration for a Retail Chain</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABNrYfL6WqxuqJgxqkHwVSUz3_M4LtGCYo7c-0xZWJd9e2sIdmULuGFYPkGebau67abI&usqp=CAU"
                width={400}
                height={300}
                alt="Cybersecurity for a Financial Institution"
                className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Cybersecurity for a Financial Institution</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="https://www.compresently.com/_next/static/media/strategy.d96d10c0.webp"
                width={400}
                height={300}
                alt="GEM Tender for a Government Project"
                className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">GEM Tender for a Government Project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5B7hyxa7ywgMzCf2OkfIRpIcvonh085v3TKx-5qNLtIGVOvMnA4l3h4YAK3XxCXxR1UY&usqp=CAU"
                width={550}
                height={550}
                alt="IT Consulting Case Study"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Case Study
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">IT Consulting for a Manufacturing Firm</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Learn how we helped a manufacturing firm streamline their operations with custom IT solutions.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Custom ERP implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Supply chain automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Data analytics for decision-making</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>24/7 support and maintenance</span>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Transform Your IT Infrastructure?</h2>
              <p className="max-w-[600px] md:text-xl/relaxed">
                Contact us today to schedule a free consultation and discover how our IT consulting and product services can help your business grow.
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