import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Axios from "axios";
function ClueCard(props) {
  const [events,setEvents]=useState([]);
  const Display = ()=>{
    Axios.get('http://localhost:3001/getClues').then((response)=>{
      console.log(response.data);
      setEvents(response.data);
    }).catch(err=>{
      console.log(err)
    });
  };

 useEffect(()=>{
  Display();
 },[])
  return (
    <div>
        <h1>{events.ename}</h1>
    <div className="card shadow bg-light h-100">
      <div className="card-body">
        <h4 className="card-title">{events.cname}</h4>
        <p className="card-text">{events.cdesc}</p>
        <Link to={{pathname:`/clue/${events.cid}`,state:{event: events} }} className="stretched-link"></Link>
      </div>
      </div>
    </div>
  );
}

export default ClueCard;
