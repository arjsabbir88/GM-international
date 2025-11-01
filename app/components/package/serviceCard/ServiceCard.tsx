import React from 'react';

interface ServiceCardProps {
  iconUrl: string;       // changed from ReactNode to string URL
  title: string;
  description: string;
  color: string;
  titleColor: string;    // added titleColor here
}

const ServiceCard: React.FC<ServiceCardProps> = ({ iconUrl, title, description, color, titleColor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center text-center group animate-fadeInUp">
      <div>
        <img src={iconUrl} alt={title} className="w-8 h-8" />
      </div>
      <h3 className={`${titleColor} text-3xl font-bold mb-3 text-gray-800 group-hover:text-red-500 transition-colors duration-300`}>
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      iconUrl: "https://i.postimg.cc/y84YY3ng/famicons-school-sharp.png",  // placeholder URL
      title: "Student",
      description: "Jorem ipsum dolor sit amet, cons.Jorem ipsum dolor sit.",
      color: "bg-gray-100",
      titleColor: "text-blue-700"
    },
    {
      iconUrl: "https://i.postimg.cc/TPQR97xj/streamline-ultimate-favorite-medical-bold.png",
      title: "Medical",
      description: "Jorem ipsum dolor sit amet, cons.Jorem ipsum dolor sit.",
      color: "bg-red-500",
      titleColor: "text-red-500"
    },
    {
      iconUrl: "https://i.postimg.cc/bYZtZb0B/majesticons-airplane.png",
      title: "Tourism",
      description: "Jorem ipsum dolor sit amet, cons.Jorem ipsum dolor sit.",
      color: "bg-sky-400",
      titleColor: "text-sky-300"
    },
    {
      iconUrl: "https://i.postimg.cc/5tPX0N6m/solar-pie-chart-3-bold.png",
      title: "Business",
      description: "Jorem ipsum dolor sit amet, cons.Jorem ipsum dolor sit.",
      color: "bg-gray-800",
      titleColor: "text-black"
    },
    {
      iconUrl: "https://i.postimg.cc/L8253ZfF/9023992-student-fill-icon-1.png",
      title: "International Student",
      description: "Jorem ipsum dolor sit amet, cons.Jorem ipsum dolor sit.",
      color: "bg-red-500",
      titleColor: "text-red-500"
    },
    {
      iconUrl: "https://i.postimg.cc/sDRg3ZTr/3383446-airport-departure-luggage-passenger-tourist-icon-1.png",
      title: "International Tourist",
      description: "Jorem ipsum dolor sit amet, cons.Jorem ipsum dolor sit.",
      color: "bg-gray-700",
      titleColor: "text-blue-700"
    }
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-red-500">Explore</span> Your Journey
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            We Provide You The Best
          </h2>
          <p className="text-gray-600 max-w-2xl text-sm sm:text-base leading-relaxed">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac alieit.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 hover:cursor-pointer">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Bottom Row - Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 lg:max-w-7xl lg:mx-auto hover:cursor-pointer">
          {services.slice(4).map((service, index) => (
            <ServiceCard key={index + 4} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
