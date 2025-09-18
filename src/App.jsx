import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Categorylist from "./components/Categorylist";
import Recipelist from "./components/Recipelist";
import Recipe from "./components/Recipe";
import Randomizer from "./components/Randomizer";

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categorylist />} />
        <Route path="/categories/:name" element={<Recipelist />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/randomizer" element={<Randomizer />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
