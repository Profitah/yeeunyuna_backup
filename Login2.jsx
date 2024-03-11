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

  async function handleGoogleLogin() {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await getIdToken(result.user);
      localStorage.setItem('authToken', token); // 받아온 토큰을 로컬 스토리지에 저장

      // 서버에 토큰을 보내 회원가입 여부 확인
      const response = await axios.get("/api/v1/user/discrimination", {
        headers: {
          Authorization: `Bearer ${token}`,
          'Cache-Control': 'no-cache' // 캐시 비활성화

        }
      });

      // 회원 가입 여부에 따라 페이지 이동 처리
      if (response.status === 200 && response.data === "registered") {
        navigate('/home');
      } else {
        navigate('/login3');
      }
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