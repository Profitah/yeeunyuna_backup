import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Style/Home/Todo.css";
import "../Nav/Nav.jsx";

const MakeRoutine = () => {

  return (
    <div className="TodoSection1Wrap">
      <p>아직 할 일이 없습니다</p> 
      <Link to="/Routine">
        <p id="goRoutine">루틴을 만들러 이동해 볼까요?</p>
      </Link>
    </div>
  );
};

export default MakeRoutine;
