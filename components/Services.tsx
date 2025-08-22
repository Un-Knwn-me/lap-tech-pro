const services = [
  {
    icon: "🔲",
    title: "Chip Level Service",
    description: "Advanced board level diagnostics and fix."
  },
  {
    icon: "💻",
    title: "Laptop Service",
    description: "Laptop, TV, Projector, Chip, Level & More - We've Got You Covered."
  },
  {
    icon: "📽️",
    title: "Projector Service",
    description: "High - quality lens repair and maintenance."
  },
  {
    icon: "📺",
    title: "Television Service",
    description: "All models, LED, OLED: Smart TVs."
  },
  {
    icon: "🖥️",
    title: "PC Building",
    description: "Customs builds, hardware upgrades, performance tuning and trouble shooting."
  },
  {
    icon: "📹",
    title: "CCTV Installation",
    description: "Complete setup, configuration and servicing."
  },
  {
    icon: "⚙️",
    title: "CNC Repairs",
    description: "Diagnostics, part replacement, precision calibration, maintenance and CNC troubleshooting"
  },
  {
    icon: "🔌",
    title: "Electronic Goods",
    description: "AC, Refrigerator and all home appliances repairs."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-4">
            What We Fix
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-orange-300 via-orange-50 to-orange-0 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl shadow-sm">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-orange-600 mb-3 text-center">
                {service.title}
              </h3>
              
              <p className="text-black text-center text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}