import { useState } from 'react'
import './App.css'
import NavBar from './component/NavBar'
import Manager from './component/Manager'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <NavBar />
      <div className='min-h-[87vh]  '>
        <Manager />
      </div>

      <Footer />
    </>
  )
}

export default App
