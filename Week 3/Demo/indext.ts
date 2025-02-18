function Planet() {
  
}
Planet.prototype.naam = "Aarde";
console.log(Planet.prototype.naam); // Aarde
Planet.prototype.Breedte = 100;
console.log(Planet.prototype); // { naam: 'Aarde', Breedte: 100 }

const earth = {
  naam: "Aarde",
  Breedte: 6371
}
console.log(earth.naam); // Aarde

interface StellarObject {
  naam: string;
  Breedte: number;
}

const earth2: StellarObject = {
  naam: "Aarde",
  Breedte: 6371,
  hasMoons: true // Error: Property 'hasMoons' does not exist on type 'StellarObject'
}
console.log(earth.naam); // Aarde


