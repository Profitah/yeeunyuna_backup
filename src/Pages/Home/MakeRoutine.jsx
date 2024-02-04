import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import "../../Styles/Home/Home.css";

const MakeRoutine = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };



  return (
    <div className="HomeWrap">
      <div className="Nav">
        <AiOutlineUser />
        <FiAlignJustify onClick={toggleNav} />
        {isNavVisible && (
          <ul className="nav-menu">
            <li>홈</li>
            <li>루틴</li>
            <li>전문가와의 상담</li>
            <li>고민 노크</li>
          </ul>
        )}
      </div>
    <p>아침루틴</p>
    <p>아직 트랙이 없습니다</p> 
    <Link to="/Routine">
      <p id="goRoutine">루틴을 만들러 이동해 볼까요?</p>
    </Link>
    </div>
  );
};

export default MakeRoutine;
