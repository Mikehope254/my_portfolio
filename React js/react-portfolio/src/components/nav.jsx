import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <h1>My Portfolio</h1>
    </header>
  );
}
