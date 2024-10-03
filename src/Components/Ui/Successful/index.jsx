import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export const Successful = ({ message = "Operation Successful", description = "Your action was completed successfully." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-green-100 border border-green-300 rounded-lg">
      <FaCheckCircle size={50} className="text-green-600 mb-4" />
      <h2 className="text-2xl font-semibold text-green-800">{message}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
};
