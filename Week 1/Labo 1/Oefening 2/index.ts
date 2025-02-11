import { questionInt } from "readline-sync";
import { questionFloat } from "readline-sync";

let gewicht = questionInt("Geef je gewicht in (in kg): ");
let lengte = questionFloat("Geef je lengte in (in m): ");

let bmi = gewicht/lengte**2;
console.log(`Je BMI is ${bmi.toFixed(2)}.`);