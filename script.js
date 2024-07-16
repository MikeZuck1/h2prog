// ----------------- script 4 -----------------
const readline = require('readline'); // importe le module readline.

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Quelle table de multiplication voulez vous afficher ? ', (res) => {
    // création de la table de multiplication. 
    for (let i = 1; i <= 10; i++) {
        const result = i * res;
        console.log(``);
    }
    rl.close();
});