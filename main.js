// ----------------- script 1 -----------------
let a = 1;
let b = 5;
let temp;

temp = a; // temp vaut 1.
a = b; // a vaut 5.
b = temp; // b vaut 1 à cause de temp qui vaut 1.

console.log("* --------- Script 1 --------- *");
console.log("A:", a, "B:", b);

// ----------------- script 2 -----------------
const mySecondExo = () => {
    let fName = "toto";
    let age = 30;
    let homme = true;

    console.log("* --------- Script 2 --------- *");
    // 
    console.log("Nom : %s , age : %s , homme : %s", fName, age, homme);

    if(homme === true) {
        console.log("Sexe : homme" );
    } else {
        console.log("Sexe : Femme");
    }
}
mySecondExo(); 

// ----------------- script 3 -----------------
// le module readline permet la lecture du flux d'entrée ligne par ligne.
const readline = require('node:readline');

const rl = readline.createInterface({ // la méthode de l'interface prend deux arguments. 
    input: process.stdin, // le premier sera pour l'entrée standard 
    input: process.stdout, // et le second pour la lecture de la sortie. 
});