import React from "react";
import { Link } from "react-router-dom";
import treasure from "./treasure.jpg";
function GameCard(props) {
    return (
      <div className="card shadow bg-light h-50">
        <img className="card-img-top" src="https://wallpapercave.com/wp/wp4363477.jpg" alt="hr" />
        <div className="card-body">
          <h4 className="card-title">Treasure Hunt</h4>
          <Link to="/home/games" className="stretched-link"></Link>
        
        </div>
      </div>
    );
  }
  
  export default GameCard;