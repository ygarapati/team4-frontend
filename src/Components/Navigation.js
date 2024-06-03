import React from "react";
import "../styles/navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav-bg text-white" style={{ minHeight: "100vh" }}>
      <div className="title">
        {" "}
        Inventory and Expense Tracker For Small and Mid range Businees
      </div>
      <div style={{ paddingLeft: "12%", marginTop: "10%" }}>
        <div className="nav-links">
          <Link to="/" className="nav-item">
            Dashboard{" "}
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/expense" className="nav-item">
            Expense
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/income" className="nav-item">
            Income
          </Link>
        </div>
      </div>
      <div
        style={{
          marginLeft: "17px",
          marginRight: "17px",
          position: "absolute",
          bottom: "0",
        }}
      >
        <div className="hz-rule"></div>
        <div
          className="d-flex mt-2 mb-2"
          style={{ paddingLeft: "30px", paddingRight: "30px" }}
        >
          <div className="profile-icon">IN</div>
          <div
            style={{ textAlign: "center", paddingTop: "5%", width: "110px" }}
          >
            UserName
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
