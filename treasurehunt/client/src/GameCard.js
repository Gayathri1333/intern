import React from "react";
import { Link } from "react-router-dom";
import treasure from "./treasure.jpg";
import axios from "axios";
import { useState } from "react";
function GameCard(props) {
  const[email,setemail]=useState("");
  const[userList,setUserList]=useState([]);

  const data = () =>{
 
    axios.get('http://localhost:3001/getData').then((response)=>{
      setUserList(response.data);
      setemail(response.data.email);
     
    });
  }; 
  console.log(email)
    return (
      <div className="card shadow bg-light h-50">
        <img className="card-img-top" src="https://wallpapercave.com/wp/wp4363477.jpg" alt="hr" />
        <div className="card-body">
          <h4 className="card-title">Treasure Hunt</h4>
          <Link to="/user/games" className="stretched-link"></Link>
      
        </div>
      </div>
    );
  }
  
  export default GameCard;