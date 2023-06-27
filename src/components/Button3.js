import React from "react";
import { Link } from "react-router-dom";

function Button3({ name, link, icon }) {
  return (
    <div>
      <button className="Button3">
        <Link to={link}>
          <span>{icon}</span>
          {name}
        </Link>
      </button>
    </div>
  );
}

export default Button3;
