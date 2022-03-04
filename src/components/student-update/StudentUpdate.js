import React from 'react';
import studentupdate from './Studentdb';
import './StudentUpdate.css';
import StdUpdateform from './StdUpdateform';
import {Link} from 'react-router-dom';

function StudentUpdate() {
  return (
    <div>
      <img className='stdimage' src='https://cdn.dribbble.com/users/2196582/screenshots/5103550/meeting_in_office..jpg' alt="cover" />
      <h3 style={{textAlign:'center'}}>Students</h3>
      {studentupdate.map((i,key)=>(
        <>
        <div className='alldetails'>
         <img src={i.image} className="image" alt="" />
        <div className='details'>
          <span>{i.stdname}</span>
          <br></br>
          <span>{i.skillset}</span>
          <br></br>
          <span>{i.emailid}</span> 
        </div>
        </div>
          <div className='button'>
          <Link to={'/stud-updateform/'+i.stdname}><button className='edit'>{i.edit}</button></Link>
            <button className='delete'>{i.delete}</button>
          </div>
          
          </>
      ))}
        </div>
  )
}

export default StudentUpdate;