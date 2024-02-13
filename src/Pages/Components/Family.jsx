import React, { useState } from 'react';
import Modal from './Modal';

export const Family = () => {
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
        가족과의 시간
      </div>
      <div className="m_txt2">
      가족과 함께 보내는 시간은 소중한 보물과도 같습니다. <br />
      함께하는 모든 순간이 소중하고 값진 시간이 될 거예요.
      </div>
      <div className="selectbox"><div className="txtbox">가족들과 포옹하기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">오늘 하루 공유하기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">저녁 식사 준비</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">함께 저녁 식사 하기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="selectbox"><div className="txtbox">고마움 표현하기</div><button onClick={handleAddClick} className="selectbox_btn">추가</button></div>
      <div className="select_all_div"><button onClick={handleAddClick} className="select_all">+전체 추가하기</button></div>
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
};