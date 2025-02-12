import React from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router for navigation

const useCases = [
  {
    industry: 'Fintech',
    description: 'Discover how our solutions are transforming financial services.',
    link: '/fintech-projects', // Replace with your specific project insights route
  },
  {
    industry: 'Retail',
    description: 'Explore innovative retail solutions that drive customer engagement.',
    link: '/retail-projects',
  },
  {
    industry: 'F&B',
    description: 'See how we’re optimizing food and beverage industry processes.',
    link: '/fb-projects',
  },
  {
    industry: 'Mobility',
    description: 'Find out how we’re enhancing transportation and mobility systems.',
    link: '/mobility-projects',
  },
  {
    industry: 'Entertainment',
    description: 'Learn about how our solutions are redefining the entertainment experience.',
    link: '/entertainment-projects',
  },
  {
    industry: 'Entertainment',
    description: 'Learn about how our solutions are redefining the entertainment experience.',
    link: '/entertainment-projects',
  },
  {
    industry: 'Entertainment',
    description: 'Learn about how our solutions are redefining the entertainment experience.',
    link: '/entertainment-projects',
  },
  {
    industry: 'Entertainment',
    description: 'Learn about how our solutions are redefining the entertainment experience.',
    link: '/entertainment-projects',
  },
  {
    industry: 'Entertainment',
    description: 'Learn about how our solutions are redefining the entertainment experience.',
    link: '/entertainment-projects',
  },
  {
    industry: 'Entertainment',
    description: 'Learn about how our solutions are redefining the entertainment experience.',
    link: '/entertainment-projects',
  },
  {
    industry: 'Entertainment',
    description: 'Learn about how our solutions are redefining the entertainment experience.',
    link: '/entertainment-projects',
  },
  {
    industry: 'Entertainment',
    description: 'Learn about how our solutions are redefining the entertainment experience.',
    link: '/entertainment-projects',
  },
];

const UseCasePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Industry Use Cases
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="bg-red-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out border-2"
          >
            <h2 className="text-xl font-semibold text-gray-800">{useCase.industry}</h2>
            <p className="text-gray-600 mt-4">{useCase.description}</p>
            <Link
              to={useCase.link}
              className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium"
            >
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCasePage;
