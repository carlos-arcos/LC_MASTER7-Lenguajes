console.log("************** DELIVERABLE 05 *********************");

// --- EJERCICIO ------------------------------------------------------------------------

// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos
// insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá
// incrementando conforme vayamos jugando.
// Cuando se llame al método play el número de monedas debe incrementar de forma automática y debe generar tres
// booleanos aleatorios. En caso de que los tres booleanos sean true debe un mensaje por consola:
// "Congratulations!!!. You won <número de monedas> coins!!" y reiniciar las monedas almacenadas,
// ya que las hemos conseguido y han salido de la máquina
// En caso contrario deberá mostrar otro mensaje: "Good luck next time!!"

// Ejemplo de uso:
class SlothMachine {
  _coinCount: number = 0;
  _message: string;

  play() {
     this._coinCount ++;

     if (this.spinRoulette()) {
        this._message = "Congratulations!!!. You won " + this._coinCount + " coins!!";
        this._coinCount = 0;
     } else {
        this._message = "Good luck next time!!";
     }

     console.log(this._message);
  }

  private spinRoulette(): boolean {
     let roul1: boolean = !Math.round(Math.random());
     let roul2: boolean = !Math.round(Math.random());
     let roul3: boolean = !Math.round(Math.random());

     if (roul1 && roul2 && roul3)
        return true;
     else
        return false;
  }
}
 
 const machine1 = new SlothMachine();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 machine1.play();
 