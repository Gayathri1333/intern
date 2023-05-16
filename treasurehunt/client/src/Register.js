import React, { useState } from "react";
import axios from "axios";
function Register()
{
  const[password,setpassword]=useState("");
  const[email,setemail]=useState("");

    const register = () =>{
   
      axios.post('http://localhost:3001/register',{
        email:email,
        password:password,

      }).then(()=>{
        console.log("success");
       
      });
    }; 
    return (
        <div>
              <video loop autoPlay muted id="bg-video">
                  <source src={require("./pink.mp4")} type="video/mp4"/>
              </video>
          <br></br><br></br><br></br>
         <div className="container">
          <div className="row pt-3"> 
          <div className="col-sm-3 col-md-4"></div>
            <div className="col-12 col-md-4" >
              <div className="card shadow h-100">
                      <h4 className="text-center">Registration Form</h4>
                      <img src={require("./treasure.jpg")} width="200" height="300" className="center"/>
                  
                      <div className="form-group px-5 colours"> 
                        <input type="text" className="form-control" name="name" placeholder="email"
                        onChange={(e)=>{
                          setemail(e.target.value);}} 
                          required/>
                      </div>  
  
                      <div className="form-group px-5 colours">
                         <input type="password" className="form-control" name="pwd" placeholder="Password" 
                         onChange={(event)=>{
                          setpassword(event.target.value);}}  
                          required/>
                      </div> 
  
  
                      <div className="p-3 px-5">
                          <div className="text-center">
                            <button type="submit" className="btn btn-primary btn-block" onClick={register} >Sign UP</button>
                          </div>
                      </div>
                     
              </div>
            </div>
            
        </div>
       
            </div>
      </div>
      
    );
  }
  
  export default Register;