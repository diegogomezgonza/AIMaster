import React from "react";
import { useNavigate } from "react-router-dom";

function OQ() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 relative"
      data-barba="container"
      data-barba-namespace="overall-quality"
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

      <h1 className="text-4xl font-bold text-gray-800 mb-8">Overall Quality</h1>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">What is Overall Quality?</h2>
          <p className="mt-2 text-gray-600">
            Overall quality is the sum of all key elements in an AI's response: accuracy, relevance, 
            coherence, tone, and style. A high-quality response effectively addresses the user's query, 
            is free of errors, and provides value.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Example Scenario</h2>
          <p className="mt-2 text-gray-600 border border-gray-300 rounded-md p-4 bg-gray-50">
            **Prompt:** Summarize the plot of the book "To Kill a Mockingbird."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Response A */}
            <div className="bg-red-100 border border-red-300 rounded-md p-4">
              <h3 className="text-lg font-semibold text-red-700">Response A (Low Quality):</h3>
              <p className="mt-2 text-gray-600">
                "To Kill a Mockingbird" is a book about a girl and her brother. They live in a town, 
                and there’s a trial. It’s about life in the South.
              </p>
              <p className="mt-2 text-red-700 font-semibold">Issues:</p>
              <ul className="list-disc list-inside text-red-700">
                <li>Too vague, lacking key details.</li>
                <li>Fails to address major themes or characters.</li>
                <li>Little to no added value for the reader.</li>
              </ul>
            </div>
            {/* Response B */}
            <div className="bg-green-100 border border-green-300 rounded-md p-4">
              <h3 className="text-lg font-semibold text-green-700">Response B (High Quality):</h3>
              <p className="mt-2 text-gray-600">
                "To Kill a Mockingbird" is a story set in the Deep South, focusing on young Scout Finch, 
                her brother Jem, and their father, Atticus Finch, a lawyer. The novel explores themes of 
                racial injustice, morality, and compassion, as Atticus defends a black man falsely accused 
                of assaulting a white woman, offering a profound commentary on prejudice and humanity.
              </p>
              <p className="mt-2 text-green-700 font-semibold">Strengths:</p>
              <ul className="list-disc list-inside text-green-700">
                <li>Detailed and contextually rich summary.</li>
                <li>Highlights key themes and characters.</li>
                <li>Engages the reader and provides clear value.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700">Checklist for Evaluating Overall Quality</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Does the response directly address the prompt?</li>
            <li>Is the information accurate and free from errors?</li>
            <li>Does the response provide depth and context?</li>
            <li>Is the style and tone suitable for the audience?</li>
            <li>Is the response structured logically and coherently?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OQ;
