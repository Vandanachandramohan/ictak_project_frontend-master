import React from 'react'
import { Link } from 'react-router-dom';
import './AllStudents.css';

import allstudents from './StudentDB';

const AllStudents = () => {
 
  

  return (
    <div>
        <img className='empimage' src='https://www.mjcpa.com/wp-content/uploads/2021/05/b9602001-6766-44b9-9a33-b77f80c41eb4_eng-0303-communication-strategies-higher-education.jpg' alt="" />
      <h3 style={{textAlign:'center'}}>STUDENTS</h3>
      {allstudents.map((i)=>(
        <>
        <div className='alldetails'>
         <img src={i.image} className="image" alt="" />
        <div className='details'>
          <span style={{color:'blue',fontWeight:'bold'}}>{i.studname}</span>
          <br></br>
          <span>Student ID:{i.studid}</span>
          <br></br>
          <span>{i.studemail}</span> 
        </div>
        </div>
          <div className='button'>
            <Link to={`/stud-profile/${i.studid}`}>
            <button className='showdetails'>{i.showdetails}</button>
            </Link>
            <button className='delete'>{i.delete}</button>
          </div>
          
          </>
      ))}
    </div>
  )
}

export default AllStudents