console.log("************** DELIVERABLE 01 *********************");
const data = [1,2,3,4,5];


console.log("---------------- Inicio: Head ----------------");
// Implementa una función head (inmutable), tal que, dado un array como entrada
// extraiga y devuelva su primer elemento. Utiliza destructuring.
const head = (param) => {
   const [uno, ...resto] = param;
   return uno;   
};
console.log(head(data));

console.log("---------------- Fin: Head ----------------");

console.log("---------------- Inicio: Tail ----------------");
// Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. Utiliza rest operator.
const tail = (param) => {
   const [uno, ...resto] = param;
   return resto;   
};
console.log(tail(data));

console.log("---------------- Fin: Tail ----------------");

console.log("---------------- Inicio: Init ----------------");
// Implementa una función init (inmutable), tal que, dado un array como entrada
// devuelva todos los elementos menos el último. Utiliza los métodos que ofrece
// Array.prototype.
const init = (param) => {
   return param.slice(0,-1);
};
console.log(init(data));

console.log("---------------- Fin: Init ----------------");

console.log("---------------- Inicio: Last ----------------");
// Implementa una función last (inmutable), tal que, dado un array como entrada
// devuelva el último elemento.
const last = (param) => {
   return param[param.length -1];
};
console.log(last(data));

console.log("---------------- Fin: Last ----------------");