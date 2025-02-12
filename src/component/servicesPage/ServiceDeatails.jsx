import React from 'react';
import { useParams } from 'react-router-dom';

// Define the services data
const services = [
  {
    name: "AI Shop Assist",
    image: "/images/ai-shop-assist.jpg",
    description: "AI-powered shopping assistants enhance customer experience with personalized recommendations.",
    caseStudy: "Explore the transformation of XYZ retail store with AI Shop Assist. Increased customer engagement and sales by 20%.",
  },
  {
    name: "Geo-Spatial Analytics",
    image: "/images/geo-spatial-analytics.jpg",
    description: "Leverage geospatial data to drive business decisions and optimize operations.",
    caseStudy: "Learn how ABC logistics optimized their route planning using Geo-Spatial Analytics, reducing transportation costs by 15%.",
  },
  {
    name: "In-Store Analytics",
    image: "/images/in-store-analytics.jpg",
    description: "Gain insights into customer behavior and improve in-store performance.",
    caseStudy: "Discover how in-store analytics helped DEF supermarket increase foot traffic by 10% and optimize product placement.",
  },
  {
    name: "SCM Analytics",
    image: "/images/scm-analytics.jpg",
    description: "Optimize your supply chain with AI-driven analytics for better efficiency.",
    caseStudy: "See how GHI manufacturing improved their supply chain efficiency by 25% using SCM Analytics.",
  },
  {
    name: "Video Analytics",
    image: "/images/video-analytics.jpg",
    description: "Analyze video data using AI to extract valuable insights and drive decisions.",
    caseStudy: "Understand how JKL security firm leveraged Video Analytics to enhance surveillance efficiency and reduce response times.",
  },
  {
    name: "Robotics",
    image: "/images/robotics.jpg",
    description: "Leverage AI-powered robotics for automation and operational efficiency.",
    caseStudy: "Check out how MNO logistics company improved their warehouse automation with AI-powered robotics, reducing labor costs by 30%.",
  }
];

const ServiceDeatails = () => {
  const { serviceName } = useParams(); // Get the service name from the URL
  const service = services.find(s => s.name.toLowerCase().replace(/ /g, "-") === serviceName);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-red-100 shadow-lg rounded-lg my-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">{service.name}</h1>
      <img src={service.image} alt={service.name} className="w-full h-64 object-cover rounded-md mb-6" />
      
      <p className="text-lg text-gray-700 mb-6">{service.description}</p>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Case Study</h3>
      <p className="text-lg text-gray-700 mb-6">{service.caseStudy}</p>
      
      <div className="text-center">
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out">
          Get Started with {service.name}
        </button>
      </div>
    </div>
  );
};

export default ServiceDeatails;
