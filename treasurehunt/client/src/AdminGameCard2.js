import React from "react";
import { Link } from "react-router-dom";
import sweethome from "./sweethome.PNG"
function AdminGameCard2() {
  return (
    <div className="card shadow bg-light h-100">
      <img className="card-img-top" src={sweethome} alt="sweet home" />
      <div className="card-body">
        <h4 className="card-title">Home</h4>
        <Link to="/admin/sweethome" className="stretched-link"></Link>
      
      </div>
    </div>
  );
}

export default AdminGameCard2;