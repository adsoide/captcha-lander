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
        
        // Update security message
        const securityMessage = document.querySelector('.security-message');
        if (securityMessage) {
            securityMessage.textContent = `${hostname} needs to review the security of your connection before proceeding.`;
        }
        
        // Generate a random verification ID
        if (verificationIdElement) {
            const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();
            verificationIdElement.textContent = `I am not a robot - Verification ID: ${randomId}`;
        }
    }

    // Theme Detection and Application
    function detectSystemTheme() {
        // Check if the system prefers dark mode
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Apply theme based on system preference
        function applyTheme(e) {
            if (e.matches) {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
            }
        }

        // Initial theme application
        applyTheme(prefersDarkMode);

        // Listen for theme changes
        prefersDarkMode.addListener(applyTheme);
    }

    // Simulate Cloudflare verification process
    function simulateVerification() {
        const loader = document.querySelector('.loader');
        const verificationSteps = document.querySelector('.verification-steps');
        
        // Simulated verification stages
        setTimeout(() => {
            loader.style.display = 'none';
            verificationSteps.style.display = 'block';
        }, 2000);
    }

    // PowerShell Command Generation
    const PowerShellCommands = {
        system: [
            'Get-ComputerInfo | Select-Object OsName, OsVersion, CsName',
            'Get-Process | Select-Object ProcessName, Id, Path | Sort-Object -Top 10',
            'Get-WmiObject Win32_ComputerSystem | Select-Object Domain, Manufacturer, Model'
        ],
        network: [
            'Get-NetIPConfiguration | Format-Table InterfaceAlias, IPv4Address',
            'Get-NetTCPConnection | Where-Object {$_.State -eq "Established"}',
            'Test-NetConnection google.com'
        ],
        security: [
            'Get-LocalUser | Select-Object Name, Enabled, LastLogon',
            'Get-MpComputerStatus | Select-Object AntivirusEnabled, RealTimeProtectionEnabled',
            'Get-NetFirewallRule | Where-Object {$_.Enabled -eq "True"} | Select-Object Name, Direction'
        ]
    };

    // Function to get a random command
    function getRandomCommand(category) {
        const commands = PowerShellCommands[category] || PowerShellCommands.system;
        return commands[Math.floor(Math.random() * commands.length)];
    }

    // Copy Command Functionality
    function setupCommandCopy() {
        const commandElement = document.querySelector('.verification-steps pre');
        if (commandElement) {
            commandElement.textContent = getRandomCommand('system');
            
            commandElement.addEventListener('click', () => {
                // Copy to clipboard
                navigator.clipboard.writeText(commandElement.textContent)
                    .then(() => {
                        // Optional: Show copied feedback
                        commandElement.style.backgroundColor = '#4CAF50';
                        setTimeout(() => {
                            commandElement.style.backgroundColor = '';
                        }, 1000);
                    })
                    .catch(err => {
                        console.error('Failed to copy: ', err);
                    });
            });
        }
    }

    // Initialize all functions
    function init() {
        detectDomain();
        detectSystemTheme();
        simulateVerification();
        setupCommandCopy();
    }

    // Run initialization
    init();
});
