import React from "react";
import "./overview.css";
export default function Overview() {
  return (
    <div className="task_sidebar-container">
      <div className="task_overview-container">
        <h2>Overview</h2>

        <ul className="task_status-container">
          <li>
            <span className="task_icon task_inhouse"></span>In House
          </li>
          <li>
            <span className="task_icon task_reserved"></span>Reserved
          </li>
          <li>
            <span className="task_icon task_ooo"></span>Out of Order
          </li>
          <li>
            <span className="task_icon task_workorder"></span>Work Order
          </li>
        </ul>
      </div>

      <div className="task_action-container">
        <h2>Action</h2>
        <ul className="task_status-container">
          <li>
            <a href="#">Create Work Order</a>
          </li>
          <li>
            <a href="#">View All Room Work Orders</a>
          </li>
        </ul>
      </div>

      <div className="task_action-container">
        <h2>Related Links</h2>
        <ul className="task_status-container">
          <li>
            <a href="#">View Future Availability</a>
          </li>
          <li>
            <a href="#">Manage Housekeeping</a>
          </li>
        </ul>
      </div>

      <div className="task_action-container">
        <h2>Property Work Orders</h2>
        <ul className="task_status-container">
          <li>
            <a href="#">View All Property Work Orders</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
