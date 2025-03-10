import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Award, TrendingUp, Clock, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">About Us</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                India's Leading Odoo Based Service Provider
              </h1>
              <p className="text-xl text-blue-100">
                VICTSS is a premier IT service provider specializing in ERP Odoo implementation, customization,
                and support. With years of experience and a team of experts, we help businesses transform
                their operations and achieve their goals.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="VICTSS Team"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                src="https://www.infinitivehost.com/blog/wp-content/uploads/2024/06/Getting-Started-with-Odoo-A-Beginners-Guide-1170x700.webp?height=400&width=600"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter">From Humble Beginnings to Industry Leaders</h2>
              <p className="text-muted-foreground md:text-lg">
                Founded in 2022, VICTSS began as a small team of passionate IT professionals with a vision
                to provide high-quality, affordable IT solutions to businesses of all sizes. Over the years, we've grown
                into a leading IT service provider with a focus on Odoo implementation and customization.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Our journey has been marked by continuous learning, innovation, and a commitment to excellence. Today,
                we're proud to be recognized as India's top Odoo service provider, helping businesses across various
                industries streamline their operations and achieve their goals.
              </p>
              <p className="text-muted-foreground md:text-lg">
                What sets us apart is our deep understanding of business processes, our technical expertise, and our
                customer-centric approach. We don't just implement software; we partner with our clients to understand
                their unique challenges and deliver solutions that drive real business value.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold">50+</h3>
                  <p className="text-muted-foreground">Team Members</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Award className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold">15+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold">500+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Globe className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-2xl font-bold">20+</h3>
                  <p className="text-muted-foreground">Countries Served</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter">What Drives Us</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-lg">
                Our core values guide everything we do, from how we develop solutions to how we interact with our
                clients.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from the solutions we develop to the service we provide.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in working closely with our clients, understanding their needs, and collaborating to
                  deliver the best solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously explore new technologies and approaches to deliver innovative solutions that drive
                  business growth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold">Reliability</h3>
                <p className="text-muted-foreground">
                  We deliver on our promises, meeting deadlines and providing reliable solutions that our clients can
                  depend on.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Quality</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards of quality in our work, ensuring that our solutions are robust,
                  secure, and efficient.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="text-muted-foreground">
                  We conduct our business with integrity, transparency, and honesty, building trust with our clients and
                  partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <img
                alt="Our Team"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-xl"
                src="https://www.businessalligators.com/wp-content/uploads/2019/08/IT-team-building.jpg?height=400&width=600"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter">Meet the Experts Behind Our Success</h2>
              <p className="text-muted-foreground md:text-lg">
                Our team consists of certified Odoo experts, experienced developers, project managers, and business
                analysts who are passionate about delivering exceptional IT solutions.
              </p>
              <p className="text-muted-foreground md:text-lg">
                With diverse skills and expertise, our team works collaboratively to understand your business challenges
                and develop tailored solutions that drive results. We're committed to continuous learning and staying
                updated with the latest technologies to provide you with cutting-edge solutions.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200">Odoo Certified Developers</Badge>
                <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-200">DevOps Engineers</Badge>
                <Badge className="bg-green-100 text-green-600 hover:bg-green-200">Web Developers</Badge>
                <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-200">Mobile App Developers</Badge>
                <Badge className="bg-red-100 text-red-600 hover:bg-red-200">UI/UX Designers</Badge>
                <Badge className="bg-indigo-100 text-indigo-600 hover:bg-indigo-200">Project Managers</Badge>
                <Badge className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200">Business Analysts</Badge>
              </div>
              <div className="mt-6">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Link href="/contact">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Ready to Transform Your Business?</h2>
          <p className="max-w-[800px] mx-auto text-xl text-blue-100 mb-8">
            Contact us today to discuss how our IT solutions can help your business grow, save costs, and improve
            efficiency.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

