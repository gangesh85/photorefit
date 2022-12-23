import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from './About'
import Contact from "./Contact";
import Login from "./Login";
import Orders from "./Orders";

function PageRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="orders" element={<Orders />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default PageRoute