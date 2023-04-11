import React from "react";
import { useState, useEffect } from "react";
import Routes_ from "./Routes_"

export default function HomePage() {
    const [routes, setRoutes] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/routes")
        .then(res => res.json())
        .then(data => setRoutes(data))
        .catch(err => console.log("Error: ", err.message))
    }, [])

  return (
    <div className="main-content container-fluid">
      <Routes_ routes={routes}/>
    </div>
  );
}
