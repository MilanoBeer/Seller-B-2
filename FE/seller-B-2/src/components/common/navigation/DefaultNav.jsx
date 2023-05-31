import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function DefaultNav({seq, isManager}) {

    const navigate = useNavigate();

    const onGoMain = () => {
        if (isManager) {
          navigate('/manager/main');
        } else {
          navigate('/consultant/main');
        }
      };
    
  return (
    <div className="" onClick={onGoMain}>
      SellerB
    </div>
  )
}

export default DefaultNav