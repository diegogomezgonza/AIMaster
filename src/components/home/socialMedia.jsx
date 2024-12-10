import React from "react";

function SocialMedia() {
  return (
    <div className="font-semibold mt-5">
      <a
        href="https://www.linkedin.com/in/diego-g%C3%B3mez-gonz%C3%A1lez-372017199/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg m-6 group relative w-max cursor-pointer"
      >
        <span>@diegogomezgonza</span>
        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"></span>
      </a>
    </div>
  );
}

export default SocialMedia;
