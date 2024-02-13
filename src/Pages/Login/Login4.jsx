import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../Style/Login/Login4.css";

const Login4 = () => {
  const [Nickname, setNickname] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const navigate = useNavigate();

  const btn_disabled = !Nickname || !Age || !Gender;

  const NicknameCheck = (e) => {
    const input = e.target.value;
    const valid = /^[A-Za-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{0,12}$/.test(input); /* 닉네임이 0글자라니.. 너무 이상하지만 최소 글자가 1글자일 경우 
                                                         input 창에 있는 글자가 1글자일 때 삭제할 수 없다는 문제가 발생해 우선 부득이하게 이렇게 수정해둡니다.
                                                         다행히 닉네임값과 나이값을 입력하지 않으면 다음페이지로 넘어갈 수 없어 닉네임이 없는 사람은 생기지 않을 것 같습니다. */ 
                                                         
    if (valid) {
      setNickname(input);
    } else {
      alert("닉네임은 영문, 한글, 숫자를 포함한 1글자 이상~12글자 이하여야 하며 특수기호를 포함하지 않아야 합니다.");
    }
  };

  const AgeCheck = (e) => {
    const input = e.target.value;
  
    if (isNaN(input)) {
      alert("숫자만 입력하세요");
      return;
    }
  
    const valid = /^[0-9]{0,3}$/.test(input);
  
    if (valid) {
      setAge(input);
    } else {
      alert("나이는 3자릿수 이하여야 합니다.");
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

      const apiUrl = "https://dofarming.duckdns.org/api/v1/user/info";

      const response = await axios.patch(apiUrl, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        console.log(response.data);
        navigate('/home');
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
        <div><strong>좋아요!</strong><br />이제 시작해볼까요?</div>
      </div>
      <div className="Login4_input">
        <form id="myInfo">

          <div className="wrap">
            <input type="text" placeholder="닉네임" value={Nickname} onChange={NicknameCheck} onBlur={NicknameCheck} className="login4input"/>
          </div>

          <div className="wrap">
            <input type="text" placeholder="나이" value={Age} onChange={AgeCheck} className="login4input"/>
          </div>

        </form>

        <select id="gender" value={Gender} onChange={handleGenderChange} className="login4select">
          <option value="">성별</option>
          <option value="MALE">남성</option>
          <option value="FEMALE">여성</option>
        </select>

        <div className="Login4btn">
          <Link to="/Home">
            <button type="submit" disabled={btn_disabled} onClick={Submit_to_Server} className="login4button">시작!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login4;
