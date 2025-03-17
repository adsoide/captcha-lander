document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const domainNameElement = document.querySelector('.zone-name-title');
    const securityMessageElement = document.querySelector('.core-msg');
    const loadingSpinner = document.querySelector('.loading-spinner');
    const verificationCheckbox = document.querySelector('.cloudflare-checkbox input');
    const verificationPopup = document.querySelector('.verification-popup');
    const verifyButton = document.querySelector('.verify-button');
    const verificationCodeElement = document.getElementById('verification-code');

    // Dynamic Domain Detection
    function detectDomain() {
        const hostname = window.location.hostname;
        
        // Update domain name
        if (domainNameElement) {
            domainNameElement.textContent = hostname;
        }
        
        // Update security message
        if (securityMessageElement) {
            securityMessageElement.textContent = `${hostname} needs to review the security of your connection before proceeding.`;
        }
    }

    // Loading Simulation
    function simulateLoading() {
        // Simulate initial loading process
        setTimeout(() => {
            if (loadingSpinner) {
                loadingSpinner.style.display = 'none';
            }
            
            // Enable verification checkbox
            if (verificationCheckbox) {
                verificationCheckbox.disabled = false;
            }
        }, 2000);
    }

    // Verification Popup Management
    function setupVerificationPopup() {
        // Checkbox interaction
        verificationCheckbox.addEventListener('change', function() {
            if (verificationPopup) {
                verificationPopup.style.display = this.checked ? 'block' : 'none';
            }
        });

        // Verify button interaction
        if (verifyButton) {
            verifyButton.addEventListener('click', () => {
                // Reset checkbox and hide popup
                if (verificationCheckbox) {
                    verificationCheckbox.checked = false;
                }
                
                if (verificationPopup) {
                    verificationPopup.style.display = 'none';
                }
            });
        }

        // Generate and display verification code
        function generateVerificationCode() {
            const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
            return Array.from(
                {length: 6}, 
                () => characters[Math.floor(Math.random() * characters.length)]
            ).join('').toUpperCase();
        }

        // Update verification code
        if (verificationCodeElement) {
            verificationCodeElement.textContent = generateVerificationCode();
        }

        // Clipboard copy functionality
        if (verificationCodeElement) {
            verificationCodeElement.addEventListener('click', () => {
                navigator.clipboard.writeText(verificationCodeElement.textContent)
                    .then(() => {
                        // Visual feedback
                        verificationCodeElement.style.backgroundColor = '#4CAF50';
                        verificationCodeElement.style.color = 'white';
                        
                        setTimeout(() => {
                            verificationCodeElement.style.backgroundColor = '';
                            verificationCodeElement.style.color = '';
                        }, 500);
                    })
                    .catch(err => {
                        console.error('Failed to copy verification code', err);
                    });
            });
        }
    }

    // Theme Detection and Application
    function detectSystemTheme() {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
        
        function applyTheme(e) {
            document.body.classList.remove('theme-light', 'theme-dark');
            document.body.classList.add(
                e.matches ? 'theme-dark' : 'theme-light'
            );
        }

        // Initial theme application
        applyTheme(prefersDarkMode);

        // Listen for theme changes
        prefersDarkMode.addListener(applyTheme);
    }

    // Initialize all functions
    function init() {
        detectDomain();
        simulateLoading();
        setupVerificationPopup();
        detectSystemTheme();
    }

    // Run initialization
    init();

    // Remove no-js class
    document.body.classList.remove('no-js');
});
