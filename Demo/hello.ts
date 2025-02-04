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