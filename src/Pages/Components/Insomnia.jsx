import React, { useState } from 'react';
import Modal from './Modal';

export const Insomnia = () => {
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
        불면증 극복
      </div>
      <div className="m_txt2">
        잠에 드는게 힘든가요? 잠에 잘 들 수 있도록 주변 환경을<br />
        정리하고 차분한 환경을 만들어보는 건 어떨까요?
      </div>
      <div className="selectbox"><div className="txtbox">아로마 오일+가습기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">조명 어둡게</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">따뜻한 차 마시기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">가벼운 스트레칭</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">ASMR 듣기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="select_all_div"><button onClick={handleAddClick} className="select_all">+전체 추가하기</button></div>
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
};