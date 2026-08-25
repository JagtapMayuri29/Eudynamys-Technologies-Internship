let user = JSON.parse(localStorage.getItem("data1")) || [];
function validateemail(){
    let email = document.getElementById("Lemail").value;
    let mailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(mailpattern)){
        document.getElementById("emailError").innerHTML = "Please enter valid Email address..";
        valid = false;
    }
    else{
        document.getElementById("emailError").innerHTML ="";
    }
}
function validatepass(){
    let password = document.getElementById("Lpassword").value;
    if(password.length < 8){
        document.getElementById("passwordError").innerHTML = "Password should contain at least 8 characters.";
    }
    else{
        document.getElementById("passwordError").innerHTML =""
    }
}
function showPassword(){
    let password = document.getElementById("Lpassword");
    if(password.type == "password") {
        password.type = "text";
    }
    else{
        password.type = "password";
    }
}
function login(){
    let email = document.getElementById("Lemail").value;
    let password = document.getElementById("Lpassword").value;

    validateemail();
    validatepass();

    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

let userFound = user.find(function(item){
    return item.email == email && item.password == password;
});

if(userFound){
    localStorage.setItem("loggedInUser",JSON.stringify(userFound));
    window.location.href = "dashboard.html";
}
else{
    document.getElementById("passwordError").innerHTML = "Invalid email or password.";
}
}
    