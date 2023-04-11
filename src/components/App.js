import NavBar from "./NavBar";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import RouteDetails from "./RouteDetails";
import Vehicles from "./Vehicles";
import Passengers from "./Passengers";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/routes/:id" element={<RouteDetails />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/passengers" element={<Passengers />} />
      </Routes>
    </div>
  );
}
