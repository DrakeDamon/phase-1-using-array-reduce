const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use the .reduce() method to sum up the battery counts
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries); // This will log the total number of batteries
