export default function RouteDetailSpec({ vehicle }) {
  let escort = vehicle.passengers.find((pax) => pax.role === "Escort");
  let seniorPassenger = vehicle.passengers.find(
    (pax) => pax.role === "Senior Passenger"
  );
  let passengers = vehicle.passengers.filter((pax) => pax.role === "Passenger");
  return (
    <div className="card mb-6 route-card">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-header gp-item">
              <p>Vehicle Type:</p>
              <p><strong>{vehicle.vehicle_type}</strong></p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item gp-item">
                <p>Registration:</p>
                <p><strong>{vehicle.registration}</strong></p>
              </li>
              <li className="list-group-item gp-item">
                <p>Driver:</p>
                <p><strong>{vehicle.driver.name}</strong></p>
              </li>
              <li className="list-group-item gp-item">
                <p>Senior Passenger:</p>
                <p><strong>{!seniorPassenger ? "No Senior Passenger" : seniorPassenger.name}</strong></p>
              </li>
              <li className="list-group-item gp-item">
                <p>Escort:</p>
                <p><strong>{!escort ? "No Escort" : escort.name}</strong></p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-header">Passengers</div>
          <div className="card-body">
            <ol className="pax-body">
                {passengers.length === 0 ? <p>No other passengers</p> : passengers.map(pax => <li key={pax.id}>{pax.name}</li>)}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
