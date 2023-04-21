import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Contact } from "./routes/Contact";
import { About } from "./routes/About";
import { Project } from "./routes/Project";
function App() {
  return (
   <>
    <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

    </Routes>
   </>
  );
}

export default App;
