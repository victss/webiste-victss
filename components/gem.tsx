import { Star } from "lucide-react";
import Image from "next/image"

export function GemPromotion() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section: Promotional Text */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter font-sans text-white">
              We are also available on <span className="text-blue-500">GeM</span> as{" "}
              <span className="text-purple-400">Verma ICT & Software Solutions - VICTSS</span>
            </h2>
            <p className="text-gray-300 font-sans">
              <span className="font-bold">GeM SELLER ID:</span> 24CL220005635424
            </p>
          </div>

          {/* Right Section: GeM Branding */}
          <div className="flex flex-col items-center space-y-4">
             <Image 
                            src="/gem.png" 
                            alt="Logo" 
                            width={300} 
                            height={300} 
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
            {/* GeM Logo */}
            {/* <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                <Star className="h-10 w-10" />
              </div>
              <span className="text-4xl font-bold text-white">GeM</span>
            </div> */}
            {/* Tagline */}
            {/* <p className="text-gray-300 italic text-lg">Government e Marketplace</p> */}
            {/* Additional Text */}
            {/* <p className="text-white font-bold text-xl">Procurement Reimagined</p> */}
            {/* Three Words with Colored Dots */}
            {/* <div className="flex items-center space-x-2 text-gray-300">
              <span>Efficient</span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>Transparent</span>
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span>Inclusive</span>
              <div className="w-4 h-1 bg-blue-500 ml-2"></div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}