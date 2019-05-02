function Student() {
  this.intro = "我是学生";
}
function Teacher() {
  this.intro = "我是老师";
}

function studentFactroy() {
  return new Student();
}
function teacherFactroy() {
  return new Teacher();
}

function userFactory(factory) {
  switch (factory) {
    case "teacher":
      return teacherFactroy;
    case "student":
      return studentFactroy;
    default:
      throw "没有这个工厂";
  }
}

const factory = userFactory("teacher");
const t = factory();
console.log(t);
