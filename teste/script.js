// Function to handle the registration form submission
function handleRegistrationFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the username and password values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Retrieve the existing user data from local storage
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the username already exists
  const existingUser = storedUsers.find(user => user.username === username);
  if (existingUser) {
    alert('Username already exists');
    return;
  }

  // Create a new user object
  const newUser = {
    username: username,
    password: password
  };

  // Add the new user to the existing user data
  storedUsers.push(newUser);

  // Store the updated user data in local storage
  localStorage.setItem('users', JSON.stringify(storedUsers));

  // Clear the form fields
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';

  alert('Registration successful');
}

// Function to handle the login form submission
function handleLoginFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the username and password values
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Retrieve the user data from local storage
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

  // Find the matching user
  const user = storedUsers.find(user => user.username === username && user.password === password);

  if (user) {
    alert('Login successful');
    // Perform any desired action upon successful login
  } else {
    alert('Invalid username or password');
  }

  // Clear the form fields
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
}

// Add event listener to the registration form
const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', handleRegistrationFormSubmit);

// Add event listener to the login form
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', handleLoginFormSubmit);
