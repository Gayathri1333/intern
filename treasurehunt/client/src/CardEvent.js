import React from "react";
import GameCard1 from "./GameCard1";
import GameCard2 from "./GameCard2";
import GameCard3 from "./GameCard3";
import Timer from "./Timer";
function CardEvent()
{
    return (
        <div>
      <div className="container text-center my-5">
        <br/>
          <Timer/>
          <div className="row d-flex justify-content-around my-5 pt-5">
            
             <GameCard1/>
             <br/>
             <GameCard2/>
             <br/>
             <GameCard3/>
          </div>
      </div>
      
      </div>
      );
}
export default CardEvent;