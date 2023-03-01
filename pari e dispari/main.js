'use strict'

/* scelta utente pari o dispari */

const utentePrimaScelta = prompt('scegli pari o dispari');
console.log(utentePrimaScelta)

/* scelta numero utente */

const utenteSecondaScelta = Number(prompt('scegli un numero da 1 a 5'));
console.log(utenteSecondaScelta)

/* funzione numero random dal computer */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let numeroRandom = getRndInteger(1,5);

/* somma */

let totale = (utenteSecondaScelta + numeroRandom);
console.log(totale)

/* funzione */

function pariodispari(nonsisa) {
    return nonsisa % 2 === 0;
}

let pari = pariodispari(totale);

if ((utentePrimaScelta === "pari" && pari) || (utentePrimaScelta === "dispari" && !pari)) {
    console.log("scelta giusta il numero e' " + utenteSecondaScelta + ", il numero del computer e' " + numeroRandom + ", totale " + totale);
} else {
    console.log("scelta sbagliata il numero e' " + utenteSecondaScelta + ", il numero del computer e' " + numeroRandom + ", totale " + totale);
}





