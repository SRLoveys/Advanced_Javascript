const miles = parseFloat(prompt("Enter the number of miles traveled:"));
const speed = parseFloat(prompt("Enter your speed in miles per hour:"));

if (isNaN(miles) || isNaN(speed) || miles <= 0 || speed <= 0) {
    alert("Please enter valid numbers for miles and speed.");
} else {
    const time = miles / speed;

    const hours = Math.floor(time);
    const minutes = Math.round((time % 1) * 60);

    // Show result
    alert(`Distance: ${miles} miles \nSpeed: ${speed} MPH \nTravel time: ${hours} hours, ${minutes} minutes`);
}