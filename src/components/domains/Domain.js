import React from "react";

const Domain = ({ domain }) => {
  return (
    <li>
      <button type="button" className="btn btn-blank">
        {domain}
      </button>
    </li>
  );
};

export default Domain;
