console.log("---------------- Inicio: reminder ----------------");
// --- EJERCICIO ------------------------------------------------------------------------

// El siguiente código implementa una sencilla clase que actúa como reminder,
// es decir, dado un mensaje, lo muestra por consola transcurrido (al menos)
// el tiempo indicado por el usuario.

class Reminder {
  text: string;
  constructor(text) {
     this.text = text;
  }

  remindMe(delay) {
     setTimeout(function () {
        console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
     }.bind(this), delay * 1000);
  }
}

// Te animamos a que crees una nueva instancia de reminder y la utilices.
// Escribe el mensaje que tu quieras y añade unos pocos segundos de retardo.
// Comprueba la salida por consola .. algo no funciona como esperábamos ¿verdad?
// ¿Sabrías decirnos que está pasando aquí? ¿Cómo lo arreglarías?

var reminder = new Reminder('pacopepe');
reminder.remindMe(2);
console.log('¡¡ LA SOLUCIÓN EXPLICADA EN LOS COMENTARIOS!!');

/* El problema es que desde dentro de setTimeout() el contexto de this es distinto que
  desde remindMe() y por eso aparece undefined.
  Una posible solución podría ser esta:

  remindMe(delay) {
     var self = this;
     setTimeout(function () {
        console.log(`Your reminder after ${delay} seconds is: ${self.text}`);
     }, delay * 1000);
  }

  Y otra utilizando bind()

  remindMe(delay) {
     setTimeout(function () {
        console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
     }.bind(this), delay * 1000);
  }

*/
console.log("---------------- Fin: reminder ----------------");