import React from 'react';
import { NavLink } from 'react-router-dom';

// Define the services data
const services = [
  {
    name: "AI Shop Assist",
    image: "https://th.bing.com/th/id/OIP.9YEvzCoXbkR6XerSFzYrvQHaD7?w=279&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    description: "AI-powered shopping assistants enhance customer experience with personalized recommendations.",
    link: "/services/ai-shop-assist"
  },
  {
    name: "Geo-Spatial Analytics",
    image: "https://th.bing.com/th/id/OIP.1ANy-GcZ4_kNWSVMtb-QbAHaE8?w=236&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    description: "Leverage geospatial data to drive business decisions and optimize operations.",
    link: "/services/geo-spatial-analytics"
  },
  {
    name: "In-Store Analytics",
    image: "https://th.bing.com/th/id/OIP.O1MGHMDNPO2w1n6NoLU5pgHaE8?w=255&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    description: "Gain insights into customer behavior and improve in-store performance.",
    link: "/services/in-store-analytics"
  },
  {
    name: "SCM Analytics",
    image: "https://th.bing.com/th/id/OIP.P_ECbMG9li4UXQyAIjD1fgHaEK?w=271&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    description: "Optimize your supply chain with AI-driven analytics for better efficiency.",
    link: "/services/scm-analytics"
  },
  {
    name: "Video Analytics",
    image: "https://th.bing.com/th/id/OIP.ZN4iBniDkccI-0lYFGGuAwHaEv?w=282&h=181&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    description: "Analyze video data using AI to extract valuable insights and drive decisions.",
    link: "/services/video-analytics"
  },
  {
    name: "Robotics",
    image: "https://th.bing.com/th/id/OIP.wIHX0PovAgTFHFTlDIRG_gHaFj?w=221&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    description: "Leverage AI-powered robotics for automation and operational efficiency.",
    link: "/services/robotics"
  }
];

const Service = () => {
  return (
    <div className="min-h-screen bg-red-100 py-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our AI-Driven Solutions</h1>
      <p className="text-lg text-center mb-12 text-gray-600">Explore our range of AI-powered services designed to transform industries.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-16 px-14 ">
        {services.map((service) => (
          <div key={service.name} className="group relative bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl border-2 ">
            <img src={service.image} alt={service.name} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{service.name}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <NavLink 
                to={service.link}
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Explore Case Study
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
