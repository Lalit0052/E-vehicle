import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import "../assiet/style/Style.css"
import Footer from './Footer'
import Bike from './Bike'
import Car from './Car'
import Feedback from './Feedback'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bike-section' element={<Bike/>}/>
        <Route path='/car-section' element={<Car/>}/>
        <Route path='/feedback' element={<Feedback/>}/>

    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}
