import "./App.css";
import { getTeams } from "./services/getTeams.js";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import MainLayout from "./layout/MainLayout/MainLayout.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Schedule from "./pages/Schedule/Schedule.jsx";
import Stats from "./pages/Stats/Stats.jsx";
import Stadiums from "./pages/Stadiums/Stadiums.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/stadiums" element={<Stadiums />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
