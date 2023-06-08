import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


function DefaultNav({seq, isManager}) {

    // const {seq, isManager} = 

    const navigate = useNavigate();

    const onGoMain = () => {
        if (isManager) {
          navigate('/manager/main');
        } else {
          navigate('/consultant/main');
        }
      };
    
  return (
    <DefaultNavContainer>
    <div className="" onClick={onGoMain}>
      SellerB
    </div>
    </DefaultNavContainer>
  )
}

const DefaultNavContainer = styled.div`
  display: flex; 
`

export default DefaultNav