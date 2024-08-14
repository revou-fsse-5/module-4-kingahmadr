import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPages from "./Pages/LoginPages";
import RegisterPages from "./Pages/RegisterPage";
import CumulativeDataForms from "./components/CumulativeDataForms";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPages />}></Route>
          <Route path="/login" element={<LoginPages />}></Route>
          {/* <Route path="/register" element={<CumulativeDataForms />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
