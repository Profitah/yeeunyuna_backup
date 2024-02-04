import React, { useState } from 'react';
import Modal from './Modal';

export const DayStart = () => {
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
        하루의 시작
      </div>
      <div className="m_txt2">
        어두운 밤에서 새벽을 지나 아침이라는 밝은 빛이<br />
        당신을 맞이하고 있어요<br />
        당신이 무엇을 하든 일이 잘 되게 해줄거예요
      </div>
      <div className="selectbox"><div className="txtbox">물 마시기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">명상</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">오늘 하루 계획 세우기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">옷 갈아입기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">샤워하기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="select_all_div"><button onClick={handleAddClick} className="select_all">+전체 추가하기</button></div>
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
};