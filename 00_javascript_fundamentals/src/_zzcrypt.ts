// --- EJERCICIO ------------------------------------------------------------------------

// Descifra el siguiente secreto:
var secret = "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
/* var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm"; */

function decrypt(param: string) {
    const result = [];

    const plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
    const cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

    if (param !== undefined && param !== null && param.length > 0) {
        for (let i = 0; i < param.length; i++) {
            if (param[i] === " ") {
                result.push(param[i]);
            } else {
                result.push(getEquivalent(cipher, plain, param[i]));
            }
            
        }
    }

    return result.join("");
};

function getEquivalent(cipher, plain, value) {
    const i = cipher.indexOf(value);
    return plain.substr(i, 1);
}

console.log(decrypt(secret));