class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

class Shark extends Animal {
    constructor(name, age, status, legs, species) {
      super(name, age, status);
      this.legs = 0;
      this.species = "shark"
      this.status = status
    }
  }
  const Shark1 = new Shark("Sharky", 15, "Predator", undefined, undefined)
  console.log(Shark1)
  class Cat extends Animal {
    constructor(name, age, status, legs, species){
      super(name, age, status, legs, species);
      this.legs = 4;
      this.species = "cat";
      this.status = status;
      
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
  }
  const Cat1 = new Cat("Kitty", 2, "Prey")
  console.log(Cat1)
  Cat1.introduce();
  
  class Dog extends Animal {
    constructor(name, age, status, master){
      super(name, age, status);
      this.legs = 4
      this. species = "dog"
      this.status = status
      this.master = master
    }
    greetMaster() {
      return `Hello ${this.master}`;
    }
  }
  const Dog1 = new Dog("Diamond", "4", "prey", "Diondra");
  console.log(Dog1.greetMaster());
  console.log(Dog1)