import React from "react";
import AdminGameCard1 from "./AdminGameCard1";
import Timer from "./Timer";
import AdminGameCard2 from "./AdminGameCard2";
import AdminGameCard3 from "./AdminGameCard3";
function AdminCardEvent()
{
    return (
        <div>
      <div className="container text-center my-5">
        <br/>
          <Timer/>
          <div className="row d-flex justify-content-around my-5 pt-5">
            
             <AdminGameCard1/>
             <br/>
             <AdminGameCard2/>
             <br/>
             <AdminGameCard3/>
          </div>
      </div>
      
      </div>
      );
}
export default AdminCardEvent;