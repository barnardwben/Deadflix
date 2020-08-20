// Variables
const emailInp = document.querySelector('.email-input');
const sgnBtn = document.querySelector('.sgnBtn');
const registryForm = document.querySelector('.email-address');
const registryInp = document.querySelector('.registry-input');

// Event Listeners
registryForm.addEventListener('submit', signUp);
// signIn.addEventListener('click', logIn);


// Functions
function signUp(e) {
  e.preventDefault();

  if(emailInp.value === "") {
    alert('fill in email');
  } else if (emailInp.value.includes("@")) {
    let eMail = emailInp.value;
    localStorage.setItem('email', eMail);
    window.location.href = "http://127.0.0.1:5500/signup.html";
  }
}

