import React from "react";
import "./Display.css";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Display = (props) => {
  const data = props.data;

  return (
    <div style={{ color: "white" }}>
      data is:
      {JSON.stringify(data, null, 2)}
    </div>
  );
  // return (
  //   <div>
  //     {list.map((elem) => {
  //       return (
  //         <div key={elem.id}>
  //           <h1>redux data</h1>
  //           <h3>{elem.data}</h3>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
};
