// n: name, a: age, f: furColor
const catFactory = function (n, a, f) {
  return {
    name: n,
    age: a,
    furColor: f,
    meow: function () {
      console.log('meow, my name is ' + this.name); // self
    }
  };
}

const cuteCats = [

    catFactory('Angel', 18, 'grey'),
    catFactory('Evil', 14, 'red'),
    catFactory('Meh', 12, 'white')

];

console.log( cuteCats );

// Prototypal inheritance YOU DO NOT NEED TO UNDERSTAND OR USE THIS YET
const Cat = function (n, a, f) {
  this.name = n;
  this.age = a;
  this.furColor = f;
  this.meow = function () {
    console.log('meow, my name is ' + this.name);
  }
}

const cat1 = new Cat('Breado', 1, 'pink');
const cat2 = new Cat('Horatio', 3, 'bald');

Cat.prototype.eat = function (food) {
  console.log('Yum I love to eat ' + food);
}
