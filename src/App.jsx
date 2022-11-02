import React from 'react'
import './App.css'
import Profile from './components/Profile'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Profile />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
