import Image from "next/image";

export function OurClientsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Clients</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are proud to have worked with some of the most innovative and forward-thinking organizations.
            </p>
          </div>
        </div>
        <div className="overflow-hidden py-12">
          <div className="animate-scroll whitespace-nowrap">
            <div className="inline-flex space-x-6">
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
                  <Image
                    src={src}
                    width={130}
                    height={80}
                    alt={`Client ${index + 1}`}
                    className="transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}