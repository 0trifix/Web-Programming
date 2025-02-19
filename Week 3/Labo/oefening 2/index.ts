type Brandstof = 'Benzine' | 'Elektrisch' | 'Geen';
class Voertuig {
  #naam: string;    
  #brandstof: Brandstof;
  
  constructor(naam: string, brandstof: Brandstof){
    this.#naam = naam;
    this.#brandstof = brandstof;
  }

  rijden(){
    console.log(`${this.#naam} rijdt op de weg met brandstof ${this.#brandstof}`);
  }
}

class Auto extends Voertuig{
  constructor(naam: string, brandstof: Brandstof){
    super(naam, brandstof);
  }

  rijden(){
    super.rijden();
  }
}

class Fiets extends Voertuig{
  constructor(naam: string, brandstof: Brandstof){
    super(naam, );
  }

  rijden(){
    console.log(`${this.#naam} rijdt op het fietspad met brandstof ${this.#brandstof}`);
  }
}
