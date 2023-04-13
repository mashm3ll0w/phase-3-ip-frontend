import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateRoute() {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    vehicle_type: "",
    registration: "",
    capacity: "",
    driver: "",
    passengers: "",
  });

  const navigate = useNavigate();

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
        Accept: "application/json",
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
          <h3>Passengers Details <span style={{"font-size": "15px"}}>(***append <strong>-escort</strong> and <strong>-senior</strong> for the escort and senior passengers)</span></h3>
          <div className="col-md-12">
            <div className="input-group">
              <span className="input-group-text">Passenger Names'</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
                name="passengers"
                onChange={handleChange}
                placeholder="john-escort,jack-senior,kyle,mark,lola..."
              ></textarea>
            </div>
          </div>
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
