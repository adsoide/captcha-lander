// Simulated PowerShell Command Generation
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

// Export function to global scope if needed
window.getRandomCommand = getRandomCommand;
