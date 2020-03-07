// --- EJERCICIO ------------------------------------------------------------------------

// Empleando el concepto de closure, emula el comportamiento de 2 dados.
// Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula
// junto a estos datos métodos que implementen la funcionalidad de:
// - Hacer reset: poner a undefined o null ambos resultados.
// - Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
// - Imprimir el resultado por consola. Ten en cuenta lo siguiente:
//   - Informa al usuario que debe tirar primero cuando corresponda.
//   - Si saca doble 6, ¡dale un premio!

function dicesPlay() {
    var d1 = undefined, d2 = undefined;

    return {
        reset: function() {
            d1 = undefined;
            d2 = undefined;
        },
        lanzar: function() {
            d1 = getSide();
            d2 = getSide();
        },
        print: function() {
            if (d1 === undefined && d2 === undefined) {
                console.log("Lance los dados...");
            }else if (d1 === 6 && d2 === 6) {
                console.log("Premio !!! d1: " + d1 + " d2: " + d2);
                d1 = undefined;
                d2 = undefined;
            } else {
                console.log("Resultado, d1: " + d1 + " d2: " + d2);
                d1 = undefined;
                d2 = undefined;
            }
        }
    }

    function getSide() {
        return Math.floor(Math.random() * 6) + 1
    }
}

var dices = dicesPlay();
dices.print();
dices.lanzar();
dices.print();
dices.lanzar();
dices.print();
dices.lanzar();
dices.print();
