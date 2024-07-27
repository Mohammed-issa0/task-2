let name= document.querySelector(".name");
let email= document.querySelector(".email");
let num= document.querySelector(".number");
let password= document.querySelector(".password");
let btn = document.querySelector(".btn");
let emailV;
let numberB=true;
let emailB=true;


name.addEventListener('input', function() {
            if (this.value.length > 15) {
                this.value = this.value.slice(0, 15);
            }
        });
num.addEventListener('input', function() {
        validatenumber(this.value);
            if (this.value.length > 10) {
                this.value = this.value.slice(0, 10);
            }  
        });
password.addEventListener('input', function() {
            if (this.value.length > 10) {
                this.value = this.value.slice(0, 10);
            }
        });

function validateEmails(emails) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailArray = emails.split(',');
            for (let email of emailArray) {
                email = email.trim();
                if (!re.test(email)) {
                    return false;
                }
            }
            return true;
        }

function validatenumber(number) {
            const re = /\d+/;             
                if (!re.test(number)) {
                    return false;
                }          
            return true;
        }

let dataArray=[];
if(localStorage.dataLog != null){
    dataArray = JSON.parse(localStorage.dataLog);
}else{
    dataArray=[];
}

btn.onclick=function(){

    const emailValue = document.querySelector('.email').value;
    const emailError = document.getElementById('email-error');
    let numberError = document.getElementById('num-error');
    let numberValue = document.querySelector('.number').value;
    if (!validateEmails(emailValue)) {
        emailError.style.display = 'block';
        event.preventDefault();
        emailB=false;        
    } else {
        emailError.style.display = 'none';
        emailV=email.value;
        emailB=true;
    }

    if (!validatenumber(num.value)) {
        numberError.style.display = 'block';
        event.preventDefault();
        numberB=false;
        
    } else {
        numberError.style.display = 'none'; 
        numberB=true;
    }

    if(emailB && numberB){
        let data={
        name: name.value,
        email: email.value,
        number: num.value,
        password: password.value,
    }
    console.log(name.value);
    console.log(email.value);
    console.log(num.value);
    console.log(password.value);

    dataArray.push(data);
    localStorage.setItem('dataLog', JSON.stringify(dataArray));
    clearData();
    readOnly();
    }else{
        console.log('error');
    }        
    
}

    function clearData(){
        name.value='';
        email.value='';
        num.value='';
        password.value='';
}
        

const togglePassword = document.querySelector('#togglePassword');

        togglePassword.addEventListener('click', function () {
            // Toggle the type attribute
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            // Toggle the icon
            this.classList.toggle('bx-show');
            this.classList.toggle('bx-hide');
        });

function readOnly(){
    email.value=emailV;
    email.setAttribute('readonly' , true);
}
