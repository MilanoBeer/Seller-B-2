import React from 'react'
import styled from 'styled-components'
import ConsultantNav from '../../components/common/navigation/ConsultantNav'

// *** NEED COMPONENT ***
// Consultant Nav
// 출퇴근 Component 
// 

function ConsultantMain() {
  return (
    <ConsultantMainContainer>
      <div>ConsultantMain</div>
    </ConsultantMainContainer>

  )
}

const ConsultantMainContainer = styled.div`
  display: flex;
  background-color: blue; 

  width: 80vw;
  height: 20vh;

  margin: 0 auto;
`

export default ConsultantMain