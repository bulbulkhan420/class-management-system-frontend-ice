import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Teacherheader from './Teacherheader';
import axios from 'axios'
import teci from './teacher.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client'
import { baseurl } from '../Urlbase';
import { Context } from '../Routesite';
export default function Teachersms() {
    let {id}=useParams();
    let [tin,stin]=useState({});
    let [year,syear]=useState("1-1");
    let [msg,smsg]=useState("");
    let test=useContext(Context);
    let socket=test.socket;
    let sendms=async ()=>{
      let check=false;
      let data={
        id:tin.name,
        year:year,
        msg:msg
      }
    axios.post(`${baseurl}/sendmessage`,data)
    .then((res)=>{
      if(res.data.ok){
        toast.success('Message Sent',{
          position:'top-center'
       })
      }
      else{
        toast.success('Something Error',{
          position:'top-center'
       })
      }
    })
    
     
      
    }
    useEffect(()=>{
      axios.post(`${baseurl}/teacherinfo`,{
        id
      })
      .then((res)=>{
         stin(res.data);
        
      })
    },[])
   
  return (
    <div>
      <Teacherheader sid={id}/>
      <div style={{height:'40px',width:'100%'}}></div>
      <div className={teci.poot}>
        <p style={{textAlign:'center',color:'aliceblue'}}>Select Semester</p>
        <select value={year} onChange={(e)=>{syear(e.target.value)}} id="">
          <option value="1-1">1-1</option>
          <option value="1-2">1-2</option>
          <option value="2-1">2-1</option>
          <option value="2-2">2-2</option>
          <option value="3-1">3-1</option>
          <option value="3-2">3-2</option>
          <option value="4-1">4-1</option>
          <option value="4-2">4-2</option>
        </select>
       
        <textarea cols="30" rows="10" type="text" onChange={(e)=>{smsg(e.target.value)}} placeholder='Enter Your Message' />
        <button onClick={sendms}>Send Message</button>
      </div>
      <ToastContainer position="top-center"/>
    </div>
  )
}
