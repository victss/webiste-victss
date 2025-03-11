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
        scrollAmount = 0;
      } else {
        scrollAmount += 1;
      }
      testimonialsContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
    };

    const interval = setInterval(autoScroll, 30);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Anil Verma",
      position: "CTO, TechNova Solutions",
      feedback:
        "VICTSS provided us with a customized ERP solution that perfectly fits our business operations. Their team’s attention to detail and technical expertise streamlined our workflow and boosted productivity by 50%.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Sonia Sharma",
      position: "Operations Head, RetailX",
      feedback:
        "Our mobile app developed by VICTSS has transformed our customer experience. The app is fast, intuitive, and feature-rich. Their team was always responsive and delivered on time.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Vikram Desai",
      position: "CEO, FinEdge Corp",
      feedback:
        "We needed a robust ERP solution, and VICTSS delivered beyond expectations. The seamless integration with our existing systems and the automation features saved us countless hours of manual work.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Meera Joshi",
      position: "Founder, EduTech Innovations",
      feedback:
        "VICTSS helped us launch an education app with real-time collaboration features. Their team’s expertise in product development and mobile solutions gave our startup a competitive edge.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Rajat Malhotra",
      position: "COO, LogiSync Pvt Ltd",
      feedback:
        "The ERP customization by VICTSS revolutionized our supply chain management. Their team understood our pain points and built features that significantly improved our logistics tracking and efficiency.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-sans text-white">
              What Our Clients <span className="text-blue-500">Say</span>
            </h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans">
              Don't just take our word for it. Here's what our clients have to say about our ERP and mobile solutions.
            </p>
          </div>
        </div>
        <div ref={testimonialsRef} className="mx-auto mt-8 md:mt-12 flex overflow-x-hidden gap-6 scroll-smooth">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="min-w-[300px] md:min-w-[400px] bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 overflow-hidden group hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 ease-in-out hover:-translate-y-2"
            >
              <CardContent className="p-6 flex flex-col space-y-4">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300">"{testimonial.feedback}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 ease-in-out">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-200 group-hover:text-blue-400 transition-colors duration-300 ease-in-out">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400">{testimonial.position}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
