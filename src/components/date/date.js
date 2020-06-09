import React from "react";
import "./date.css";

export default function Date() {
  return (
    <div>
      <span>Start Date</span>
      <input
        defaultValue="2019-08-08"
        className="task_date-picker"
        type="date"
      />

      <button className="task_update-date">Update</button>
    </div>
  );
}
