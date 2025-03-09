import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Business?</h2>
            <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed">
              Let's discuss how our Odoo solutions and IT services can help your business grow, save costs, and improve
              efficiency.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white/20 hover:bg-white/10"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

