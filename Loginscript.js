const loginForm = document.getElementById('LoginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('Uname').value;
  const password = document.getElementById('password').value;
  // Add your authentication logic here, for example, checking against a list of users
  // For this example, we'll assume successful login and redirect to home.html
  window.location.href = 'after_login.html';
});



