import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./routes/Home";
import About from "./components/About";
import Bmi from "./components/BMItest";
import Map from "./components/Map";
import MainHome from "./components/mainHome";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/About" element={<About />} />
        <Route path="/Bmi" element={<Bmi />} />
        <Route path="/Map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
