"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

export function TestimonialsSection() {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const testimonialsContainer = testimonialsRef.current;
    if (!testimonialsContainer) return;

    const scrollWidth = testimonialsContainer.scrollWidth;
    const clientWidth = testimonialsContainer.clientWidth;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (scrollAmount >= scrollWidth - clientWidth) {
        scrollAmount = 0; // Reset to start
      } else {
        scrollAmount += 1; // Increment scroll
      }
      testimonialsContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
    };

    const interval = setInterval(autoScroll, 30); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to say about our IT services.
            </p>
          </div>
        </div>
        <div
          ref={testimonialsRef}
          className="mx-auto mt-8 md:mt-12 flex overflow-x-hidden gap-6 scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {[...Array(3)].map((_, index) => (
            <Card
              key={index}
              className="min-w-[300px] md:min-w-[400px] border-0 bg-white/90 backdrop-blur-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">
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
                    <p className="text-sm font-medium text-gray-900">Rajesh Kumar</p>
                    <p className="text-xs text-gray-500">CEO, Global Logistics Ltd.</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}