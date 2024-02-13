import React, { useState } from 'react';
import Modal from './Modal';

export const Myself = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddClick = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div className="main_box">
      <div className="m_txt1">
        나를 가꾸는 시간
      </div>
      <div className="m_txt2">
        나를 돌보는 시간이 있나요? <br />
        다른 것이 아닌 나를 중심으로 루틴을 만들어 보는 건 어때요?
      </div>
      <div className="selectbox"><div className="txtbox">좋아하는 음악 듣기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">샤워하기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">스킨 케어</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">마사지 하기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">립밤 바르기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="select_all_div"><button onClick={handleAddClick} className="select_all">+전체 추가하기</button></div>
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
};