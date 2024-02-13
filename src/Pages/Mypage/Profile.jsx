// 일단 성공....

import React, { useState, useRef, useEffect } from "react";
import "../../Style/Mypage/Profile.css";
import NavBar from "../Nav/Nav.jsx";
import myimg from "./기본이미지.png";
import axios from "axios";
import { instance } from "../../libs/api.jsx";

const Profile = () => {
  // 상태 관리
  const [nickname, setNickname] = useState(""); // 서버에서 사용자 닉네임 가져와 상태관리
  const [gender, setGender] = useState(""); //서버에서 사용자 성별 가져와 상태관리
  const [age, setAge] = useState(""); //서버에서 사용자 나이 가져와 상태관리
  const [image, setImage] = useState(null); // 서버에서 사용자 구글 이미지 가져와 상태관리

  // input 요소에 대한 참조
  const fileInputRef = useRef(null);

  // 컴포넌트가 마운트될 때 사용자 정보를 가져오는 효과
  useEffect(() => {
    // 서버로부터 사용자 정보를 가져오는 함수 호출
    fetchUserInfo();
  }, []);

  // 서버로부터 사용자 정보를 가져오는 함수
  const fetchUserInfo = async () => {
    try {
      // 서버 URL
      const apiUrl = "https://dofarming.duckdns.org/api/v1/user";

      // 로그인 토큰 가져오기
      const token = localStorage.getItem('authToken');

      if (token) {
        // 서버로 GET 요청을 보냄
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // 응답 데이터에서 사용자 정보 추출하여 상태 업데이트
        const userData = response.data;
        setNickname(userData.nickname);
        setGender(userData.gender);
        setAge(userData.age);
        // 이미지 데이터는 필요에 따라 처리
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  // 파일 입력 변경 핸들러
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  // 커스텀 버튼 클릭 핸들러
  const handleCustomButtonClick = () => {
    fileInputRef.current.click();
  };

  // 사용자 정보를 수정하는 함수
  const updateUserInfo = async () => {
    try {
      // 서버 URL
      const apiUrl = "https://dofarming.duckdns.org/api/v1/user/info";

      // 로그인 토큰 가져오기
      const token = localStorage.getItem('authToken');

      if (token) {
        // 서버로 PATCH 요청을 보냄
        const response = await axios.patch(apiUrl, {
          nickname,
          gender,
          age,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // 수정이 성공하면 메시지 출력
        console.log("User info updated successfully");
      }
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };

  // JSX 반환
  return (
    <div className="ProfileWrap">
      <NavBar />

      <div className="ProfileContainer">
        <div className="ProfileTxt">Profile</div>
        <div className="ProfileContent">
          {/* 이미지, 닉네임 수정 */}
          <div className="imgnic">
            <div className="ProfileimgWrap">
              {/* 이미지를 표시할 곳 */}
              {image ? (
                <img
                  onClick={handleCustomButtonClick}
                  src={image}
                  alt="Uploaded"
                  className="Profileimg"
                />
              ) : (
                <img
                  onClick={handleCustomButtonClick}
                  src={myimg}
                  alt="Default"
                  className="Profileimg"
                />
              )}
              <div>
                {/* 숨겨진 파일 입력 */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>

          <div className="Profileinputnic">
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="Profilenickname"
            />
          </div>

          <div className="Profileinput">
            <label>성별</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="Profilegender"
            >
              <option value="MALE">남성</option>
              <option value="FEMALE">여성</option>
            </select>
          </div>

          <div className="Profileinput">
            <label>나이</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="Profileage"
            />
          </div>
          <button className="Profilesubmit" onClick={updateUserInfo}>
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
