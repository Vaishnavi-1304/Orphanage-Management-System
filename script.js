const loginPopup = document.querySelector('.wrapper');
const loginButton = document.querySelector('.btnLogin-popup');

// Show the login popup
loginButton.addEventListener('click', () => {
    loginPopup.classList.add('active');
});

// Close the popup
window.addEventListener('click', (event) => {
    if (event.target === loginPopup) {
        loginPopup.classList.remove('active');
    }
});
