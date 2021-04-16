import React from "react";
import "./modalStyle.css"

export default function Modal({ show, message, hide, confirmed }) {

    const onClose = () => {
        hide()
    };

    const confirm = async () => {
        await confirmed();
        await hide();
    };

  if (show && confirmed === true) {
      return (
        <div className="modal">
            {message}
            <button className="modalButton" onClick={() => confirm()}>Yes</button>
            <button className="modalButton" onClick={() => onClose()}>No</button>
        </div>
      )
  } else if (show === true && confirmed !== true) {
      return (
        <div className="modal">
            {message}
            <button className="modalButton" onClick={() => onClose()}>Close</button>
        </div>
      )
  } else {
      return (
          null
      )
  }
}