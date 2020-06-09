import React from "react";
import "./modal.css";

export default function Modal({ text, close, inhouse }) {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div
          className={
            "modal-header " + (inhouse ? "task_inhouse" : "task_reserved")
          }
        >
          <span className="close" onClick={close}>
            &times;
          </span>
          <h2> {inhouse ? "Inhouse" : "Reserved"}</h2>
        </div>
        <div className="modal-body">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
