import Image from "next/image";

export function OurClientsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container px-4 md:px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Our <span className="text-blue-500">Clients</span>
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are proud to have worked with some of the most innovative and forward-thinking organizations.
            </p>
          </div>
        </div>

        {/* Auto-Scrolling Logos */}
        <div className="relative overflow-hidden py-12 mt-8">
          {/* Gradient Overlay for Smooth Scroll Effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>

          <div className="animate-scroll whitespace-nowrap flex space-x-8">
            {[
              "https://cdac.in/img/cdac-logo-sm.png",
              "https://engagenreap.com/wp-content/uploads/2024/02/Group-273-1.png",
              "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Cochin_Shipyard_SVG_Logo.svg/640px-Cochin_Shipyard_SVG_Logo.svg.png",
              "https://prasarbharati.gov.in/wp-content/uploads/2024/03/Logo.png",
              "https://cmti.res.in/wp-content/themes/institute/assets/images/logo.png",
              "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/NITK_Emblem.png/220px-NITK_Emblem.png",
              "drdo.png",
              "bp.png",
              "rail.png",
              "https://ntpc.co.in/themes/ntpc/images/logo.png",
            ].map((src, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
                  <Image
                    src={src}
                    width={100}
                    height={100}
                    alt={`Client ${index + 1}`}
                    className="h-16 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Auto-Scroll Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
            display: flex;
          }
        `}
      </style>
    </section>
  );
}
