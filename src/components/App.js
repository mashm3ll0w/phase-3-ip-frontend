import NavBar from "./NavBar";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import RouteDetails from "./RouteDetails";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/routes/:id" element={<RouteDetails />} />
      </Routes>
    </div>
  );
}
