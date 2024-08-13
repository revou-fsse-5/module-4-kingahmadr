import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPages from "./Pages/LoginPages";
import RegisterPages from "./Pages/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPages />}></Route>
          <Route path="/login" element={<LoginPages />}></Route>
          <Route path="/register" element={<RegisterPages />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
