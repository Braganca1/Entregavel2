class User {
    constructor(password, typeUser) {
        this.password = password;
        this.typeUser = typeUser;
    }
}

function handleSigninForm(event) {
    event.preventDefault();

    const user = document.getElementById("username-field");
    const password = document.getElementById("password-field");
    const passwordConfirm = document.getElementById("password-confirm-field");

    const storedUsers = JSON.parse(localStorage.getItem('users')) || {};
    const userValue = document.getElementById("username-field").value;

    if (validateUsername() && validatePassword() && validatePasswordConfirm()) {
        const passwordValue = document.getElementById("password-field").value;
        const typeUserValue = document.getElementById("typeuser-field").value;

        if (storedUsers[userValue]){
            alert("Usuário já existe!");
            document.getElementById("username-field").value = "";
            document.getElementById("password-field").value = "";
            document.getElementById("password-confirm-field").value = "";
            return;
        }

        let newUser = new User(passwordValue, typeUserValue);

        storedUsers[userValue] = newUser;

        localStorage.setItem('users', JSON.stringify(storedUsers));

        document.getElementById("username-field").value = "";
        document.getElementById("password-field").value = "";
        document.getElementById("password-confirm-field").value = "";

        user.style.border = "none";
        password.style.border = "none";
        passwordConfirm.style.border = "none";

        alert("Usuário cadastrado com sucesso!");

        location.href = "login.html";
    } else if (storedUsers[userValue]) {
        alert("Usuário já existe!");

        document.getElementById("username-field").value = "";
        document.getElementById("password-field").value = "";
        document.getElementById("password-confirm-field").value = "";

        user.style.border = "none";
        password.style.border = "none";
        passwordConfirm.style.border = "none";

        return;
    } else {
        let errorMessage = "";

        if (!validateUsername()) {
            errorMessage += "Usuário deve possuir apenas caracteres alfanuméricos\n";
        }

        if (!validatePassword()) {
            errorMessage += "A senha deve possuir no mínimo 8 caracteres e pelo menos uma letra minúscula, uma letra maíscula e um número\n";
        }

        if (!validatePasswordConfirm()) {
            errorMessage += "A senha insirada não é igual a senha digitada anteriormente";
        }

        alert(errorMessage);

        return;
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
    const passwordConfirmValue = document.getElementById("password-confirm-field").value;
    const passwordConfirm = document.getElementById("password-confirm-field");

    if (passwordConfirmValue === passwordValue) {
        return true;
    } else {
        passwordConfirm.style.border = "red solid 3px";
        return false;
    }
}

const signinForm = document.getElementById("signin-form");
signinForm.addEventListener("submit", handleSigninForm);