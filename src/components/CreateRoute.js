import { useState, useEffect } from "react";
export default function CreateRoute() {
  const [drivers, setDrivers] = useState(null);
  const [vehicles, setVehilces] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9292/drivers")
      .then((res) => res.json())
      .then((data) => setDrivers(data))
      .catch((err) => console.log("Error: ", err.message));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/vehicles")
      .then((res) => res.json())
      .then((data) => setVehilces(data))
      .catch((err) => console.log("Error: ", err.message));
  }, []);

  return (
    <>
      <h2>Create New Route</h2>
      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputOrigin" className="form-label">
            Origin
          </label>
          <input
            name="origin"
            type="text"
            className="form-control"
            id="inputOrigin"
          />
        </div>
        <div className="col-md-6">
          <label for="inputDestination" className="form-label">
            Destination
          </label>
          <input
            name="destination"
            type="password"
            className="form-control"
            id="inputDestination"
          />
        </div>
        <div className="col-md-6">
          <label for="inputVehicle" className="form-label">
            Select Vehicle
          </label>
          <select id="inputVehicle" className="form-select">
            <option selected>Choose Vehicle...</option>
            {vehicles && vehicles.map(vehicle => <option key={vehicle.id} value={vehicle.id}>{vehicle.vehicle_type}</option>)}
          </select>
        </div>
        <div className="col-md-6">
          <label for="inputDriver" className="form-label">
            Select Driver
          </label>
          <select id="inputDriver" className="form-select">
            <option selected>Choose Driver...</option>
            {drivers && drivers.map(driver => <option key={driver.id} value={driver.id}>{driver.name}</option>)}
          </select>
        </div>
        {/* <div className="col-12">
          <label for="inputDriver" className="form-label">
            Driver's Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="inputDriver"
            placeholder="Driver's Name"
          />
        </div>
        <div className="col-md-6">
          <label for="inputReg" className="form-label">
            Vehicle Registration
          </label>
          <input name="registration" type="text" className="form-control" id="inputReg" />
        </div>
        <div className="col-md-4">
          <label for="inputType" className="form-label">
            Vehicle Type
          </label>
          <input name="vehilce_type" type="text" className="form-control" id="inputType" />
        </div>
        <div className="col-md-2">
          <label for="inputCapacity" className="form-label">
            Capacity
          </label>
          <input name="capacity" type="number" className="form-control" id="inputCapacity" />
        </div> */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create Trip
          </button>
        </div>
      </form>
    </>
  );
}
