import React from "react";
import { useState,useEffect } from "react";
import Axios from "axios";
import schoollife from "./schoollife.PNG";
function Image1()
{
  const[clues,setClues]=useState([]);
  const [x,setX]=useState(1);
  const Display = ()=>{
    Axios.get('http://localhost:3001/getClues').then((response)=>{
      console.log(response.data);
      setClues(response.data);
    }).catch(err=>{
      console.log(err)
    });
  };
  useEffect(()=>{
    Display();
   },[])
    return(
        <div className="row justify-content-center">
        <div className="col-12 col-md-6">
            <img src={schoollife} alt="school" className="w-100"  usemap="#image-map"/>

            <map name="image-map">
            <area target="_blank" alt="board" title="You mostly use me to make reels and see reels what am I?" href="" coords="148,32,200,67" shape="rect"/>
            <area target="_blank" alt="A" title="I am always running, but never get tired or hot. What am I?" href="" coords="175,248,216,300" shape="rect"/>            
            <area target="_blank" alt="bat" title="I have a plug but I’m not a sink,I can be mounted but I’m not a horse,I’m found in the living room but I’m not a sofa,I have a screen but I’m not a laptop,I have a remote control but I’m not a drone" href="http://link4.com" coords="460,150,480,170" shape="rect"/>
            <area target="_blank" alt="pen" title="I am the only prime number preceding a cube.Who am I?" href="http://link5.com" coords="227,269,343,300" shape="rect"/>
            </map>
        </div>
        </div>
    );
}
export default Image1;