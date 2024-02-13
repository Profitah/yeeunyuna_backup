import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Style/Mypage/ResetModal.css';

const PackageDeleteModal = ({ onClose }) => {


  const token = localStorage.getItem('authToken');

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

  // 삭제 버튼 클릭 시 호출되는 함수
  const handleDelete = () => {
    // trackId 변수를 사용하여 동적으로 트랙 ID를 가져와서 API 엔드포인트 URL 생성
    const apiUrl = `https://dofarming.duckdns.org/api/v1/track/1`;
  
    // 서버로 DELETE 요청을 보내는 axios 호출
    if (token) {
      axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        // 요청이 성공한 경우 콘솔에 성공 메시지 출력
        console.log("요청 성공!");
        // 성공 시 추가로 수행할 작업이 있다면 여기에 작성
      })
      .catch(error => {
        // 요청이 실패한 경우 에러 메시지 출력
        console.error("요청 실패:", error);
        // 실패 시 추가로 수행할 작업이 있다면 여기에 작성
      });
    } 
  };


  // 모달 컴포넌트 반환
  return (
    <div className="resetmodal-backdrop">
      <div className='resetmodal'>
        <div className='resetmodal-title'><strong>패키지명</strong><br /> 삭제하시겠습니까?</div>
        <div className='resetmodal-footer'>
          <button className='resetmodalbtnyes' onClick={handleDelete}>예</button>
          <button className='resetmodalbtnno' onClick={onClose}>아니오</button>
        </div>
      </div>
    </div>
  );
}

export default PackageDeleteModal;
