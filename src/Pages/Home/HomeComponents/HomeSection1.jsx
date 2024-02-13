/* // (POST) dofarming.duckdns.org/api/v1/track (기분변경)
//PATCH dofarming.duckdns/api/v1/user/mood HTTP/1.1 (기분저장)
// HTTP/1.1 200 OK
// GET /api/v1/user HTTP/1.1 (사용자 정보조회 ) */

import "../../../Style/Home/Home.css";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeSection1 = () => {
  return (
    <>
      <div>
        <Link to="/HomeAddPackage">
          <FaPlusCircle className="ToHomeAddPackage" />
        </Link>
        <style>
          {`
            .ToHomeAddPackage {
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-size: 50px;
            color: orange;
          }
        `}
        </style>
      </div>
    </>
  );
};

export default HomeSection1;
