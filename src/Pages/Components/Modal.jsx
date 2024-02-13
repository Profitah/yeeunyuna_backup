import React, { useEffect } from 'react';
import '../../Style/Component/Modal.css';

function getAuthToken() {
  const authToken = localStorage.getItem('authToken');
  return authToken;
}

const Modal = ({ onClose }) => {
  useEffect(() => {
    const authToken = getAuthToken(); // 인증 토큰을 가져옵니다.

    // API endpoint를 지정하고 헤더에 인증 토큰을 포함하여 GET 요청을 보냅니다.
    fetch('https://dofarming.duckdns.org/api/v1/track', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}` // 인증 토큰을 포함합니다.
      }
    })
    .then(response => response.json())
    .then(data => {
      const selectElement = document.querySelector('.modal-select');
      data.forEach(track => {
        const option = document.createElement('option');
        option.value = track.trackId;
        option.textContent = track.content;
        selectElement.appendChild(option);
      });
    })
    .catch(error => console.error('Error fetching tracks:', error));
  }, []); // useEffect가 처음 한 번만 실행되도록 빈 배열을 전달합니다.

  const handleAddClick = async () => {
    const selectElement = document.querySelector('.modal-select');
    const trackId = selectElement.value;
    // saveRoutine(trackId); // saveRoutine 함수는 아직 정의되지 않았습니다.
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">루틴에 항목 추가</h3>
        </div>
        <div className="modal-body">
           {/*  여기에 패키지 이름 추가 */}
          <select className="modal-select">
          </select>
        </div>
        <div className="modal-footer">
          <button onClick={handleAddClick} className="btn-add">추가하기</button>
          <button onClick={onClose} className="btn-add">닫기</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
