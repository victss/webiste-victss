import Image from "next/image";

export function Certifications() {
  // Array of certifications with image URLs and details

  const certifications = [
    {
      name: "ISO 9001",
      imageSrc: "https://img.freepik.com/premium-vector/blue-circle-with-words-quality-assurance-management-system_78946-405.jpg?w=740",
      altText: "ISO 9001 Certification",
      description: "Quality Management System",
    },
    {
      name: "CMMI Level 3",
      imageSrc: "https://5.imimg.com/data5/SELLER/Default/2023/7/325641274/PL/IN/MF/10064375/cmmi-level-3-certification.png",
      altText: "CMMI Level 3 Certification",
      description: "Capability Maturity Model Integration",
    },
    {
      name: "MSME",
      imageSrc: "/msme.png",
      altText: "MSME Certification",
      description: "Micro, Small & Medium Enterprises",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container px-4 md:px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter font-sans text-white">
            Our <span className="text-blue-500">Certifications</span>
          </h2>
          <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-sans">
            We are proud to hold industry-leading certifications that demonstrate our commitment to quality and excellence.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              imageSrc={cert.imageSrc}
              altText={cert.altText}
              name={cert.name}
              description={cert.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Certification Card Component with Image and Interactivity
function CertificationCard({ imageSrc, altText, name, description }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 p-6 flex flex-col items-center text-center space-y-2 group hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 ease-in-out hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative w-24 h-24 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <Image src={imageSrc} alt={altText} layout="fill" objectFit="contain" />
      </div>
      {/* Certification Name */}
      <h3 className="font-medium text-base font-sans text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
        {name}
      </h3>
      {/* Certification Description */}
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}