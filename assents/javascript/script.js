var nome = window.document.getElementById('nome')
var email = document.querySelector('#email')
var nomeOK = false
var emailOK = false

nome.style.width = '100%'
email.style.width = '100%'

function validarNome() {
    let TxtNome = document.querySelector('#TxtNome')
    if (nome.value.length < 2) {
        TxtNome.innerHTML = 'Nome inválido!'
        TxtNome.style.color = 'red'
        nomeOK = false
    }else{
        TxtNome.innerHTML = 'Nome válido!'
        TxtNome.style.color = 'green'
        nomeOK = true
    }
}

function validarEmail() {
 let TxtEmail = document.querySelector('#TxtEmail')
 if(email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0){
    TxtEmail.innerHTML = 'email válido'
     TxtEmail.style.color = 'green'
    emailOK =true
 } else{
     TxtEmail.innerHTML = 'email inválido'
     TxtEmail.style.color = 'red'
    emailOK= false
 }  

}

function Enviar(){
if(nomeOK ==true && emailOK==true){
    alert('preenchido corretamente, enviado!!')

    }else{
        alert('preencha o campo corretamente')
    }
}