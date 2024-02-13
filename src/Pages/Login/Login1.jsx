import React from "react";
import "../../Style/Login/Login1.css"
import { useNavigate } from "react-router-dom";

const Login1 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login2");
  };

  return (
    <div className="login1 wrap">
      <div className="Login1container">
        <div className="login1maintxt">
          <p className="Login1txt1">
            우리에게 주어진<br></br>공평한 하루
          </p>
          <p className="Login1txt2">
            남에게 있는 것을 바라보는 것이 아닌,<br></br> 나에게 주어진 것에
            감사하는 마음
          </p>
        </div>
        <button id="login1_submit_btn" onClick={handleButtonClick}>
          <strong>반가워👋</strong>
        </button>
      </div>
    </div>
  );
};

export default Login1;
