import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ManagerNav({seq, isManager}) {
    const navigate = useNavigate();

    const onLogOutBtn = () => {
        sessionStorage.clear();
        navigate('/main');
      };

  return (
    <div className="navbar-right-navigator">
    <div className="navi-title" onClick={() => navigate('/manager/noticeList')}>
      공지사항
    </div>

    <div className="navi-title" onClick={() => navigate('/meeting/mancon')}>
      회의생성
    </div>

    <div className="navi-title" onClick={() => navigate('/manager/productList')}>
      제품관리 
    </div>

    <div className="navi-title" onClick={() => navigate(`/manager/mypage/${seq}`)}>
      마이 페이지
    </div>

    <div className="navi-title" onClick={onLogOutBtn}>
      로그아웃
    </div>
  </div>
  )
}

export default ManagerNav;