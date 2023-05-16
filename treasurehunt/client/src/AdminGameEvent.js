import React from "react";
import GameCard from "./GameCard";
import AdminGameCard from "./AdminGameCard";
function AdminGameEvent()
{
    return (
        <div>
      <div className="container text-center my-5 pt-5">
        <br/>
          <div className="row d-flex justify-content-around my-5 pt-5">
            
             <AdminGameCard/>
          </div>
      </div>
      
      </div>
      );
}
export default AdminGameEvent;