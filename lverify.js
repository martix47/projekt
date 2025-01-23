const isLoggedIn = localStorage.getItem('loggedIn');
if (!isLoggedIn) {
    window.location.href = "login.html";
} else {
    
    window.addEventListener("beforeunload", () => {
        localStorage.removeItem('loggedIn'); 
    });
}