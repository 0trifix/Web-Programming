//function add(getal1:number, getal2:number) 
//{
// return getal1 + getal2
//}
//
//function substract(getal1:number, getal2:number) {
//  return getal1 - getal2
//}
//
//function multiply(getal1:number, getal2:number = 1) {
//  return getal1 * getal2
//}
//
//function divide(getal1:number, getal2:number = 1) {
//  return getal1 / getal2
//}
const add = (getal1:number , getal2:number) => getal1+getal2;
const substract = (getal1:number , getal2:number) => getal1-getal2;
const multiply = (getal1:number , getal2:number = 1) => getal1*getal2;
const divide = (getal1:number , getal2:number = 1) => getal1/getal2;

console.log(divide(multiply(add(4,5), substract(6,3)),2))
