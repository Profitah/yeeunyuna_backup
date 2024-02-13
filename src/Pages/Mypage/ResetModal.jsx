// 서버 연결 성공?//

import React, { useEffect, useState } from 'react';
import '../../Style/Mypage/ResetModal.css';
import axios from 'axios'; 

const ResetModal = ({ onClose, onConfirm }) => {
const [deleting, setDeleting] = useState(false); // 삭제 중인지 여부를 나타내는 상태

  // 루틴 삭제 함수
  const deleteRoutine = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const apiUrl = "https://dofarming.duckdns.org/api/v1/track"; 
      await axios.delete(apiUrl, {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`, 
        }
      });
      
      // 삭제가 완료되면 확인 콜백 함수를 호출하고 모달을 닫음
      onConfirm();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="resetmodal-backdrop">
      <div className='resetmodal'>
        <div className='resetmodal-title'><strong>모든 루틴</strong>을 <br /> 삭제하시겠습니까?</div>
        <div className='resetmodal-footer'>
          <button className='resetmodalbtnyes' onClick={onClose}>아니오</button>
          <button className='resetmodalbtnno' onClick={deleteRoutine} disabled={deleting}>{deleting ? '삭제 중...' : '예'}</button> 
        </div>
      </div>
    </div>
  );
}

export default ResetModal;
