import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:9292/vehicles")
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch((err) => console.log("Error: ", err.message));
  }, []);

  return (
    <div className="main-content container-fluid">
      <h1>Vehicles</h1>
      <table className="table border-danger table-hover table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Vehicle Type</th>
            <th scope="col">Registration No.</th>
            <th scope="col">Capacity</th>
            <th scope="col">Current Location</th>
            <th scope="col">Destination</th>
          </tr>
        </thead>
        <tbody>
          {vehicles &&
            vehicles.map((vehicle) => (
              <tr
                key={vehicle.id}
                onClick={() => navigate(`/vehicles/${vehicle.id}`)}
              >
                <th scope="row">{vehicle.id}</th>
                <td>{vehicle.vehicle_type}</td>
                <td>{vehicle.registration}</td>
                 <td>{vehicle.capacity}</td>
                <td>{vehicle.route.origin}</td>
                <td>{vehicle.route.destination}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
