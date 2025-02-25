import { title } from "process";

interface Movie
{
  title: string;
  year: number;
  actors: string[];
  metascrore: number;
  seen: boolean;
}

myFavoriteMovie: Movie = {
  title: "Cars",
  year: 2006,
  actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
  metascrore: 73,
  seen: true
};

myWorstMovie: Movie = {
  title: "The Room",
  year: 2003,
  actors: ["Tommy Wiseau", "Juliette Danielle", "Greg Sestero"],
  metascrore: 9,
  seen: false
};
