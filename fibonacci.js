const prompt = require('prompt-sync')();

let num = parseInt(prompt("Ingrese un número: "));
if (isNaN(num)) {
    console.log("No ingresaste un número");
} else {
    // Función para calcular la serie de Fibonacci
    function fibonacci(num) {
        let a = 0, b = 1, c;
        let arr = [a, b];
        for (let i = 2; i < num; i++) {
            c = a + b;
            a = b;
            b = c;
            arr.push(c);
        }
        return arr;
    }
    console.log(fibonacci(num));
}