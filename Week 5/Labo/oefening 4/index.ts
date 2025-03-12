import chalk from 'chalk';
import {rainbow} from "rainbow-colors-array-ts";

let terminal_height = process.stdout.rows;
let terminal_width = process.stdout.columns;

const colors = rainbow(terminal_height).map(color => color.hex);;

for (let i = 0; i < terminal_height; i++) {
  console.log(chalk.bgHex(colors[i])(Array(terminal_width).fill(' ').join('')));
}
