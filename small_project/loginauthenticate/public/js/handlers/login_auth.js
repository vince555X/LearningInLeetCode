import Validator from "../utils/validation.js";

function initializeLogin() {
    const loginBtn = document.querySelector('.login-btn');
    const username = document.querySelector('.user-input');
    const password = document.querySelector('.pass-input');
    
    loginBtn.addEventListener('click', e => {
        e.preventDefault();
        
        if (Validator.isEmpty(username.value)) {
            console.log("input username");
            username.value = "";
            return;
        }
        
        if (Validator.isEmpty(password.value)) {
            console.log("input password");
            password.value = "";
            return;
        }

        // loginauthentication(username, password);
        console.log(Validator.logged(username.value, password.value));
    });        
}


export default initializeLogin;