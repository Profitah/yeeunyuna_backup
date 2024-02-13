import React, { useState } from "react";
import Modal from "./Modal";

export const Jogging = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="main_box">
      <div className="m_txt1">상쾌한 조깅</div>
      <div className="m_txt2">
        일상을 떠나 새로운 에너지를 만들어봐요.
      </div>
      <div className="selectbox">
        <div className="txtbox">물 마시기</div>
        <button onClick={handleAddClick} className="selectbox_btn">
          추가
        </button>
      </div>
      <div className="selectbox">
        <div className="txtbox">간단한 간식 섭취</div>
        <button onClick={handleAddClick} className="selectbox_btn">
          추가
        </button>
      </div>
      <div className="selectbox">
        <div className="txtbox">이어폰, 물 챙기기</div>
        <button onClick={handleAddClick} className="selectbox_btn">
          추가
        </button>
      </div>
      <div className="selectbox">
        <div className="txtbox">워밍업 스트레칭</div>
        <button onClick={handleAddClick} className="selectbox_btn">
          추가
        </button>
      </div>
      <div className="selectbox">
        <div className="txtbox">러닝</div>
        <button onClick={handleAddClick} className="selectbox_btn">
          추가
        </button>
      </div>
      <div className="selectbox">
        <div className="txtbox">샤워하기</div>
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
