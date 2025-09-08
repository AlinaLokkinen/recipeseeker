import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Categorylist from "./components/Categorylist";
import Recipelist from "./components/Recipelist";

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Navbar />
        <Routes>
          <Route path="/categories" element={<Categorylist />} />
          <Route path="/categories/:name" element={<Recipelist />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
