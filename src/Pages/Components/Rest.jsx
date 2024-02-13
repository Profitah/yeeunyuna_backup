import React, { useState } from "react";
import Modal from "./Modal";

export const Rest = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="main_box">
      <div className="m_txt1">일과 후 휴식</div>
      <div className="m_txt2">
        당신에게 주어진 보상입니다. <br />
        오늘 하루 수고를 풀고 내일을 위한 에너지를 충전해 보는 건 <br />
        어떨까요?
      </div>
      <div className="selectbox">
        <div className="txtbox">전화 알림 끄기</div>
        <button onClick={handleAddClick} className="selectbox_btn">
          추가
        </button>
      </div>
      <div className="selectbox">
        <div className="txtbox">캔들 켜기</div>
        <button onClick={handleAddClick} className="selectbox_btn">
          추가
        </button>
      </div>
      <div className="selectbox">
        <div className="txtbox">심호흡 하기</div>
        <button onClick={handleAddClick} className="selectbox_btn">
          추가
        </button>
      </div>
      <div className="selectbox">
        <div className="txtbox">음악 듣기</div>
        <button onClick={handleAddClick} className="selectbox_btn">
          추가
        </button>
      </div>
      <div className="selectbox">
        <div className="txtbox">취미 활동하기</div>
        <button onClick={handleAddClick} className="selectbox_btn">
          추가
        </button>
      </div>
      <div className="select_all_div">
        <button onClick={handleAddClick} className="select_all">
          +전체 추가하기
        </button>
      </div>
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
};
