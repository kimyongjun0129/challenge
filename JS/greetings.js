const LogInInput = document.querySelector("#LogIn-form Input");
const LogInForm = document.querySelector("#LogIn-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLogInSubmit(event) {
    event.preventDefault();
    LogInForm.classList.add(HIDDEN_CLASSNAME);
    const username = LogInInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = `Hello ${username}`;  //"Hello " + username;; 이랑 같은 역할 수행//
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    LogInForm.classList.remove(HIDDEN_CLASSNAME);
    LogInForm.addEventListener("submit", onLogInSubmit);
} else {
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


