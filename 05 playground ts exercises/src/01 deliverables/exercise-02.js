console.log("************** DELIVERABLE 02 *********************");

const data1 = [1,2,3];
const data2 = [4,5,6];
const data3 = [7,8,9];

// A. Implementa una función concat, tal que, dados 2 arrays como entrada, devuelva la
// concatenación de ambos. Utiliza rest / spread.
// TIP: Se hace en 1 línea. No utilices el método Array.prototype.concat().
const concat = (a, b) => {
    return [...a, ...b];
 };
 console.log(concat(data1, data2));
 
 console.log("Opcional ------------------------------------------");
 // B. Repite el ejercicio anterior suponiendo cualesquiera arrays de entrada (no te limites
 // solamente a 2).
 const concatMulti = (...params) => {
    var solucion1 = Array.prototype.concat(...params);
 
    var solucion2 = params.reduce(function(prev, next) {
       return [...prev, ...next];
    });
 
    return solucion2;
 }  
 console.log(concatMulti(data1, data2, data3));
