let signInButton = document.querySelector('.signIn-modal')

signInButton.addEventListener('click', function (event) {

    event.preventDefault()

    const regex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g);


    let email = document.querySelector('#email').value

    if (!regex.test(email)) {
        return modalBody = document.querySelector('.modal-body').textContent = 'Email inválido.'
    }

    let password = document.querySelector('#password').value

    if (password.length < 5 || password.length > 15) {
        return modalBody = document.querySelector('.modal-body').textContent = 'A senha deve ter entre 5 e 15 caracteres.'
    }

    let confirm = document.querySelector('#confirm').value

    if (password != confirm) {
        return modalBody = document.querySelector('.modal-body').textContent = 'As senhas são diferentes.'
    }

    document.querySelector('#form-signIn').submit()
})






























