export function ClientsSection() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-medium tracking-tight text-gray-500">
              Our Trusted Partner
            </h2>
          </div>
        </div>

        {/* Auto-Scrolling Logos Container */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient Overlay for Scrollable Effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Auto-Scrolling Logos */}
          <div className="flex overflow-hidden">
            {/* First Set of Logos */}
            <div className="flex animate-scroll">
              {[
                { id: 1, logo: 'https://www.drupal.org/files/project-images/Logo%20ONLYOFFICE.png', alt: 'Client 1' },
                { id: 2, logo: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png', alt: 'Client 2' },
                { id: 3, logo: 'https://www.adobe.com/cc-shared/assets/img/social-media-logos/creativecloud-social.jpg', alt: 'Client 3' },
                { id: 4, logo: 'math.png', alt: 'Client 4' },
                { id: 5, logo: 'smart.png', alt: 'Client 5' },
                { id: 6, logo: 'asld.png', alt: 'Client 6' },
                { id: 7, logo: 'https://pngimg.com/d/microsoft_PNG6.png', alt: 'Client 7' },
              ].map((client) => (
                <div
                  key={client.id}
                  className="flex-shrink-0 flex justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-6 mx-8"
                >
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="h-16 object-contain opacity-70 hover:opacity-100 transition-all shadow-md hover:shadow-lg"
                  />
                </div>
              ))}
            </div>

            {/* Second Set of Logos (Duplicated for Infinite Scroll) */}
            {/* <div className="flex animate-scroll">
              {[
                { id: 1, logo: 'https://www.drupal.org/files/project-images/Logo%20ONLYOFFICE.png', alt: 'Client 1' },
                { id: 2, logo: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png', alt: 'Client 2' },
                { id: 3, logo: 'https://www.adobe.com/cc-shared/assets/img/social-media-logos/creativecloud-social.jpg', alt: 'Client 3' },
                { id: 4, logo: 'math.png', alt: 'Client 4' },
                { id: 5, logo: 'smart.png', alt: 'Client 5' },
                { id: 6, logo: 'asld.png', alt: 'Client 6' },
                { id: 7, logo: 'https://pngimg.com/d/microsoft_PNG6.png', alt: 'Client 7' },
              ].map((client) => (
                <div
                  key={client.id + "-duplicate"}
                  className="flex-shrink-0 flex justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-6 mx-8"
                >
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="h-16 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all shadow-md hover:shadow-lg"
                  />
                </div>
              ))}
            </div> */}
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