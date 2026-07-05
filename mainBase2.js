
// Arreglos
const numeros = [10, 20, 30, 40, 50];
console.log("Arreglo original:", numeros);

// map()  
// Multiplicar cada número por 2
const doble = numeros.map(numero => numero * 2);
console.log("Map:", doble);

// filter() 
// Filtar numeros mayores a 25
const mayores = numeros.filter(numero => numero > 25);
console.log("Filter:", mayores);

// find() 
// busca el primer número mayor a 30
const encontrado = numeros.find(numero => numero > 30);
console.log("Find:", encontrado);

// reduce() 
// Suma todos los números
const suma = numeros.reduce((total, numero) => total + numero, 0);
console.log("Reduce:", suma);

// includes() 
// Verifica si existe un número
console.log("Includes 20:", numeros.includes(20));

// some() 
// busca si hay algún número mayor a 45
console.log("Some:", numeros.some(numero => numero > 45));

// findIndex() 
// Índice del número 30
console.log("FindIndex:", numeros.findIndex(numero => numero === 30));

// every() 
// Verifica si todos son mayores que 5
console.log("Every:", numeros.every(numero => numero > 5));

// Objetos
//reciclado jeje
const persona = {
    nombre: "Juan",
    edad: 20,
    ciudad: "Guadalajara"
};
console.log("Objeto:", persona);

// Object.keys()
console.log("Keys:", Object.keys(persona));

// Object.values()
console.log("Values:", Object.values(persona));

// Object.entries()
console.log("Entries:", Object.entries(persona));