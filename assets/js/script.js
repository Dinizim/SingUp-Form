const form = document.getElementById('form')
const SignUp = document.querySelectorAll('.cadastro')
const ErrorMSG = document.querySelectorAll('.error-msg')
const input = document.querySelectorAll('.input')
//pegar email regex
const EmailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


//function que criar e remove o erro
function setError(index){
    SignUp[index].style.border = '1px solid #ff7a7a'
    ErrorMSG[index].style.display = 'block'
}

function removeError(index){
    SignUp[index].style.border = '1px solid #b9b6d3'
    ErrorMSG[index].style.display = 'none'
}

function nameValidate(){
    if(input[0].value.length < 3){
        setError(0)
    }else{
        removeError(0)
    }
}  

function FnameValidate(){
    if(input[1].value.length < 3){
        setError(1)
    }else{
        removeError(1)
    }
}  
function EmailValidate(){
    if(!input[2].checkValidity()){
        setError(2)
    }else{
        removeError(2)
    }
}

function PasswordValidate(){
    if(input[3].value.length < 8){
        setError(3)
    }else{
        removeError(3)
    }

}


