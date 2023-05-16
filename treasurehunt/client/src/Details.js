import React from "react";
import { useState } from "react";
import axios from "axios";
function Details()
{
    const[username,setusername]=useState("");
    const[email,setemail]=useState("");
    const[userList,setUserList]=useState([]);

    const data = () =>{
   
      axios.get('http://localhost:3001/getData').then((response)=>{
        setUserList(response.data);
       
      });
    }; 
    return(
        <div>
            <button onClick={data}>Show all the registered users</button>
            {userList.map((val,key)=>
            {
               return <div className="user">
                <h1>{val.username}</h1>
                <br/><br/>
                <h2>{val.email}</h2>
               </div>
            })}
        </div>
    );
}
export default Details;