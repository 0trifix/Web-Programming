import { questionInt } from "readline-sync";

let minuten : number = questionInt("Geef het aantal minuten in: ");
let uren : number = Math.floor(minuten/60);
let overigeMinuten : number = minuten%60;

console.log(`Dit is ${uren} uur en ${overigeMinuten} minuten`);