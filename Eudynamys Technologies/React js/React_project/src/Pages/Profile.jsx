
import { useNavigate } from 'react-router-dom';
import "../styles/profile.css"

const Profile = () => {
    const navigate = useNavigate();
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
        return (
            <button onClick={() => navigate("/login")}>Login</button>);
    }
    function logout() {
        localStorage.removeItem("loggedInUser");
        navigate("/login");
    }

    return (
        <div className="profile">
            <div className="heading">
                <h2>PROFILE SCREEN</h2>
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
                                <a onClick={() => navigate("/dashboard")} > Dashboard
                                </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/profile")} className="active">Profile</a>
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
                        <div className="profileimg">
                            <img src="/images/profile.png" alt="Profile" className="profileimg-img" />
                        </div>
                        <div className="details">
                            <div className="row">
                                <div className="label">First Name</div>
                                <div className="values">{loggedInUser.fname}
                                </div>
                            </div>

                            <div className="row">
                                <div className="label">Last Name</div>
                                <div className="values">{loggedInUser.lname}
                                </div>
                            </div>

                            <div className="row">
                                <div className="label">Email</div>
                                <div className="values">{loggedInUser.email}
                                </div>
                            </div>

                            <div className="row">
                                <div className="label">Mobile Number</div>
                                <div className="values">{loggedInUser.mobile}</div>
                            </div>
                        </div>

                        <button type="button" onClick={() => navigate("/edit")} className="editbtn">Edit Profile</button>
                        <button type="button" onClick={() => navigate("/changepass")} className="changebtn">Change Password</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile