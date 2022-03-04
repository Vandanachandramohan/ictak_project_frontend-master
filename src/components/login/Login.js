
import React from 'react'
import'./Login.css'; 

const Login = () => {
  return (
    <div className='background' style={{backgroundColor:'black',height:'100%'}}>
      <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGVzaWduZXJ8ZW58MHx8MHx8&w=1000&q=80" alt="cover" />
        <div className='form'>
          <form action="" class="container">
            <h1 style={{marginBottom:13,color:'white',textAlign:'center'}}>LOGIN</h1>

            <label className='loglab' style={{color:'black',textAlign:'none'}} for="email"><b></b></label>
            <input style={{width:260}} className='loginp' type="text" placeholder="Enter Email" name="email" required="Email"/>
            <br></br><br></br>
            <label className='loglab' for="psw"><b></b></label>
            <input style={{width:260}} className='loginp' type="password" placeholder="Enter Password" name="psw" required/>
            <br></br><br></br>
            <button type="submit" className="btn1">Login</button>
          </form>

        </div>
    
    </div>
    
  )
  
}

export default Login