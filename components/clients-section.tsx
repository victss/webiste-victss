import { Card, CardContent } from "@/components/ui/card";

export function ClientsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container px-4 md:px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-sans text-white">
              Our <span className="text-blue-500">Trusted</span>{" "}
              <span className="text-purple-400">Partners</span>
            </h2>
          </div>
        </div>

        {/* Auto-Scrolling Logos Container */}
        <div className="relative overflow-hidden py-12 mt-8">
          {/* Gradient Overlay for Scrollable Effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>

          {/* Auto-Scrolling Logos */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll space-x-6">
              {[
                { id: 1, logo: 'https://www.drupal.org/files/project-images/Logo%20ONLYOFFICE.png', alt: 'Client 1' },
                { id: 2, logo: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png', alt: 'Client 2' },
                { id: 3, logo: 'https://www.adobe.com/cc-shared/assets/img/social-media-logos/creativecloud-social.jpg', alt: 'Client 3' },
                { id: 4, logo: 'math.png', alt: 'Client 4' },
                { id: 5, logo: 'smart.png', alt: 'Client 5' },
                { id: 6, logo: 'asld.png', alt: 'Client 6' },
                { id: 7, logo: 'https://pngimg.com/d/microsoft_PNG6.png', alt: 'Client 7' },
              ].map((client) => (
                <ClientCard key={client.id} logo={client.logo} alt={client.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Auto-Scroll Animation */}
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

function ClientCard({ logo, alt }: { logo: string; alt: string }) {
  return (
    <Card className="bg-transparent border-0 shadow-none group">
      <CardContent className="p-8 flex flex-col items-center text-center space-y-2">
        <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ease-in-out">
          <img src={logo} alt={alt} className="h-12 object-contain transition-all" />
        </div>
      </CardContent>
    </Card>
  );
}
