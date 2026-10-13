let user = JSON.parse(localStorage.getItem("data1")) || [];

function validatefname(){
    let fname =document.getElementById("fname").value;
    if(fname.length < 5){
        document.getElementById("namefError").innerHTML = "Name should contain atleast 5 character..";
        valid = false;
    }
    else{
        document.getElementById("namefError").innerHTML ="";
    }
}
function validatelname(){
    let lname =document.getElementById("lname").value;
    if(lname.length < 5){
        document.getElementById("namelError").innerHTML = "Name should contain atleast 5 character..";
        valid = false;
    }
    else{
        document.getElementById("namelError").innerHTML ="";
    }
}

function validateemail(){
    let email = document.getElementById("email").value;
    let mailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(mailpattern)){
        document.getElementById("emailError").innerHTML = "Please enter valid Email address..";
        valid = false;
    }
    else{
        document.getElementById("emailError").innerHTML ="";
    }
}

function validatemobile()
{
    let mobile = document.getElementById("mobile").value;
    let mobpatt = /^[0-9]{10}$/;
    if(!mobpatt.test(mobile)){
        document.getElementById("mobileError").innerHTML = "Please enter a valid 10-digit mobile number";
        
    }
    else{
        document.getElementById("mobileError").innerHTML =""
    }
}

function validatepass(){
    let password = document.getElementById("password").value;
    if(password.length < 8){
        document.getElementById("passError").innerHTML = "Password should contain at least 8 characters.";
    }
    else{
        document.getElementById("passError").innerHTML =""
    }
}

function validatecpass(){
    let password = document.getElementById("password").value;
    let confirmpass= document.getElementById("cpass").value;
    if(password!=confirmpass){
        document.getElementById("cpassError").innerHTML = "Password does not match.";
    }
    else{
        document.getElementById("cpassError").innerHTML =""
    }
}

function signup(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    let confirmpass= document.getElementById("cpass").value;

    let valid = true;
    if (fname.length < 5){
        document.getElementById("namefError").innerHTML = "Name should contain atleast 5 character..";
        valid = false;
    }
    else{
        document.getElementById("namefError").innerHTML ="";
    }
     if (lname.length < 5){
        document.getElementById("namelError").innerHTML = "Name should contain atleast 5 character..";
        valid = false;
    }
    else{
        document.getElementById("namelError").innerHTML ="";
    }
    if (email == ""){
        document.getElementById("emailError").innerHTML = "Email is required.";
        valid = false;
    }
    if(password.length < 8){
        document.getElementById("passError").innerHTML = "Password should contain at least 8 characters.";
        valid = false;
    }
    if (confirmpass != password) {
        document.getElementById("cpassError").innerHTML = "Passwords do not match.";
        valid = false;
    }

    if(valid == true){
        let emailExists = user.some(function(item) {
        return item.email.trim().toLowerCase() === email.toLowerCase();});
        if (emailExists){
        document.getElementById("emailError").innerHTML = "This email is already registered.";
        return;
    }

        let obj = {
            fname:fname,
            lname:lname,
            email:email,
            mobile:mobile,
            password:password,
        };
        user.push(obj);
        localStorage.setItem("data1",JSON.stringify(user))
        alert("Account Created Successfully");

         window.location.href = "login.html";

        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("password").value = "";
        document.getElementById("cpass").value = "";


        document.getElementById("namefError").innerHTML = "";
        document.getElementById("namelError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("mobileError").innerHTML = "";
        document.getElementById("passError").innerHTML = "";
        document.getElementById("cpassError").innerHTML = "";
    }

}