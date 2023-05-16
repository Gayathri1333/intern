import React from "react";
import { Link } from "react-router-dom";
import schoollife from "./schoollife.PNG";
function AdminGameCard1() {
  return (
    <div className="card shadow bg-light h-100">
      <img className="card-img-top" src={schoollife} alt="school" />
      <div className="card-body">
        <h4 className="card-title">School</h4>
        <Link to="/admin/schoollife" className="stretched-link"></Link>
      
      </div>
    </div>
  );
}

export default AdminGameCard1;