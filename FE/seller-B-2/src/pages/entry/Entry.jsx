import React from 'react'
import LoginForm from '../../components/main/LoginForm'
import styled from 'styled-components'

function Entry() {
  return (
    <EntryContainer>
      <LoginForm />
    </EntryContainer>
  )
}

const EntryContainer = styled.div`
  background-color: grey;
  width: 50vw;
  height: 50vh;

  padding: 10%;
  margin: 0 auto;

`

export default Entry
