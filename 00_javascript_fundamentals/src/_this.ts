// --- EJERCICIO ------------------------------------------------------------------------

// ¿Cual es la salida de los logs en el siguiente código?
// Intenta razonar, no ejecutes la solución.

var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname());
var surnameFunction = person.wife.getSurname;
console.log(surnameFunction());
console.log(surnameFunction.call(person));

// --- RESPUESTA ------------------------------------------------------------------------
//console.log(person.wife.getSurname()); //Jiménez
//En este caso this se refiere a wife.

//var surnameFunction = person.wife.getSurname;
//console.log(surnameFunction()); //Pérez
//En este caso this se refiere a window

//console.log(surnameFunction.call(person)); //González
//En este caso this se refiere a person