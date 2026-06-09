import { Card, CardContent } from "@/components/ui/card";

export function ClientsSection() {
  const partners = [
    { id: 1, logo: "https://www.drupal.org/files/project-images/Logo%20ONLYOFFICE.png", alt: "ONLYOFFICE", website: "https://www.onlyoffice.com" },
    { id: 2, logo: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png", alt: "AWS", website: "https://aws.amazon.com" },
    { id: 3, logo: "/adobe.svg", alt: "Adobe", website: "https://www.adobe.com" },
    { id: 4, logo: "/math.png", alt: "Wiris MathType", website: "https://www.wiris.com/en/" },
    { id: 5, logo: "/smart.png", alt: "SmartPLS", website: "https://www.smartpls.com/" },
    { id: 6, logo: "/asld.png", alt: "ASLD", website: "https://www.asldweb.com" },
    { id: 7, logo: "https://offsquare.com.my/wp-content/uploads/2017/11/Microsoft-Logo-icon-png-Transparent-Background.png", alt: "Microsoft", website: "https://www.microsoft.com" },
    { id: 8, logo: "https://www.checkpoint.com/wp-content/themes/checkpoint-theme-v2/images/checkpoint-logo.svg", alt: "Check Point", website: "https://www.checkpoint.com" },
    { id: 9, logo: "https://mma.prnewswire.com/media/2660251/Vertiv_Corporation_Logo.jpg", alt: "Vertiv", website: "https://www.vertiv.com" },
    { id: 10, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVVfycNuwGheNMUskHToQCav2CNL3K9_Htlg&s", alt: "Nitro Software", website: "https://www.gonitro.com" },
    { id: 11, logo: "https://i.pinimg.com/originals/8a/1d/0d/8a1d0dfc30186de9e6b2ae0bdea574c6.png", alt: "ServiceNow", website: "https://www.servicenow.com" },
    { id: 12, logo: "/numerical-analytics.svg", alt: "Numerical Analytics", website: "https://www.numerical-analytics.com/" },
    { id: 13, logo: "https://www.datocms-assets.com/40521/1726820725-login-page-thumbnail.png", alt: "greytHR", website: "https://www.greythr.com/" },
    // { id: 14, logo: "/synapse.svg", alt: "Synapse Online", website: "https://www.synapseonline.in/" },
    { id: 15, logo: "/techdata.svg", alt: "Tech Data", website: "https://www.techdata.com" }
  ];

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
              {partners.map((client) => (
                <ClientCard key={client.id} logo={client.logo} alt={client.alt} website={client.website} />
              ))}
              {partners.map((client) => (
                <ClientCard key={`dup-${client.id}`} logo={client.logo} alt={client.alt} website={client.website} />
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

function ClientCard({ logo, alt, website }: { logo: string; alt: string; website: string }) {
  return (
    <Card className="bg-transparent border-0 shadow-none group">
      <CardContent className="p-8 flex flex-col items-center text-center space-y-2">
        <a href={website} target="_blank" rel="noopener noreferrer" className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ease-in-out">
          <img src={logo} alt={alt} className="h-12 object-contain transition-all" />
        </a>
      </CardContent>
    </Card>
  );
}

