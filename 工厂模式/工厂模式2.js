class Student {
  constructor(name, courses) {
    this.name = name;
    this.courses = courses;
  }
}

function factory(name, type) {
  switch (type) {
    case "文科":
      return new Student(name, ["政治", "历史", "地理"]);
    case "理科":
      return new Student(name, ["生物", "物理", "化学"]);
    default:
      throw "没有这个专业，别瞎填";
  }
}

const xm = factory("小明", "文科");
const xh = factory("小红", "理科");

console.log(xm);
console.log(xh);
