import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/login.css";

const Login = () => {

  const navigate = useNavigate();

  const [Lemail, setEmail] = useState("");
  const [Lpassword, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPassError] = useState("");

  function validateemail(value) {
    let mailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!mailPattern.test(value)) {
      setEmailError("Please Enter Valid Eail Address");
      return false;
    }
    setEmailError("");
    return true;
  }

  function validatepassword(value) {
    if (value.length < 8) {
      setPassError("Password should contain at least 8 characters");
      return false;
    }
    setPassError("");
    return true;
  }

  function showPassword(){
      setShowPass(!showPass);
  }

  function login(){
    let emailValid = validateemail(Lemail);
    let passwordValid = validatepassword(Lpassword);

    if(
      !emailValid || !passwordValid
    )
    {
      return;
    }

    let user = JSON.parse(localStorage.getItem("data1")) || [];
    let userFound = user.find(function(item){
     return(
      item.email === Lemail &&
      item.password === Lpassword
    );
  });
  if(userFound){
    localStorage.setItem("loggedInUser",JSON.stringify(userFound));
    navigate("/dashboard")
  }
     else{
      setPassError("Invalid email or password");
    }

}
  return (
    <>
      <div className="heading">
        <h2>LOGIN SCREEN</h2>
      </div>
      <div className="container">
        <div className="navbar">
          <h3>AuthApp</h3>
          <div className="nav_right">Don't have an account?<a onClick={() => navigate("/signup")}><button>Sign Up</button></a></div>
        </div>
        <div className="main_section">
          <div className="left_content">
            <img src="images/IMG-20260807-WA00012.jpg" alt="loginup" />
          </div>
          <div className="right_content">
            <div className="h1">
              <h1>Welcome Back!</h1>
            </div>
            <div>
              <p>Login to your Account</p>
            </div>
            <input type="text" value={Lemail} onChange={(e) => {
              setEmail(e.target.value);
              validateemail(e.target.value);
            }} placeholder="Email Address" />
            <span>{emailError}</span>
            <div className="input_box">
              <input type={showPass ? "text":"password"} value={Lpassword} onChange={(e) => {
                setPass(e.target.value);
                validatepassword(e.target.value);
              }
              } placeholder="Password" />
              <span onClick={showPassword}>👁</span>
            </div>
            <span>{passwordError}</span>
            <div className="option">
              <label>
                <input type="checkbox" id="check" />Remember me</label>
              <a href="#">Forget Password?</a>
            </div>
            <button type="button" onClick={login} className="btnlog">Login</button>
            <div className="para">
              Do you have an account?<a onClick={() => navigate("/signup")}>Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login