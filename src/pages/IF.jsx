import React from 'react';
import { useNavigate } from 'react-router-dom';

function IF() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative">
      {/* Botón de flecha */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200"
        aria-label="Go back"
      >
        {/* Ícono de flecha (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <h1 className="text-4xl font-bold text-gray-800 mb-8">Instruction Following</h1>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Prompt:</h2>
          <p className="mt-2 text-gray-600 border border-gray-300 rounded-md p-4 bg-gray-50">
            Write a short story about a dog and a cat working together to solve a mystery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Respuesta A */}
          <div className="bg-red-100 border border-red-300 rounded-md p-4">
            <h3 className="text-lg font-semibold text-red-700">Response A (Doesn't Follow Instructions):</h3>
            <p className="mt-2 text-gray-600">
              Cats are really independent animals, and dogs are loyal. A dog might bark at strangers, while a cat would
              just observe. They don't often get along.
            </p>
          </div>
          {/* Respuesta B */}
          <div className="bg-green-100 border border-green-300 rounded-md p-4">
            <h3 className="text-lg font-semibold text-green-700">Response B (Follows Instructions):</h3>
            <p className="mt-2 text-gray-600">
              On a quiet night, Bella the cat and Max the dog teamed up to uncover the mystery of the missing treats. 
              Bella’s sharp eyes spotted clues, while Max’s nose led them to the neighbor's yard. Together, they solved 
              the case, proving teamwork makes the dream work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IF;
