import React from 'react';
import '../../Styles/Component/Modal.css';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">루틴에 항목 추가</h3>
          
        </div>
        <div className="modal-body">
          <select className="modal-select">
            <option value="workout">운동 루틴</option>
            <option value="study">공부 루틴</option>
          </select>
          {/* 선택하는 값(밸류값)은 메인 홈에서 받아오기 */}
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="btn-add">추가하기</button> 
          {/* 추가하기 누르면 값 보내지도록 수정 */}
          <button onClick={onClose} className="btn-add">닫기</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;