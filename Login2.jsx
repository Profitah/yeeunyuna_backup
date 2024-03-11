import { GoogleLoginButton } from "react-social-login-buttons";
import { GoogleAuthProvider, signInWithPopup, getIdToken } from "firebase/auth";
import { auth } from "../../Firebase/firebase-config";
import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom"; 

const Login2Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow: hidden;
`;

const TextContainer = styled.div`
  font-size: 1.5rem;
  margin-top: 10vh;
  margin-bottom: 15vh;
  line-height: 3rem;
  display:flex;
  justify-content: center;
  align-items: center;

    @media screen and (min-width: 1280px) {
            margin-bottom: 15vh;
        }
`;

const StyledGoogleLoginButton = styled(GoogleLoginButton)`
  width: 70vw !important;
  font-size:17px !important;
  display: flex !important;
  margin-left:15vw !important;
  @media all and (min-width: 768px) and (max-width: 3000px) {
    width: 38vw !important;
    margin-left:31vw !important;
    display:flex !important;
    justify-content: center;
  }
`;

const Login2 = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const response = await axios.get("/api/v1/user/discrimination", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          // 사용자 상태에 따른 처리 로직 추가. 예를 들어:
          navigate('/home'); // 홈 페이지로 이동
        } catch (error) {
          localStorage.removeItem('authToken');
          console.error("An error occurred while checking the login status:", error);
        }
      }
    };
  
    checkLoginStatus();
    // navigate를 의존성 배열에 추가해, navigate 함수가 변경될 때마다 이 useEffect가 다시 실행되도록 함
  }, [navigate]);

  async function handleGoogleLogin() {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    // 다음 줄에서 `auth`는 Firebase 프로젝트 설정을 통해 초기화된 인증 객체를 가리킵니다.
    // 이 예제에서는 세부 설정을 생략합니다. 실제 사용시 Firebase Config 설정 필요
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await getIdToken(result.user);
      localStorage.setItem('authToken', token);

      const response = await axios.get("/api/v1/user/discrimination", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // 회원 가입된 사용자 또는 새로운 사용자에 따른 이동 및 처리 로직 추가. 예를 들어:
      navigate('/home'); // 홈 페이지로 이동
    } catch (error) {
      console.error("An error occurred during Google login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Login2Container>
      <TextContainer>
        <p>
          <strong>Body</strong> and <strong>Mind</strong><br />
          The first step to take<br />care of your health!
        </p>
      </TextContainer>
      <StyledGoogleLoginButton onClick={handleGoogleLogin} disabled={loading}>
        Google Login
      </StyledGoogleLoginButton>
    </Login2Container>
  );
};

export default Login2;