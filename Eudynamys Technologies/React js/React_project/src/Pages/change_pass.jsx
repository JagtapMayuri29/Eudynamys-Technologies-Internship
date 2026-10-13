import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/change_password.css";

const ChangePass = () => {

    const navigate = useNavigate();

    const [curpass, setCurpass] = useState("");
    const [newpass, setNewpass] = useState("");
    const [confpass, setConfpass] = useState("");

    const [currentError, setCurrentError] = useState("");
    const [passError, setPassError] = useState("");
    const [cpassError, setCpassError] = useState("");

    const [showCurPass, setShowCurPass] = useState(false);
    const [showNewPass, setShowNewPass] = useState(false);
    const [showConfPass, setShowConfPass] = useState(false);


    const validatecurpass = () => {

        let loggedInUser =
            JSON.parse(localStorage.getItem("loggedInUser"));

        if (curpass === "") {
            setCurrentError("Enter current password");
        }
        else if (curpass !== loggedInUser.password) {
            setCurrentError("Current password is incorrect");
        }
        else {
            setCurrentError("");
        }
    };


    const validatepass = () => {

        if (newpass === "") {
            setPassError("Enter new password");
        }
        else if (newpass.length < 8) {
            setPassError("Password must be at least 8 characters");
        }
        else {
            setPassError("");
        }
    };


    const validatecpass = () => {

        if (confpass === "") {
            setCpassError("Confirm password");
        }
        else if (newpass !== confpass) {
            setCpassError("Password does not match");
        }
        else {
            setCpassError("");
        }
    };

    function logout() {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  }


    const updatepass = () => {

        // Get logged in user FIRST
        let loggedInUser =
            JSON.parse(localStorage.getItem("loggedInUser"));

        // Get all users
        let user =
            JSON.parse(localStorage.getItem("data1")) || [];


        // Current password validation
        if (curpass === "") {
            setCurrentError("Enter current password");
            return;
        }

        if (curpass !== loggedInUser.password) {
            setCurrentError("Current password is incorrect");
            return;
        }

        setCurrentError("");


        // New password validation
        if (newpass === "") {
            setPassError("Enter new password");
            return;
        }

        if (newpass.length < 8) {
            setPassError("Password must be at least 8 characters");
            return;
        }

        setPassError("");


        // Confirm password validation
        if (confpass === "") {
            setCpassError("Confirm password");
            return;
        }

        if (newpass !== confpass) {
            setCpassError("Password does not match");
            return;
        }

        setCpassError("");


        // Update password
        for (let i = 0; i < user.length; i++) {

            if (user[i].email === loggedInUser.email) {

                user[i].password = newpass;

                // Update data1
                localStorage.setItem("data1", JSON.stringify(user));

                // Update loggedInUser
                loggedInUser.password = newpass;

                localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

                alert("Password updated successfully");

                navigate("/success");

                return;
            }
        }
    };


    return (
        <div className="change_pass">

            <div className="heading">
                <h2>CHANGE PASSWORD SCREEN</h2>
            </div>
            <div className="container">
                <div className="navbar">
                    <h3>AuthApp</h3>
                    <div className="nav_right">Welcome<button onClick={logout}>Logout</button></div>
                </div>


                <div className="main_section">

                    {/* SIDEBAR */}

                    <div className="left_content">

                        <ul className="menu">

                            <li>
                                <a
                                    onClick={() => navigate("/dashboard")}
                                >
                                    Dashboard
                                </a>
                            </li>

                            <li>
                                <a
                                    onClick={() => navigate("/profile") }
                                    className="active"
                                >
                                    Profile
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Settings
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Help
                                </a>
                            </li>

                        </ul>

                    </div>


                    {/* RIGHT CONTENT */}

                    <div className="right_content">
                        <div className="details">

                            {/* CURRENT PASSWORD */}

                            <div className="label">
                                Current Password
                            </div>

                            <div className="input_box">

                                <input
                                    type={
                                        showCurPass
                                            ? "text"
                                            : "password"
                                    }
                                    value={curpass}
                                    onKeyUp={validatecurpass}
                                    onChange={(e) =>
                                        setCurpass(e.target.value)
                                    }
                                />

                                <span
                                    onClick={() =>
                                        setShowCurPass(!showCurPass)
                                    }
                                >
                                    👁
                                </span>

                            </div>

                            <span>
                                {currentError}
                            </span>


                            {/* NEW PASSWORD */}

                            <div className="label">
                                New Password
                            </div>

                            <div className="input_box">

                                <input
                                    type={
                                        showNewPass
                                            ? "text"
                                            : "password"
                                    }
                                    value={newpass}
                                    onKeyUp={validatepass}
                                    onChange={(e) =>
                                        setNewpass(e.target.value)
                                    }
                                />

                                <span
                                    onClick={() =>
                                        setShowNewPass(!showNewPass)
                                    }
                                >
                                    👁
                                </span>

                            </div>

                            <span>
                                {passError}
                            </span>


                            {/* CONFIRM PASSWORD */}

                            <div className="label">
                                Confirm Password
                            </div>

                            <div className="input_box">

                                <input
                                    type={
                                        showConfPass
                                            ? "text"
                                            : "password"
                                    }
                                    value={confpass}
                                    onKeyUp={validatecpass}
                                    onChange={(e) =>
                                        setConfpass(e.target.value)
                                    }
                                />

                                <span
                                    onClick={() =>
                                        setShowConfPass(!showConfPass)
                                    }
                                >
                                    👁
                                </span>

                            </div>

                            <span>
                                {cpassError}
                            </span>


                            <button
                                type="button"
                                onClick={updatepass}
                                className="updatebtn"
                            >
                                Update Password
                            </button>

                        </div>
                    </div>

                </div>

            </div>

        </div>

    );
};


export default ChangePass;

