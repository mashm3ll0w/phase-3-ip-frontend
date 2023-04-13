import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Routes_ from "./Routes_";
import Filter from "./Filter";

export default function HomePage() {
  const [routes, setRoutes] = useState([]);
  const [filter, setFilter] = useState({
    place: "",
    name: ""
  })
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:9292/routes")
      .then((res) => res.json())
      .then((data) => setRoutes(data))
      .catch((err) => console.log("Error: ", err.message));
  }, []);

  const btnStyle = {
    "margin": "50px auto -45px",
    "display": "flex",
    "justify-content": "center",
    "gap": "30px",
  }

  const filteredRoutes = routes.filter(route => {
    if (filter.place === ""){
        return route
    }
    else if (filter.place === "origin"){
        return route.origin.toLowerCase().includes(filter.name.toLowerCase())
    }
    else if (filter.place === "destination"){
       return route.destination.toLowerCase().includes(filter.name.toLowerCase())
    }
  })

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
        <Filter filter={filter} setFilter={setFilter}/>
      </div>
      <div className="main-content container-fluid">
        <h1>Routes</h1>
        <Routes_ routes={filteredRoutes}/>
      </div>
    </>
  );
}
