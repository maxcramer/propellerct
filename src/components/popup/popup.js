import React from "react";

import "./popup.scss";

const popup = (props) => {
  return props.trigger ? (
    <div className="popup" onClick={() => props.setTrigger(false)}>
      <div className="popup-inner">
        <button
          className="close-btn-pushable"
          onClick={() => props.setTrigger(false)}
        >
          <span className="front">X</span>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default popup;
