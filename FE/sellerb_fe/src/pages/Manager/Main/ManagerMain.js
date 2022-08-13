/*
 *
 *  관리자 Main
 *
 *  */
import React from "react";
import ManagerMainLeft from "../../../components/Manager/Main/ManagerMainLeft";
import ManagerMainRight from "../../../components/Manager/Main/ManagerMainRight";
import ManagerMainCenter from "../../../components/Manager/Main/ManagerMainCenter";
import NavBar from "../../../components/Common/NavBar/NavBar";
import Footer from "../../../components/Common/Footer/Footer";

import "./ManagerMain.css";

function ManagerMain() {
  // const [list, setList] = useState([]);

  return (
    <div className='center'>
      {/* HeaderNavBar */}
      <nav>
        <NavBar></NavBar>
      </nav>
      <div className='consultant-main-image-wrapper'>
        <img
          src={`${process.env.PUBLIC_URL}/img/consultantMainPageImage.jpg`}
        />
      </div>
      <div id='manager-main-wrapper'>
        {/* 좌측 환영인사 및 달력, 회의생성 */}
        <div id='manager-main-left'>
          <ManagerMainLeft />
        </div>

        {/* 우측 상담사 관리 */}
        <div id='manager-main-right'>
          <ManagerMainRight />
        </div>
      </div>
      {/* footer */}
      <div className='center'>
        <Footer />
      </div>
    </div>
  );
}

export default ManagerMain;
