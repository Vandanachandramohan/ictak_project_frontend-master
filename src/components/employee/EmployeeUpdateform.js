
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import employeeupdate from './Employeedb';
import './EmployeeUpdateform.css';

function EmployeeUpdateform(props) {

     const [data,setData]=useState([]);
     const {name} =useParams();

    const employee=employeeupdate.find(i=>i.empname===name);

    useEffect(async()=>{
        let result= await fetch(`http://localhost:3000/emp-update/${name}` );//fetch('http://localhost:3000/emp-update' +props.params.match.empname );
        let response = await result.json();
        setData(response);
    })
  return (
    <div className='empform'>
        <h1 style={{marginBottom:'15px',fontFamily:'sans-serif',fontWeight:'bold'}} >Edit Details</h1>
        
            <form action="" className='container1'>
            <input type="text" placeholder='empname' value={employee.empname}/> <br /><br />
            <input type="text" placeholder='role' value={employee.role}/> <br /><br />
            <input type="text" placeholder='emailid' value={employee.emailid}/> <br /><br />
            
            <button className='update'>Update</button> <br /><br />
            </form>
            
           
        
    </div>
  )
}

export default EmployeeUpdateform;