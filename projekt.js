const validUsername = "admin";
const validPassword = "password123";

const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Zapobiega przeładowaniu strony

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        // Jeśli dane są poprawne, przekierowanie na stronę główną
        window.location.href = "index.html";
    } else {
        // Wyświetl błąd
        errorMessage.style.display = "block";
    }
    // Jeśli zaznaczono "Zapamiętaj mnie", zapisz dane do localStorage
    if (rememberMe.checked) {
        localStorage.setItem('username', username);
    } else {
        localStorage.removeItem('username');
    }
});
