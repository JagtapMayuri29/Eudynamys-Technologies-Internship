let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if(!loggedInUser){
    window.location.html ="login.html";
}
function validatecurrpass(){
    let curpass = document.getElementById("curpass").value;
    let passError = document.getElementById("currentError");
    if(curpass != loggedInUser.password){
        document.getElementById("currentError").innerHTML = "Current password is incorrect";
        return false;
    }
    else{
        document.getElementById("currentError").innerHTML =""
        return true;
    } 
}

function validatepass() {
    let newpass = document.getElementById("newpass").value;

    let passError = document.getElementById("passError");

    if (newpass === ""){
        passError.innerHTML ="Please enter new password.";
        return false;
    }


    if (newpass.length < 8){
        passError.innerHTML ="Password should contain at least 8 characters.";
        return false;
    }
    passError.innerHTML = "";
    return true;
}

function validatecpass(){
    let password = document.getElementById("newpass").value;
    let confirmpass= document.getElementById("confpass").value;
    if(password!=confirmpass){
        document.getElementById("cpassError").innerHTML = "Password does not match.";
    }
    else{
        document.getElementById("cpassError").innerHTML =""
    }
}/*
function showPassword(){
    let password = document.getElementById("newpass");
    if(password.type == "password") {
        password.type = "text";
    }
    else{
        password.type = "password";
    }
}*/

function showPassword(id) {
    let password = document.getElementById(id);
    if (password.type === "password") {
        password.type = "text";
    }
    else{
        password.type = "password";
        icon.innerHTML = "👁";

    }

}
function updatepass(){
    let curpass = document.getElementById("curpass").value;
    let newpass = document.getElementById("newpass").value;
    let confpass = document.getElementById("confpass").value;

    document.getElementById("currentError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";
    document.getElementById("cpassError").innerHTML = "";

    let valid = true;


    if (curpass === ""){
        document.getElementById("currentError").innerHTML = "Please enter current password.";
        valid = false;
    }
    else if(curpass !== loggedInUser.password) {
        document.getElementById("currentError").innerHTML = "Current password is incorrect.";
        valid = false;
    }
      
    if (newpass === ""){
        document.getElementById("passError").innerHTML = "Please enter new password.";
        valid = false;
    }
    else if (newpass.length < 8){
        document.getElementById("passError").innerHTML = "Password should contain at least 8 characters.";
        valid = false;
    }
    if (confpass === ""){
        document.getElementById("cpassError").innerHTML = "Please confirm password.";
        valid = false;
    }
    else if (newpass !== confpass){
        document.getElementById("cpassError").innerHTML = "Password does not match.";
        valid = false;
    }

    if (!valid){
        return;
    }

    let user = JSON.parse(localStorage.getItem("data1")) || [];

    let index = user.findIndex(function(item){
        return item.email=== loggedInUser.email;
    });
    
    if(index === -1){
        alert("User not found in data1");
        return;
    }
    user[index].password = newpass;
    localStorage.setItem("data1", JSON.stringify(user));

    loggedInUser.password = newpass;
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    alert("Password changed successfully!");
    window.location.href = "profile_page.html";

    document.getElementById("curpass").innerHTML="";
    document.getElementById("newpass").innerHTML="";
    document.getElementById("confpass").innerHTML="";

}