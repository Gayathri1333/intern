import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import schoollife from "./schoollife.PNG";
function GameCard1() {
  const[username,setusername]=useState("");
    const[email,setemail]=useState("");
    const[userList,setUserList]=useState([]);

    const data = () =>{
   
      axios.get('http://localhost:3001/getData').then((response)=>{
        setUserList(response.data);
        setemail(response.data.email);
       
      });
    }; 
  return (
    <div className="card shadow bg-light h-100">
      <img className="card-img-top" src={schoollife} alt="school" />
      <div className="card-body">
        <h4 className="card-title">School</h4>
        <Link to="/user/schoollife" className="stretched-link"></Link>
      
      </div>
    </div>
  );
}

export default GameCard1;