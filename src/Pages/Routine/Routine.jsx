import React, { useState, useEffect } from "react";
import "../../Styles/Routine/Routine.css";
import ButtonGroup from '../Components/ButtonGroup';
import { MiracleMorning } from "../Components/MiracleMorning";
import { DayStart } from "../Components/DayStart";
import { Cheerful } from "../Components/Cheerful";
import { Jogging } from "../Components/Jogging";
import { DayEnd } from "../Components/DayEnd";
import { Bath } from "../Components/Bath";
import { Meditation } from "../Components/Meditation";
import { Reading } from "../Components/Reading";
import { Myself } from "../Components/Myself";
import { Insomnia } from "../Components/Insomnia";
import { Depression } from "../Components/Depression";
import { Family } from "../Components/Family";
import { Pms } from "../Components/Pms";
import { Depression1 } from "../Components/Depression1";
import { Frustration } from "../Components/Frustration";
import { Rest } from "../Components/Rest";
import { GoToRoutine } from '../Components/GoToRoutine';
import NavBar from "../Nav/Nav.jsx";



const Routine = () => {
  const [activeBtn, setActiveBtn] = useState('morning');
  const [user, setUser] = useState('');
  const [showMiracleMorning, setShowMiracleMorning] = useState(false);
  const [showDayStart, setShowDayStart] = useState(false);
  const [showCheerful, setShowCheerful] = useState(false);
  const [showJogging, setShowJogging] = useState(false);
  const [showDayEnd, setShowDayEnd] = useState(false);
  const [showBath, setShowBath] = useState(false);
  const [showMeditation, setShowMeditation] = useState(false);
  const [showReading, setShowReading] = useState(false);
  const [showMyself, setShowMyself] = useState(false);
  const [showInsomnia, setShowInsomnia] = useState(false);
  const [showDepression, setShowDepression] = useState(false);
  const [showFamily, setShowFamily] = useState(false);
  const [showPms, setShowPms] = useState(false);
  const [showDepression1, setShowDepression1] = useState(false);
  const [showFrustration, setShowFrustration] = useState(false);
  const [showRest, setShowRest] = useState(false);
  

  const handleMiracleMorningClick = () => {
    setShowMiracleMorning(true);
    setShowDayStart(false);
    setShowCheerful(false);
    setShowJogging(false);
  };

  const handleDayStartClick = () => {
    setShowDayStart(true);
    setShowMiracleMorning(false);
    setShowCheerful(false);
    setShowJogging(false);
  };

  const handleCheerfulClick = () => {
    setShowMiracleMorning(false);
    setShowDayStart(false);
    setShowCheerful(true);
    setShowJogging(false);
  };

  const handleJoggingClick = () => {
    setShowMiracleMorning(false);
    setShowDayStart(false);
    setShowCheerful(false);
    setShowJogging(true);
  };

  const handleDayEndClick = () => {
    setShowDayEnd(true);
    setShowBath(false);
    setShowMeditation(false);
    setShowReading(false);
  };

  const handleBathClick = () => {
    setShowDayEnd(false);
    setShowBath(true);
    setShowMeditation(false);
    setShowReading(false);
  };

  const handleMeditationClick = () => {
    setShowDayEnd(false);
    setShowBath(false);
    setShowMeditation(true);
    setShowReading(false);
  };

  const handleReadingClick = () => {
    setShowDayEnd(false);
    setShowBath(false);
    setShowMeditation(false);
    setShowReading(true);
  };

  const handleMyselfClick = () => {
    setShowMyself(true);
    setShowInsomnia(false);
    setShowDepression(false);
    setShowFamily(false);
  };

  const handleInsomniaClick = () => {
    setShowMyself(false);
    setShowInsomnia(true);
    setShowDepression(false);
    setShowFamily(false);
  };

  const handleDepressionClick = () => {
    setShowMyself(false);
    setShowInsomnia(false);
    setShowDepression(true);
    setShowFamily(false);
  };

  const handleFamilyClick = () => {
    setShowMyself(false);
    setShowInsomnia(false);
    setShowDepression(false);
    setShowFamily(true);
  };

  const handlePmsClick = () => {
    setShowPms(true);
    setShowDepression1(false);
    setShowFrustration(false);
    setShowRest(false);
  };

  const handleDepression1Click = () => {
    setShowPms(false);
    setShowDepression1(true);
    setShowFrustration(false);
    setShowRest(false);
  };

  const handleFrustrationClick = () => {
    setShowPms(false);
    setShowDepression1(false);
    setShowFrustration(true);
    setShowRest(false);
  };

  const handleRestClick = () => {
    setShowPms(false);
    setShowDepression1(false);
    setShowFrustration(false);
    setShowRest(true);
  };


  // useEffect(() => {
  //   fetch('/api/v1/user') 
  //     .then(response => response.json())
  //     .then(data => setUser(data.user))
  //     .catch(error => console.log(error));
  // }, []);

  const handleBtnClick = (btnType) => {
    setActiveBtn(btnType);
    // 아침, 저녁, 건강, 기분 버튼 클릭 시 showMiracleMorning을 false로 설정
    setShowMiracleMorning(false);
    setShowDayStart(false);
    setShowCheerful(false);
    setShowJogging(false);
    setShowDayEnd(false);
    setShowBath(false);
    setShowMeditation(false);
    setShowReading(false);
    setShowMyself(false);
    setShowInsomnia(false);
    setShowDepression(false);
    setShowFamily(false);
    setShowPms(false);
    setShowDepression1(false);
    setShowFrustration(false);
    setShowRest(false);
  };

  return(
    <div className="Routine_wrap">
      {/* <div className="nav">
        <div className="navBtn1"><AiOutlineUser size="24" color="black" /></div>
        <div className="navBtn2"><AiOutlineMenu size="24" color="black" /></div>
      </div> */}
      <NavBar />
      <div className="main">
      {/* <hr /> */}
        <div className="txt">
          <p className="txt1">나를 가꾸는 시간</p>
          <p className="txt2">우리 모두에게는 시간이라는 공평한 것이 주어진다</p>
          <p className="txt3"># {user} 님을 위한 추천</p>
        </div>
        <ButtonGroup activeBtn={activeBtn} handleBtnClick={handleBtnClick} />

      {!showMiracleMorning && !showDayStart && !showCheerful && !showJogging && !showDayEnd && !showBath && !showMeditation && !showReading && !showMyself && !showInsomnia && !showDepression && !showFamily && !showPms && !showDepression1 && !showFrustration && !showRest && <GoToRoutine activeBtn={activeBtn} handleMiracleMorningClick={handleMiracleMorningClick} handleDayStartClick={handleDayStartClick} handleCheerfulClick={handleCheerfulClick} handleJoggingClick={handleJoggingClick} handleDayEndClick={handleDayEndClick} handleBathClick={handleBathClick} handleMeditationClick={handleMeditationClick} handleReadingClick={handleReadingClick} handleMyselfClick={handleMyselfClick} handleInsomniaClick={handleInsomniaClick} handleDepressionClick={handleDepressionClick} handleFamilyClick={handleFamilyClick} handlePmsClick={handlePmsClick} handleDepression1Click={handleDepression1Click} handleFrustrationClick={handleFrustrationClick} handleRestClick={handleRestClick}/>
        }

        {/* 미라클 모닝 상태에 따른 화면 표시 */}
        {showMiracleMorning && <MiracleMorning />}
        {activeBtn === 'morning' && showDayStart && <DayStart />}
        {activeBtn === 'morning' && showCheerful && <Cheerful />}
        {activeBtn === 'morning' && showJogging && <Jogging />}
        {showDayEnd && <DayEnd />}
        {showBath && <Bath />}
        {showMeditation && <Meditation />}
        {showReading && <Reading />}
        {showMyself && <Myself />}
        {showInsomnia && <Insomnia />}
        {showDepression && <Depression />}
        {showFamily && <Family />}
        {showPms && <Pms />}
        {showDepression1 && <Depression1 />}
        {showFrustration && <Frustration />}
        {showRest && <Rest />}
      </div>

    </div>
    
  );
};

export default Routine;




// //추가 버튼 누르면 나오는 모달 셀렉트 박스->이미 있는 루틴에서 값 가져온 후 추가시키키
// //전체 추가시 모든 값 루틴으로 추가시키키+추가 누른 값 루틴으로 추가시키키
// //닉네임 가져오는 거 해결 해보기
// //리액트 서버 연결, 서버에서 데이터 가져오기 공부 (url 넣는 파일을 따로 만들어야 하나?!)
// //전체 디자인 수정+pc 화면 반응형 수정




