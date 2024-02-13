//닉네임값 호출완성. 감정표현..? 패키지...?


import React, { useState, useEffect } from "react";
import "../../../Style/Home/Home.css";
import "../../../Style/Home/HomeModal.css";
import axios from "axios";

const HomeHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDiv, setSelectedDiv] = useState("");
  const [nickname, setNickname] = useState("");

  const token = localStorage.getItem("authToken");

  const updateMood = async (mood) => {
    try {
      const response = await axios.patch(
        "https://dofarming.duckdns.org/api/v1/user/mood",
        {
          mood: mood
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log("Mood updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating mood:", error);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get("https://dofarming.duckdns.org/api/v1/user", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const { nickname } = response.data;
      return nickname;
    } catch (error) {
      console.error("Error fetching user info:", error);
      return null;
    }
  };

  useEffect(() => {
    const getNickname = async () => {
      const nickname = await fetchUserInfo();
      if (nickname) {
        setNickname(nickname);
      }
    };
    getNickname();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);

    const selectedDivImage = getComputedStyle(
      document.querySelector(`.${selectedDiv}`)
    ).backgroundImage;
    document.querySelector(".Moodlets").style.backgroundImage =
      selectedDivImage;

    updateMood(selectedDiv);
  };

  const handleDivClick = (divNumber, mood) => {
    setSelectedDiv(mood);

    const selectedDivImage = getComputedStyle(
      document.querySelector(`.${divNumber}`)
    ).backgroundImage;
    document.querySelector(".Moodlets").style.backgroundImage =
      selectedDivImage;

    updateMood(mood);
  };

  return (
    <div className="HomeWrap">
      <div className="Content1">
        <div className="home_textbox">
          <p id="hello_user">{nickname}님 반가워요</p>
          <p id="fighting">오늘도 활기차게 하루를 시작해봐요!</p>
        </div>
        <div
          className="Moodlets"
          style={{ backgroundImage: `url("${selectedDiv}")` }}
          onClick={openModal}
        ></div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div
              className="div1"
              onClick={() => handleDivClick("div1", "HAPPY")}
              style={{ backgroundImage: 'url("/emotion1.png")' }}
            ></div>
            <div
              className="div2"
              onClick={() => handleDivClick("div2", "ANGRY")}
              style={{ backgroundImage: 'url("/emotion2.png")' }}
            ></div>
            <div
              className="div3"
              onClick={() => handleDivClick("div3", "NERVOUS")}
              style={{ backgroundImage: 'url("/emotion3.png")' }}
            ></div>
            {/* 나머지 div 요소들도 동일하게 수정 */}
            <div
              className="div4"
              onClick={() => handleDivClick("div4", "SAD")}
              style={{ backgroundImage: 'url("/emotion4.png")' }}
            ></div>
            <div
              className="div5"
              onClick={() => handleDivClick("div5", "EXCITED")}
              style={{ backgroundImage: 'url("/emotion5.png")' }}
            ></div>
            <div
              className="div6"
              onClick={() => handleDivClick("div6", "PROUD")}
              style={{ backgroundImage: 'url("/emotion6.png")' }}
            ></div>
            <div
              className="div7"
              onClick={() => handleDivClick("div7", "CALM")}
              style={{ backgroundImage: 'url("/emotion7.png")' }}
            ></div>
            <div
              className="div8"
              onClick={() => handleDivClick("div8", "DROWSY")}
              style={{ backgroundImage: 'url("/emotion8.png")' }}
            ></div>
            <div
              className="div9"
              onClick={() => handleDivClick("div9", "TIRED")}
              style={{ backgroundImage: 'url("/emotion9.png")' }}
            ></div>

            <p className="close-modal-button" onClick={closeModal}>
              x
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeHeader;
