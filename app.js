document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('.cloudflare-checkbox input');
    const verificationPopup = document.querySelector('.verification-popup');
    const verifyButton = document.querySelector('.verify-button');

    // Simulate loading process
    function simulateLoading() {
        const domainName = document.querySelector('.domain-name');
        const verificationText = document.querySelector('.verification-text');
        const cloudflareCheckbox = document.querySelector('.cloudflare-checkbox');

        // Mimic Cloudflare loading animation
        setTimeout(() => {
            cloudflareCheckbox.style.display = 'block';
        }, 2000);
    }

    // Checkbox interaction
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            verificationPopup.style.display = 'block';
        } else {
            verificationPopup.style.display = 'none';
        }
    });

    // Verify button interaction
    verifyButton.addEventListener('click', function() {
        // Simulated verification process
        checkbox.checked = false;
        verificationPopup.style.display = 'none';
    });

    // Initialize loading simulation
    simulateLoading();
});
