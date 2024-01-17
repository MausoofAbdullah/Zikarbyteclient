import logo from './logo.svg';
import './App.css';
import Home from './homepage/Home';
import Page from './signup/Page';
import Content from './contentPage/Content';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';


function App() {
  // const [ntoken,setNtoken]=useState("")
  // useEffect(()=>{
  //   const istoken=localStorage.getItem("token")
  //   console.log(istoken,"trt")
  //   setNtoken(istoken)

  // },[])
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
    
    
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Page/>} />
        <Route path='/content' element={<Content/>} />
        

    
    
   
       </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
