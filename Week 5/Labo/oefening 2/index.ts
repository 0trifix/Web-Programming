import {say as cowsay} from 'cowsay';
import { question } from 'readline-sync';

console.log("Geef een tekst in:");
let text = question();
console.log(cowsay({ text }));
