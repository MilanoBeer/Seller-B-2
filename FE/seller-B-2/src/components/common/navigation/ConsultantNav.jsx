import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ConsultantNav({seq, isManager}) {
    const navigate = useNavigate();

    const onLogOutBtn = () => {
        sessionStorage.clear();
        navigate('/main');
      };

  return (
    <div >
    <div  onClick={() => navigate('/manager/noticeList')}>
      공지사항
    </div>
    <div onClick={() => navigate('/meeting/mancon')}>
      {/* <YoutubeOutlined id="meet-icon" /> */}
    </div>
    <div onClick={() => navigate('/meeting/consultingMain')}>
      상담
    </div>
    <div onClick={() => navigate(`/consultant/mypage/${seq}`)}>
      마이 페이지
    </div>

    <div onClick={onLogOutBtn}>
      로그아웃
    </div>
  </div>
  )
}

export default ConsultantNav;