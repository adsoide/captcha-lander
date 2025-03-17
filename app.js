document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Domain Detection
    function detectDomain() {
        const domainElement = document.getElementById('domain-name');
        const verificationIdElement = document.querySelector('.verification-id');
        
        // Get current hostname
        const hostname = window.location.hostname;
        
        // Update domain name
        if (domainElement) {
            domainElement.textContent = hostname;
        }
        
        // Generate a random verification ID
        if (verificationIdElement) {
            const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();
            verificationIdElement.textContent += ` Cloudflare Verification ID: ${randomId}`;
        }
    }

    // Simulate Verification Process
    function simulateVerification() {
        const loaderSection = document.querySelector('.loader-section');
        const verificationSteps = document.querySelector('.verification-steps');
        
        // Simulated verification stages
        setTimeout(() => {
            loaderSection.style.display = 'none';
            verificationSteps.style.display = 'block';
        }, 2000);
    }

    // Initialize functions
    function init() {
        detectDomain();
        simulateVerification();
    }

    // Run initialization
    init();
});
