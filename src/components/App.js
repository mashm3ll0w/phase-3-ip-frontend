import NavBar from "./NavBar";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
