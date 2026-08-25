const form = document.getElementById('contactForm');

function validateName(){
    const name = document.getElementById('name').value.trim();
    if(name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
        return false;
    }
    document.getElementById("nameError").textContent = "";
    return true;
}
function validateEmail(){
    const email = document.getElementById('emailid').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        return false;
    }
    document.getElementById("emailError").textContent = "";
    return true;
}
function validateNumber(){
    const number = document.getElementById('mobno').value.trim();
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(number)) {
        document.getElementById("numberError").textContent = "Please enter a valid 10-digit mobile number.";
        return false;
    }
    document.getElementById("numberError").textContent = "";
    return true;
}
function validateMessage(){
    const message = document.getElementById('message').value.trim();
    if(message.length < 20) {
        document.getElementById("messageError").textContent = "Message must be at least 20 characters long.";
        return false;
    }
    document.getElementById("messageError").textContent = "";
    return true;
}
function validateSubject(){
    const subject = document.getElementById('subj').value.trim();
    if(subject.length < 10) {
        document.getElementById("subjectError").textContent = "Subject must be at least 10 characters long.";
        return false;
    }
    document.getElementById("subjectError").textContent = "";
    return true;
}
document.getElementById("name").addEventListener("input", validateName);
document.getElementById("emailid").addEventListener("input", validateEmail);
document.getElementById("mobno").addEventListener("input", validateNumber);
document.getElementById("message").addEventListener("input", validateMessage);
document.getElementById("subj").addEventListener("input", validateSubject);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isNumberValid = validateNumber();
    const isMessageValid = validateMessage();
    const isSubjectValid = validateSubject();

    if (isNameValid && isEmailValid && isNumberValid && isMessageValid && isSubjectValid){
        alert("Form submitted successfully!");
        form.submit();
    }
});
