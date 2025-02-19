class Character {
  name: string;
  height: number;
  race: string;

  constructor (n: string, h: number, r: string) {
    this.name = n;
    this.height = h;
    this.race = r;
  }

  walk() {
    console.log("🚶‍♀️‍➡️🚶‍♀️‍➡️🚶‍♀️‍➡️🚶‍♀️‍➡️🚶‍♀️‍➡️🚶‍♀️‍➡️🚶‍♀️‍➡️");
  }

  attack() {
    console.log("🤺")
  }
}

const hero1 = new Character('Martius', 1.90, 'human');

const hero2 = new Character('??', 1.90, 'elf');

console.log(hero1.name, hero1.race, hero1.height);

console.log(hero2.name, hero2.race);

console.log(hero1.attack, `${hero1.name}  atacou o ${hero2.name}`);
