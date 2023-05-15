import {useEffect,useState} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
function ClueEvents(props) {
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
        <div className="my-5 text-right">
            <Link to={{  pathname: "/allclues" ,state:events}} className="text-dark text-right">
            <button
                type="submit"
                className="btn btn-dark align-items-right"
                style={{ backgroundColor: "black" }}
            >
                See all clues
            </button>
            </Link>
        </div>
);
}
export default ClueEvents;