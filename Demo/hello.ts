console.log("Hello World");

let firstName = "Daoud"; //Javascript
var wrong = "Gebruik dit nooit"; //Deze manier gebruiken we niet meer, we gebruiken let

let firstName2: string = "Daoud"; //Typescript
let amount: number = 100;
let lastName: string;
lastName = "El Hachimi";
lastName = "Bok";

const test:string = "Dit is een test"; //Deze variabele kan niet meer veranderd worden, je moet hem bij het aanmaken ook direct een waarde geven

/*
Type variabelen:
- number -> alle soort getallen, dus ook komma getallen
- string -> een lijst van karakters
- boolean -> True/False
- any -> hier kan je eendert wat insteken (niet gebruiken)
*/

let unset: string; //Deze zou "undefined" terug geven omdat er geen waarde is gegeven

let test1: number = 1/0; //"infinity"
let test2: number = "getal"/2; //"NaN"

let greeting: string = "Mijn naam is " + firstName;
let greeting1: string = `Mijn naam is ${firstName}`;

console.log(firstName.length);
console.log(firstName[1]);
console.log(firstName.charAt(1)); //het verschil tussen de 2 is dat als je buiten de index gaat de bovenste je "undefined" geeft en de onderste geeft een lege waarde

console.log(firstName.substring(3,6)); //Geeft een deel van de string vanaf de eerste waarde tot de 2de

console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());



let lightstatus : "ON" | "OFF"; //Hiermee maak je een nieuwe soort variabele
lightstatus = "ON";
lightstatus = "BROKEN"; //Werkt niet

type LightStatusType = "ON" | "OFF" | "BROKEN"; //Hiermee maak je een nieuw datatype die vaker kan worden gebruikt.
let lightstatus2: LightStatusType

// Datatypes beginnen met een hoofdletter, varabelen met een kleine

let x1: number = Math.random() //Geeft een getal tussen 0 en 0.999999
let x2: number = Math.floor(Math.random()*10+1);
let x3: number = Math.round(Math.random()*9+1); //2 manieren om een getal tussen 1 en 10 te krijgen, bovenste is accurater

let aanwezigInDeLes: boolean = true;

if (aanwezigInDeLes)
{
    console.log("Goede examen")
}
else
{
    console.log("Moeilijk examen")
}

let counter: number = 0;
if (counter == 0)
{

}
else if (counter == 1)
{

}

switch (counter) {
    case 0:
        
        break;

    default:
        break;
}

let index: number = 0;

for (index; index < 10; index++) {
    console.log(index);
    
}

index = 0;
while (index<10)
{
    if (index == 5)
    {
        break;
    }
    index++;
}

index = 0;
do
{
    console.log(index);
    index++;
}while (index<10);

import * as readline from 'readline-sync'

let myname: string = readline.question("Wat is je naam?")
console.log(`Dag ${myname}`)

npn init -y && tsc --init && npm i -D @types/nodes