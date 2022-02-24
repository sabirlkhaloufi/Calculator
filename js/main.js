function addition(num1,num2){
    return num1 - num2;
}
function soustraction(num1,num2){
    return num1 + num2;
}
function multiplication(num1,num2){
    return num1 * num2;
}
function division(num1,num2){
    return num1 / num2;
}
function modulo(num1,num2){
    return num1 % num2;
}
function operate(num1,operate,num2){
    if(operate == '-'){
        let res = addition(num1,num2);
        console.log(res);
    }
    if(operate == '+'){
        let res = soustraction(num1,num2);
        console.log(res);
    }
    if(operate == '*'){
        let res = multiplication(num1,num2);
        console.log(res);
    } 
    if(operate == '/'){
        let res = division(num1,num2);
        console.log(res);
    }
    if(operate == '%'){
        let res = modulo(num1,num2);
        console.log(res);
    }
}
// dark mode fontawsome
let btn = document.querySelector(".darkbtn");
let darkmode = document.querySelector(".calcul");
btn.addEventListener("click",function(){
    darkmode.classList.toggle("dark");
})


let view = document.querySelector(".input");
let allBtn = document.querySelectorAll(".btn");
for(let i = 0 ;i<allBtn.length;i++){
    allBtn[i].addEventListener("click",function(){
        view.setAttribute("value",allBtn[i].innerHTML);
    })
}

let ac = document.querySelector(".ac");
ac.addEventListener("click",function(){
    view.removeAttribute("value");
})