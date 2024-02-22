import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <div className='min-vh-100'>
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
