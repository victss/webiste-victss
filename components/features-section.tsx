import { CheckCircle2 } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Why Choose Us</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">India's Top Odoo Service Provider</h2>
            <p className="text-muted-foreground md:text-xl">
              With years of experience in Odoo implementation and customization, we've helped hundreds of businesses
              transform their operations and achieve their goals.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Odoo Certified Experts</h3>
                  <p className="text-sm text-muted-foreground">
                    Team of certified Odoo professionals with deep technical expertise
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Customized Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Tailored Odoo implementations aligned with your business processes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Round-the-clock technical assistance whenever you need it
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Rapid Implementation</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick deployment with minimal disruption to your business
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Cost-Effective</h3>
                  <p className="text-sm text-muted-foreground">Optimized IT spending with transparent pricing</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Industry Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    Specialized knowledge across multiple business sectors
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Odoo Implementation"
              className=" rounded-xl object-cover object-center"
              src="https://www.odoo.com/web/image/54404732-3d9bec26/SPI_homepage.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

