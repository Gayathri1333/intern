import React from "react";
import { Link } from "react-router-dom";
import sevenwonders from "./sevenwonders.PNG";
import axios from "axios";
import { useState } from "react";
function GameCard3() {
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
      <img className="card-img-top" src={sevenwonders} alt="seven wonders" />
      <div className="card-body">
        <h4 className="card-title">Seven Wonders</h4>
        <Link to="/user/sevenwonders" className="stretched-link"></Link>
      
      </div>
    </div>
  );
}

export default GameCard3;