let hobbies = ["reading", "cooking", "gaming", "writing"];
hobbies.map(h => console.log(h));

let student = { name: "Eva", age: 20 };
let { name, age } = student; 

let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr);
