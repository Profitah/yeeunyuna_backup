import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../Styles/Login/Login.css";


const Login3 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((selected) => selected !== option);
      } else {
        return [...prevOptions, option];
      }
    });
  };

  const handleButtonClick = async () => {
    try {
      const token = localStorage.getItem('authToken');

      if (!token) {
        console.error("인증 토큰이 없습니다.");
        return;
      }

      const apiUrl = "/api/v1/user/keywords";

      const keywords = {};
      selectedOptions.forEach((option, index) => {
        keywords[`keyword${index + 1}`] = option;
      });

      const data = {
        keywords: keywords,
      };

      const response = await axios.patch(apiUrl, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("성공", response.data);
    } catch (error) {
      console.error("서버 요청 실패:", error);
    }
  };

  const options = [
    "학업",
    "취업",
    "직장생활",
    "인간관계",
    "사랑",
    "스트레스",
    "미래에 대한 불안감",
    "건강",
  ];

  return (
    <div className="container">
      <p className="Login3_txt1">
        <strong>어떤 고민</strong>이 있으세요?
      </p>
      <div className="options" id="options">
        {options.map((option) => (
          <div
            key={option}
            className={`option ${selectedOptions.includes(option) ? "selected" : ""}`}
            onClick={() => toggleOption(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <Link to="/Login4">
        <button
          id="SelectclearBtn"
          onClick={handleButtonClick}
          disabled={selectedOptions.length === 0}
        >
          선택 완료
        </button>
      </Link>
    </div>
  );
};

export default Login3;
