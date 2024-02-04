import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login1 from "./Pages/Login/Login1";
import Login2 from "./Pages/Login/Login2";
import Login3 from "./Pages/Login/Login3";
import Login4 from "./Pages/Login/Login4";
import Home from "./Pages/Home/Home";
import Routine from "./Pages/Routine/Routine";
import MyPage from "./Pages/Mypage/MyPage";
import Map from "./Pages/Map/Map";


import "./Styles/Login/Login.css";
import "./Styles/Routine/Routine.css";

const root = document.getElementById("root");
const rootElement = createRoot(root);


rootElement.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login1 />} />
      <Route path="/login2" element={<Login2 />} />
      <Route path="/login3" element={<Login3 />} />
      <Route path="/login4" element={<Login4 />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Routine" element={<Routine />} />
      <Route path="/MyPage" element={<MyPage />} />
      <Route path="/Map" element={<Map />} />
    </Routes>
  </Router>,
);
