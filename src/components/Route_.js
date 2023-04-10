export default function Route_({route}) {
  return (
    <>
      <tr>
        <th scope="row">{route.id}</th>
        <td>{route.origin}</td>
        <td>{route.destination}</td>
        <td>{new Date(route.created_at).toLocaleDateString("en-UK")}</td>
        <td>{route.passengers.length}</td>
        <td>{route.vehicles.length}</td>
      </tr>
    </>
  );
}
