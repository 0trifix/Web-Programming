import { questionInt } from "readline-sync";

const aantalGetallen:number = questionInt("Hoeveel getallen wil je optellen? ");
let arrayVanGetallen:number[] = [];
for (let index = 0; index < aantalGetallen; index++)
{
  arrayVanGetallen[index] = questionInt(`Geef getal ${index+1} in: `);
}

const som = arrayVanGetallen.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`De som van de getallen is ${som}.`)
