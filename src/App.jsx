import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "../src/pages/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rework from "./pages/Rework";
import AllRequest from "./pages/Allrequest";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rework" element={<Rework />} />
          <Route path="/allrequest" element={<AllRequest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
