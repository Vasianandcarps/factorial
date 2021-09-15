
let n = prompt("Введите число");
if (!isNaN(n)){
let factorial = 1;
for (let i = 1 ; i<= n ;i++){
factorial =  i * factorial 
}
alert(factorial);}else {alert("Укажите число")}