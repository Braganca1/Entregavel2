function validate() {
    if (validateUsername() && validatePassword() && validatePasswordConfirm()) {

        window.alert("Usuário cadastrado com sucesso!");
        
        return true;
    } else {
        let errorMessage = "";

        if (validateUsername()) {
            errorMessage += "Usuário deve possuir apenas caracteres alfanuméricos\n";
        }

        if (validatePassword()) {
            errorMessage += "A senha deve possuir no mínimo 8 caracteres e pelo menos uma letra minúscula, uma letra maíscula e um número\n";
        }

        if (validatePasswordConfirm()) {
            errorMessage += "A senha insirada não é igual a senha digitada anteriormente";
        }

        window.alert(errorMessage);

        return false;
    }
}

function validateUsername() {
    const userValue = document.getElementById("username-field").value;
    const user = document.getElementById("username-field");
    const re = /^[a-zA-Z0-9_\.]+$/;

    if (re.test(userValue)) {
        return true;
    } else {
        user.style.border = "red solid 3px";
        return false;
    }
}

function validatePassword() {
    const passwordValue = document.getElementById("password-field").value;
    const password = document.getElementById("password-field");
    const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;

    if (re.test(passwordValue)) {
        return true;
    } else {
        password.style.border = "red solid 3px";
        return false;
    }
}

function validatePasswordConfirm() {
    const passwordValue = document.getElementById("password-field").value;
    const passwordConfirmValue = document.getElementById("password-confirm-value").value;
    const passwordConfirm = document.getElementById("password-confirm-field");

    if (passwordConfirmValue === passwordValue) {
        return true;
    } else {
        passwordConfirm.style.border = "red solid 3px";
        return false;
    }
}

const signinForm = document.getElementById("signin-form");

signinForm.addEventListener("onsubmit", e => {
    e.preventDefault();
    validate();
});