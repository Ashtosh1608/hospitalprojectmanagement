import React from 'react'
import "./Display.css"
import {
  NavLink, useHistory, useLocation
} from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';


export const Display = (props) => {
  const list = useSelector((state) => state.hosreducers.list)
 
 

  console.log("dispklay page is running",list);
  return (
    <div>
      
      {list.map((elem) => {
        return (
          <div key={elem.id}>
            <h1>redux data</h1>
            <h3>{elem.data}</h3>
          </div>
        )
      })}
    </div>
  )
}