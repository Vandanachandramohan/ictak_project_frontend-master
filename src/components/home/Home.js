import React from 'react';
import Footer from '../footer/Footer';
import './Home.css';
import pic1 from '../../assets/mern.jpg';
import pic2 from '../../assets/mean.jpg';
import pic3 from '../../assets/digital.png';
import FooterPage from '../footer/Footer';
const Home =()=> {
    return(
    <div>
        
      <div className='text-on-image'>
        <img className="homeimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9IVb1IgCd823xXse5yGFIy1Wc4FWsWpvD0w&usqp=CAU" alt="" />
        <h1  className='title1'>Boost Your Skills</h1>
        <h2 className='title2'>With The New Technologies</h2>
        <div className='para'>
          <h3>Why to associate with us?</h3>
          <li>Government supported and Industry-led Program</li>
          <li>Government scholarships and affordable fees model</li>
          <li>One-stop shop for Students, Unemployed and Working professionals</li>
          <h4 className='heading2'>COURSES</h4>
          <div style={{display:'flex'}}>
            <div style={{padding:25}}>
              <img src={pic1} alt="" className='courseimg' />
              <br></br><br></br>
              <h6 className='coursehead'>MERN Stack Development</h6>
              <p className='coursepara'>Certified specialist in MERN stack</p>
            </div>
            <div  style={{padding:25}}>
              <img src={pic2} alt="" className='courseimg' />
              <br></br><br></br>
              <h6 className='coursehead'>MEAN Stack Development</h6>
              <p className='coursepara'>Certified specialist in MEAN stack</p>
            </div>
            <div  style={{padding:25}}>
              <img src={pic3} alt="" className='courseimg' />
              <br></br><br></br>
              <h6 className='coursehead'>Digital Marketing</h6>
              <p className='coursepara'>Certified specialist in Digital Marketing</p>
            </div>
          </div>
        </div>
       
      </div>
      <a href='/courses'>
      <button className='bttn'>show more</button>
      </a>
             <Footer />
    </div>
            
             );
};
export default Home;
