class Dog {
  constructor(name, size, age, race, color) {
    this.name = name;
    this.size = size;
    this.age = age;
    this.race = race;
    this.color = color;
  }

  eat() {
    console.log(`${this.name} mange ses croquettes !`);
  }
  sleep() {
    console.log(`${this.name} dort paisiblement !`);
  }
  sit() {
    console.log(`${this.name} s'assoit !`);
  }
  run() {
    console.log(`${this.name} s'amuse dans le jardin !`);
  }
}

const myDog = new Dog('Buddy', 5, 2, 'Bulldog', 'Brun');
myDog.run(); // affiche "Buddy s'amuse dans le jardin !"
