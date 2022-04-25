const form = document.getElementById('form')
const usuario = document.getElementById('usuario')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const senha2 = document.getElementById('senha2')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const usuarioValue = usuario.value.trim()
    const emailValue = email.value.trim()
    const senhaValue = senha.value.trim()
    const senha2Value = senha2.value.trim()

    // Usuário
    if(usuarioValue === '') {       
        errorValidation(usuario, 'Preencha esse campo')
    } else {
        successvalidation(usuario)
    }

    // E-mail
    if(emailValue === '') {
        errorValidation(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        errorValidation(email, 'E-mail inválido')
    } else {
        successvalidation(email)
    }
   
    // Senha
    if(senhaValue === '') {
        errorValidation(senha, 'Preencha esse campo')

    } else if(senhaValue.length < 8) { 
        errorValidation(senha, 'Senha deve conter mais que 8 caracteres')
    } else {
        successvalidation(senha)
    }

    // Senha 2
    if(senha2Value === '') {
        errorValidation(senha2, 'Preencha esse campo')

    } else if(senhaValue !== senha2Value) { 
        errorValidation(senha2, 'Senhas incorretas')
    } else {
        successvalidation(senha2)
    }

}

function errorValidation(input, message) {
    const formItem = input.parentElement;
    const small = formItem.querySelector('small')

    small.innerText = message

    formItem.className = 'form-item error'
}

function successvalidation(input) {
    const formItem = input.parentElement;

    formItem.className = 'form-item success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}