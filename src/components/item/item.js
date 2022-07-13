import React, { useState } from "react";

import Popup from "../popup/popup";

import "./item.css";

function Item({ item }) {
  const [popup, setPopup] = useState(false);

  return (
    <div onClick={() => setPopup(true)}>
      <h3 className="title">{item.data[0].title}</h3>
      <div className="data_container">
        <img src={item.links[0].href} alt="" />
        <p className="date">{item.data[0].date_created.split("T")[0]}</p>
        <p className="desc">{item.data[0].description}</p>
      </div>
      <Popup item={item} trigger={popup}>
        My Popup
      </Popup>
    </div>
  );
}

export default Item;
