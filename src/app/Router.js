import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import VehicleModels from './screens/VehicleModels';
import Testimonials from './screens/Testimonials';
import Team from './screens/Team';
import Contact from './screens/Contact';
import Navbar from './screens/Navbar';
import Footer from './screens/Footer';
const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/models' element={<VehicleModels />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router;