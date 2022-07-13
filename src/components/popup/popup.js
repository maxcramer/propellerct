import React from "react";

import "./popup.scss";

const popup = (props) => {
  return props.trigger ? (
    <div className="popup" onClick={() => props.setTrigger(false)}>
      <div className="popup-inner">
        <h3>Popup</h3>
        {props.children}
        <button className="close" onClick={() => props.setTrigger(false)}>
          X
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default popup;
