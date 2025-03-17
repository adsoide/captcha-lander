document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('human-checkbox');
    const body = document.body;

    // Theme detection and application
    function applyTheme() {
        const isDarkMode = window.matchMedia && 
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Update meta theme color for mobile browsers
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute(
                'content', 
                isDarkMode ? '#222222' : '#ffffff'
            );
        }
    }

    // Initial theme application
    applyTheme();

    // Listen for theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addListener(applyTheme);

    // Verification checkbox logic
    checkbox.addEventListener('change', function() {
        // Simulated verification process
        if (this.checked) {
            // You can add more complex verification logic here
            console.log('Human verification initiated');
        }
    });
});
