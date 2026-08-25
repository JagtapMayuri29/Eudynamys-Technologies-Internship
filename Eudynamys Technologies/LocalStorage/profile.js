let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (!loggedInUser) {
    window.location.href = "login.html";
}
else {
    document.getElementById("fname").innerHTML = loggedInUser.fname;
    document.getElementById("lname").innerHTML = loggedInUser.lname;
    document.getElementById("email").innerHTML = loggedInUser.email;
    document.getElementById("mobile").innerHTML = loggedInUser.mobile;

}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
function edit(){
    window.location.href = "edit_page.html";
}
function change_pass(){
    window.location.href = "change_page.html";
}