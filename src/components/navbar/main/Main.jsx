import React, { useEffect, useState } from 'react'
import './Main.css'
import designer from "../img/designer1.png"
import axios from 'axios'


const Main = () => {
    const [contents,setContents]=useState("")
const [ntoken,setNtoken]=useState("")

const API= axios.create({baseURL:"http://localhost:4000/"})

useEffect(() => {
    const fetchData = async () => {
        const authToken = localStorage.getItem('token');
        console.log(authToken, "auth");
        setNtoken(authToken);
        
        // Now that setNtoken is complete, you can make the API call
        try {
            const content = await API.get('/user/getContent', {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            setContents(content.data); // Assuming content.data is the data you want to set
        } catch (error) {
            console.error("Error fetching content:", error);
        }
    };

    fetchData(); 
}, []);
       console.log(contents,"cs")
  return (
    <div class="main">
        <div className="left">
            <div className="text">
<div className='fortext'>

{
contents && contents.title? (
    <>
        <h1 className='intro'>{contents.title}</h1>
        <p className='lorem'>{contents.body}</p>
    </>
) : (
    <>
        <h1 className='intro'>Add the contents you like by logging In</h1>
        <p className='lorem'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
        </p>
    </>
)}
              
                
               
</div>
                <div className="buttons">
                    <div className="purchase">
    purchase kit
                    </div>
                    <div className="learn">
learn more
                    </div>

     
                </div>
            </div>
        </div>
        <div className="right">
            <img src={designer} style={{width:"800px",height:"600px"}} alt="so" />
        </div>
  
</div>
  )
}

export default Main
