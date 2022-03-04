import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import './Studentenroll.css';
import validation from './Validation';

function Studentenroll(props) {
    const [formValues,setFormValues] = useState({name:"", email:"",password:"", phonenumber:"", address:"", highestqualification:"", passoutyear:"", skillset:"", employmentstatus:"", technologytraining:"", year:"", course:"",fee:"",photo:""});
   
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
        <div className='studbackground'>
     
     <div className="main">  	
		<input className='studinp' type="checkbox" id="chk" aria-hidden="true"/>

			<div className="enrollnow">
				<form onSubmit={handleSubmit}>
					<label className='studlab' for="chk" aria-hidden="true">STUDENT REGISTRATION FORM</label>
					
                    <input className='studinp' type="text" name="name" placeholder="NAME" required="" value={formValues.name} onChange={handleChange} />
                    <p className='error'>{formErrorValues.name}</p>
                   
					<input className='studinp' type="email" name="email" placeholder="EMAIL" required="" value={formValues.email} onChange={handleChange} />
                    <p className='error'>{formErrorValues.email}</p>

                    <input className='studinp' type="password" name="password" placeholder="PASSWORD" required=""  value={formValues.password} onChange={handleChange}/>
                    <p className='error'>{formErrorValues.password}</p>
                   
                    <input className='studinp' type="number" name="phonenumber" placeholder="MOBILE NUMBER" required="" value={formValues.phonenumber} onChange={handleChange} /> 
					<p className='error'>{formErrorValues.phonenumber}</p>
                    
                    <input className='studinp' type="text" name="address" placeholder="ADDRESS" required=""value={formValues.address} onChange={handleChange} />
                    <p className='error'>{formErrorValues.address}</p>
                   
                    {/* <input className='studinp' type="text" name="highestqualification" placeholder="Highest Qualification" required=""value={formValues.highestqualification} onChange={handleChange} /> */}
                    <select style={{marginLeft:-100,height:40,borderRadius:5}} name='highestqualification'  value={formValues.highestqualification} onChange={handleChange} className="myform" >
                    <option value = "" >Select your Highest Qualification</option>
                    <option >B.Tech</option>
                    <option >M.Tech</option>
                    <option >BCA</option>
                    <option >Others</option>
                    </select>
                    <p className='error'>{formErrorValues.highestqualification}</p>

                    <input className='studinp' type="number" name="passoutyear" placeholder="PASSOUT YEAR" required=""value={formValues.passoutyear} onChange={handleChange} /> 
                    <p className='error'>{formErrorValues.passoutyear}</p>

                    <input className='studinp' type="text" name="skillset" placeholder="SKILLSET" required=""value={formValues.skillset} onChange={handleChange} />
                    <p className='error'>{formErrorValues.skillset}</p>

                    {/* <input className='studinp' type="text" name="employmentstatus" placeholder="Employment status" required=""value={formValues.employmentstatus} onChange={handleChange} /> */}
                    <select style={{marginLeft:-100,height:40,borderRadius:5}} name="employmentstatus" value={formValues.employmentstatus} onChange={handleChange}  className="myform">
                    <option value = "" >Select your Employment Status</option>
                    <option value = "STUDENT">Student</option>
                    <option value = "EMPLOYEE">Employee</option>
                    <option value = "SELFEMPLOYED">Self employed</option>
                    </select>
                    <p className='error'>{formErrorValues.employmentstatus}</p>

                    <input className='studinp' type="text" name="technologytraining" placeholder="TECHNOLOGY TRAINING" required=""value={formValues.technologytraining} onChange={handleChange} />
                    <p className='error'>{formErrorValues.technologytraining}</p>

                    <input className='studinp' type="number" name="year" placeholder="YEAR" required=""value={formValues.year} onChange={handleChange} /> 
                    <p className='error'>{formErrorValues.year}</p>

                    {/* <input className='studinp' type ="text" name="course" placeholder="Course" required=""value={formValues.course} onChange={handleChange} /> */}
                    <select style={{marginLeft:-100,height:40,borderRadius:5}} name="course" value={formValues.course} onChange={handleChange} className="myform">
                    <option value = "" >Select your Course</option>
                    <option value = "FULL STACK DEVELOPMENT" >Full stack development</option>
                    <option value = "DATA SCIENCE AND ANALYTICS">Data science and analytics</option>
                    <option value = "ROBOTIC PROCESS AUTOMATION">Robotic process automation</option>
                    <option value = "CYBER SECURITY ANALYST">Cyber security analyst</option>
                    <option value = "DIGITAL MARKETING">Digital marketing</option>
                    </select>
                    <p className='error'>{formErrorValues.course}</p>

                    <input className='studinp'  type ="text" name="fee" placeholder="COURSE FEE" required="" value={formValues.fee} onChange={handleChange} />
                   
                   {/* <input  className='studinp' type ="text" name="photo" placeholder="Upload a photo" required=""value={formValues.photo} onChange={handleChange} /> */}
                    <label style={{marginLeft:130,fontWeight:'bold'}}>UPLOAD PHOTO</label>
                    <input style={{marginLeft:30}} type ="file" name="photo" placeholder="Upload a photo" required="" value={formValues.photo} onChange={handleChange}/>
                    <br></br><br></br>
                    {/* <input type ="text" name="photo" placeholder="Upload a photo" required=""/> */}
                   
           

					<button className='studbtn'>ENROLL</button>
				</form>
                
			</div>	
	    </div> 
                
    </div>
    <Footer /> 
    </div>  
    );
}
export default Studentenroll;