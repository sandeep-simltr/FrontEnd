import React from "react";
import { useParams } from "react-router-dom";
import useCasesData from "./useCasesData";

const UseCaseDetails = () => {
  const { useCaseId } = useParams(); // Get the ID from the URL
  const useCase = useCasesData.find((uc) => uc.id === useCaseId);

  if (!useCase) {
    return <div className="text-center text-red-500">Use case not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-red-100 shadow-lg rounded-lg my-12 ">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        {useCase.title}
      </h1>
      <img
        src={useCase.image}
        alt={useCase.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <p className="text-lg text-gray-700 mb-6">{useCase.description}</p>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project Insights</h3>
      <p className="text-lg text-gray-700 mb-6">{useCase.insights}</p>

      <div className="text-center">
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default UseCaseDetails;
