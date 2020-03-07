console.log("************** CHALLENGE 02 *********************");
/*
2. Acceso en profundidad
Apartado A

Implementa un mecanismo deepGet para acceder en profundidad a objetos anidados, de modo que podamos recuperar una propiedad 
en cualquiera de sus niveles. Mira a continuación el comportamiento que debería seguir:
*/
myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      }
    }
  }
};

const deepGet = (obj, ...args) => {
  let item = obj;

  let i = 0;
  while(item && i < args.length) {
    item = item[args[i++]];
  }
  
  /*
  for (let param of args) {
    if(item[param] !== null && item[param] !== undefined) {
      item = item[param];
    } else {
      return undefined; // no podemos avanzar porque la propiedad no existe
    }
  }
  */

  return item;
};

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));  // {a: 1, b: {...}}


console.log('------ Apartado B ------');
/*
Ahora implementa el complementario, deepSet, que permita guardar valores en profundidad. 
Su comportamiento debería ser:
*/

const myObject2 = {};

const deepSet = (value, obj, ...args) => {
  for (let i = 0; i < args.length; i++) {
    const prop = args[i];

    if(i === args.length - 1) {
      obj[prop] = value;
    } else {
      if (obj[prop] === undefined || obj[prop] === null) {
        obj[prop] = {}
      }
      obj = obj[prop]
    }
  }
};

deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2));  // {a: { b: 1}}
deepSet(2, myObject2, "a", "c");
console.log(JSON.stringify(myObject2));  // {a: { b: 1, c: 2}}
deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2));  // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2));  // Do nothing // {a: 3}