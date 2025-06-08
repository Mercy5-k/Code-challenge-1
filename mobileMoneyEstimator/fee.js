//Function to estimate mobile money transaction fee
function estimateTransactionFee(amountToSend) {
    const feePercent = 0.015; //1.5%
    let fee = amountToSend* feePercent;

    //Apply minimum and maximum fee limits 
    if (fee<10) {
        fee = 10;
    }else if (fee > 70){
        fee = 70;
    }
    const total = amountToSend + fee;

    // Print fee breakdown
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES${fee}`);
    console.log(`Total amount to be debited: KES ${total}`);
    console.log("\nSend Money Securely!");
}

//Prompt user and convert input to number 
const amount = parseFloat(prompt("Unatuma Ngapi? (KES):"));
estimateTransactionFee(amount);