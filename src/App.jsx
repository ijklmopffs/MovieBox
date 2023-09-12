import "./App.css";
import { Routes, Route } from "react-router-dom";
import Moviepage from "./pages/Moviepage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/movie/:id" element={<Moviepage />} />
      </Routes>
    </>
  );
}

export default App;
