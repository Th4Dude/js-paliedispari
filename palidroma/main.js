'use strict'



function validazione() {  

        /* totale lunghezza della parola */ 

    const lunghezza = string.length;  
  
    // loop per dividere la parola in due  

    for (let i = 0; i < lunghezza / 2; i++) {  
   
        if (string[i] !== string[lunghezza - 1 - i]) {  
            alert( 'non palidroma');  
        }  
    }  
    alert( 'parola palidroma');  
}  
  
// prompt 
 
const string = prompt('Inserisci una parola: ');  
  
const parola = validazione(string);  
  
console.log(parola);  