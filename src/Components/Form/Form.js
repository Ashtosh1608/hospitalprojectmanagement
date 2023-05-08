import React from "react";
import "./Form.css";

// import {useNavigate}
import { useState } from "react";
import { useHistory } from "react-router";
import { addTodo, deleteTodo, removeTodo } from "../../actions/index";

export const Form = ({ setData }) => {
  const history = useHistory();
  const [bloodData, setBloodData] = useState([
    {
      id: 1,
      type: "request for blood",
      bloodType: "A+",
      username: "ash",
      email: "ash@gmail.com",
    },
    {
      id: 2,
      type: "request for blood",
      bloodType: "B+",
      username: "2ash",
      email: "ash2@gmail.com",
    },
  ]);
  const [type, setType] = useState("");
  const [username, setUsername] = useState("ashtoshhh");
  const [bloodType, setBloodType] = useState("");
  const [email, setEmail] = useState("aaa");
  console.log("data of thiiis page are type  ::: ", type);
  console.log("data of thiiis page are bloodtype ::: ", bloodType);
  console.log("data of thiiis page are email  ::: ", email);
  console.log("data of thiiis page are username  ::: ", username);
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={submitForm} className="Blform">
        <h3>Blood</h3>
        <label for="city">Type</label>

        <select
          name="type"
          placeholder="blood"
          value={type}
          onChange={(e) => setType(e.target.value)}
          id="type"
        >
          <option value="Request For Blood">Request For Blood</option>
          <option value="Donate Blood">Donate Blood</option>
        </select>

        <label htmlFor="type">Blood Type</label>
        <select
          name="city"
          placeholder="city"
          value={bloodType}
          onChange={(e) => setBloodType(e.target.value)}
          id="cars"
        >
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="name"
        />

        <label for="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />

        <button>Submit</button>

        {/* {bloodData.map(dta => (
                    <Display id={dta.id} key={dta.id} type={dta.type} bloodType={dta.bloodType} username={dta.username} email={dta.email} />
                    // <h1>{dta.email}</h1>
                ))} */}
      </form>
    </>
  );

  function submitForm(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    setData(formData);
    history.push("/display");
  }
};
