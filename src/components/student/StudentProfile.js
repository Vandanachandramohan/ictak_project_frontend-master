import * as React from 'react';
import Box from '@mui/material/Box';
import './StudentProfile.css'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img from '../../assets/robot.jpg';
import image from '../../assets/image.jpg';
import { typography } from '@mui/system';
import { alignProperty } from '@mui/material/styles/cssUtils';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function StudentProfile() {
   return ( 
     <div>
         <img src={img} alt='' className='studimg1'/>
        {/* <Box className='heading1'><h1 style={{color:'violet'}}>STUDENT DETAILS</h1></Box> */}
        <div className='profile' >
    <Box id='box'>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2}>
          <Item>
            <img src={image} alt='imge' style={{width:'10em',height:'10em',borderRadius:'12em',padding:'2em'}}/>
          <div id='contact'>
          <p>Student Id:</p>
          <p>Name:</p>
          <p>email:</p>
          <p>Phone:</p>
          </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item >
            <div id='item1'>
            <button id='update'><a href='#'>Update</a></button>
           <p id='GI'>General Information</p>
            <hr/>
            <hr/>
            </div>
            <div id='content'>
              <div id='left'>Address</div>
              <div>:</div>
              <div>#</div>
              <div id='left'>District</div>
              <div>:</div>
              <div>#</div>
              <div id='left'>State</div>
              <div>:</div>
              <div>#</div>
              <div id='left'>Qualification</div>
              <div>:</div>
              <div>#</div>
              <div id='left'>Passout year</div>
              <div>:</div>
              <div>#</div>
              <div id='left'>Technology Training</div>
              <div>:</div>
              <div>#</div>
              <div id='left'>Skills</div>
              <div>:</div>
              <div>#</div>
              <div id='left'>Employment Status</div>
              <div>:</div>
              <div>#</div>
          </div>
          </Item>
          <br/>
          <Item >
          <div id='item1'>
            <p id='GI'>Academics</p>
            <hr/>
            <hr/>
            </div>
            <div id='content'>
              <div id='left'>Exit-exam Mark</div>
              <div>:</div>
              <div>#</div>
              
          </div>
          </Item>
        </Grid>
        
      </Grid>
    </Box>
    </div>
    </div>
   );
}



    







    


