console.log("---------------- Inicio: value ----------------");

// --- EJERCICIO ------------------------------------------------------------------------

// Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:

// Solución
function values(obj) {
    const valores = [];
     for (const prop in obj) {
       valores.push(obj[prop]);
     }
     return valores;
  }
   // Ejemplo:
   console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]
   
   console.log('---CHALLENGE');
   // --- CHALLENGE ------------------------------------------------------------------------
   
   // Evita añadir las propiedades heredadas en caso de ser instancia de una clase:
   // Ejemplo:
  function Person(name) {
     this.name = name
  }
   
  Person.prototype.walk = function() {
     console.log("I'm walking");
  };
   
  var john = new Person("John");
  
  function values2(obj) {
    return Object.values(obj);
  }
  
  console.log(values2(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]
  
   
   

console.log("---------------- Fin: value ----------------");