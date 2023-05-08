import React from 'react'
import "./Form2.css"
import {
    NavLink, useHistory
} from "react-router-dom";

export const Form2 = () => {
    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className='Oxform' method='POST'>
                <h3>Oxygen</h3>
                <label for="city">Type</label>

                <select name="city" placeholder='city' id="cars">
                    <option value="volvo">Request For Oxygen Cylinder</option>
                    <option value="saab">Donate Oxygen Cylindeer</option>
                </select>

                <label for="city">City</label>
                <select name="city" placeholder='city' id="cars">
                    <option value="volvo">Phagwara</option>
                    <option value="saab">Jalandhar</option>
                    <option value="mercedes">Delhi</option>
                    <option value="audi">Ludhiyana</option>
                    <option value="audi">Lucknow</option>
                    {/* <option value="audi">O-</option>
                    <option value="audi">AB+</option>
                    <option value="audi">AB-</option> */}
                </select>
                <label for="username">Username</label>
                <input type="text" placeholder="Name" name='name' id='name' />

                <label for="email">Email</label>
                <input type="text" placeholder="Email" id="email" name='email' />



                <button >Log In</button>
                <div className="social">
                    {/* <div className='go'>

                        <NavLink to="/register" className="kkkk">Register</NavLink>
                    </div> */}
                    {/* <div className="go"><i className="fab fa-google"></i>  Google</div> */}
                    {/* <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div> */}
                </div>
            </form>
        </>
    )
}
