import React, { useState, useEffect } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { createUserStart } from "../redux/action";
import {useNavigate} from 'react-router-dom';
// import { toast } from 'react-toastify';


export default function AddEdit() {

  const dispatch= useDispatch();
  const navigate =useNavigate();
  
  // let initialState = {
  //   name: "",
  //   email: "",
  //   phoneNumber: "",
  //   address: "",
  // };
  // const [userData, setUserData] = useState({
  //   name: "",
  //   email: "",
  //   phoneNumber: "",
  //   address: "",
  // });
  // let { name: userName, email, phoneNumber, address } = userData;

  const [userName, setuserName]=useState('');
  const [email, setEmail]=useState('');
  const [phoneNumber,setPhoneNumber]=useState('');
  const [address, setAddress]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Hnadle Submit", userName,email,phoneNumber,address);
    let userData={
      name: userName,
      email: email,
      phone: phoneNumber,
      address: address
    }
    if(userName && email && phoneNumber && address){
      dispatch(createUserStart(userData));
      // toast.success("New Contact Added!");
      setTimeout(()=>{
        navigate('/')
      },500)
    }
    
  };


  

  return (
    <div className="addUserPage">
     
      <h2>Add New Contact</h2>
      <label>Name:</label>
      <br />
      <input
        type="text"
        value={userName}
        required
        onChange={(e)=>setuserName(e.target.value)}
        placeholder="Please Enter your name"
      />
      <br />

      <label>Number:</label>
      <br />
      <input
        type="number"
        required
        placeholder="Please enter your number"
        value={phoneNumber}
        onChange={(e)=>setPhoneNumber(e.target.value)}
      />
      <br />

      <label>Email:</label>
      <br />
      <input
        type="email"
        required
        value={email}
        placeholder="Please enter your email"
        onChange={(e)=>setEmail(e.target.value)}
      />
      <br />

      <label>Address:</label>
      <br />
      <input
        type="text"
        required
        placeholder="Please enter your address"
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
      />
      <br />

      <br />
      <button onClick={handleSubmit}>Submit</button>
     
    </div>
  );
}
