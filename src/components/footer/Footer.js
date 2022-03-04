import React from 'react';
import './Footer.css'

function Footer(props) {
  return (
    // <div className='footer'>
    //   <h2>ICT ACADEMY KERALA</h2>
    //   <p>G1,Ground Floor, Thejaswini Building,</p>
    //   <p>Technopark, Thiruvananthapuram,</p>
    //   <p>Kerala, India.</p>
    //   <p>Mobile: 7594051437</p>
    // </div>
  <div className='footer'>
  
    
    <a href="#" className="fa fa-facebook-square"></a>
    <a href="#" className="fa fa-youtube"></a>
    <a href="#" className="fa fa-twitter-square"></a>
    <a href="#" className="fa fa-instagram"></a>
    <div className="container2">
      <div style={{marginLeft:90,marginTop:25}}>
        <h5>ICT ACADEMY HQ</h5>
        <p>L-9, Thejaswini Building,Technopark,</p>
        <p> Thiruvananthapuram,Kerala,India.</p>
        <p>Mobile: 7594051437</p>
      </div>
      <div style={{marginLeft:100,marginTop:25}}>
        <h5>ICT ACADEMY-CENTRAL REGION</h5>
        <p>Ground Floor,Rajamally Building,</p>
        <p>Infopark, Koratty, Thrissur, Kerala,India.</p>
        <p>Mobile: 7594051437</p>
      </div>
      
      <div style={{marginLeft:100,marginTop:25}}>
       <h5>ICT ACADEMY-NORTH REGION</h5>
       <p>2nd Floor, Ul Cyberpark Building, </p>
       <p>Nellikode PO, Kozhikode, Kerala, India.</p>
       <p>Mobile: 7594051437</p>
      </div>
    </div>
       
  </div>
  );
}

export default Footer;