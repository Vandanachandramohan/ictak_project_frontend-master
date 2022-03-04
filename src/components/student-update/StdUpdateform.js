import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import studentupdate from './Studentdb';
import './StdUpdateform.css';

function StdUpdateform(props) {

    const [data,setData]=useState([]);
    const {name} =useParams();

    const student=studentupdate.find(i=>i.stdname===name);

    useEffect(async()=>{
        let result= await fetch(`http://localhost:3000/stud-update/${name}` );//fetch('http://localhost:3000/std-update' +props.params.match.stdname );
        let response = await result.json();
        setData(response);
    })

  return (
    <div className='stdform'>
        <h1 style={{marginBottom:'15px',fontFamily:'sans-serif',fontWeight:'bold'}} >Edit Details</h1>
        
            <form action="" className='container1'>
            <input type="text" placeholder='stdname' value={student.stdname}/> <br /><br />
            <input type="text" placeholder='skillset' value={student.skillset}/> <br /><br />
            <input type="text" placeholder='emailid' value={student.emailid}/> <br /><br />
            
            <button className='update'>Update</button> <br /><br />
            </form>
            
           
        
    </div>
  )
}

export default StdUpdateform;