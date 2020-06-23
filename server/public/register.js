const pass1 = document.getElementsByClassName('pass1');
const pass2 = document.getElementsByClassName('pass2');
const register = document.querySelector('enter');

register.addEventListener('click', ()=>{
    if(pass1.value !== pass2.value){
        alert('Passwords do not match');
    }
})