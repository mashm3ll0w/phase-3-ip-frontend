import { useNavigate } from "react-router-dom";

export default function Route_({ route }) {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/routes/${id}`);
  }

  return (
    <>
      <tr onClick={() => handleClick(route.id)}>
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
