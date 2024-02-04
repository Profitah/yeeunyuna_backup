import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../Styles/Login/Login.css";

const Login4 = () => {
  const [Nickname, setNickname] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const navigate = useNavigate();

  const btn_disabled = !Nickname || !Age || !Gender;

  const eng = /[a-zA-Z]/;
  const kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const num = /[0-9]/;
  const spc = /[~!@#$%^&*()_+|<>?:{}]/;

  const NicknameCheck = (e) => {
    const input = e.target.value;
    if (input.length >= 0 && input.length <= 12 && (eng.test(input) || kor.test(input) || num.test(input) || !spc.test(input))) {
      setNickname(input);
    } else {
      alert("닉네임은 영문, 한글, 숫자를 포함한 12글자 이하여야 하며 특수기호를 포함하지 않아야 합니다.");
    }
  };

  const AgeCheck = (e) => {
    const input = e.target.value;
  
    if (isNaN(input)) {
      alert("숫자만 입력하세요");
    } else {
      setAge(input);
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const Submit_to_Server = async () => {
    try {
      const token = localStorage.getItem('authToken');

      if (!token) {
        throw new Error("인증 토큰이 없습니다.");
      }

      const data = {
        nickname: Nickname,
        gender: Gender,
        age: Age,
      };

      const apiUrl = "http://192.168.1.59:8080/api/v1/user/info";

      const response = await axios.patch(apiUrl, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        console.log(response.data);
        navigate('/Login3');
      } else {
        console.error(`서버 응답 실패. 상태 코드: ${response.status}`);
      }
    } catch (error) {
      console.error("API 요청 중 에러 발생:", error);

      if (error.response) {
        console.error("서버 응답 실패. 상태 코드:", error.response.status);
        console.error("서버 응답 데이터:", error.response.data);
      } else {
        console.error("기타 에러:", error.message);
      }
    }
  };

  return (
    <div>
      <div className="Login4_text">
        <p><span className="bold_text">좋아요!</span></p>
        <p>이제 시작해 볼까요?</p>
      </div>
      <div className="Login4_input">
        <form id="myInfo">
          <div className="wrap">
            <input type="text" placeholder="닉네임" value={Nickname} onChange={NicknameCheck} onBlur={NicknameCheck} />
          </div>
          <div className="wrap">
            <input type="text" placeholder="나이" value={Age} onChange={AgeCheck} />
          </div>
        </form>

        <select id="gender" value={Gender} onChange={handleGenderChange}>
          <option value="">- - 성별 선택 - - </option>
          <option value="MALE">남성</option>
          <option value="FEMALE">여성</option>
        </select>

        <div className="wrap">
          <Link to="/Home">
            <button type="submit" className="StartBtn" disabled={btn_disabled} onClick={Submit_to_Server}>좋아</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login4;
