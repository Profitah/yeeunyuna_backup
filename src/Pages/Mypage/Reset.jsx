import React, { useState } from "react";
import "../../Style/Mypage/Reset.css";
import NavBar from "../Nav/Nav.jsx";
import ResetModal from "./ResetModal"; 

const Reset = () => {
    const [showModal, setShowModal] = useState(false);

    const handleResetClick = () => {
      setShowModal(true);
    }

    const handleModalClose = () => {
      setShowModal(false);
    }
    // 전체 초기화
    const handleResetConfirm = () => {
      setShowModal(false); // 모달 닫기
    }

  return (
    <div>
      <NavBar />
      <div className="ResetWrap">
        <button className="Resetbtn" onClick={handleResetClick}>모든 루틴 초기화</button>
        <div className="Resettxt">전체 루틴 및 내 리스트를 삭제합니다.<br/>루틴을 삭제하면 복구할 수 없어요.</div>
      </div>
      {showModal && <ResetModal onClose={handleModalClose} onConfirm={handleResetConfirm} />}
    </div>
  );
};

export default Reset;