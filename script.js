let name= document.querySelector(".name");
let email= document.querySelector(".email");
let num= document.querySelector(".number");
let pass= document.querySelector(".password");
let btn = document.querySelector(".btn");

let dataArray=[];
if(localStorage.dataLog != null){
    dataArray = JSON.parse(localStorage.dataLog);
}else{
    dataArray=[];
}

btn.onclick=function(){

    console.log(name.value);
    console.log(email.value);
    console.log(num.value);
    console.log(pass.value);

    let data={
        name: name.value,
        email: email.value,
        number: num.value,
        password: pass.value,
    }
    dataArray.push(data);
    localStorage.setItem('dataLog', JSON.stringify(dataArray));
    clearData();
}

    function clearData(){
        name.value='';
        email.value='';
        num.value='';
        pass.value='';
}
        


