function showErrorMessage(field, elementError, errorMessage) {
    elementError.innerHTML = errorMessage;
    elementError.classList.replace("d-none", "d-inline-block");

    setTimeout(() => {
        elementError.classList.replace("d-inline-block", "d-none");
    }, 1000 * 2);

    field.focus();
};

function validateEmail(email) {
    const span = document.getElementById("errorEmailMessage");
    if (validator.isEmail(email.value)) {
        return email.value.toLowerCase();
    } else {
        showErrorMessage(email, span, "Invalid email");
        return false;
    }
};

function validateUsername(username) {
    // - Regras de validação:
    // - Mínimo de 3 caracteres
    // - Máximo de 20 caracteres
    // - Somente letras, números e underscores
    // - Não pode começar ou terminar com underscore

    const span = document.getElementById("errorUsernameMessage");
    if (!validator.isLength(username.value, { min: 3, max: 20 })) {
        showErrorMessage(username, span, "Mínimo de 3 caracteres");
        return false;
    }

    if (!validator.isAlphanumeric(username.value, 'en-US', { ignore: '_' })) {
        showErrorMessage(username, span, "O nome de usuário deve conter apenas letras, números e underscores.");
        return false;
    }

    if (username.value.startsWith('_') || username.value.endsWith('_')) {
        showErrorMessage(username, span, "O nome de usuário não pode começar ou terminar com underscore.");
        return false;
    }

    return username.value;
};

function validatePassword(password) {
    // - Regras de validação:
    // - Mínimo de 8 caracteres
    // - Deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um símbolo
    // - Não pode ser uma sequência comum

    const roles = {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    };

    const span = document.getElementById("errorPasswordMessage");
    if (!validator.isStrongPassword(password.value, roles)) {
        showErrorMessage(password, span, "A senha deve conter pelo menos 8 caracteres.<br>Ao menos uma letra maiúscula<br>Ao menos uma letra minúscula<br>Ao menos um número<br> Ao menos um símbolo");
        return false;
    }

    return password.value;
};

function createNewUser(validEmail, validUsername, validPassword) {
    const newUser = {
        email: validEmail,
        username: validUsername,
        password: validPassword
    };

    return newUser;
}

const formRegister = document.getElementById("register");

formRegister.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const email = ev.target.email;
    const username = ev.target.username;
    const password = ev.target.password;

    const validEmail = validateEmail(email);
    const validUsername = validateUsername(username);
    const validPassword = validatePassword(password);
    
    if(!validEmail || !validUsername || !validPassword) return;

    const newUser = createNewUser(validEmail, validUsername, validPassword);

    alert("Tudo validado, apenas descomente o formRegister.submit() para submeter o formulário :)");
    //formRegister.submit();
});