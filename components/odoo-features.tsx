import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BarChart, Clock, Users, Settings, Shield } from "lucide-react"

export function OdooFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Odoo Expertise</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Odoo for Your Business</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how Odoo's all-in-one business management software can transform your operations
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CheckCircle className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>All-in-One Solution</CardTitle>
              <CardDescription>Integrate all your business processes in a single platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Odoo offers a complete suite of business applications that work seamlessly together, eliminating the
                need for multiple software solutions and reducing integration headaches.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BarChart className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Scalable Architecture</CardTitle>
              <CardDescription>Grow your business without outgrowing your software</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Whether you're a startup or an enterprise, Odoo scales with your business. Start with the modules you
                need now and add more as your business grows.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Rapid Implementation</CardTitle>
              <CardDescription>Get up and running quickly with minimal disruption</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our experienced team can implement Odoo in a fraction of the time compared to traditional ERP systems,
                allowing you to see ROI faster.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>User-Friendly Interface</CardTitle>
              <CardDescription>Intuitive design that requires minimal training</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Odoo's modern, user-friendly interface makes it easy for your team to adopt and use effectively,
                reducing training time and increasing productivity.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Settings className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Highly Customizable</CardTitle>
              <CardDescription>Tailor Odoo to fit your unique business processes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our developers can customize Odoo to match your specific business requirements, ensuring the software
                works the way your business does.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Cost-Effective</CardTitle>
              <CardDescription>Lower total cost of ownership compared to traditional ERPs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                With no expensive licensing fees and efficient implementation, Odoo offers a significantly lower total
                cost of ownership compared to traditional ERP systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

