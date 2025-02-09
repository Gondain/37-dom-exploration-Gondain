const displayFirstname =  document.querySelector('#display-firstname')

document.querySelector('#firstname').addEventListener('keyup', () => {
    displayFirstname.innerHTML = document.querySelector('#firstname').value
  })
  


const section = document.getElementById('a-hard-truth')
document.getElementById('age').addEventListener('keyup', () => {
    if (document.getElementById('age').value >= 18) {
        section.style.visibility = 'visible'
    } else {
        section.style.visibility = 'hidden'
    }
})

const password = document.getElementById('pwd')
const passwordConfirm = document.getElementById('pwd-confirm')

password.addEventListener('keyup', () => {
    if ((password.value).length < 6 || password.value != passwordConfirm.value) {
        password.style.borderColor = '#FF0000'
    } else {
        password.style.borderColor = 'initial';
    }
})

passwordConfirm.addEventListener('keyup', () => {
    if ((password.value).length < 6 || password.value != passwordConfirm.value) {
        passwordConfirm.style.borderColor = '#FF0000'
    } else {
        passwordConfirm.style.borderColor = 'initial';
    }
})

const toggleDarkMode = document.getElementById('toggle-darkmode')
toggleDarkMode.addEventListener('change', () => {
    if (toggleDarkMode.value === "dark") {
        document.body.style.backgroundColor = '#000000'
        document.body.style.color = '#FFFFFF'   
    } else if (toggleDarkMode.value === "light") {
        document.body.style.backgroundColor = 'initial'
        document.body.style.color = 'initial'
    }
})

