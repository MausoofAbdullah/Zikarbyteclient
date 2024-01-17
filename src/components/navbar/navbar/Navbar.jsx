import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
const [ntoken,setNtoken]=useState("")
const navigate=useNavigate()

    useEffect(()=>{
        const authToken = localStorage.getItem('token');
        
    setNtoken(authToken)
    },[])
    const handleLogout = () => {
    
        localStorage.removeItem('token');
    
      
        navigate('/login');
      };
  return (
    <div class="section-navbar-1-mKr">
    <p class="landie-JKn">Landing</p>
    <Link to='/'><p class="home-q4p">Home</p></Link>
    
    <p class="about-kxU">About</p>
    <p class="products-gr8">Products</p>
    {!ntoken?  <Link to='/login'>  <p class="contact-R32">Login</p></Link>:<p class="contact-R32" onClick={handleLogout}>Logout</p>}
  
  
    <div class="element-button-small-filled-9Up">
      <span class="element-button-small-filled-9Up-sub-0">Purchase</span>
      <span class="element-button-small-filled-9Up-sub-1"> UI Kit</span>
    </div>
  </div>
  )
}

export default Navbar
