import React from "react";
import { data2 } from "../../../data/mockUpData";

const data = data2;

function Going() {
  return (
    <div className="term">
      {data.map((item, index) => (
        <div key={index} className="item">
          <img src={item.img} alt="img" className="item-img" />
          <h1 className="item-name typo">{item.name}</h1>
          <span className="item-email typo2">{item.email}</span>
          <span className="item-phone typo2">+ {item.phone}</span>
        </div>
      ))}
    </div>
  );
}

export default Going;
