import React from "react";
import { commentsData } from "../../../data/mockUpData";

const data = commentsData;

export default function Comments() {
  return (
    <div className="term">
      {data.map((item, index) => (
        <div key={index} className="item-2">
          <img src={item.img} alt="img" className="item-img" />
          <h1 className="item-name typo">{item.name}</h1>
          <span className="item-email typo2 comm">{item.comments}</span>
        </div>
      ))}
    </div>
  );
}
