// Spread operator with array
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log("More numbers:", moreNumbers);

const user = { name: "Eva", age: 20 }; 
const extendedUser = {
  ...user,
  course: "BSME"
};
console.log("Extended user:", extendedUser);


function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(1, 2));
console.log("Sum with more numbers:", sum(1, 2, 3, 4, 5));
