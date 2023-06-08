import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useIsManager from '../../hooks/main/useIsManager';
import ManagerNav from '../common/navigation/ManagerNav';
import ConsultantNav from '../common/navigation/ConsultantNav';
import DefaultNav from '../common/navigation/DefaultNav';

import styled from 'styled-components';

function NavBar() {
  const { seq, isManager } = useIsManager();

  return (
    <NavBarContainer>
      <DefaultNav  seq={seq} isManager={isManager} /> 
      {isManager ? <ManagerNav seq={seq} isManager={isManager} /> : <ConsultantNav seq={seq} isManager={isManager}/>}
    </NavBarContainer>
  );
}

const NavBarContainer = styled.div`
  display: flex;

`

export default NavBar;
