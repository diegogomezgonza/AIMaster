import React from "react";
import PropTypes from "prop-types";

function Response({ color, title, content }) {
  return (
    <div className={`bg-${color}-100 border border-${color}-300 rounded-md p-4`}>
      <h3 className={`text-lg font-semibold text-${color}-700`}>{title}</h3>
      <p className="mt-2 text-gray-600">{content}</p>
    </div>
  );
}

Response.propTypes = {
  color: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  content: PropTypes.string.isRequired, 
};

export default Response;
