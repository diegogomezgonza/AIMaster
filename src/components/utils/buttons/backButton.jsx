import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton({ to = "/" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}

export default BackButton;
