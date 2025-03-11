import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BarChart, Clock, Users, Settings, Shield } from "lucide-react";

export function OdooFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 text-sm text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            Odoo Expertise
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-sans text-white">
            Why Choose <span className="text-blue-500">Odoo</span> for Your <span className="text-purple-400">Business</span>
          </h2>
          <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans">
            Discover how Odoo's all-in-one business management software can transform your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<CheckCircle className="h-10 w-10" />}
            title="All-in-One Solution"
            description="Integrate all your business processes in a single platform"
          />
          <FeatureCard
            icon={<BarChart className="h-10 w-10" />}
            title="Scalable Architecture"
            description="Grow your business without outgrowing your software"
          />
          <FeatureCard
            icon={<Clock className="h-10 w-10" />}
            title="Rapid Implementation"
            description="Get up and running quickly with minimal disruption"
          />
          <FeatureCard
            icon={<Users className="h-10 w-10" />}
            title="User-Friendly Interface"
            description="Intuitive design that requires minimal training"
          />
          <FeatureCard
            icon={<Settings className="h-10 w-10" />}
            title="Highly Customizable"
            description="Tailor Odoo to fit your unique business processes"
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10" />}
            title="Cost-Effective"
            description="Lower total cost of ownership compared to traditional ERPs"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 overflow-hidden group hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 ease-in-out hover:-translate-y-2">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 ease-in-out">
          {icon}
        </div>
        <h3 className="font-medium text-sm md:text-base font-sans text-gray-200 group-hover:text-blue-400 transition-colors duration-300 ease-in-out">
          {title}
        </h3>
        <p className="text-gray-400 text-sm text-center">{description}</p>
      </CardContent>
    </Card>
  );
}
