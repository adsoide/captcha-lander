document.getElementById("captchaCheckbox").addEventListener("change", function() {
    let spinner = document.getElementById("loadingSpinner");
    let verificationBox = document.getElementById("verificationBox");

    if (this.checked) {
        spinner.style.display = "block";
        setTimeout(() => {
            spinner.style.display = "none";
            verificationBox.style.display = "block";
            generateRayID();
        }, 2000);
    }
});

function generateRayID() {
    let rayID = Math.random().toString(36).substring(2, 10);
    document.getElementById("rayID").textContent = rayID;
    document.getElementById("footerRayID").textContent = rayID;
}

function copyRayID() {
    let rayID = document.getElementById("rayID").textContent;
    navigator.clipboard.writeText(rayID);
    alert("Verification ID copied!");
}
