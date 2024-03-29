import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import {useHistory} from "react-router-dom";
function Login()
{
  let history=useHistory();
  const[password,setpassword] = useState("");
  const[email,setemail]=useState("");
  const[loginstatus,setloginstatus] = useState("");

  const validation = () =>{
   
    axios.post('http://localhost:3001/validate',{
      password:password,
      email:email,
    }).then((response)=>{
      if(response.data.message){
        setloginstatus(response.data.message)
      }
      else if(response.data[0].email!=="gayathripabbisetty2003@gmail.com"){
        setloginstatus(response.data.email);
        history.push("/user")
      }
      else{
      
        setloginstatus(response.data[0].username);
        history.push('/admin')
      }
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
                      <img src={require("./treasure.jpg")} width="200" alt="" height="300" className="center"/>
                      <div className="px-5 text-center #dc3545"></div>
                      <div className="form-group px-5 colours"> 
                        <input type="text" className="form-control" name="name" placeholder="Enter Email"  onChange={(e)=>{
                             setemail(e.target.value);}} required/>
                      </div> 
                      <div className="px-5 text-center #dc3545">{loginstatus}</div>
                      <div className="form-group px-5 colours">
                         <input type="password" className="form-control" name="pwd" placeholder="Password" onChange={(e)=>{
                        setpassword(e.target.value);}}
                           required/>
                      </div> 
  
  
                      <div className="p-3 px-5">
                          <div className="text-center">
                            <button type="submit" className="btn btn-primary btn-block" onClick={validation}>Sign In</button>
                          </div>
                      </div>
                      <div className="form-group px-5"> <Link to="/forget" className="colours">Forget password?</Link> </div>
                      <div className="form-group px-5"> <Link to="/register" className="colours">Register</Link> </div>  
                </div>    
              </div>
            
        </div>
        <div className="row">
          <div className="col-*"></div>
        </div>
       </div>
      </div>
      
    );
  }
  
  export default Login;