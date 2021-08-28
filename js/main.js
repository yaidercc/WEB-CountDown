const dia = document.getElementById("txt-dia");
const hora = document.getElementById("txt-hora");
const minuto = document.getElementById("txt-minuto");
const segundo = document.getElementById("txt-segundo");

let contDia = 8;
let contHora = 23;
let contMinuto = 55;
let contSegundo = 0;
const tiempo = setInterval(() => {
    if (contSegundo == 0) {
        contSegundo = 59;
        contMinuto--;
    }
    if (contMinuto == 0) {
        contMinuto = 59;
        contHora--;
    }
    if (contHora == 0) {
        contHora = 59;
        contDia--;
    }
    if (contDia == 0) {
        clearInterval(tiempo);
    }
    dia.innerHTML = `${contDia<10?"0"+contDia:contDia}`;
    hora.innerHTML = `${contHora<10?"0"+contHora:contHora}`;
    minuto.innerHTML = `${contMinuto<10?"0"+contMinuto:contMinuto}`;
    segundo.innerHTML = `${contSegundo<10?"0"+contSegundo:contSegundo}`;
    contSegundo--;
}, 1000)