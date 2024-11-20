import React from 'react'
import Background from './Components/Background';
import Foreground from "./components/Foreground";


const App = () => {
  return (
    <div className="fixed  w-full h-screen bg-zinc-800" >
    <Background />
    <Foreground />
    </div>
  )
}

export default App