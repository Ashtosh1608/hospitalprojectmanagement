import React from 'react'
import "./Welcome.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import {

  NavLink
} from "react-router-dom";

export const Welcome = () => {
  return (
    <>
    <div className='wcenter'>
        <h1>Welcome</h1>
        <h1>TO</h1>
        <h1 className='heading'>Hospital Management App</h1>
        <div className='requi'>
            <div>
            {/* <FontAwesomeIcon  className='hPlus' icon={faPlusSquare} size="xs" /> */}
            <FontAwesomeIcon  className='hPlus' icon={faPlusSquare} size="xs" />
            <NavLink to="/bloodform">For Blood</NavLink>

            </div>
            <div>
            <FontAwesomeIcon  className='hPlus' icon={faPlusSquare} size="xs" />
            <NavLink to="/oxygenform">For Oxygen</NavLink>

            </div>
        </div>
        <NavLink to="/login" className="navlink">Login</NavLink>
    </div>
    {/* <div className='wccenter2'>
        <NavLink to="/login" className="navlink">Login</NavLink>

    </div> */}
    </>
  )
}
