import React from "react";

import "./list.css";

const list = ({ images }) => {
  return (
    <div className="list_container">
      {images.map((item) => (
        <div key={item.data[0].nasa_id} className="item_container">
          <h3 className="title">{item.data[0].title}</h3>
          <div className="data_container">
            <img src={item.links[0].href} alt="" />
            <p className="date">{item.data[0].date_created.split("T")[0]}</p>
            <p className="desc">{item.data[0].description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default list;
