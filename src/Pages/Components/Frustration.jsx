import React, { useState } from 'react';
import Modal from './Modal';

export const Frustration = () => {
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
        좌절감이 들 때
      </div>
      <div className="m_txt2">
      당신의 성장과 배움의 일부로 일시적인 순간일 뿐이에요. <br /> 
      자신을 다시 찾는 과정에서 더욱 강해질 거예요.
      </div>
      <div className="selectbox"><div className="txtbox">호흡 운동하기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">친구나 가족에게 전화하기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">감정 적기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">긍정적으로 생각하기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">취미 시간 갖기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="select_all_div"><button onClick={handleAddClick} className="select_all">+전체 추가하기</button></div>
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
};