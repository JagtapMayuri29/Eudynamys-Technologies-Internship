const form = document.getElementById('contactForm');
const errorMessages = document.getElementById('errorMessages');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('emailid').value.trim();
    const number = document.getElementById('mobno').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = document.getElementById('subj').value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("numberError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("subjectError").textContent = "";

    let isValid = true;

    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
        isValid = false;
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }
    const mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(number)) {
        document.getElementById("numberError").textContent = "Please enter a valid 10-digit mobile number.";
        isValid = false;
    }
    if (message.length < 20) {
        document.getElementById("messageError").textContent = "Message must be at least 20 characters long.";
        isValid = false;
    }
    if (subject.length < 10) {
        document.getElementById("subjectError").textContent = "Subject must be at least 10 characters long.";
        isValid = false;
    }
    document.getElementById(" ").textContent = "";
        alert("Form submitted successfully!");
        form.submit();
}
);
