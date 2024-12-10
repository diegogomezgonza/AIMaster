import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/utils/buttons/backButton";
function WS() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 relative"
      data-barba="container"
      data-barba-namespace="writing-style"
    >
      {/* Botón de flecha */}
      <BackButton />

      <h1 className="text-4xl font-bold text-gray-800 mb-8">Writing Style and Tone</h1>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Why Writing Style Matters</h2>
          <p className="mt-2 text-gray-600">
            Writing style and tone are essential in ensuring that an AI response is appropriate, engaging, and 
            easy to understand. Whether the goal is a formal report or a casual conversation, the AI should 
            adjust its tone to suit the context.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Example Scenario</h2>
          <p className="mt-2 text-gray-600 border border-gray-300 rounded-md p-4 bg-gray-50">
            **Prompt:** Explain the concept of climate change in two styles:
            - A formal tone for an academic paper.
            - A casual tone for a general audience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Formal Response */}
            <div className="bg-blue-100 border border-blue-300 rounded-md p-4">
              <h3 className="text-lg font-semibold text-blue-700">Response A (Formal):</h3>
              <p className="mt-2 text-gray-600">
                Climate change refers to significant and lasting changes in the statistical distribution 
                of weather patterns over periods ranging from decades to millions of years. It is primarily 
                driven by anthropogenic activities, such as the combustion of fossil fuels and deforestation, 
                leading to an enhanced greenhouse effect.
              </p>
            </div>
            {/* Casual Response */}
            <div className="bg-yellow-100 border border-yellow-300 rounded-md p-4">
              <h3 className="text-lg font-semibold text-yellow-700">Response B (Casual):</h3>
              <p className="mt-2 text-gray-600">
                Climate change is basically when the planet's weather patterns shift a lot over time. 
                Humans burning stuff like coal and chopping down forests make it worse because it traps heat 
                in the atmosphere, kinda like wrapping Earth in a thicker blanket.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700">Tips for Evaluating Writing Style and Tone</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Ensure the tone matches the intended audience and context.</li>
            <li>Look for clarity and coherence in sentence structure.</li>
            <li>Avoid overly complex or overly simplified language unless explicitly requested.</li>
            <li>Identify inconsistencies or mismatches between tone and content.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WS;
