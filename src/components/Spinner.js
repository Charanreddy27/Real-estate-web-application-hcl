import React from "react";
import "../styles/spinner.css";
const Spinner = () => {
  return (
    // <div className="spinner-border text-primary" role="status">
    //   <span className="visually-hidden">Loading...</span>
    // </div>
    // <div className="loader"></div>
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
