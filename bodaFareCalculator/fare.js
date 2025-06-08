//function to calculate the boda boda fare based on distance travelled 
function calculateBodaFare(distanceInKm) {
    const baseFare = 50; //Fixed base fare in KES
    const chargePerKm =15; //Fixed per kilometer inKES
    const distanceCharge = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceCharge;


//Print fare details
console.log(`Uko kwote? Io ni ${distanceInKm}km:`);
console.log(`Ukikalia PikiPiki: KES ${baseFare}`);
console.log(`Mpaka Uko: KES ${distanceCharge}`);
console.log(`Total: KES ${totalFare}`);
console.log("\nPanda PikiPiki");
}

//Prompt user and convert input to number
const distance = parseFloat(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
calculateBodaFare(distance);


