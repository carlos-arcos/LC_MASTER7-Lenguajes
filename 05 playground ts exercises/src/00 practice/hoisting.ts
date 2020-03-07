console.log("---------------- Inicio: hoisting ----------------");


// --- EJERCICIO ------------------------------------------------------------------------

// A. ¿Cual crees que será el resultado de la consola y porqué? TIP: escribe el código equivalente.
function f() {
    console.log(a); //Undefined. 'a' está declarada pero no inicializada
    console.log(g()); //Undefined. la función se inicializa antes de la asignación de 'a'
  
    var a = "good job!";
    function g() {
      return a;
    }
    console.log(a); //"good job!". 'a' ya está inicializada
  } 
f();

/** Código equivalente 
function f() {
  var a;

  function g() {
    return a;
  }
  console.log(a);
  console.log(g());
  
  a = "good job!";
   
  console.log(a); 
} 
f();
*/
 
// B. ¿Y ahora?
var a = 1;

(function() { //La función se ejecuta después de declararse
  console.log(a); //undefined - la variable local a la función 'a' está declarada pero no inicializada todavía.
  var a = 2; 
  b = 4; //al definir 'b' así, es una variable global y es conocida dentro de la función y fuera
  var c = 3;
})();

console.log(a); // 1
console.log(b); // 4
console.log(c); // Error. 'c' no está definida. 

/** Código equivalente
var a = 1;
var c = 3;

(function() { 
  console.log(a);
  a = 2; 
  b = 4; 
})();

console.log(a);
console.log(b);
console.log(c);
*/

// C. ¿Y con esta ligera variación?

f();
var a = 1;

function f() {
  console.log(a); //Undefined, se llama a la función antes de la declaración de a
  b = 4;
  var c = 3;
};

console.log(a); //1
console.log(b); //4
console.log(c); //Error. c no está definida fuera de la función

/** Código equivalente
var a = 1;
f();

function f() {
  console.log(a); 
  b = 4;
  c = 3;
};

console.log(a);
console.log(b);
console.log(c);
*/

console.log("---------------- Fin: hoisting ----------------");