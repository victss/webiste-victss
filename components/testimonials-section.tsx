import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to say about our IT services.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
          <Card className="border-0 bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <p className="text-muted-foreground">
                "Loyal IT Solutions transformed our business with their Odoo implementation. Their team's expertise
                helped us streamline our operations and increase efficiency by 40%. The custom modules they developed
                perfectly fit our unique business needs."
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Rajesh Kumar</p>
                  <p className="text-xs text-muted-foreground">CEO, Global Logistics Ltd.</p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="border-0 bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <p className="text-muted-foreground">
                "The DevOps team at Loyal IT Solutions is exceptional. They modernized our deployment pipeline, reducing
                our release cycle from weeks to days. Their continuous support and proactive approach to problem-solving
                have made them an invaluable partner."
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Priya Sharma</p>
                  <p className="text-xs text-muted-foreground">CTO, TechStart India</p>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="border-0 bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <p className="text-muted-foreground">
                "Their custom web application development team delivered our project on time and within budget. The
                application has streamlined our operations and improved customer satisfaction. Loyal IT Solutions truly
                understands our business needs."
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>RJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Amit Patel</p>
                  <p className="text-xs text-muted-foreground">Operations Director, Hospitality Group</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

