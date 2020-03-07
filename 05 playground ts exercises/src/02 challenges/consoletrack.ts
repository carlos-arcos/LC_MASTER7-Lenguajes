console.log("************** CHALLENGE 04 *********************");
/*
4. Trazas por consola
Ejecuta el siguiente código:
*/

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"])
];

const run = async triggers => {
  for(let i = 0; i< triggers.length; i++) {
    await triggers[i]();
  }

  console.log("first");
}

run(triggers);

/*
Las trazas resultante en consola son:

first;
second;
third;

El ejercicio consiste en reordenar las trazas para que se muestren invertidas, es decir, con el siguiente orden:

third;
second;
first;

Pero para ello tan solo podrás modificar la función run.
Queda prohibido modificar cualquier otro código asi como el contenido de triggers.
*/

