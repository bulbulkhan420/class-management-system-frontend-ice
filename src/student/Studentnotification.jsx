import React, { useContext, useEffect, useState } from 'react'
import Studentheader from './Studentheader'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseurl } from '../Urlbase';
import { Context } from '../Routesite';
export default function Studentnotification() {
    let {id}=useParams();
    let [message,smessage]=useState([{}]);
    let [up,sup]=useState([]);
    let valo=useContext(Context);
    let socket=valo.socket;
    let [val,sval]=useState(0);
   
    axios.post(`${baseurl}/studentinfo`,{
      id
    })
    .then((res)=>{
      let data=res.data.currentsemester;
    
    })
   useEffect(()=>{
    
   axios.post(`${baseurl}/studentinfo`,{
    id
   })
   .then((res)=>{
    let data=res.data.currentsemester;
     
    axios.post(`${baseurl}/allmessage`,{
      year:data
    })
    .then((res)=>{
       smessage(res.data);
      
       sup(res.data);
       
    })

   })
   },[socket]);
   if(up.length>10){
    up.splice(10,up.length);
    sup([...up]);
   }
  return (
    <div>
        <Studentheader sid={id}/>
      <div style={{height:'45px'}}></div>
      <div>{up.map((it,i)=>{ 
          return <div style={{backgroundColor:'purple',marginTop:'0px',marginLeft:'auto',marginBottom:'5px',marginRight:'auto', width:'80%',borderRadius:'10px'}} key={i}>
          <p style={{fontWeight:'bolder',textAlign:'center',lineHeight:'30px',color:'aliceblue'}}>{it.name}</p>
          <p style={{fontWeight:'normal',textAlign:'center',lineHeight:'30px',color:'aliceblue'}}>{it.message}</p>
          <p style={{fontSize:'10px',textAlign:'center',lineHeight:'30px',color:'aliceblue'}}>{it.time}</p>
          
        </div>
      })}</div>
    </div>
  )
}
