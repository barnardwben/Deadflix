// Variables
const emailInput = document.querySelector('.inem');
const passwordInput = document.querySelector('.inpa');
const formOne = document.querySelector('.form-1');

// Event Listeners
// Retrieve Email from local storage
document.addEventListener('DOMContentLoaded', function () {
  emailInput.value = localStorage.getItem('email');
});

formOne.addEventListener('submit', function (e) { 
  e.preventDefault();
  if(passwordInput.value === "") {
  alert('Please fill out all fields to continue');
} else {
  let pass = passwordInput.value;
  localStorage.setItem('password', pass);
  window.location.href = "http://127.0.0.1:5500/films.html";
}
})

// formOne.addEventListener('submit', doIt);

// function doIt(e) {
//   e.preventDefault();
//   alert('working');
// }