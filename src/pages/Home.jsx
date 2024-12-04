import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">AIMaster</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Knowledge about the training of AI.
      </p>
      <p className="text-md text-gray-600 mb-8 text-center">
        I will help you to evaluate correctly the responses that an AI gives based on real characteristics that I work with.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">First steps</h2>

      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl px-4">
        {/*Instruction Following */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:bg-blue-500 hover:text-white transition duration-300">
          <h3 className="text-xl font-semibold text-gray-700">Instruction Following</h3>
          <p className="text-gray-600">Evaluating how well an AI follows instructions.</p>
        </div>

        {/*Truthfulness */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:bg-green-500 hover:text-white transition duration-300">
          <h3 className="text-xl font-semibold text-gray-700">Truthfulness</h3>
          <p className="text-gray-600">Assessing the accuracy and truthfulness of AI responses.</p>
        </div>

        {/*Writing Style */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:bg-yellow-500 hover:text-white transition duration-300">
          <h3 className="text-xl font-semibold text-gray-700">Writing Style</h3>
          <p className="text-gray-600">Evaluating the writing style and readability of AI text.</p>
        </div>

        {/*Overall Quality */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:bg-purple-500 hover:text-white transition duration-300">
          <h3 className="text-xl font-semibold text-gray-700">Overall Quality</h3>
          <p className="text-gray-600">A comprehensive evaluation of the AI's overall response quality.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;