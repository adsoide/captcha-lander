document.addEventListener('DOMContentLoaded', () => {
    const domainNameElement = document.getElementById('domain-name');
    const securityMessageElement = document.getElementById('security-message');
    const checkbox = document.querySelector('.cloudflare-checkbox input');
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

    // Verification Popup Management
    function setupVerificationPopup() {
        // Checkbox interaction
        checkbox.addEventListener('change', function() {
            verificationPopup.style.display = this.checked ? 'block' : 'none';
            
            // Generate verification code when popup opens
            if (this.checked) {
                generateVerificationCode();
            }
        });

        // Verify button interaction
        verifyButton.addEventListener('click', () => {
            // Reset checkbox and hide popup
            checkbox.checked = false;
            verificationPopup.style.display = 'none';
        });

        // Clipboard functionality for verification code
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

    // Generate Verification Code
    function generateVerificationCode() {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const codeLength = 6;
        
        const code = Array.from(
            {length: codeLength}, 
            () => characters[Math.floor(Math.random() * characters.length)]
        ).join('').toUpperCase();

        if (verificationCodeElement) {
            verificationCodeElement.textContent = code;
        }
    }

    // Initialize all functions
    function init() {
        detectDomain();
        setupVerificationPopup();
    }

    // Run initialization
    init();
});
