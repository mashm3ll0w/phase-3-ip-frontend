import { useState, useEffect } from "react";
import Search from "./Search";

export default function Passengers() {
  const [passengers, setPassengers] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://movcon-app-api.onrender.com/passengers")
      .then((res) => res.json())
      .then((data) => setPassengers(data))
      .catch((err) => console.log("Error :", err.message));
  }, []);

  const filteredPax =
    passengers &&
    passengers.filter((passenger) => {
      if (search !== "") {
        return passenger.name.toLowerCase().includes(search.toLowerCase());
      } else {
        return passenger;
      }
    });

  return (
    <div className="main-content container-fluid">
      <div className="search-container">
        <h1>Passengers</h1>
        <Search search={search} setSearch={setSearch} />
      </div>
      <table className="table border-danger table-hover table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Passenger Name</th>
            <th scope="col">Role</th>
            <th scope="col">Vehicle</th>
            <th scope="col">Registration</th>
            <th scope="col">Current Location</th>
            <th scope="col">Destination</th>
          </tr>
        </thead>
        <tbody>
          {filteredPax &&
            filteredPax.map((passenger) => (
              <tr key={passenger.id}>
                <th scope="row">{passenger.id}</th>
                <td>{passenger.name}</td>
                <td>{passenger.role}</td>
                <td>{passenger.vehicle.vehicle_type}</td>
                <td>{passenger.vehicle.registration}</td>
                <td>{passenger.vehicle.route.origin}</td>
                <td>{passenger.vehicle.route.destination}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
