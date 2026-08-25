let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
    window.location.href = "login.html";
}
else {
    document.getElementById("fname").value = loggedInUser.fname;
    document.getElementById("lname").value = loggedInUser.lname;
    document.getElementById("email").value = loggedInUser.email;
    document.getElementById("number").value = loggedInUser.mobile;
}
function validatefname() {
    let fname = document.getElementById("fname").value;
    if (fname.length < 5) {
        document.getElementById("namefError").innerHTML = "Name should contain atleast 5 character..";
        return false;
    }
    else {
        document.getElementById("namefError").innerHTML = "";
        return true;
    }
}
function validatelname() {
    let lname = document.getElementById("lname").value;
    if (lname.length < 5) {
        document.getElementById("namelError").innerHTML = "Name should contain atleast 5 character..";
        return false;
    }
    else {
        document.getElementById("namelError").innerHTML = "";
        return true;
    }
}
function validatemobile() {
    let mobile = document.getElementById("number").value;
    let mobpatt = /^[0-9]{10}$/;
    if (!mobpatt.test(mobile)) {
        document.getElementById("mobileError").innerHTML = "Please enter a valid 10-digit mobile number";
        return false;
    }
    else {
        document.getElementById("mobileError").innerHTML = ""
        return true;
    }
}
function save() {
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let number = document.getElementById("number").value.trim();

    let valid = true;

    document.getElementById("namefError").innerHTML = "";
    document.getElementById("namelError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";
    if (fname.length < 5) {

        document.getElementById("namefError").innerHTML =
            "Name should contain at least 5 characters.";

        valid = false;
    }


    // Last name
    if (lname.length < 5) {

        document.getElementById("namelError").innerHTML =
            "Name should contain at least 5 characters.";

        valid = false;
    }


    // Mobile
    let mobpatt = /^[0-9]{10}$/;

    if (!mobpatt.test(number)) {

        document.getElementById("mobileError").innerHTML =
            "Please enter a valid 10-digit mobile number.";

        valid = false;
    }


    // Stop if validation fails
    if (valid == false) {

        return;

    }

    let user = JSON.parse(localStorage.getItem("data1")) || [];

    let index = user.findIndex(function (item) {
        return item.email === loggedInUser.email;
    });
    if (index === -1) {
        alert("User not found in data1");
        return;
    }
    user[index].fname = fname;
    user[index].lname = lname;
    user[index].mobile = number;
    localStorage.setItem("data1", JSON.stringify(user));
    let checkData = JSON.parse(localStorage.getItem("data1"));

    loggedInUser.fname = fname;
    loggedInUser.lname = lname;
    loggedInUser.mobile = number;
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    console.log(
        "Updated data1:",
        JSON.parse(localStorage.getItem("data1"))
    );

    console.log(
        "Updated loggedInUser:",
        JSON.parse(localStorage.getItem("loggedInUser"))
    );


    window.location.href = "success.html";
}

function cancel() {
    window.location.href = "profile_page.html";
}