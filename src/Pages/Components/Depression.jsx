import React, { useState } from 'react';
import Modal from './Modal';

export const Depression = () => {
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
        우울증 완화
      </div>
      <div className="m_txt2">
        작은 변화는 큰 변화로 이어질 거예요.
      </div>
      <div className="selectbox"><div className="txtbox">내 감정을 그대로 응시하기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">오늘의 기분 쓰기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">감사일기 쓰기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">산책 하기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">좋아하는 음악 듣기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="select_all_div"><button onClick={handleAddClick} className="select_all">+전체 추가하기</button></div>
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
};