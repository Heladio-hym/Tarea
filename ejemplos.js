//ejemplo de funcion anonima muy simple
//no tiene nada que ver con el codigo de arriba
//es solo un ejemplo

let multiply = function(a, b) { return a * b; };

//un ejemplo de funcion lambda muy simple
//no tiene nada que ver con el codigo de arriba
//es solo un ejemplo

let multiplicar = (a, b) => { return a * b; };

//Aqui no se usa el "function"

//un pequeño ejemplo de closure
//no encontre como hacerlo en TypeScript
//Asi que lo hice en JavaScript
function crearSuma(a) {
  return funcion(b) ;{
    return a + b
  }
}
var sumar5 = crearSuma(5);
var sumar10 = crearSuma(10);
console.log(sumar5(15));
console.log(sumar10(15));
