
const nombre = "Juan";
let edad = 20;

console.log("Nombre:", nombre);
console.log("Edad:", edad);

// Objeto (Object Literal)

const persona = {
    nombre: nombre,
    edad: edad,
    ciudad: "Guadalajara"
};

console.log("Objeto persona:", persona);


// Function Declaration

function saludar() {
    console.log("Hola " + persona.nombre);
}

saludar();


// Function Expression

const mostrarEdad = function () {
    console.log("Edad:", persona.edad);
};

mostrarEdad();

// Arrow Function

const sumar = (a, b) => {
    return a + b;
};

console.log("Suma:", sumar(5, 3));

// tipos de scope

let mensaje = "Variable global";

function ejemploScope() {
    let mensaje = "Variable local";
    console.log("Dentro de la función:", mensaje);
}

ejemploScope();

console.log("Fuera de la función:", mensaje);