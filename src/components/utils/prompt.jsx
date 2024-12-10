import React from "react";
import PropTypes from "prop-types";

function Prompt({ title, content }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      <p className="mt-2 text-gray-600 border border-gray-300 rounded-md p-4 bg-gray-50">
        {content}
      </p>
    </div>
  );
}

Prompt.propTypes = {
  title: PropTypes.string.isRequired, 
  content: PropTypes.string.isRequired, 
};

export default Prompt;
