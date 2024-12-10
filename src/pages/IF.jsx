import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/utils/buttons/backButton";
import Response from "../components/utils/response";
import Prompt from "../components/utils/prompt";
function IF() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative">
      {/* Botón de flecha */}
      <BackButton />

      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Instruction Following
      </h1>
      {/* Prompt */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <Prompt
          title="Prompt:"
          content="Write a short story about a dog and a cat working together to solve a mystery."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Respuesta A */}
          <Response
            color="red"
            title="Response A (Doesn't Follow Instructions):"
            content="Cats are really independent animals, and dogs are loyal. A dog might bark at strangers, while a cat would just observe. They don't often get along."
          />
          {/* Respuesta B */}
          <Response
            color="green"
            title="Response B (Follows Instructions):"
            content="On a quiet night, Bella the cat and Max the dog teamed up to uncover the mystery of the missing treats. Bella’s sharp eyes spotted clues, while Max’s nose led them to the neighbor's yard. Together, they solved the case, proving teamwork makes the dream work."
          />
        </div>
      </div>
    </div>
  );
}

export default IF;
