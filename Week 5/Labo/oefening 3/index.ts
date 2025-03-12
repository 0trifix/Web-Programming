import { randomInt } from "crypto";
const readlineSync = require('readline-sync');
const slothLog = require('sloth-log');


function repeatWords(word: string, times: number, delimiter: string): string {
  let result = '';
  for (let i = 0; i < times; i++) {
    result += word + delimiter;
  }
  return result;
}

let input: string;
let punctuation: string[] = ['. ', '! ', '? '];
let punctuationIndex: number;
let times: number;

do {
  input = readlineSync.question('> ', null);
  punctuationIndex = randomInt(0, punctuation.length);
  times = randomInt(1, 10);
  slothLog.log(repeatWords("Meow", times, ' ') + punctuation[punctuationIndex], {speed: 500, maxWordsAtOnce: 3 });
 
} while (input != "Bye");
