//Concatena cadenas de texto
let myName = "Nicolas"
let conca = "Hola, " + myName + "!" // Concatenación de cadenas
console.log(conca) // Imprime: Hola, Nicolas!

myName = 'Nicolas';
conca = 'Hola, ' + myName + '!' // Concatenación de cadenas
console.log(conca) // Imprime: Hola, Nicolas!

/*Las comillas simples y dobles son equivalentes a menos de que se quiera
meter comillas dobles dentro del texto o como contraccion es caso de ser texto
 en inglés*/

 //Longitud
console.log(myName.length) // Imprime: 7

//Acceso a caracteres
console.log(myName[0]) // Imprime: N
console.log(myName.length[1]) // Imprime: i

//Métodos comunes
console.log(myName.toUpperCase()) // Imprime: NICOLAS
console.log(myName.toLowerCase()) // Imprime: nicolas
console.log(myName.indexOf("N")) // Imprime: 0
console.log(myName.substring(0, 3)) // Imprime: Nic
console.log(conca.slice(0, 5)) // Imprime: Hola,
console.log(conca.replace("Nicolas", "Juan")) // Imprime: Hola, Juan!
console.log(conca.includes("Hola")) // Imprime: true
console.log(conca.startsWith("Hola")) // Imprime: true
console.log(conca.endsWith("!")) // Imprime: true

//Template literals
let age = 27;
let greeting = `Hola, ${myName}. Tienes ${age} años.`;
console.log(greeting) // Imprime: Hola, Nicolas. Tienes 27 años.

let message = `hola, este 
es mi primer 
curso de JS` 
console.log(message) // Imprime: hola, este