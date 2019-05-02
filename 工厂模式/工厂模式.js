class Product {
  constructor(name) {
    this.name = name;
  }
  init() {
    console.log("init");
  }
  fn1() {
    console.log("fn1");
  }
}

class Creator {
  create(name) {
    return new Product(name);
  }
}

const creator = new Creator();
const p = creator.create("p1");
console.log(p);
p.init();
p.fn1();
