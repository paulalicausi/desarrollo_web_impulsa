/**
 * Ejercicio 1
 */

let nombre = "Ana"; //String
let apellido = "Colombo"; //String
let edad = 23; //Numero
let tieneMascota = true; //Booleano

console.log(typeof tieneMascota);
console.log("Nombre: ", nombre, "Apellido: ",  apellido, "Edad: ", edad, "Tiene mascota: ", tieneMascota);

/**
 * Arrays
 * */

/*
* En luagr de hacer esto: 
let planeta1 = "Mercurio";
let planeta2 = "Venus";
let planeta3 = "Marte";

Hacemos esto: 
*/
let planetas = ["Mercurio", "Venus", "Marte"]
console.log(planetas.length); 

/**
 * Objetos literales
 */

let planeta = {
    nombre: "Tierra",
    satelites: ["Luna"],
    tieneAnillos: false,
    distanciaSol: 1
};

console.log(planeta.satelites[0]);

/**
 * Ejercicio 2 
 */

let persona = {
    nombre: "Ana",
    apellido: "Colombo",
    edad: 23,
    tieneMascota: true,
    comidasFavoritas: ["Hamburguesas", "Pizza"]
};

console.log(persona.comidasFavoritas[0]);

/**
 * DOM
 * */

//Variable titulo
let titulo = document.querySelector("h1");
//Mostrar titulo en consola
console.log(titulo);
//Modificar texto titulo
// titulo.innerText = "Hola";

//Variable subtitulo seccion curso
let tituloCurso = document.querySelector("#curso h2");
//Modificar estilo subtitulo
tituloCurso.style.borderBottom = "2px solid red";

/*
 * Funciones
 * */

function saludar(nombre) {
    alert("Hola " + nombre + "!");
}

//saludar("Carlos");

function sumarDosNum(num1, num2) {
    return num1 + num2;
}

let resultado = sumarDosNum(2, 5);
console.log("El resultado es: " + resultado);


