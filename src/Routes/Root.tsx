import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import Price from "../pages/Price/Price";

function Root() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/price" element={<Price />}></Route>
      <Route path="*" element={<div>error 404</div>}></Route>
    </Routes>
  );
}

export default Root;
