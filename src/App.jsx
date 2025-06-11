import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import CanvasCursor from "./components/CanvasCursor";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <CanvasCursor />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
