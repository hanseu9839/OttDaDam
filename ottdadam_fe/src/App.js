import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import OddMain from "./component/OddMain/OddMain";
import OddIntro from "./component/OddIntro/OddIntro";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OddIntro />}></Route>
          <Route path="/ottdadam" element={<OddMain />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
