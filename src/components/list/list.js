import React from "react";

import Item from "../item/item";

import "./list.css";

const list = ({ images, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="list_container">
      {images.map((item) => (
        <div key={item.data[0].nasa_id} className="item_container">
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default list;
