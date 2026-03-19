import React from 'react'
import TextInputFormContainer from './Components/TextInputForm/TextInputFormContainer'
import {Route,Routes} from 'react-router-dom'
import PlayGame from './Components/Pages/PlayGame'
import StartGame from './Components/Pages/StartGame'

function App() {

  return (
    <Routes>
      <Route path="/play" element={<PlayGame/>}/>
      <Route path="/start" element={<StartGame/>}/>
    </Routes>
  )
}

export default App
  