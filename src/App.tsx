import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPages from "./Pages/LoginPages";
import RegisterPages from "./Pages/RegisterPage";

import MultiStepForm from "./modules/MultiStepForm";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPages />}></Route>
          <Route path="/login" element={<LoginPages />}></Route>
          <Route path="/register" element={<CumulativeDataForms />}></Route>
        </Routes>
      </BrowserRouter> */}
      <div className="App">
        <MultiStepForm />
      </div>
    </>
  );
}

export default App;
