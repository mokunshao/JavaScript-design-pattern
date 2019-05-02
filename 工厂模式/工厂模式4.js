function People(name) {
  if (this instanceof People) {
    this.name = name;
  } else {
    return new People(name);
  }
}

const xm = People('小明');
console.log(xm)