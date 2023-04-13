import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateRoute() {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    vehicle_type: "",
    registration: "",
    capacity: "",
    driver: "",
    passengers: ""
  });
//   const [drivers, setDrivers] = useState(null);
//   const [vehicles, setVehilces] = useState(null);
  const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:9292/drivers")
//       .then((res) => res.json())
//       .then((data) => setDrivers(data))
//       .catch((err) => console.log("Error: ", err.message));
//   }, []);

//   useEffect(() => {
//     fetch("http://localhost:9292/vehicles")
//       .then((res) => res.json())
//       .then((data) => setVehilces(data))
//       .catch((err) => console.log("Error: ", err.message));
//   }, []);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/routes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => navigate(`/routes/${data.id}`))
      .catch((err) => console.log("Error: ", err.message));
  }

  return (
    <>
      <div className="main-content container-fluid">
        <h3>Route Details</h3>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label for="inputOrigin" className="form-label">
              Origin
            </label>
            <input
              name="origin"
              type="text"
              className="form-control"
              id="inputOrigin"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label for="inputDestination" className="form-label">
              Destination
            </label>
            <input
              name="destination"
              type="text"
              className="form-control"
              id="inputDestination"
              onChange={handleChange}
            />
          </div>
          <h3>Vehicle Details</h3>
          <div className="col-md-4">
            <label for="inputVehType" className="form-label">
              Vehicle Type
            </label>
            <input
              name="vehicle_type"
              type="text"
              className="form-control"
              id="inputVehType"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label for="inputReg" className="form-label">
              Registration
            </label>
            <input
              name="registration"
              type="text"
              className="form-control"
              id="inputReg"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label for="inputCapacity" className="form-label">
              Capacity
            </label>
            <input
              name="capacity"
              type="number"
              className="form-control"
              id="inputCapacity"
              onChange={handleChange}
            />
          </div>
          <h3>Driver Details</h3>
          <div className="col-md-4">
            <label for="inputDriver" className="form-label">
              Driver's Name
            </label>
            <input
              name="driver"
              type="text"
              className="form-control"
              id="inputDriver"
              onChange={handleChange}
            />
          </div>
          <h3>Passengers Details</h3>
          <div className="col-md-12">
            <div className="input-group">
              <span className="input-group-text">Passenger Names'</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
                name="passengers"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          {/* <div className="col-md-6">
            <label for="inputVehicle" className="form-label">
              Select Vehicle
            </label>
            <select
              name="vehicle_id"
              id="inputVehicle"
              className="form-select"
              onChange={handleChange}
            >
              <option selected disabled>
                Choose Vehicle...
              </option>
              {vehicles &&
                vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.vehicle_type}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-md-6">
            <label for="inputDriver" className="form-label">
              Select Driver
            </label>
            <select
              name="driver_id"
              id="inputDriver"
              className="form-select"
              onChange={handleChange}
            >
              <option selected disabled>
                Choose Driver...
              </option>
              {drivers &&
                drivers.map((driver) => (
                  <option key={driver.id} value={driver.id}>
                    {driver.name}
                  </option>
                ))}
            </select>
          </div> */}
          {/* <div className="col-md-6">
          <select
          className="form-select"
            multiple
            aria-label="multiple select example"
          >
            <option selected disabled>Select Passengers</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div> */}
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
      </div>
    </>
  );
}
