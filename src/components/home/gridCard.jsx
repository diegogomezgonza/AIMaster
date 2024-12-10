import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

//Component props
function GridCard({ title, description, hoverColor, link }) {
  return (
    <Link
      to={link}
      className={classNames(
        "block bg-white shadow-md rounded-lg p-6 transition duration-300",
        "hover:text-white",
        hoverColor
      )}
    >
      <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}

export default GridCard;
