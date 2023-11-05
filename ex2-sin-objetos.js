const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "McCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola

students.forEach((s) => { console.log("Cada elemento: ", s); });

// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"

console.log("Que puesto ocupa Maria? ", students.findIndex((s) => s == "Maria"));

// Utiliza el método some para saber si en este array existe la alumna "Katerina"

console.log("Existe Katerina? ", students.some((s) => s == "Katerina"));

// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres

console.log("1r nombre con 5 o menos letras: ", students.find((s) => s.length <= 5));

// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres

console.log("Todos los nombres tienen 4 o mas letras? ", students.every((s) => s.length >=4));

// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i

console.log("Nombres con la letra i: ", students.filter((s) => s.includes("i")));

// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre

console.log("1r letra de cada nombre: ", students.map((s) => s[0]));
