export const GoToRoutine = ({ activeBtn, handleMiracleMorningClick, handleDayStartClick, handleCheerfulClick, handleJoggingClick, handleDayEndClick, handleBathClick, handleMeditationClick, handleReadingClick, handleMyselfClick, handleInsomniaClick, handleDepressionClick, handleFamilyClick, handlePmsClick, handleDepression1Click, handleFrustrationClick, handleRestClick}) => (
    <div className="gotoroutine">
      {activeBtn === 'morning' && (
        <>
          <button className="go" onClick={handleMiracleMorningClick}>미라클 모닝</button>
          <button className="go" onClick={handleDayStartClick}>하루의 시작</button>
          <button className="go" onClick={handleCheerfulClick}>활기찬 아침</button>
          <button className="go" onClick={handleJoggingClick}>상쾌한 조깅</button>
        </>
      )}
      {activeBtn === 'evening' && (
        <>
          <button className="go" onClick={handleDayEndClick}>하루의 마무리</button>
          <button className="go" onClick={handleBathClick}>따뜻한 반신욕</button>
          <button className="go" onClick={handleMeditationClick}>명상과 기록</button>
          <button className="go" onClick={handleReadingClick}>잠들기 전 독서</button>
        </>
      )}
      {activeBtn === 'health' && (
        <>
          <button className="go" onClick={handleMyselfClick}>나를 가꾸는 시간</button>
          <button className="go" onClick={handleInsomniaClick}>불면증 극복</button>
          <button className="go" onClick={handleDepressionClick}>우울증 완화</button>
          <button className="go" onClick={handleFamilyClick}>가족과의 시간</button>
        </>
      )}
      {activeBtn === 'mood' && (
        <>
          <button className="go" onClick={handlePmsClick}>자기 관리 (PMS)</button>
          <button className="go" onClick={handleDepression1Click}>우울증 완화</button>
          <button className="go" onClick={handleFrustrationClick}>좌절감이 들 때</button>
          <button className="go" onClick={handleRestClick}>일과 후 휴식</button>
        </>
      )}
    </div>
  );