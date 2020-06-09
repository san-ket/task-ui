import React, { useState } from "react";
import "./infotable.css";
import { data, headers } from "../../mock/roomData";
import Modal from "../modal/modal";

export default function Infotable() {
  const [openModal, setOpenModal] = useState(false);
  const [text, setText] = useState("");
  const [inhouse, SetInhouse] = useState(false);

  function handleSelection(e) {
    if (e.target.classList.contains("task_colspan-available")) {
      return;
    }
    if (e.target.classList.contains("task_colspan-reserved")) {
      SetInhouse(false);
    }

    if (e.target.classList.contains("task_colspan-inhouse")) {
      SetInhouse(true);
    }
    setOpenModal(true);
    setText(e.target.textContent);
  }

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <div>
      <table className="task_infotable">
        <thead>
          <tr>
            {headers.map((h, index) => (
              <th className="task_infotable-header" key={h}>
                {index > 1 ? (
                  <>
                    <div>{h.substr(0, 4)}</div>
                    <div>{h.substr(4)}</div>
                  </>
                ) : (
                  h
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={index}>
              <td className="task_infotable-room">{d.room}</td>
              <td>{d.type}</td>
              {d.dates.map((date, index) => (
                <td
                  key={index}
                  colSpan={date.colspan}
                  className="task_infotable_cell"
                >
                  <span
                    onClick={handleSelection}
                    className={
                      date.inhouse
                        ? "task_colspan-inhouse"
                        : date.reserved
                        ? "task_colspan-reserved"
                        : "task_colspan-available"
                    }
                  >
                    {date.text}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {openModal && <Modal text={text} inhouse={inhouse} close={closeModal} />}
    </div>
  );
}
