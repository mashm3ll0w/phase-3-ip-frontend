import { useState, useEffect } from "react";

export default function Drivers() {
  const [drivers, setDrivers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9292/drivers")
      .then((res) => res.json())
      .then((data) => setDrivers(data))
      .catch((err) => console.log("Error :", err.message));
  }, []);

  return (
    <div className="main-content container-fluid" style={{"width": "20%"}}>
      <h1>Drivers</h1>
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
          {drivers &&
            drivers.map((driver) => (
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
