// Get the current date
const today = new Date();

// Get the year of the next Christmas
const nextChristmasYear = today.getMonth() === 11 && today.getDate() > 25
    ? today.getFullYear() + 1
    : today.getFullYear();

// Create a new Date object for the next Christmas
const nextChristmas = new Date(nextChristmasYear, 11, 25);

// Calculate the difference in milliseconds between today and next Christmas
const timeDiff = nextChristmas.getTime() - today.getTime();

// Calculate the number of days left until next Christmas
const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

// Output the result
console.log(`There are ${daysLeft} days left until next Christmas`);
