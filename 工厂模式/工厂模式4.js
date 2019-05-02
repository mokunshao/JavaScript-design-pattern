function People(name) {
  if (this instanceof People) {
    this.name = name;
  } else {
    return new People(name);
  }
}

const xh = new People("小红");
console.log(xh);

const xm = People("小明");
console.log(xm);
