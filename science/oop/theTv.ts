class Tv {
  brand: string;
  size: number;
  resolution: number;
  connections: string[];
  connectedTo?: string;

  constructor (b: string, s: number, r: number, c: string[], conTo?: string) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
    this.connectedTo = conTo;
  };

  turnOn() {
    console.log(`
      Bem vindo! Iniciando... ${this.brand} ${this.size} polegadas, ${this.resolution}p. 
      Tudo certo, estes são os canais disponíveis: ${this.connections}
      O que você gostaria de assistir hoje?`);
  };
};

const myTv = new Tv('SmartTv', 52, 1440, ['Telecine', 'HBO', 'Band']);

myTv.turnOn();
