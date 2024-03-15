import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import   './Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 
function Login() {

const[loginDetails,setLoginDetails]=useState({})
 
function loginHere(){
    toast.warn(' password and username not valid!');
    fetch("http://localhost:8080/api/v1/authenticate/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginDetails)
    })
    .then((res) => res.json())
    .then((res) => {
       if(!res.token){
        
        }
        console.log(res.token);
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });
 
}
function setValue(e){
    setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
}
return (
  <div className="App">
      
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

 />

  <div className="text-box"  >
  <input className="form-control form-control-sm text-box" name="username" onChange={setValue} type="text" placeholder="username" aria-label=".form-control-sm example"/>

  </div>
  <div className="text-box" >
  <input className="form-control form-control-sm text-box" password="password" onChange={setValue} type="text" placeholder="password" aria-label=".form-control-sm example"/>
   </div>
 
      
    
   <div className="text-box" >
   <input className="form-control form-control-sm btn btn-success text-box" onClick={loginHere} type="button" value="Login" placeholder=".form-control-sm" aria-label=".form-control-sm example"/>
   </div>
   <div className="text-box link" >
         <Link to="/register">Register</Link>
      </div>
  </div>
);
}

export default Login;
