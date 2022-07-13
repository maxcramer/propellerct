import React, { useState } from "react";

import Popup from "../popup/popup";

import "./item.scss";

function Item({ item }) {
  const [popup, setPopup] = useState(false);

  return (
    <div>
      <div onClick={() => setPopup(true)}>
        <h3 className="title">{item.data[0].title}</h3>
        <div className="data_container">
          <img src={item.links[0].href} alt="" />
          <p className="date">{item.data[0].date_created.split("T")[0]}</p>
          <p className="desc">{item.data[0].description}</p>
        </div>
      </div>
      <Popup item={item} trigger={popup} setTrigger={setPopup}>
        <h3 className="title">{item.data[0].title}</h3>
        <div className="data_container">
          <img src={item.links[0].href} alt="" />
          <p className="date">{item.data[0].date_created.split("T")[0]}</p>
          <p className="desc">{item.data[0].description}</p>
        </div>{" "}
      </Popup>
    </div>
  );
}

export default Item;
