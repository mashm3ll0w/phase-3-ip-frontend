import React from "react";

export default function HomePage() {
  return (
    <div className="main-content container-fluid">
      {/* <div className="row-headings">
          <h3>Rt</h3>
          <h3>Origin</h3>
          <h3>Destination</h3>
          <h3>Date</h3>
          <h3>Passengers</h3>
          <h3>Vehicles</h3>
        </div>
        <br />
        <div className="route-details">
            <p>1</p>
            <p>Isiolo</p>
            <p>Nairobi</p>
            <p>12-04-2023</p>
            <p>13</p>
            <p>2</p>
        </div> */}
      <table class="table border-danger table-hover table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Origin</th>
            <th scope="col">Destination</th>
            <th scope="col">Date</th>
            <th scope="col">Passengers</th>
            <th scope="col">Vehicles</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Nairobi</td>
            <td>Isiolo</td>
            <td>11-04-2023</td>
            <td>23</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Nairobi</td>
            <td>Isiolo</td>
            <td>11-04-2023</td>
            <td>23</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Nairobi</td>
            <td>Isiolo</td>
            <td>11-04-2023</td>
            <td>23</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Nairobi</td>
            <td>Isiolo</td>
            <td>11-04-2023</td>
            <td>23</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
