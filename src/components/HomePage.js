import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Routes_ from "./Routes_";

export default function HomePage() {
  const [routes, setRoutes] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:9292/routes")
      .then((res) => res.json())
      .then((data) => setRoutes(data))
      .catch((err) => console.log("Error: ", err.message));
  }, []);

  const btnStyle = {
    "margin": "50px auto -45px",
  }


  return (
    <>
      <div className="col text-center" style={btnStyle}>
        <button
          className="btn btn-primary"
          type="button"
          name="menu-button"
          onClick={() => navigate("/routes/new")}
        >
          NEW ROUTE
        </button>
      </div>
      <div className="main-content container-fluid">
        <h1>Routes</h1>
        <Routes_ routes={routes} />
      </div>
    </>
  );
}
