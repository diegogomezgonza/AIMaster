import React from "react";
import { useNavigate } from "react-router-dom";

function Truthfullness() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 relative"
      data-barba="container"
      data-barba-namespace="truthfulness"
    >
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200"
        aria-label="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <h1 className="text-4xl font-bold text-gray-800 mb-8">Truthfulness</h1>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Why Truthfulness Matters</h2>
          <p className="mt-2 text-gray-600">
            Truthfulness is one of the most important aspects to evaluate when assessing an AI's response. 
            A truthful response builds trust and ensures that users are receiving accurate and reliable information. 
            However, AI models can sometimes provide incorrect or fabricated answers. Understanding how to identify 
            and handle such responses is essential.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Example Scenario</h2>
          <p className="mt-2 text-gray-600 border border-gray-300 rounded-md p-4 bg-gray-50">
            **Question:** What is the capital of Australia?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Incorrect Response */}
            <div className="bg-red-100 border border-red-300 rounded-md p-4">
              <h3 className="text-lg font-semibold text-red-700">Response A (Incorrect):</h3>
              <p className="mt-2 text-gray-600">
                The capital of Australia is Sydney. It is the largest and most well-known city in Australia.
              </p>
              <p className="mt-4 text-sm text-red-700 font-semibold">Error: Sydney is not the capital; Canberra is.</p>
            </div>
            {/* Correct Response */}
            <div className="bg-green-100 border border-green-300 rounded-md p-4">
              <h3 className="text-lg font-semibold text-green-700">Response B (Correct):</h3>
              <p className="mt-2 text-gray-600">
                The capital of Australia is Canberra. It was chosen as a compromise between Sydney and Melbourne 
                and officially became the capital in 1913.
              </p>
              <p className="mt-4 text-sm text-green-700 font-semibold">Factually accurate and detailed.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700">Tips for Evaluating Truthfulness</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Cross-check the response with reliable sources to ensure accuracy.</li>
            <li>Be cautious of confident-sounding responses that may still be incorrect.</li>
            <li>Look for details or explanations that support the answer's credibility.</li>
            <li>Identify and flag vague or evasive answers that lack factual basis.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Truthfullness;
