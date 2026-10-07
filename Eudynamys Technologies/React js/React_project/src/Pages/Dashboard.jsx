
import { useNavigate } from 'react-router-dom';
import "../styles/dashboard.css"

const Dashboard = () => {
    const navigate = useNavigate();

    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser){
        return(
        <button onClick={() => navigate("/login")}>Login</button>);
        }
    
    function logout() {
        localStorage.removeItem("loggedInUser");
        navigate("/login");
    }

    return (
       
        <div className="dashboard">
            <div className="heading">
                <h2>DASHBOARD SCREEN</h2>
            </div>
            <div className="container">
                <div className="navbar">
                    <h3>AuthApp</h3>
                    <div className="nav_right">Welcome<button onClick={logout}>Logout</button></div>
                </div>
                <div className="main_section">
                    <div className="left_content">
                        <ul className="menu">
                            <li>
                                <a className="active"> Dashboard
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/profile")}>Profile</a>
                            </li>
                            <li>
                                <a href="#">Settings</a>
                            </li>
                            <li>
                                <a href="#">Help</a>
                            </li>
                        </ul>
                    </div>

                    <div className="right_content">
                        <div className="h1">
                            <h1>Dashboard</h1>
                        </div>
                        <div>
                            <p>Here is your Account Information</p>
                        </div>
                        <div className="profile">
                            <img src="/images/profile.png" alt="Profile" className="profile-img" />
                            <h2>
                                Welcome,
                                {loggedInUser.fname}
                            </h2>
                            <p>
                                Glad to see you back!
                            </p>
                        </div>
                        <div className="user-details">
                            <div className="detail-row">
                                <div className="detail-label">
                                    👤 &nbsp; First Name
                                </div>
                                <div className="detail-value">{loggedInUser.fname}
                                </div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-label">
                                    👤 &nbsp; Last Name
                                </div>
                                <div className="detail-value">{loggedInUser.lname}
                                </div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-label">
                                    ✉️ &nbsp; Email Address
                                </div>
                                <div className="detail-value">{loggedInUser.email}
                                </div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-label">
                                    📞 &nbsp; Mobile Number
                                </div>
                                <div className="detail-value">{loggedInUser.mobile}
                                </div>
                            </div>
                            <div className="detail-row">
                                <div className="detail-label">
                                    📅 &nbsp; Member Since
                                </div>
                                <div className="detail-value">{loggedInUser.memberSince}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        
    )
}

export default Dashboard