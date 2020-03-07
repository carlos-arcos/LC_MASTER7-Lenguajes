console.log("---------------- Inicio: califications ----------------");

// --- EJERCICIO ------------------------------------------------------------------------

// [!] NOTA: Realiza primero el ejercicio "values".

// Dada la calificación de alumnos de una clase en forma de objeto como el siguiente:

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
  };
  
  // Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo
  // el sistema de calificación español:
  // Matrícula de Honor = 10
  // Sobresaliente = entre 9 y 10
  // Notable = entre 7 y 9
  // Bien = entre 6 y 7
  // Suficiente = entre 5 y 6
  // Insuficiente = entre 4 y 5
  // Muy deficiente = por debajo de 4
 
 function calculaMedia(values: number, items: number) {
    let nota: string;
    const media = values / items;
 
    if (media < 4)
       nota = "Muy deficiente";
    else if (media >=4 && media < 5)
       nota = "Insuficiente";
    else if (media >=5 && media < 6)
       nota = "Suficiente";
    else if (media >=6 && media < 7)
       nota = "Bien";
    else if (media >=7 && media < 9)
       nota = "Notable";
    else if (media >=9 && media < 10)
       nota = "Sobresaliente";
    else if (media === 10)
       nota = "Matrícula de Honor";
 
    return nota;
 }
 
 function printAverage(classResults) {
    const sumaNotas = Object.values(eso2o).reduce((a, b) => a + b);
    const alumnos = Object.keys(eso2o).length;
    
    return calculaMedia(sumaNotas, alumnos);
 }
 
 console.log(printAverage(eso2o));
 
 console.log("---------------- Fin: califications ----------------");
  
  // TIP: Rompe en tantas funciones auxiliares como necesites.
  // TIP: Utiliza el ejercicio "values" para extraer los valores de un objeto.
  // En Array.prototype también cuentas con otro método que podría serte de utilidad
  // para transformar un array a un único valor.
  