// logowanie

const validUsername = "admin";
const validPassword = "password123";

const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');




loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); //  przeładowanie

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        sessionStorage.setItem('loggedIn', true);
        
        window.location.href = "index.html";
    } else {
        errorMessage.style.display = "block"; 
        
    }
});