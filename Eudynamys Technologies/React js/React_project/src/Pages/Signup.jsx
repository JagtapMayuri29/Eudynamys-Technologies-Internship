import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

const Signup = () => {

    const navigate = useNavigate();

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [pass, setPass] = useState("");
    const [cpass, setCPass] = useState("");


    const [fnameError, setFnameError] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [mobileError, setMobileError] = useState("");
    const [passError, setPassError] = useState("");
    const [cpassError, setCpassError] = useState("");

    function validatefname(value) {
        if (value.length < 5) {
            setFnameError("First name should contain at least 5 characters");
            return false;
        }
        setFnameError("");
        return true;
    }
    function validatelname(value) {
        if (value.length < 5) {
            setLnameError("First name should contain at least 5 characters");
            return false;
        }
        setLnameError("");
        return true;
    }

    function validateemail(value) {
        let mailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!mailPattern.test(value)) {
            setEmailError("Please enter a valid email address");
            return false;
        }
        setEmailError("");
        return true;
    }

    function validatemobile(value) {
        let mobpattern = /^[0-9]{10}$/;
        if (!mobpattern.test(value)) {
            setMobileError("Please enter valid 10 Digit Number");
            return false;
        }
        setMobileError("");
        return true;
    }

    function validatepass(value) {
        if (value.length < 8) {
            setPassError("Password should contain at least 8 characters");
            return false;
        }
        setPassError("");
        return true;
    }

    function validatecpass(value) {
        if (value !== pass) {
            setCpassError("Passwords do not match");
            return false;
        }
        setCpassError("");
        return true;
    }

    function signup() {
        let fnameValid = validatefname(fname);
        let lnameValid = validatelname(lname);
        let emailValid = validateemail(email);
        let mobileValid = validatemobile(mobile);
        let passwordValid = validatepass(pass);
        let cpassValid = validatecpass(cpass);
        if (
            !fnameValid ||
            !lnameValid ||
            !emailValid ||
            !mobileValid ||
            !passwordValid ||
            !cpassValid
        ) {
            return;
        }
        let user = JSON.parse(localStorage.getItem("data1")) || [];
        for (let i = 0; i < user.length; i++) {
            if (user[i].email === email) {
                setEmailError("User already registered with this email");
                return;
            }
        }
        let newuser = {
            fname: fname,
            lname: lname,
            email: email,
            mobile: mobile,
            password: pass
        };
        user.push(newuser);
        localStorage.setItem("data1", JSON.stringify(user));
        alert("Account created successfully!");
        navigate("/login");
    
}
return (
    <>
        <div className="heading">
            <h2>SIGN UP SCREEN</h2>
        </div>
        <div className="container">
            <div className="navbar">
                <h3>AuthApp</h3>
                <div className="nav_right">Already have an account?<button onClick={() => navigate("/login")}>Login</button></div>
            </div>
            <div className="main_section">
                <div className="left_content">
                    <img src="images/IMG-20260807-WA0011.jpg" alt="signup" />
                </div>
                <div className="right_content">
                    <div className="h1">
                        <h1>Create Your Account</h1>
                    </div>
                    <div>
                        <p>Fill in the details below to get Started.</p>
                    </div>
                    <div className="name_view">
                        <div>
                            <input type="text" value={fname} placeholder="First Name" onChange={(e) => {
                                setFname(e.target.value);
                                validatefname(e.target.value);
                            }}
                            />
                            <span>{fnameError}</span>
                        </div>
                        <div>
                            <input type="text" value={lname} placeholder="Last Name" onChange={(e) => {
                                setLname(e.target.value);
                                validatelname(e.target.value);
                            }} />
                            <span>{lnameError}</span>
                        </div>
                    </div>
                    <input type="email" value={email} placeholder="Email Address" onChange={(e) => {
                        setEmail(e.target.value);
                        validateemail(e.target.value);
                    }}
                    />
                    <span>{emailError}</span>
                    <input type="text" value={mobile} placeholder="Mobile Number" onChange={(e) => {
                        setMobile(e.target.value);
                        validatemobile(e.target.value);
                    }} />
                    <span>{mobileError}</span>
                    <input type="password" value={pass} placeholder="Password" onChange={(e) => {
                        setPass(e.target.value);
                        validatepass(e.target.value);
                    }} />
                    <span>{passError}</span>
                    <input type="password" value={cpass} placeholder="Confirm Password" onChange={(e) => {
                        setCPass(e.target.value);
                        validatecpass(e.target.value);
                    }} />
                    <span>{cpassError}</span>
                    <button type="button" onClick={signup} className="btnreg">Create Account</button>
                    <div className="para">
                        Already Have Account?<a onClick={() => navigate("/login")}>Login</a>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Signup