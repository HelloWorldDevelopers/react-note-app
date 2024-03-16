import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import   './Login.css'
import { useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 
  import { useNavigate } from "react-router-dom"

function Login() {

const[loginDetails,setLoginDetails]=useState({})
 useEffect(()=>{
     
})
const navigate = useNavigate()

function loginHere(){
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
             setLoginDetails({})
             toast.warn(' password and username not valid!');
             
        }else{
            console.log(res.userId);
            debugger;
            sessionStorage.setItem("token",res.token)
            sessionStorage.setItem("userId",res.userId)
            navigate("/allNotes")
        }
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
  <input className="form-control form-control-sm text-box" name="email" onChange={setValue} type="email" placeholder="username" aria-label=".form-control-sm example"/>

  </div>
  <div className="text-box" >
  <input className="form-control form-control-sm text-box" name="password" type="password" onChange={setValue}  placeholder="password" aria-label=".form-control-sm example"/>
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
