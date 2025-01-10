const isLoggedIn = localStorage.getItem('loggedIn');
if (!isLoggedIn) {
    
    window.location.href = "login.html";
}