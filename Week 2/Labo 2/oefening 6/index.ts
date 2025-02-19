import { question } from "readline-sync";

let pokemon: string[] = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
];

let team: string[] = [];
for (let i = 0; i < pokemon.length; i++) {
  console.log(`${i}. ${pokemon[i]}`);
}

let input: string;
do {
  input = question("Welke pokemon wil je in je team [0-20]? ");
  if (input !== "STOP") {
    if (parseInt(input) < 0 || parseInt(input) > 20) {
      console.log("Deze pokemon ken ik niet.");

    }
    else{
      if (team.includes(pokemon[parseInt(input)])) {
        console.log("Deze pokemon zit al in je team.");
      }
      else {
        team.push(pokemon[parseInt(input)]);
      }
    }
  }
} while (input !== "STOP");

console.log("Jouw team van pokemon is: \n");
for (let i = 0; i < team.length; i++) {
  console.log(`${i+1}. ${team[i]}`);
}
