let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (!loggedInUser) {
    window.location.href = "login.html";
}
else {

    document.getElementById("username").innerHTML = loggedInUser.fname;

    document.getElementById("fname").innerHTML = loggedInUser.fname;

    document.getElementById("lname").innerHTML = loggedInUser.lname;

    document.getElementById("email").innerHTML = loggedInUser.email;


    document.getElementById("mobile").innerHTML = loggedInUser.mobile;
     
    let today =  new Date();
    document.getElementById("memberSince").innerHTML =    today.toLocaleDateString("en-IN");

}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}