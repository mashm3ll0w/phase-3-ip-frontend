import { useState, useEffect } from "react";
import Search from "./Search";

export default function Drivers() {
  const [drivers, setDrivers] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/drivers")
      .then((res) => res.json())
      .then((data) => setDrivers(data))
      .catch((err) => console.log("Error :", err.message));
  }, []);

  const filteredDrivers =
    drivers &&
    drivers.filter((passenger) => {
      if (search !== "") {
        return passenger.name.toLowerCase().includes(search.toLowerCase());
      } else {
        return passenger;
      }
    });

  return (
    <div className="main-content container-fluid" style={{ width: "20%" }}>
      <div className="search-container">
        <h1>Drivers</h1>
        <Search search={search} setSearch={setSearch} />
      </div>
      <table className="table border-danger table-hover table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            {/* <th scope="col">Current Vehicle</th>
            <th scope="col">Registration</th>
            <th scope="col">Origin</th>
            <th scope="col">Destination</th> */}
          </tr>
        </thead>
        <tbody>
          {filteredDrivers &&
            filteredDrivers.map((driver) => (
              <tr key={driver.id}>
                <th scope="row">{driver.id}</th>
                <td>{driver.name}</td>
                {/* <td>{driver.vehicles[0].vehicle_type}</td>
                <td>{driver.vehicles[0].registration}</td>
                <td>{driver.routes[0].origin}</td>
                <td>{driver.routes[0].destination}</td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
