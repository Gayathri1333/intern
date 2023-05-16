import React from "react";
import { Link } from "react-router-dom";
import sweethome from "./sweethome.PNG"
import axios from "axios";
import { useState } from "react";
function GameCard2() {
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
      <img className="card-img-top" src={sweethome} alt="sweet home" />
      <div className="card-body">
        <h4 className="card-title">Home</h4>
        <Link to="/user/sweethome" className="stretched-link"></Link>
      
      </div>
    </div>
  );
}

export default GameCard2;