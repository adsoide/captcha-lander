document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Domain Detection
    function detectDomain() {
        const domainDisplay = document.getElementById('domain-display');
        const securityMessage = document.getElementById('security-message');
        
        // Get current hostname
        const hostname = window.location.hostname;
        
        // Update domain name
        if (domainDisplay) {
            domainDisplay.textContent = hostname;
        }
        
        // Update security message
        if (securityMessage) {
            securityMessage.innerHTML = `${hostname} needs to review the security of your connection before proceeding.`;
        }
    }

    // Verification Popup Interaction
    function setupVerificationPopup() {
        const checkbox = document.getElementById('human-verification');
        const verificationPopup = document.querySelector('.verification-popup');
        const verifyButton = document.querySelector('.verify-button');
        const verificationCode = document.getElementById('verification-code');

        // Generate random verification code
        function generateVerificationCode() {
            return Math.random().toString(36).substring(2, 8).toUpperCase();
        }

        // Checkbox change handler
        checkbox.addEventListener('change', function() {
            verificationPopup.style.display = this.checked ? 'block' : 'none';
            
            // Generate and set verification code
            if (this.checked) {
                verificationCode.textContent = generateVerificationCode();
            }
        });

        // Verify button handler
        verifyButton.addEventListener('click', () => {
            checkbox.checked = false;
            verificationPopup.style.display = 'none';
        });

        // Clipboard copy for verification code
        verificationCode.addEventListener('click', () => {
            navigator.clipboard.writeText(verificationCode.textContent)
                .then(() => {
                    verificationCode.style.backgroundColor = '#4CAF50';
                    setTimeout(() => {
                        verificationCode.style.backgroundColor = '';
                    }, 500);
                })
                .catch(err => {
                    console.error('Failed to copy verification code', err);
                });
        });
    }

    // Loading Simulation
    function simulateLoading() {
        const loadingSection = document.querySelector('.loading-section');
        const verificationContent = document.querySelector('.verification-content');
        
        // Simulate loading process
        setTimeout(() => {
            loadingSection.style.display = 'none';
            verificationContent.style.display = 'block';
        }, 2000);
    }

    // Initialize all functions
    function init() {
        detectDomain();
        setupVerificationPopup();
        simulateLoading();
    }

    // Run initialization
    init();
});
