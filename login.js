// Variables
const signInForm = document.querySelector('.sign-in-form');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const checkBox = document.getElementById('check-box');

const savedEmail = localStorage.getItem('email');
const savedPassword = localStorage.getItem('password');

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
  if(checkBox.checked) {
    emailInput.value = localStorage.getItem('email');
    passwordInput.value = localStorage.getItem('password');
  }
});

signInForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (emailInput.value === savedEmail && passwordInput.value === savedPassword) {
    window.location.href = "http://127.0.0.1:5500/films.html";
  } else {
    alert('Incorrect field entry');
  }
})