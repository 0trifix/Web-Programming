import { question } from "readline-sync";

let array:number[] = [];
let index:number = 0;
let gegevenWaarde = question("Geef de punten van student 1: ")

while (gegevenWaarde != "") {
  array[index] = +gegevenWaarde;
  index++;
  gegevenWaarde = question(`Geef de punten van student ${index+1}: `)
}
  
const aantal:number = array.length;
const totaal:number = array.reduce((accumulator, currentValue) => {return accumulator + currentValue},0);

const onvoldoendes:number[] = array.filter((n:number) => n < 10);

console.log(`Het gemiddelde van de punten is ${totaal/aantal}.`);
console.log(`Het aantal studenten met een onvoldoende is ${onvoldoendes.length}.`);
