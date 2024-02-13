import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../Style/Login/Login3.css";

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
    const keywords = {};
    selectedOptions.forEach((option, index) => {
      keywords[`keyword${index + 1}`] = option;
    });

    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        return;
      }

      const apiUrl = 'https://dofarming.duckdns.org/api/v1/user/keywords';

      await axios.patch(apiUrl, keywords, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      return;
    }
  };

  const options = [
    '학업',
    '취업',
    '직장생활',
    '인간관계',
    '사랑',
    '스트레스',
    '미래에 대한 불안감',
    '건강',
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
            className={`option ${selectedOptions.includes(option) ? 'selected' : ''}`}
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
