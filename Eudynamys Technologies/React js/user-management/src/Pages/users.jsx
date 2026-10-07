import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import '../styles/user.css'


const users = [
    {
        id: 1,
        name: "Mayuri Jagtap",
        email: "rjmayu29@gmail.com",
        role: "Admin",
        city: "Pune",
        joinedDate: "29 Sep 2024",
        image: "/images/download.jpg"
    },
    {
        id: 2,
        name: "Avdhoot Jagtap",
        email: "avdhoot@gmail.com",
        role: "User",
        city: "Mumbai",
        joinedDate: "18 Sep 2024",
        image: "/images/download.jpg"
    },
    {
        id: 3,
        name: "Mangesh Shinde",
        email: "mangesh@gmail.com",
        role: "User",
        city: "Bangalore",
        joinedDate: "15 Sep 2024",
        image: "/images/download.jpg"
    },
    {
        id: 4,
        name: "Swati Jangam",
        email: "swati@gmail.com",
        role: "Manager",
        city: "Pune",
        joinedDate: "12 Sep 2024",
        image: "/images/download.jpg"
    },
    {
        id: 5,
        name: "Radhika Bele",
        email: "radhika@gmail.com",
        role: "User",
        city: "Delhi",
        joinedDate: "10 Sep 2024",
        image: "/images/download.jpg"
    },
    {
        id: 6,
        name: "Abhishek Jagtap",
        email: "abhishek@gmail.com",
        role: "User",
        city: "Hyderabad",
        joinedDate: "05 Sep 2024",
        image: "/images/download.jpg"
    }
];

