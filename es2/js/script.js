// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// creo le variabile dove verranno generati sia il numero del giocatore che quello del computer:
let palyerNum = Math.floor(Math.random() * 5) + 1
console.log(`Numero player: ${palyerNum}`)
let computerNum = Math.floor(Math.random() * 5) + 1
console.log(`Numero computer: ${computerNum}`)
 if (palyerNum > computerNum) {
        console.log('Il player ha vinto')
 }
 else if (computerNum > palyerNum) {
        console.log('Il computer ha vinto')
 }
 else{
    console.log('pareggio')
 }