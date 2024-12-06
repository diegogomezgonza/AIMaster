import React from "react";
import { Link } from "react-router-dom";
//Component for each section
import GridCard from "../components/gridCard";
//Component for social media (LinkedIn)
import SocialMedia from "../components/socialMedia";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">AIMaster</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Knowledge about the training of AI.
      </p>
      <p className="text-md text-gray-600 mb-8 text-center">
        I will help you to evaluate correctly the responses that an AI gives
        based on real characteristics that I work with.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        First steps
      </h2>

      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl px-4">
        {/* Instruction Following */}
        <GridCard
          title="Instruction Following"
          description="Evaluating how well an AI follows instructions."
          hoverColor="hover:bg-blue-500"
          link="/instruction-following"
        />

        {/* Truthfullness */}
        <GridCard
          title="Truthfulness"
          description="Assessing the accuracy and truthfulness of AI responses."
          hoverColor="hover:bg-green-500"
          link="/Truthfullness"
        />

        {/* Writing Style */}
        <GridCard
          title="Writing Style"
          description="Evaluating the writing style and readability of AI text."
          hoverColor="hover:bg-yellow-500"
          link="/writing-style"
        />

        {/* Overall Quality */}
        <GridCard
          title="Overall Quality"
          description="A comprehensive evaluation of the AI's overall response quality."
          hoverColor="hover:bg-purple-500"
          link="/overall-quality"
        />
      </div>

      {/* Social media*/}
      <SocialMedia />
    </div>
  );
}

export default Home;
