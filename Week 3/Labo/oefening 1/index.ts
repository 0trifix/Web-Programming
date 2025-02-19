function printRecept(recept:iRecept){
  console.log(`Recept: ${recept.naam}`);
  console.log(`Beschrijving: ${recept.beschrijving}`);
  console.log(`Personen: ${recept.personen}`);
  console.log('Ingredienten:');
  for(let ingredient of recept.ingredienten){
    console.log(`- ${ingredient.hoeveelheid} ${ingredient.naam}`);
  }
  let totaalPrijs = recept.ingredienten.reduce((acc, ingredient) => acc + ingredient.prijs, 0);  
  console.log(`Totaalprijs: €${totaalPrijs}`);
}

interface iRecept{
  naam: string;
  beschrijving: string;
  personen: number;
  ingredienten: iIngredient[];
}

interface iIngredient{
  naam: string;
  hoeveelheid: string;
  prijs: number;
}

const lasagne: iRecept = {
  naam: 'Lasagne',
  beschrijving: 'Lekkere lasagne',
  personen: 4,
  ingredienten: [
    {naam:'lasagnevellen', hoeveelheid:'1 pak', prijs: 1.5},
    {naam: 'gehakt', hoeveelheid: '500g', prijs: 5},
    {naam: 'ui', hoeveelheid: '1', prijs: 0.5},
    {naam: 'teentje look', hoeveelheid: '1', prijs: 0.1}
  ]
}

printRecept(lasagne);
