var email = document.getElementById['form']['email'];
var email = document.getElementById['form']['password'];

var email_eror = document.getElementById('email_error');
var pass_eror  = document.getElementById('pass_error');

email.addEventListener('textInput',email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
    if  (email.value.length < 9) {
         email.style.border = "1px solid red";
         email_eror.style.display ="block";
         email.focus();
         return false; 
    }
    if  (password.value.length < 6) {
         password.style.border = "1px solid red";
         pass_eror.style.display ="block";
         password.focus();
         return false;
    }
}
function email_verify(){
    if (email.value.length >= 8){
        email.style.border = "1px solid silver";
        email_eror.style.display = "none";
        return true;
    }
}
function pass_Verify(){
    if (password.value.length >= 8){
        password.style.border = "1px solid silver";
        pass_eror.style.display ="none";
        return true;