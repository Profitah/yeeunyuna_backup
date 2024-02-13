// (POST) dofarming.duckdns.org/api/v1/track (기분변경)
//PATCH dofarming.duckdns/api/v1/user/mood HTTP/1.1 (기분저장)
// GET /api/v1/user HTTP/1.1 (사용자 정보조회 )

import React, { useState, useEffect } from "react";
import HomeSection2 from "./HomeComponents/HomeSection2.jsx";
import HomeSection1 from "./HomeComponents/HomeSection1.jsx";
import NavBar from "../Nav/Nav";
import HomeHeader from "./HomeComponents/HomeHeader.jsx";

const Home = () => {
  const [routineData, setRoutineData] = useState(null);

  useEffect(() => {
    // 서버에서 루틴값을 받아오는 비동기 함수 호출
    fetchRoutineData()
      .then((data) => {
        setRoutineData(data);
      })
      .catch((error) => {
        console.error("루틴 데이터를 가져오는 중 오류가 발생했습니다:", error);
      });
  }, []);

  const fetchRoutineData = async () => {
    // 서버에서 루틴 데이터를 가져오는 비동기 함수 호출
    const response = await fetch("루틴 데이터를 가져오는 API 엔드포인트 URL");
    const data = await response.json();
    return data;
  };

  //토큰 가져오기
  const token = localStorage.getItem('authToken');



  return (
    <div>
      <div className="HomeWrap">
        <NavBar />
        <HomeHeader/>
        <HomeSection1 />
        <HomeSection2 />
      </div>
    </div>
  );
};

export default Home;
