import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { AuthContextProvider } from './context/AuthContext';
import { UserAuth } from './context/AuthContext';
import {MyRoutes} from './routers/routes'

// Se esta usando stle components
function App() {

  return (
    <AuthContextProvider>
      <Container>
        <MyRoutes />
      </Container>
    </AuthContextProvider>


  )
}

// Contenedor de todo
const Container = styled.div`
  max-widht: 10vw;
  min-heing: 100vh;
  display: flex
`


export default App
