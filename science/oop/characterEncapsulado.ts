class CharacterEncapsulado {
  name: string;
  race: string;
  readonly height: number;
  private _age: number;
  private _weight: number;

  constructor (name: string, height: number, race: string, age: number, weight: number) {
    this.name = name;
    this.height = height;
    this.race = race;
    this._age = age;
    this._weight = weight;
  }

  getWeight() {
    return this._weight
  }

  getAge() {
    return this._age;
  }

  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue
    }
  }

  birthday() {
    this._age += 1
  }

  walk() {
    console.log("🚶‍♀️‍➡️🚶‍♀️‍➡️🚶‍♀️‍➡️🚶‍♀️‍➡️🚶‍♀️‍➡️🚶‍♀️‍➡️🚶‍♀️‍➡️");
  }

  attack() {
    console.log("🤺")
  }
}

const hero = new CharacterEncapsulado('Martius', 1.90, 'human', 24, 75);

// Alteração direta de variável pública
hero.name = 'Lucas'

// Acesso direto a variável pública
console.log(hero.name);

// Acesso a método público que manipula atributo privado
console.log(hero.getWeight());

// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(hero.getAge());

// Acesso a método público que manipula atributo privado
hero.birthday();
console.log(hero.getAge());

// Acesso a método com setter para manipular atributo privado como se fosse público
hero.age = 17;
console.log(hero.getAge());

// Leitura de atributo readonly
console.log(hero.height);

