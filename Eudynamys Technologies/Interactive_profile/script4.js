/*Name...*/
const nameInput = document.getElementById("name");

nameInput.addEventListener("input", function () {
    let name = nameInput.value.trim();
    if (name.length < 3) {
        document.getElementById("nameError").innerHTML = "Name should contain at least 3 characters.";
    }
    else {
        document.getElementById("nameError").innerHTML = "";
    }
    previewName.innerHTML = name || "Your Name";
});


/*Job...*/
const jobInput = document.getElementById("job");

jobInput.addEventListener("input", function () {
    let job = jobInput.value.trim();
    if (job.length < 3) {
        document.getElementById("JobError").innerHTML = "Job title should contain at least 3 characters.";
    }
    else {
        document.getElementById("JobError").innerHTML = "";
    }
    previewJob.innerHTML = job || "Your Job";
})


/*Bio...*/
const bioInput = document.getElementById("bio");

bioInput.addEventListener("input", function () {
    let bio = bioInput.value.trim();
    if (bio.length < 3) {
        document.getElementById("BioError").innerHTML = "Bio should be at least 20 characters.";
    }
    else {
        document.getElementById("BioError").innerHTML = "";
    }
    previewBio.innerHTML = bio || "Your Bio";
})


/*Skills...*/
document.getElementById("html").addEventListener("change", showSkills);
document.getElementById("css").addEventListener("change", showSkills);
document.getElementById("javascript").addEventListener("change", showSkills);
document.getElementById("react").addEventListener("change", showSkills);
document.getElementById("uiux").addEventListener("change", showSkills);

// image picker
document.getElementById("photo").addEventListener('change', handleFileSelection);

function showSkills() {

    let skills = "";

    if (document.getElementById("html").checked) {
        skills += "HTML";
    }

    if (document.getElementById("css").checked) {
        skills += ", CSS";
    }

    if (document.getElementById("javascript").checked) {
        skills += ", JAVASCRIPT";
    }

    if (document.getElementById("react").checked) {
        skills += ", React";
    }

    if (document.getElementById("uiux").checked) {
        skills += ", UI/UX";
    }

    document.getElementById("previewSkills").innerHTML = skills;
}

function handleFileSelection(e) {
    console.log(e.target.files[0]);
    var file = e.target.files[0];
    if (file) {
        // Generate a temporary local URL for the file object
        const localUrl = URL.createObjectURL(file);
        document.getElementById("previewImage").src = localUrl;
    }


}


const genders = document.querySelectorAll("input[name='gender']");

genders.forEach(function (gender) {

    gender.addEventListener("change", function () {

        previewGender.innerHTML = this.value;
        document.getElementById("genderError").innerHTML = "";

    });

});

