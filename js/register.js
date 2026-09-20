document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  if (!form) {
    console.error("Error: registerForm not found on this page.");
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    const userRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!userRegex.test(email)){
      alert("Username must be at least 4 characters and contain only letters, numbers, or underscores.");
      return;
    }
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passRegex.test(password)) {
        alert(" Password must be 8+ chars, include uppercase, number, and special character.");
        return;
      }
     
    if (email === "" || password === "") {
      alert("Please fill in all required fields!");
      return;
    }

    // Save credentials in localStorage 
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account created successfully!");
    window.location.href = "login.html";
  });
});         