import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/edit_profile.css"

const EditProfile = () => {
  const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [namefError, setNamefError] = useState("");
  const [namelError, setNamelError] = useState("");
  const [mobileError, setMobileError] = useState("");

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {
      navigate("/login");
      return;
    }

    setFname(user.fname);
    setLname(user.lname);
    setEmail(user.email);
    setNumber(user.mobile);

  }, [navigate]);


  const validatefname = () => {
    if (fname.trim().length < 5) {
      setNamefError("First name must contain at least 5 characters");
    } else {
      setNamefError("");
    }
  };

  const validatelname = () => {
    if (lname.trim().length < 5) {
      setNamelError("Last name must contain at least 5 characters");
    } else {
      setNamelError("");
    }
  };

  const validatemobile = () => {
    if (!/^[0-9]{10}$/.test(number)) {
      setMobileError("Enter a valid 10-digit mobile number");
    } else {
      setMobileError("");
    }
  };
  const save = () => {

    // Validation
    if (fname.trim().length < 5) {
      setNamefError("First name must contain at least 5 characters");
      return;
    }

    if (lname.trim().length < 5) {
      setNamelError("Last name must contain at least 5 characters");
      return;
    }

    if (!/^[0-9]{10}$/.test(number)) {
      setMobileError("Enter a valid 10-digit mobile number");
      return;
    }


    // Get logged-in user
    let user = JSON.parse(localStorage.getItem("loggedInUser"));


    // Update user
    user.fname = fname;
    user.lname = lname;
    user.mobile = number;


    // Save updated user
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );


    // Get all registered users
    let users = JSON.parse(localStorage.getItem("data1")) || [];


    // Find logged-in user and update
    users.forEach((item) => {

      if (item.email === user.email) {

        item.fname = fname;
        item.lname = lname;
        item.mobile = number;

      }

    });


    // Save updated users
    localStorage.setItem(
      "data1",
      JSON.stringify(users)
    );


    alert("Profile updated successfully!");

    navigate("/profile");
  };

  const cancel = () => {
    navigate("/profile");
  };

  function logout() {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  }

  return (
    <>
      <div className="edit">
        <div className="heading">
          <h2>EDIT PROFILE SCREEN</h2>
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
                  <a onClick={() => navigate("/dashboard")} className="active"> Dashboard
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
              <div className="details">
                <div className="label">First Name</div>
                <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} onKeyUp={validatefname} className="input_box" />
                <span>{namefError}</span>
                <div className="label">Last Name</div>
                <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} className="input_box" onKeyUp={validatelname} />
                <span>{namelError}</span>
                <div className="label">Email</div>
                <div>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input_box" readonly />
                </div>
                <p className="note">Email cannot be changed</p>
                <div className="label">Mobile Number</div>
                <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} className="input_box" onKeyUp={validatemobile} />
                <span>{mobileError}</span>
                <button type="button" onClick={save} className="savebtn">Save Changes</button>
                <button type="button" onClick={cancel} class="cancelbtn">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile