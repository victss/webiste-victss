import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#0A0A1A] to-[#151530] text-white relative overflow-hidden">
      {/* Subtle Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/10 to-purple-700/10 blur-3xl opacity-30 pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#A3A8FF]">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto max-w-[700px] text-white/80 md:text-lg">
              Let's discuss how our Odoo solutions and IT services can help your business grow, save costs, and improve
              efficiency.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-[#5D5FEF] hover:bg-[#6D6FFF] text-white font-semibold shadow-lg transition-all duration-300 ease-in-out hover:shadow-blue-500/50"
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-white/20 text-white bg-transparent hover:bg-white/10 transition-all duration-300 ease-in-out"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
