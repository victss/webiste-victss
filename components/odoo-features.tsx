import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BarChart, Clock, Users, Settings, Shield } from "lucide-react";

export function OdooFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 text-sm text-white shadow-sm">
            Odoo Expertise
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-sans bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Odoo for Your Business
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans">
            Discover how Odoo's all-in-one business management software can transform your operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<CheckCircle className="h-8 w-8 text-white" />}
            title="All-in-One Solution"
            description="Integrate all your business processes in a single platform"
            content="Odoo offers a complete suite of business applications that work seamlessly together, eliminating the need for multiple software solutions and reducing integration headaches."
          />
          <FeatureCard
            icon={<BarChart className="h-8 w-8 text-white" />}
            title="Scalable Architecture"
            description="Grow your business without outgrowing your software"
            content="Whether you're a startup or an enterprise, Odoo scales with your business. Start with the modules you need now and add more as your business grows."
          />
          <FeatureCard
            icon={<Clock className="h-8 w-8 text-white" />}
            title="Rapid Implementation"
            description="Get up and running quickly with minimal disruption"
            content="Our experienced team can implement Odoo in a fraction of the time compared to traditional ERP systems, allowing you to see ROI faster."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-white" />}
            title="User-Friendly Interface"
            description="Intuitive design that requires minimal training"
            content="Odoo's modern, user-friendly interface makes it easy for your team to adopt and use effectively, reducing training time and increasing productivity."
          />
          <FeatureCard
            icon={<Settings className="h-8 w-8 text-white" />}
            title="Highly Customizable"
            description="Tailor Odoo to fit your unique business processes"
            content="Our developers can customize Odoo to match your specific business requirements, ensuring the software works the way your business does."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-white" />}
            title="Cost-Effective"
            description="Lower total cost of ownership compared to traditional ERPs"
            content="With no expensive licensing fees and efficient implementation, Odoo offers a significantly lower total cost of ownership compared to traditional ERP systems."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string;
}) {
  return (
    <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 group overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 ease-in-out">
          {icon}
        </div>
        <CardTitle className="text-white font-sans font-bold text-xl mt-4">{title}</CardTitle>
        <CardDescription className="text-white/80 font-sans">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground font-sans">{content}</p>
      </CardContent>
    </Card>
  );
}