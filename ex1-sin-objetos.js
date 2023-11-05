/**
 * Dado el siguiente array de números, aplica adecuadamente cada uno de los métodos de array obteenr la información requerida
 *
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODg4NjgxMF8yMjM0MDYyNg
 */

const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];


/**
 * Utiliza la método forEach para mostrar cada número por consola
 */

//PORQUE NO FUNCIONA DE ESTA MANERA??
//console.log("Todos los numeros: ", numbers.forEach((n) => (n)));

numbers.forEach((n) => { console.log("Todos los numeros: ", n)});

/**
 * Utiliza el método find para encontrar el primer número mayor de 10
 */

console.log("1r num mayor de 10: ",
    numbers.find((n) => n > 10)
);

/**
 * Utliza el método some para saber si existe un número mayor de 20
 */

console.log("Existe algun num > 20: ",
    numbers.some((n) => n > 20)
);

/**
 * Utiliza el método every para comprobar si todos los números de este array son impares
 */

console.log("Son todos los num impares: ",
    numbers.every((n) => n % 2 != 0)
);

/**
 * Utiliza el método filter para obtener un nuevo array con todos los números que son mayores de 3 pero menores de 9
 */

console.log("Que numeson son >3 pero <9: ",
    numbers.filter((n) => n > 3 && n < 9)
);

/**
 * Utiliza el método map para obtener otro array donde, para cada posición, ontengamos un -1 si el número que ocupaba aquella posición es negativo, y un +1 si el nuemero es positivo
 * [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 */

console.log("Indicar para cada valor con un 1 si es positivo y con un -1 si es negativo: ",
numbers.map((n) => Math.sign(n))
);