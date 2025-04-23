import './style.css'

const ulRef = document.querySelector('ul')!;

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface ResponseFromAPI {
  drinks: Cocktail[];
}

async function getLemonCocktail():Promise<ResponseFromAPI> {
  console.log('Fetching data');
  const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon");
  const data = await response.json();
  return data;
}

async function main() {
  const data = await getLemonCocktail();
  ulRef!.innerHTML = data.drinks.map(Cocktail => `<li>
                                     <div>
                                     <img src="${Cocktail.strDrinkThumb}" alt="${Cocktail.strDrink}" />
                                     </div>
                                     <p>${Cocktail.strDrink}</p>
                                     </li>`).join('');
}

main();
