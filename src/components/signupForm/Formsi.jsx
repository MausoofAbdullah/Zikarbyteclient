import React, { useState } from 'react';
import "./Form.css"
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

const Formsi = () => {
 
  const [isLogin, setIsLogin] = useState(true);
  const API= axios.create({baseURL:"http://localhost:4000/"})
  const navigate =useNavigate() 
  const [errors,setErrors]=useState("")
  const [cont,setCont]=useState({})



  const [formData, setFormData] = useState({
    email: '',
    
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

 
  const handleSubmit = async (e) => {

    e.preventDefault();
    if(isLogin){
      try {
        // Make an API request to your backend for user registration
        const response = await API.post('/user/login', formData);
        // console.log(response,"ressss")
        // setLog(response.status)
       // You might want to redirect or show a success message
        localStorage.setItem('token', response.data.token);
        setCont(response.data.contentP)
        
        if(response.status==200){
          console.log(response.data.contentP,"dfdf")
          if(response.data.contentP ){
           
            navigate("/")
          }else{

            navigate("/content")
          }

        }
      } catch (error) {
        console.error('login failed:', error.response.data.message);
        setErrors(error.response.data.message)
        setTimeout(()=>{
          setErrors("")
        },3000)
      }
      setFormData({email:"",password:""})

     


    }
    else{

      try {
        // Make an API request to your backend for user registration
        const response = await API.post('/user/register', formData);
        console.log(response,"res")
        // navigate('/content')
        // console.log(response.data); 
        setFormData({email:"",password:""})
      } catch (error) {
        console.error('Signup failed:', error.response.data.message);
        setErrors(error.response.data.message)
        setTimeout(()=>{
          setErrors("")
        },3000)
      }

      // navigate("/addccontent")
    }

  };
 

  return (
    <div className='forms'>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
        name='email'
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
        name='password'
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors && <p style={{color:"red"}}>{ errors}</p>}

        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>

      <p onClick={handleToggleForm}>
        {isLogin ? 'Don\'t have an account? Sign up here.' : 'Already have an account? Login here.'}
      </p>
    </div>
  );
};

export default Formsi;