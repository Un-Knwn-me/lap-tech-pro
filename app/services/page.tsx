import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const services = [
  {
    title: "Chip Level Service",
    description: "Our **Chip Level Service** specializes in diagnosing and repairing complex motherboard and circuit issues with precision. Using advanced tools and techniques, we restore functionality at the core component level, eliminating the need for costly replacements. Our expertise ensures reliable, efficient, and high-quality repairs, that extend your device’s life and performance, providing professional solutions to even the most intricate electronic problems.",
    image: "/images/Chip level service.png",
    imageAlt: "Circuit board with tweezers working on electronic components",
    position: "right"
  },
  {
    title: "Laptop Servicing",
    description: "We offer comprehensive **laptop servicing** that begins with a thorough diagnosis of hardware and software issues, cleaning internal components, and replacing damaged parts like batteries, screens, or keyboards. We also handle updating/reinstalling operating systems and drivers, provide data backup and virus removal, and conduct final testing to ensure your laptop performs at its best before returning your laptop.",
    image: "/images/Laptop servicing.png",
    imageAlt: "Technician working on laptop with tools visible",
    position: "left"
  },
  {
    title: "Projector Service",
    description: "Our **Projector Service** offers professional diagnostics and repairs for all projector types, including LCD, DLP, and LED projectors. We handle lens alignment, cleaning and replacement, lamp replacement, color calibration, and electronic component repairs, our skilled technicians use advanced tools and genuine parts to restore peak performance. Our service ensures optimal image quality and extends the lifespan for any setting—home, office, or commercial use with a focus on quality, speed, and affordability of your projection equipment.",
    image: "/images/Projector service.png",
    imageAlt: "Projector internal components and lens assembly",
    position: "right"
  },
  {
    title: "TV Servicing",
    description: "We offer professional **TV servicing** to address a wide range of issues including power supply problems, display issues, sound problems, and connectivity issues. Our technicians are trained to work with all TV brands and models, from LED to OLED and Smart TVs, ensuring reliable repairs and optimal performance. After servicing, we perform thorough testing to guarantee your TV is fully functional and ready for use.",
    image: "/images/TV servicing.png",
    imageAlt: "Open flat-screen TV showing internal components",
    position: "left"
  },
  {
    title: "PC Building Services",
    description: "We offer custom **PC building services** tailored to your needs, whether for gaming, work, or general use. Our expertise includes selecting compatible components, assembling high-performance systems, installing operating systems, and optimizing performance. We handle the full assembly process with professional care, followed by system setup, driver installation, and performance testing. We ensure your custom PC meets your specific requirements and budget.",
    image: "/images/PC building services.png",
    imageAlt: "Modern gaming PC with transparent side panel and purple LED lights",
    position: "right"
  },
  {
    title: "CCTV Installation and Servicing",
    description: "Our **CCTV installation and servicing** ensure round-the-clock security for your property. We provide professional installation of high-definition surveillance cameras, DVR/NVR systems, and remote monitoring equipment. Our maintenance services include regular checks, software updates, and repairs to keep your security system functioning optimally. Trust us for reliable, professional, and affordable CCTV solutions tailored to your needs.",
    image: "/images/CCTV installation and servicing.png",
    imageAlt: "Hand installing outdoor security camera on wall",
    position: "left"
  },
  {
    title: "CNC Machine Repair Services",
    description: "We offer reliable **CNC machine repair services** to keep your operations running smoothly. Our expertise covers mechanical repairs, electrical troubleshooting, software issues, and preventive maintenance. We repair or replace faulty components such as motors, drives, spindles, and control boards using quality parts. Software diagnostics and calibration are also performed to restore precision and functionality. We work with various CNC machine types and provide on-site service to minimize downtime in your manufacturing operations.",
    image: "/images/CNC machine repair services.png",
    imageAlt: "Metallic gear and mechanical components from CNC machine",
    position: "right"
  },
  {
    title: "Home Appliances Repair and Maintenance",
    description: "We offer expert repair and maintenance services for all electronic **home appliances** including refrigerators, washing machines, air conditioners, microwaves, and more. Our technicians begin with a detailed inspection to identify the issue, followed by necessary repairs or part replacements using genuine components. We handle both minor faults and major breakdowns with efficiency and care. Once servicing is complete, each appliance undergoes thorough testing to ensure safe and reliable performance in your home.",
    image: "/images/home appliances.png",
    imageAlt: "Various household appliances including refrigerator, washing machine, and air conditioner",
    position: "left"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="pt-28 pb-8 fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Our Services
          </h1>
        </div>
      </section>

      {/* Services List - Matching Image Design */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 stagger-animation">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`flex flex-col ${service.position === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-2 p-5 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-visible ${
                index % 2 === 0 
                  ? 'bg-gradient-to-br from-white via-orange-100 to-orange-400' 
                  : 'bg-gradient-to-br from-orange-400 via-orange-100 to-white'
              }`}
            >
              {/* Content */}
              <div className={`w-full lg:w-1/2 space-y-2 transform ${
                service.position === 'right' 
                  ? 'lg:translate-x-8 lg:translate-y-2' 
                  : 'lg:-translate-x-8 lg:translate-y-2'
              }`}>
                <div className="text-black leading-relaxed text-justify text-base">
                  {service.description.split('**').map((part, i) => (
                    <span key={i}>
                      {i % 2 === 1 ? (
                        <span className="font-bold text-orange-600">
                          {part}
                        </span>
                      ) : (
                        part
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className={`relative h-64 lg:h-80 border-2 border-orange-400 overflow-hidden rounded-xl shadow-xl transform ${
                  service.position === 'right' 
                    ? 'lg:translate-x-28 lg:-translate-y-4' 
                    : 'lg:-translate-x-28 lg:-translate-y-4'
                }`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-12 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Need Professional Electronics Repair?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Our expert technicians are ready to diagnose and fix your electronics with precision and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-orange-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Service Now
            </button>
            <a 
              href="tel:+919786667567"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
            >
              Call: +91 97866 67567
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}