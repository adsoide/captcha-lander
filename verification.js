document.addEventListener("DOMContentLoaded", function() {
  // Remove no-js class
  document.body.classList.remove("no-js");
  
  // Set theme based on system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("theme-dark");
  } else {
    document.body.classList.add("theme-light");
  }
  
  // Show appropriate verification method
  const checkboxVerification = document.getElementById("checkbox-verification");
  const verificationModal = document.getElementById("verification-modal");
  
  // Random selection of verification method
  // For demo purpose: 70% chance for modal popup, 30% chance for checkbox
  const showModal = Math.random() > 0.3;
  
  if (showModal) {
    checkboxVerification.style.display = "none";
    verificationModal.classList.remove("modal-hidden");
  } else {
    const checkbox = checkboxVerification.querySelector("input");
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        // Simulate verification
        setTimeout(() => {
          checkboxVerification.style.display = "none";
          verificationModal.classList.remove("modal-hidden");
        }, 1500);
      }
    });
  }
  
  // Handle verification button
  const verifyButton = document.getElementById("verify-button");
  
  // Simulate verification process completion after 5 seconds
  setTimeout(() => {
    verifyButton.disabled = false;
  }, 5000);
  
  verifyButton.addEventListener("click", function() {
    // Simulate successful verification
    document.getElementById("verification-message").textContent = "Verification successful! Redirecting...";
    document.getElementById("verification-container").style.display = "none";
    
    // Simulate redirect
    setTimeout(() => {
      window.location.href = window.location.href;
    }, 2000);
  });
});
