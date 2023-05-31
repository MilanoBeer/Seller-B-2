import React from 'react';
import ConsultantMain from '../consultant_main/ConsultantMain'
import ManagerMain from '../manager_main/ManagerMain';
import useIsManager from '../../hooks/main/useIsManager';
import NavBar from '../../components/navigation/NavBar';

function Main() {
  const { seq, isManager } = useIsManager();

  return (
    <>
      <NavBar />
      {isManager ? <ManagerMain /> : <ConsultantMain />}
    </>
  );
}

export default Main;
