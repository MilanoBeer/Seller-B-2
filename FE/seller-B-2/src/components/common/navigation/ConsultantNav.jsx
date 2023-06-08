import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ConsultantNav({seq, isManager}) {
    const navigate = useNavigate();

    const onLogOutBtn = () => {
        sessionStorage.clear();
        navigate('/main');
      };

  return (
    <ConsultantNavContainer>
    <ConsultantNavItem>
    <div  onClick={() => navigate('/manager/noticeList')}>
      공지사항
    </div>
    </ConsultantNavItem>

    <ConsultantNavItem>
    <div onClick={() => navigate('/meeting/mancon')}>
      {/* <YoutubeOutlined id="meet-icon" /> */}
    </div> 
    </ConsultantNavItem>

    <ConsultantNavItem>
    <div onClick={() => navigate('/meeting/consultingMain')}>
      상담
    </div>
    </ConsultantNavItem>

    <ConsultantNavItem>
    <div onClick={() => navigate(`/consultant/mypage/${seq}`)}>
      마이 페이지
    </div>
    </ConsultantNavItem>

    <ConsultantNavItem>
    <div onClick={onLogOutBtn}>
      로그아웃
    </div>
    </ConsultantNavItem>
    </ConsultantNavContainer>
  )
}


const ConsultantNavContainer = styled.div`
  display: flex;
`

const ConsultantNavItem = styled.div`
  margin: 2%;
`


export default ConsultantNav;