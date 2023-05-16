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
          <p>There are 3 images and go to any of the image based on your clue and hover on the one which you feel correct for the clue and on that image you will getting the next clue </p>
          <p>Here there are minimum 2 deadends if there is any deadend then start from other clue or the same clues other relevant image if present in the image</p>
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