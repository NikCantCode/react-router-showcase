import "./App.css";
import Navbar from "./Navbar";
import Dog from "./pages/Dog";
import Hamster from "./pages/Hamster";
import Cat from "./pages/Cat";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Dog" element={<Dog />} />
          <Route path="/Hamster" element={<Hamster />} />
          <Route path="/Cat" element={<Cat />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
