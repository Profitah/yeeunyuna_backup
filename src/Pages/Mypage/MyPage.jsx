import React, { useState } from "react";
import "../../Styles/Home/Home.css";
import NavBar from "../Nav/Nav.jsx";

const MyPage = () => {

  return (
    <div className="MypageWrap">
       <NavBar />
      <div>
        <p>개인정보</p>
        <p>루틴 초기화</p>
      </div>
       

    </div>
  );
};

export default MyPage;
