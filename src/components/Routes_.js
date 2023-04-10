import Route_ from "./Route_"

export default function Routes_({routes}) {
  return (
    <>
      <table className="table border-danger table-hover table-striped-columns">
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
            {routes.map(route => <Route_ key={route.id} route={route}/>)}
        </tbody>
      </table>
    </>
  );
}
