console.log("************** DELIVERABLE 03 *********************");

// A. Implementa una función clone que devuelva un objeto clonado a partir de otro:
function clone(source) {
    let result = {};

    for (let prop in source) {
        result[prop] = source[prop];
    }

    return result;
}

  // B. Dados dos objetos cualesquiera, implementa una función "merge" que mezcle uno sobre otro.
  // El objeto resultante debe ser la mezcla de las propiedades del objeto "source" sobre las
  // del objeto "target".
  // TIP: Usa la función "clone" del apartado A.
  
function merge(source, target) {
  let result = clone(source);
  for (let prop in target) {
    if (!result.hasOwnProperty(prop)) {
      result[prop] = target[prop];
    }
  }

  return result;
}
  
  // Por ejemplo, dados estos 2 objetos:
  var a = {name: "Maria", surname: "Ibañez", country: "SPA"};
  var b = {name: "Luisa", age: 31, married: true};
  // El resultado de mezclar a sobre b sería:
  console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

  