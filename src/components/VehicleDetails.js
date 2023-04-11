import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VehicleDetails() {
  let [vehicle, setVehicle] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/vehicles/${id}`)
      .then((res) => res.json())
      .then((data) => setVehicle(data))
      .catch((err) => console.log("Error: ", err.message));
  }, [id]);

  if (vehicle == null){
    return 'Loading...';
  }
  return (
    <div className="main-content container-fluid">
      <h2>Vehicle Details</h2>
      <table className="table border-danger table-hover table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th scope="col">Vehicle Type</th>
            <th scope="col">Registration No.</th>
            <th scope="col">Capacity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{vehicle.vehicle_type}</td>
            <td>{vehicle.registration}</td>
            <td>{vehicle.capacity} Passengers</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h2>Vehicle Movement Details</h2>
      <table className="table border-danger table-hover table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Origin</th>
            <th scope="col">Destination</th>
            <th scope="col">Driver</th>
            <th scope="col">Passengers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{new Date(vehicle.route.created_at)}</td>
            <td>{vehicle.route.origin}</td>
            <td>{vehicle.route.origin}</td>
            <td>{vehicle.driver.name}</td>
            <td>{vehicle.passengers.length} Passengers</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
