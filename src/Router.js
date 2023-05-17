import React from "react";
import { NavBar } from "./Component/Nagivation/NavBar";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./Component/LandingPage/LandingPage";
export const Router = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};
