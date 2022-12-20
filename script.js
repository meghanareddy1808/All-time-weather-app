let parentDiv=document.querySelector(".main")
let input1=document.querySelector("#num1");
let input2=document.querySelector("#num2");
let sum=document.querySelector(".sum");
let difference=document.querySelector(".difference");
let product=document.querySelector(".product");
let division=document.querySelector(".division");
let result=document.querySelector(".result");
sum.addEventListener('click',()=>{
    let n1=+input1.value;
    let n2=+input2.value;
    let total=n1+n2;
    result.textContent=total;

});
difference.addEventListener('click',()=>{
    n1=+input1.value;
    n2=+input2.value
    let total=n1-n2;
    result.textContent=total;
});
product.addEventListener('click',()=>{
    n1=+input1.value;
    n2=+input2.value
    let total=n1*n2;
    result.textContent=total;
});
division.addEventListener('click',()=>{
    n1=+input1.value;
    n2=+input2.value
    let total=n1/n2;
    result.textContent=total;
});