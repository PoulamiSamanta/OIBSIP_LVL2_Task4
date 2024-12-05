// Temporary storage for registered users
const users = [];

// Function to toggle between forms
function toggleForm() {
  document.getElementById("register-form").classList.toggle("hidden");
  document.getElementById("login-form").classList.toggle("hidden");
}

// Register a new user
function register() {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;

  if (!username || !password) {
    alert("Please fill in both fields.");
    return;
  }

  // Check if username already exists
  const userExists = users.some(user => user.username === username);
  if (userExists) {
    alert("Username already exists. Please choose another.");
    return;
  }

  users.push({ username, password });
  alert("Registration successful! Please log in.");
  toggleForm();
}

// Login user
function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (!username || !password) {
    alert("Please fill in both fields.");
    return;
  }

  // Authenticate user
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    alert("Login successful!");
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("secured-page").classList.remove("hidden");
  } else {
    alert("Invalid username or password.");
  }
}

// Logout user
function logout() {
  document.getElementById("secured-page").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
}
