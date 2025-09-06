class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hi, I am " + this.name);
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

const student1 = new Student("Alex");
student1.sayHello(); // Hi, I am Alex
student1.study();    // Alex is studying
