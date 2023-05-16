import React from "react";
import { Link } from "react-router-dom";
import sevenwonders from "./sevenwonders.PNG";
function AdminGameCard3() {
  return (
    <div className="card shadow bg-light h-100">
      <img className="card-img-top" src={sevenwonders} alt="seven wonders" />
      <div className="card-body">
        <h4 className="card-title">Seven Wonders</h4>
        <Link to="/admin/sevenwonders" className="stretched-link"></Link>
      
      </div>
    </div>
  );
}

export default AdminGameCard3;