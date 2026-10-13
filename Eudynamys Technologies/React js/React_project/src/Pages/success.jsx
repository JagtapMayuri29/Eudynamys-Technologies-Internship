import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/success.css";

const Success = () => {

    const navigate = useNavigate();


    // Logout
    function logout() {
        localStorage.removeItem("loggedInUser");
        navigate("/login");
    }


    return (
        <>

            <div className="success">
                 <div className="heading">
                <h2>SUCCESS</h2>
            </div>

                {/* NAVBAR */}
                <div className="container">
                    <div className="navbar">

                        <h3>AuthApp</h3>

                        <div className="nav_right">
                            Welcome

                            <button onClick={logout}>
                                Logout
                            </button>
                        </div>

                    </div>


                    {/* MAIN SECTION */}

                    <div className="main_section">

                        {/* SIDEBAR */}

                        <div className="left_content">

                            <ul className="menu">

                                <li>
                                    <a onClick={() => navigate("/dashboard")}>
                                        Dashboard
                                    </a>
                                </li>

                                <li>
                                    <a onClick={() => navigate("/profile")}>
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


                        {/* SUCCESS CONTENT */}

                        <div className="right_content">

                            <div className="success-box">

                                <div className="icon">
                                    ✓
                                </div>

                                <h2>
                                    Success
                                </h2>

                                <p>
                                    Your profile has been updated successfully.
                                </p>

                                <button
                                    onClick={() => navigate("/profile")}
                                >
                                    Go Back to Profile
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </>
    );
};

export default Success;

