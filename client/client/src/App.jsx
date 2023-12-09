import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom' ;
import Home from './pages/home'
import About from './pages/about'
import Profile from './pages/profile'
import Signin from './pages/signin'
import Signup from './pages/signup'


export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>

  </Routes>
  </BrowserRouter>
    
  
}
