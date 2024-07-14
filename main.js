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

  console.log("Nom : %s , age : %s , homme : %s", fName, age, homme);

  if (homme === true) {
    console.log("Sexe : homme"); 
  } else {
    console.log("Sexe : Femme");
  }
};
mySecondExo(); // call the function.

// ----------------- script 3 -----------------

// le module readline permet la lecture du flux d'entrée ligne par ligne.
const readline = require("readline");

const PUISSANCE = 2;

// créer une interface readline pour script 3 et s'assurer qu'elle est fermée avant de passer à autre chose.
const rl1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl1.question("Quelle est la puissance voulue ? ", (result) => {
  console.log(
    `${PUISSANCE} à la puissance ${result} = `,
    Math.pow(PUISSANCE, result)
  );
  rl1.close();

  // Script 4 commence ici, après que rl1 ait été fermée.
  const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl2.question("Quel est votre nom ? ", (answer1) => {
    rl2.question("Quel est votre prénom ? ", (answer2) => {
      rl2.question("Quel est votre age ? ", (answer3) => {
        console.log("---------------------------");
        console.log("---------BIENVENUE---------");
        console.log("---------------------------");

        console.log(`votre nom est : ${answer1}`);
        console.log(`Votre prénom est : ${answer2}`);
        console.log(`Vous avez ${answer3} ans`);
        rl2.close();
      });
    });
  });
});
