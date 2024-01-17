import React, { useEffect, useState } from 'react'
import "./Contentf.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import {jwt_decode} from 'jwt-decode';





const Contentf = () => {
  const API= axios.create({baseURL:"http://localhost:4000/"})
  const navigate=useNavigate()
const [ntoken,setNtoken]=useState("")
const [codes,setCodes]=useState({})
const [errors,setErrors]=useState("")
useEffect(()=>{
    const authToken = localStorage.getItem('token');
    
setNtoken(authToken)
},[])

    const [formData, setFormData] = useState({
        title: '',    
        body: '',
        // userId:codes.id?.toString()
      });
    // console.log(codes,"nto")
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
   
    
      
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Make an API request to your backend for user login
          const response = await API.post('/user/addContent', formData,
           {
            headers: {
              Authorization: `Bearer ${ntoken}`,
            }}
            );
            console.log(response,"res")
        //   console.log(response.data,"token"); // You might want to redirect or manage user authentication state
        navigate('/')
         
    } catch (error) {
        console.error('content:', error.response.data.message);
        setErrors(error.response.data.message)
        setTimeout(()=>{
            setErrors("")
          },3000)
    }
    setFormData({title:"",body:""
    // ,userId:codes.id
})

    
      };
  return (
    <div className='content-form'>
    <h2>Submit Content</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
      name='title'
        type="text"
        id="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label htmlFor="body">Body:</label>
      <textarea
      name='body'
        id="body"
        value={formData.body}
        onChange={handleChange}
        required
      ></textarea>
      {/* <input style={{display:"none"}} value={formData.userId} name='userId'/> */}
      {errors && <p style={{color:"red"}}>{ errors}</p>}

      <button type="submit">Submit Content</button>
    </form>
  </div>
  )
}

export default Contentf
