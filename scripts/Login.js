function handleLoginForm(event) {
    event.preventDefault();

    const username = document.getElementById("username-field").value;
    const password = document.getElementById("password-field").value;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    if (storedUsers[username]) {
        if (storedUsers[username].password === password) {
            const typeUser = storedUsers[username].typeUser;
            let welcome = `Bem-vindo ${typeUser}`;
            alert(welcome);
        } else {
            alert("Usuário ou senha inválido!");
        }
    } else {
        alert("Usuário ou senha inválido!");
    }

    document.getElementById("username-field").value = "";
    document.getElementById("password-field").value = "";
}

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", handleLoginForm);
