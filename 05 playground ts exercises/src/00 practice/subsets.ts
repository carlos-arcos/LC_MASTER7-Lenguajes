console.log("---------------- Inicio: subsets ----------------");

// --- EJERCICIO ------------------------------------------------------------------------

// Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra:

// Solución:
function subsets(word: string) {
    let result = [];
 
    for (let i = 1; i < word.length; i++) {
        result[i-1] = word.substr(i);
    }
 
    return result;
 }
 //subsets("message");
  // Ejemplo
  console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
  
  
  // --- CHALLENGE ------------------------------------------------------------------------
  
  // Repite el ejercicio anterior sin utilizar arrays auxiliares ni bucles for/do/while.
  
  // TIP: Una forma válida de "iterar" es utilizando algún método de los Arrays:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
  
  function subsets2(word: string) {
    var salida = Array.from(word, x => {
      x.substr(1);
    }
    );
     return salida;
  }
 
  //console.log(subsets2("message"));
 var palabra = "message";
 function separa(word: string) {
   if (word === "")
     return "";
     console.log(word);
     return separa(word.substr(1));
 }
 
 console.log(separa(palabra));
 console.log("palabra");
 
 function reverseString(str) {  
   if ( str.length <= 1 ) {    
     return str;  
   }  
   return reverseString(str.substr(1)) + str[0];
 }
 
 console.log(reverseString(palabra));
 
 

console.log("---------------- Fin: subsets ----------------");