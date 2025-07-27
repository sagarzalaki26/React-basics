import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/HOme'
import { Route,Routes } from 'react-router-dom'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Contact from './Components/Contact/Contact'
import Github from './Components/Github/Github'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='p-6'>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/github' element={<Github/>}/>
         </Routes>
        </main>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
