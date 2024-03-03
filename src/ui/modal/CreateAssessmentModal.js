import React from "react";

function CreateAssessmentModal({ setter }) {
  return (
    <div
      onClick={() => setter(false)}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[40rem] h-[30rem] bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
      >
        <div className="w-1/2 h-full bg-blue-300">{/* Left half */}</div>
        <div className="w-1/2 h-full bg-teal-300">{/* Right half */}</div>
      </div>
    </div>
  );
}

export default CreateAssessmentModal;
