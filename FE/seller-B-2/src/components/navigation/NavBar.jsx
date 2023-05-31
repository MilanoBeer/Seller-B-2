import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useIsManager from '../../hooks/main/useIsManager';
import ManagerNav from '../common/navigation/ManagerNav';
import ConsultantNav from '../common/navigation/ConsultantNav';
import DefaultNav from '../common/navigation/DefaultNav';

function NavBar() {
  const { seq, isManager } = useIsManager();

  return (
    <div>
      <DefaultNav  seq={seq} isManager={isManager} /> 
      {isManager ? <ManagerNav seq={seq} isManager={isManager} /> : <ConsultantNav seq={seq} isManager={isManager}/>}
    </div>
  );
}

export default NavBar;
