//Sentencia if
const persona = {
    nombre: "Nicolas",
    edad: 27,
    ciudad: "Guadalajara"
};
if(persona.edad > 26){
    console.log("La edad es mayor a 26")
}else{
    console.log("La edad es menor o igual a 26")
}

//Sentencia switch usando objeto
switch(persona.nombre){
    case "Nicolas":
        console.log("El nombre es Nicolas")
        break;
    case "Juan":
        console.log("El nombre es Juan")
        break;
    default:
        console.log("El nombre no es Nicolas ni Juan")
}

//Sentencia for usando un objeto
for(i = 0; i < persona.edad; i++){
    console.log("Número:", i)
}

//Sentencia while usando arreglo
let contador = 0
const numeros = [1, 2, 3, 4, 5]
while(contador < numeros.length){
    if(numeros[contador] === 5){
        console.log("Se encontro el numero 5 en la posicion", contador)
        break;
    }else{
        console.log("Este no es el mumero 5")
         contador++}
}

//Sentencia do while usando arreglo
contador = 0 //resetear el contador para el do while
do{
    if(numeros[contador] === 5){
        console.log("Se encontro el numero 5 en la posicion", contador)
        break;
    }else{
        console.log("Este no es el mumero 5")
         contador++}
}while(contador < numeros.length)

//Ciclo for of usando un arreglo (En for of no es recomendable iterar un objeto a menos que se convierta en array)
const frutas = ["manzana", "pera", "uva"];
for (const fruta of frutas) {
  console.log(fruta);
}

//Ciclo for in usando un onjeto
for(const clave in persona){
    console.log("Clave:", clave, "Valor:", persona[clave])
}

//.forEach() usando un arreglo (ejecuta una funcion por cada elemento)
numeros.forEach((num) => {
  console.log(num * 2); 
});

/*
devuelve un nuevo array con el resultado de 
aplicar la función a cada elemento.
*/
const dobles = numeros.map((num) => num * 2);
console.log(dobles);   // [2, 4, 6, 8]
console.log(numeros);  // [1, 2, 3, 4] (intacto)

