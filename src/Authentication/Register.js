import React, { useState } from "react";
import "./Login.css";
import { Link } from 'react-router-dom';

function Register() {
  const [loginDetails, setLoginDetails] = useState({});
  const [profile, setProfile] = useState(null)

  const [loginStatus, setLoginStatus] = useState(false);

  function profileUpload(e){
    setProfile(e.target.files[0])
    console.log(profile)
  }

  function loginHere() {
    setLoginDetails({
      profile:profile
    })
    console.log(loginDetails);
    // fetch("http://localhost:8080/api/v1/authenticate/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(loginDetails),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (!res.token) {
    //       setLoginStatus(true);
    //     }
    //     console.log(res.token);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  }
  function setValue(e) {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  }
  return (
    <div className="App">
      <div className="text-box">
        <input
          className="form-control form-control-sm text-box"
          name="fName"
          onChange={setValue}
          type="text"
          placeholder="first name"
          aria-label=".form-control-sm example"
        />
      </div>
      <div className="text-box">
        <input
          className="form-control form-control-sm text-box"
          name="lName"
          onChange={setValue}
          type="text"
          placeholder="last name"
          aria-label=".form-control-sm example"
        />
      </div>
      <div className="text-box">
        <input
          className="form-control form-control-sm text-box"
          name="email"
          onChange={setValue}
          type="email"
          placeholder="email"
          aria-label=".form-control-sm example"
        />
      </div>
      <div className="text-box">
        <input
          className="form-control form-control-sm text-box"
          name="password"
          onChange={setValue}
          type="password"
          placeholder="password"
          aria-label=".form-control-sm example"
        />
      </div>
      <div className="text-box">
        <input
          className="form-control form-control-sm text-box"
          name="age"
          onChange={setValue}
          type="number"
          placeholder="age"
          aria-label=".form-control-sm example"
        />
      </div>
    <div className="text-box">
    <div class="mb-3">
   <input onChange={profileUpload} name="profile" class="form-control form-control-sm" id="formFileSm" type="file"/>
</div>
    </div>
      <div className="text-box">
        <input
          className="form-control form-control-sm btn btn-success text-box"
          onClick={loginHere}
          type="button"
          value="Login"
          placeholder=".form-control-sm"
          aria-label=".form-control-sm example"
        />
      </div>
      <div className="text-box link" >
         <Link to="/">Login</Link>
      </div>
    </div>
  );
}

export default Register;
