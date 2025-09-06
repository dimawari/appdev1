const person = {
  name: "Eva", 
  age: 20 
};

const hobbies = ["reading", "writing", "cooking"]; 

const [firstHobbies] = hobbies;

function printName({ name }) {
  console.log(name);
}

printName(person); 
console.log("First hobby:", firstHobbies); 