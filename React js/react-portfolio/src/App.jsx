import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";

function App() {
  return (
    <>
      <header className="">
        <nav className="nav-bar">
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/about" className="about">
            About
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </header>
      <div></div>
    </>
  );
}

export default App;
