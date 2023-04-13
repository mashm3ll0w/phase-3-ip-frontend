import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RouteDetailSpec from "./RouteDetailSpec"

export default function RouteDetails() {
  const [routeDetails, setRouteDetails] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9292/routes/${id}`)
      .then((res) => res.json())
      .then((data) => setRouteDetails(data))
      .catch((err) => console.log("Error: ", err.message));
  }, [id]);

  function handleDelete(id){
    fetch(`http://localhost:9292/routes/${id}`, {
        method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => navigate("/"))
      .catch((err) => console.log("Error: ", err.message));
  }

  return (
    <div className="route-details">
      <h1>Route Details</h1>
      <div className="route-buttons">
      <button type="button" className="btn btn-danger route-btn" onClick={() => handleDelete(routeDetails.id)}>DELETE ROUTE</button>
      </div>
      <hr />
      <div className="route-particulars">
        <h4>
          Origin:{" "}
          <span>
            <strong>{routeDetails.origin}</strong>
          </span>
        </h4>
        <h4>
          Destination:{" "}
          <span>
            <strong>{routeDetails.destination}</strong>
          </span>
        </h4>
        <h4>
          Date:{" "}
          <span>
            <strong>{new Date(routeDetails.created_at).toDateString()}</strong>
          </span>
        </h4>
      </div>
      <hr />
      <div className="container-fluid routes-container">
        {routeDetails.vehicles && routeDetails.vehicles.map( (vehicle) => <RouteDetailSpec key={vehicle.id} vehicle={vehicle}/>)}
      </div>
    </div>
  );
}
