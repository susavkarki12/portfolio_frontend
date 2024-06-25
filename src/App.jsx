import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './containers/home'
import About from './containers/about'
import Resume from './containers/resume'
import Contact from './containers/contact'
import Portfolio from './containers/portfolio'
import Skills from './containers/skills'
import NavBar from './components/navBar'




function App() {



  return (
    <div className='App'>

      

      <NavBar />

      

      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />


      </Routes>
      
    </div>
  )
}

export default App
