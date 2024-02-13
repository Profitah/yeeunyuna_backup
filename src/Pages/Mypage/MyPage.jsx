import React from "react";
import "../../Style/Mypage/MyPage.css";
import NavBar from "../Nav/Nav.jsx";
import { useNavigate } from 'react-router-dom';
import { GoChevronRight } from "react-icons/go";

const MyPage = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/Profile');
  };

  const goToRoutineReset = () => {
    navigate('/Reset');
  };

  return (
    <div className="MypageWrap">
      <NavBar />
      <div>
        <div className="mypagetxt">My Page</div>
        <div className="mypagenavi">
          <div className="mypagetxtnavi">개인정보</div>
          <GoChevronRight onClick={goToProfile} color="gray"/>
          </div>
        <div className="mypagenavi">
          <div className="mypagetxtnavi">루틴 초기화</div> 
          <GoChevronRight onClick={goToRoutineReset} color="gray"/>
          </div>
      </div>
    </div>
  );
};

export default MyPage;
