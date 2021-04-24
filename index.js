
function operacion(num1,num2,o) {
let op
if (o == 1){
  op = num1+num2;
}
if (o ==2){
  op = num1-num2
}
return op
}


let numero1 = parseInt(prompt('Digame el primer numero'));
let numero2 = parseInt(prompt('Digame el segundo numero'));

console.log('La operacion es',operacion(numero1,numero2,1));
 