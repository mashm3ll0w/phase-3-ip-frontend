export default function RouteDetailSpec({vehicle}) {
  return (
    <div className="card mb-6">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-header gp-item">
              <p>Vehicle Type:</p>
              <p>vehicle.vehicle_type</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item gp-item">
                <p>Registration:</p>
                <p>vehicle.registration</p>
              </li>
              <li className="list-group-item gp-item">
                <p>Driver:</p>
                <p>vehicle.driver.name</p>
              </li>
              <li className="list-group-item gp-item">
                <p>Senior Passenger:</p>
                <p>Passenger</p>
              </li>
              <li className="list-group-item gp-item">
                <p>Escort:</p>
                <p>Escort</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-header">Passengers</div>
          <div className="card-body pax-body">
            <p className="card-text">List of pax</p>
          </div>
        </div>
      </div>
    </div>
  );
}
