import React, { useState } from 'react'
import Teacherheader from './Teacherheader'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import ts from "./teacher.module.css"
import { FaArrowAltCircleDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import fileDownload from 'js-file-download';
import { baseurl } from '../Urlbase';
export default function Teachersubmission() {
    let {id}=useParams();
    let [year,syear]=useState("");
    let [allsub,sallsub]=useState([]);
    let setval= (e)=>{
        e.preventDefault();
        let p=e.target.value;
         syear(e.target.value);
            axios.post(`${baseurl}/allsub`,{
                year:p,
                id
            })
            .then((res)=>{
                sallsub(res.data);
                
            })
        
       
    }
    let download=async (ob)=>{
     
        let response= await axios.post(`${baseurl}/downloads`,{
            id:ob.filename
        },{
            responseType:'blob'
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'downloaded-file.pdf');
        document.body.appendChild(link);
        link.click();
    }
    let del=(ob,i)=>{
       axios.post(`${baseurl}/delsub`,{
        fname:ob.filename
       })
       .then((res)=>{
        if(res.data.ok){
          allsub.splice(i,1);
          sallsub([...allsub]);
        }
       }) 
    }
  return (
    <div >
      <Teacherheader sid={id}/>
      <div className={ts.tss}>
        <div className={ts.ing1}>
            <div>Select Specific Class</div>
            <select  value={year} onChange={setval} id="">
      <option value="">Choose the Year</option>
        <option value="1-1">1-1</option>
        <option value="1-2">1-2</option>
        <option value="2-1">2-1</option>
        <option value="2-2">2-2</option>
        <option value="3-1">3-1</option>
        <option value="3-2">3-2</option>
        <option value="4-1">4-1</option>
        <option value="4-2">4-2</option>
      </select></div>
      
     <div className={ts.ing} style={{maxHeight:'auto',minHeight:'40dvh',backgroundColor:'purple'}}> { allsub &&
        allsub.map((it,i)=>{
            return <div key={i}>
                <span className={ts.stp}>{it.filename}</span>
                <div className={ts.st}>
                <span onClick={()=>{download(it)}} style={{marginRight:'5px'}}><FaArrowAltCircleDown id={ts.butsize}/></span>
                <span onClick={()=>{
                    del(it,i);
                }} ><MdDelete id={ts.butsize}/></span>
                </div>
               
               
            </div>
        })
      }</div>
      </div>
     
    </div>
  )
}
