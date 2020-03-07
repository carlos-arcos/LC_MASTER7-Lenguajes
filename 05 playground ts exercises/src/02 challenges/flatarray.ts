console.log("************** CHALLENGE 01 *********************");

// --- EJERCICIO ------------------------------------------------------------------------

/*
1. Aplanando arrays
Apartado A
Dado un array multidimensional, construye una función inmutable que devuelva el mismo array aplanado, esto
es, con un único nivel de profundidad. Por ejemplo, el siguiente array:


quedaría aplanado como:

// [1, 2, 3, 4, 5, 6, 7, 8, 9]

*/
const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const flatArray = (args) => {
   const result = [];
   const temp = [...args];

   while(temp.length)
   {
      const last = temp.pop();
      if (Array.isArray(last)) {
         temp.push(...last);
      } else {
         result.push(last);
      }
   }

   return result.reverse();
 }

const result = flatArray(sample);
console.log(result);

/*
Apartado B
¿Has resuelto el ejercicio anterior? Suponiendo que los arrays multidimensionales del ejercicio anterior no
serán de naturaleza mixta, es decir, sus elementos siempre serán del mismo tipo ¿Serías capaz de proporcionar
un tipado adecuado a dicha función de aplanamiento?
*/

function flatArray2<T> (args: T[]): T[] {
   const result = [];
   const temp = [...args];

   while(temp.length)
   {
      const last = temp.pop();
      if (Array.isArray(last)) {
         temp.push(...last);
      } else {
         result.push(last);
      }
   }

   return result.reverse();
 }

 console.log(flatArray2(result));