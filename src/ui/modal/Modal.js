import React from "react";
import { createPortal } from "react-dom";
import CreateAssessmentModal from "./CreateAssessmentModal";

function Modal({ setter }) {
  return createPortal(
    <div
      onClick={() => setter(false)}
      className="bg-gray-800 bg-opacity-50 z-10 h-[100vh] w-full fixed top-0 left-0 grid place-content-center"
    >
      <div onClick={(e) => e.stopPropagation()} className="opacity-100">
        <CreateAssessmentModal setter={setter} />
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
