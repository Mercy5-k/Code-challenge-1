// Function to calculate chai ingredients based on number of cups
function calculateChaiIngredients(numberOfCups) {
    // Calculate each ingredient using the recipe
const water = numberOfCups * 200; // in ml
const milk = numberOfCups * 50; // in ml
const teaLeaves = numberOfCups * 1; // in tablespoons
const sugar = numberOfCups * 2; // in teaspoons

// Print results to console
console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
console.log(`Water:${water} ml`);
console.log(`Milk: ${milk} ml`);
console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
console.log(`Sugar (Sukari): ${sugar} teaspoons`);
console.log("\nEnjoy your Chai Bora!");    
}

//Prompt user and convert input to number
const cups = parseInt(prompt("Karibu! How many cups of Chai Bora would you like to make?"))
calculateChaiIngredients(cups);