const User = () => {

    const navigate = useNavigate();
    const [userList, setUserList] = useState(() => {
        const savedUsers = localStorage.getItem("users");
        if (savedUsers) {
            return JSON.parse(savedUsers);
        }
        return users;
    });

    const [search, setSearch] = useState("")
    const [showAdd, setShowAdd] = useState(false)
    const [showView, setShowView] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [filteredRole, setFilteredRole] = useState("");
    const [city, setCity] = useState("");
    const [image, setImage] = useState("");
    const [joinedDate, setJoinedDate] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [roleError, setRoleError] = useState("");
    const [cityError, setCityError] = useState("");
    const [joinedDateError, setJoinedDateError] = useState("");

    useEffect(() => { localStorage.setItem("users", JSON.stringify(userList)); }, [userList]);

    const clearForm = () => {
        setName("");
        setEmail("");
        setRole("");
        setCity("");
        setImage("");
        setJoinedDate("");
        setSelectedUser(null);

        setNameError("");
        setEmailError("");
        setRoleError("");
        setCityError("");
        setJoinedDateError("");
    };

    const validateName = (value) => {

        if (value.trim() === "") {
            setNameError("Name is required");
            return false;
        }

        if (value.trim().length < 3) {
            setNameError("Name should contain at least 3 characters");
            return false;
        }

        if (!/^[A-Za-z ]+$/.test(value.trim())) {
            setNameError("Name should contain only letters");
            return false;
        }

        setNameError("");
        return true;
    };


    const validateEmail = (value) => {

        if (value.trim() === "") {
            setEmailError("Email is required");
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
            setEmailError("Please enter a valid email address");
            return false;
        }

        setEmailError("");
        return true;
    };


    const validateRole = (value) => {

        if (value === "") {
            setRoleError("Please select a role");
            return false;
        }

        setRoleError("");
        return true;
    };


    const validateCity = (value) => {

        if (value.trim() === "") {
            setCityError("City is required");
            return false;
        }

        if (!/^[A-Za-z ]+$/.test(value.trim())) {
            setCityError("City should contain only letters");
            return false;
        }

        setCityError("");
        return true;
    };


    const validateJoinedDate = (value) => {

        if (value === "") {
            setJoinedDateError("Joined date is required");
            return false;
        }

        const today = new Date().toISOString().split("T")[0];

        if (value > today) {
            setJoinedDateError("Joined date cannot be a future date");
            return false;
        }

        setJoinedDateError("");
        return true;
    };


    const validateForm = () => {

        const nameValid = validateName(name);
        const emailValid = validateEmail(email);
        const roleValid = validateRole(role);
        const cityValid = validateCity(city);
        const dateValid = validateJoinedDate(joinedDate);

        return (
            nameValid &&
            emailValid &&
            roleValid &&
            cityValid &&
            dateValid
        );
    };

    const addUser = () => {
        if (!validateForm()) {
            return;
        }

        const newUser = {
            id: userList.length + 1,
            name: name,
            email: email,
            role: role,
            city: city,
            joinedDate: joinedDate,
            image: image || "/images/download.jpg"
        }
        setUserList([...userList, newUser]);
        setShowAdd(false);
        setName("");
        setEmail("");
        setRole("");
        setCity("");
        setImage("");
        setJoinedDate("");

        setNameError("");
        setEmailError("");
        setRoleError("");
        setCityError("");
        setJoinedDateError("");
    }
    const viewUser = (user) => {
        setSelectedUser(user);
        setShowView(true);
    }
    const editUser = (user) => {

        setSelectedUser(user);
        setShowEdit(true);
        setName(user.name);
        setEmail(user.email);
        setRole(user.role);
        setCity(user.city);
        setImage(user.image);
        setJoinedDate(user.joinedDate);
    }
    const updateUser = () => {
        if (!validateForm()) {
            return;
        }

        const updatedUsers = userList.map((user) => {
            if (user.id === selectedUser.id) {
                return {
                    ...user,
                    name: name,
                    email: email,
                    role: role,
                    city: city,
                    image: image,
                    joinedDate: joinedDate
                };
            }
            return user;
        });

        setUserList(updatedUsers);

        setShowEdit(false);
        setSelectedUser(null);

        setName("");
        setEmail("");
        setRole("");
        setCity("");
        setImage("");
        setJoinedDate("");
    };

    const filteredUsers = userList.filter((user) => {
        const searchMatch =
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase());
        const roleMatch =
            filteredRole === "" || user.role === filteredRole;
        return searchMatch && roleMatch;
    });
    const deleteUser = () => {
        let newList = userList.filter((item) => { return item.id !== selectedUser.id; });
        setUserList(newList);
        setShowDelete(false);
    };

    return (
        <div className='admin-container'>
            <div className='sidebar'>
                <h2><i class="fa-solid fa-unlock"></i>Admin Panel</h2>
                <ul>
                    <li onClick={() => navigate('/dashboard')}><i className="fa-solid fa-house"></i>Dashboard</li>
                    <li className='active' onClick={() => navigate('/users')}><i class="fa-solid fa-user-group"></i>Users</li>
                    <li onClick={() => navigate('/products')}><i className="fa-solid fa-box-open"></i>Products</li>
                    <li onClick={() => navigate('/')}><i className="fa-solid fa-cart-arrow-down"></i>Orders</li>
                    <li><i className="fa-solid fa-chart-line"></i>Analytics</li>
                    <li><i className="fa-solid fa-gear"></i>Settings</li>
                </ul>
            </div>

            <div className='main'>
                <div className='topbar'>
                    <input type='text' placeholder='🔍  Search anything....' value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className='main-content'>
                    <div className='header'>
                        <div>
                            <h2>User</h2>
                            <p>Manage all users, view details, edit information or remove users.</p>
                        </div>
                        <button className='add-user' onClick={() => setShowAdd(true)}> + Add User</button>
                    </div>
                    <div className='filter-content'>
                        <div className='filter'>
                            <input type='text' placeholder='Search user by name or email...' value={search} onChange={(e) => setSearch(e.target.value)} />

                            <select value={filteredRole} onChange={(e) => setFilteredRole(e.target.value)}>
                                <option value="">All Role</option>
                                <option>Admin</option>
                                <option>User</option>
                                <option>Manager</option>
                            </select>
                        </div>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>City</th>
                                        <th>Joined Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>
                                                <div className='name-box'>
                                                    <img
                                                        src={user.image}
                                                        className='user-image'
                                                        alt={user.name} />
                                                    <span>{user.name}</span>
                                                </div>
                                            </td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>{user.city}</td>
                                            <td>{user.joinedDate}</td>
                                            <td>
                                                <div className='actions'>
                                                    <button className='view-btn' onClick={() => viewUser(user)}><i className="fa-solid fa-eye"></i></button>
                                                    <button className='edit-btn' onClick={() => editUser(user)}><i className="fa-solid fa-pen-to-square"></i></button>
                                                    <button className='delete-btn' onClick={() => {
                                                        setSelectedUser(user);
                                                        setShowDelete(true);
                                                    }}><i className="fa-solid fa-trash-can"></i></button>
                                                </div>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {showAdd && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <div className="popup-header">
                            <h2>Add User</h2>
                            <button onClick={() => { setShowAdd(false); clearForm(); }}>×</button>
                        </div>
                        <div className="form-group">
                            <label>Name<span className="required">*</span></label>
                            <input type="text" placeholder="Enter name" value={name} onChange={(e) => { setName(e.target.value); validateName(e.target.value); }} />
                            {nameError && <p className="error">{nameError}</p>}
                        </div>
                        <div className="form-group">
                            <label>Email<span className="required">*</span></label>
                            <input type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value); validateEmail(e.target.value); }} />
                            {emailError && <p className="error">{emailError}</p>}
                        </div>
                        <div className="form-group">
                            <label>Role<span className="required">*</span></label>
                            <select value={role} onChange={(e) => { setRole(e.target.value); validateRole(e.target.value); }} placeholder="Select Role">
                                <option value="">Select Role</option>
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                                <option value="Manager">Manager</option>
                            </select>
                            {roleError && <p className="error">{roleError}</p>}
                        </div>
                        <div className="form-group">
                            <label>City<span className="required">*</span></label>
                            <input type="text" placeholder="Enter city" value={city} onChange={(e) => { setCity(e.target.value); validateCity(e.target.value); }} />
                            {cityError && <p className="error">{cityError}</p>}
                        </div>
                        <div className="form-group">
                            <label>Joined Date<span className="required">*</span></label>
                            <input type="date" value={joinedDate} onChange={(e) => { setJoinedDate(e.target.value); validateJoinedDate(e.target.value); }} />
                            {joinedDateError && (<p className="error">{joinedDateError}</p>)}
                        </div>
                        <div className="form-group">
                            <label>Image</label>
                            <input type="file" onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                        setImage(reader.result);
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }
                            }
                            />
                        </div>

                        <div className="popup-buttons">
                            <button className="cancel-btn" onClick={() => { setShowAdd(false); clearForm(); }}>
                                Cancel
                            </button>
                            <button className="save-btn" onClick={addUser}>
                                Add User
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showEdit && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <div className="popup-header">
                            <h2>Edit User</h2>
                            <button onClick={() => { setShowEdit(false); clearForm(); }}> ×</button>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>

                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Role</label>
                            <select value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                                <option value="Manager">Manager</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>City</label>
                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>Joined Date</label>
                            <input type="date" value={joinedDate} onChange={(e) => setJoinedDate(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>Image</label>
                            <input type="file"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onload = () => {
                                            setImage(reader.result);
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                            />
                        </div>

                        <div className="popup-buttons">
                            <button className="cancel-btn" onClick={() => { setShowEdit(false); clearForm(); }}> Cancel</button>
                            <button className="save-btn" onClick={updateUser}>Save Changes</button>
                        </div>
                    </div>
                </div>
            )}
            {showView && selectedUser && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <div className="popup-header">
                            <h2>View User</h2>
                            <button onClick={() => { setShowView(false); clearForm(); }}>×</button>
                        </div>
                        <div className="view-user">
                            <img src={selectedUser.image} alt={selectedUser.name} />
                        </div>
                        <div className="view-user-details">
                            <div className="row-details">
                                <span>Name</span>
                                <strong>{selectedUser.name}</strong>
                            </div>
                            <div className="row-details">
                                <span>Email</span>
                                <strong>{selectedUser.email}</strong>
                            </div>
                            <div className="row-details">
                                <span>Role</span>
                                <strong>{selectedUser.role}</strong>
                            </div>
                            <div className="row-details">
                                <span>City</span>
                                <strong>{selectedUser.city}</strong>
                            </div>
                            <div className="row-details">
                                <span>Joined Date</span>
                                <strong>{selectedUser.joinedDate}</strong>
                            </div>

                        </div>
                        <button className="close-btn" onClick={() => { setShowView(false); clearForm(); }}>Close</button>
                    </div>
                </div>
            )}
            {showDelete && (
                <div className="popup-overlay">
                    <div className="popup-box1">
                        <div className="popup-header">
                            <h2>Delete User</h2>
                            <button onClick={() => setShowDelete(false)}>× </button>
                        </div>
                        <div className="delete-icon">
                            <i className="fa-solid fa-trash-can"></i>
                        </div>

                        <p>
                            Are you sure you want to delete?
                        </p>
                        <p>
                            <b>{selectedUser.name}</b>
                        </p>

                        <div className="popup-buttons">
                            <button className="cancel-btn" onClick={() => setShowDelete(false)}>Cancel</button>
                            <button className="delete-confirm-btn" onClick={deleteUser}>Delete</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default User