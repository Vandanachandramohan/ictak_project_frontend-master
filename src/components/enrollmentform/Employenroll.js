import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import './Employenroll.css';
import validation from './validation_1';


function Employenroll(props) {
    const [formValues,setFormValues] = useState({name:"", email:"", pswd:"", role:"" });
   
    const[formErrorValues, setFormErrorValues] = useState({});

    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormValues({...formValues,[name]:value});
        console.log(formValues);
    }
    const handleSubmit = (event) => {
       event.preventDefault(); 
        setFormErrorValues(validation(formValues));
        setIsSubmit(true);
    }
    useEffect(()=>{
    if(Object.keys(formErrorValues).length===0 && isSubmit){
        alert("ENROLLED SUCCESSFULLY");
    }
    },[formErrorValues]);



return (
    <div>
        <div className='empbackground'>
 
         <div className="main">  	
            <input type="checkbox" id="chk" aria-hidden="true"/>

        <div className="enrollnow">
            <form onSubmit={handleSubmit}>
                <label className='emplab' for="chk" aria-hidden="true">EMPLOYEE REGISTRATION FORM</label>
                <input className='empinp' type="text" name="name" placeholder="NAME" required="" value={formValues.name} onChange={handleChange} />
                <p className='error'>{formErrorValues.name}</p>
                <input className='empinp' type="email" name="email" placeholder="EMAIL" required=""value={formValues.email} onChange={handleChange} />
                <p className='error'>{formErrorValues.email}</p>
                 <input className='empinp' type="password" name="password" placeholder="PASSWORD" required=""value={formValues.password} onChange={handleChange}/> 
                <p className='error'>{formErrorValues.password}</p>
               
                <input className='empinp' type="text" name="role" placeholder="ROLE" required=""value={formValues.role} onChange={handleChange} />
                <p className='error'>{formErrorValues.role}</p>
               
               
       

                <button className='empbtn'>ENROLL</button>
            </form>
        </div>

        
    </div>
    </div>
    <Footer />
</div>
);
}

export default Employenroll;