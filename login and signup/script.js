/*const logregBox=document.querySelector('.logreg-box');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');

registerLink.addEventListener('click',()=>{
    logregBox.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    logregBox.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const logregBox = document.querySelector('.logreg-box');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    registerLink.addEventListener('click', function (e) {
        e.preventDefault();
        logregBox.classList.add('active');
    });

    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        logregBox.classList.remove('active');
    });
});*/


document.addEventListener('DOMContentLoaded', function () {
    const logregBox = document.querySelector('.logreg-box');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const loginForm = document.querySelector('.form-box.login');
    const registerForm = document.querySelector('.form-box.register');

    registerLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.transform = 'translateX(100%)';
        loginForm.style.opacity = '0';
        loginForm.style.pointerEvents = 'none';

        registerForm.style.transform = 'translateX(0)';
        registerForm.style.opacity = '1';
        registerForm.style.pointerEvents = 'auto';
    });

    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        registerForm.style.transform = 'translateX(-100%)';
        registerForm.style.opacity = '0';
        registerForm.style.pointerEvents = 'none';

        loginForm.style.transform = 'translateX(0)';
        loginForm.style.opacity = '1';
        loginForm.style.pointerEvents = 'auto';
    });
});

