import { questionInt } from "readline-sync";

let bedrag: number = questionInt("Geef het bedrag in: ");
let interest: number = questionInt("Geef het interest percentage in: ");

let jaar_1: number = (bedrag*(1+interest/100)**1)
let jaar_2: number = (bedrag*(1+interest/100)**2)
let jaar_5: number = (bedrag*(1+interest/100)**5)

console.log(`Na 1 jaar heb je €${jaar_1.toFixed(2)}.`);
console.log(`Na 2 jaar heb je €${jaar_2.toFixed(2)}.`);
console.log(`Na 5 jaar heb je €${jaar_5.toFixed(2)}.`);