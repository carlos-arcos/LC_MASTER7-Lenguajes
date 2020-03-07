console.log("---------------- Inicio: zip ----------------");

// --- EJERCICIO ------------------------------------------------------------------------

// Crea una función zipObject que acepte un array de claves como primer argumento y un array de valores como segundo argumento
// cuyo objetivo sea crear un objeto uniendo las claves con sus valores.
// Asumir que el array de claves tiene como mínimo la misma longitud que el de valores.

// Solución
function zipObject(keys, values) {
    let salida = {};  
    if (Array.isArray(keys) && Array.isArray(values)) {
      for (let i = 0; i < keys.length; i++) {
        if (values[i] !== undefined && values[i] !== null)
          salida[keys[i]] = values[i];
      }
    }
  
    return salida;
   }
   
   // Ejemplo
   console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])) // {spanish: "hola", english: "hi", french: "salut"}
   
   
   // --- CHALLENGE ------------------------------------------------------------------------
   // Si no hay valores suficientes para todas las claves evita que aparezcan como undefined
   
   // Ejemplo:
   console.log(zipObject(["spanish", "english", "french"], ["hola"])) // {spanish: "hola"}
   

console.log("---------------- Fin: zip ----------------");