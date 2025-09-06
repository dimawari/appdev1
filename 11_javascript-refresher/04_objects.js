let aboutMe = {
  name: "Eva",
  age: 20,
  course: "BSIS",
  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
};

console.log(aboutMe.introduce());
