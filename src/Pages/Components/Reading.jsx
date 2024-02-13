import React, { useState } from 'react';
import Modal from './Modal';

export const Reading = () => {
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
        잠들기 전 독서
      </div>
      <div className="m_txt2">
        취침 30분 전 스마트폰을 자제하는 것은<br />
        깊은 잠을 자는 데에 좋은 효과가 있어요.
      </div>
      <div className="selectbox"><div className="txtbox">마실 차 준비</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">노트와 펜 준비</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">조명 켜기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">책 읽기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">인상 깊은 문장 기록하기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="select_all_div"><button onClick={handleAddClick} className="select_all">+전체 추가하기</button></div>
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
};