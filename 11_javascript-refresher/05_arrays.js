let foods = ["adobo", "sinigang", "carbonara", "buldak"];
foods.push("sisig"); 
foods.shift();

for (let food of foods) {
  console.log(food);
}

let likedFoods = foods.map(f => `I like ${f}`);
console.log(likedFoods);
