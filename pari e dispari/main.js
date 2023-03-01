'use strict'




function pariedispari (){
    const utentePrimaScelta = prompt('scegli pari o dispari');
    console.log(utentePrimaScelta)
    const utenteSecondaScelta = Number(prompt('scegli un numero da 1 a 5'));
    console.log(utenteSecondaScelta)
    let numeroRandom = Math.floor(Math.random() * 5) + 1;
    console.log(numeroRandom)
    let totale = (utenteSecondaScelta + numeroRandom);
    console.log(totale)
    return totale
}

pariedispari ();

function pariedispari2 (){


}





