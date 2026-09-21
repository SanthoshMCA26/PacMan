document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const message = document.getElementById("message");

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
  

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "Dashboard.html";
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid email or password!";
  }
});





  
