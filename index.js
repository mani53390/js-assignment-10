// Ask the user for the conversion choice
let choice = prompt("Enter 1 to convert from Celsius to Fahrenheit, or 2 to convert from Fahrenheit to Celsius.");

// Check the user's choice and perform the conversion
if (choice === "1") {
    // Convert from Celsius to Fahrenheit
    let celsius = prompt("Enter the temperature in Celsius:");
    let fahrenheit = (celsius * 9/5) + 32;
    alert(`${celsius}°C is ${fahrenheit}°F.`);
} else if (choice === "2") {
    // Convert from Fahrenheit to Celsius
    let fahrenheit = prompt("Enter the temperature in Fahrenheit:");
    let celsius = (fahrenheit - 32) * 5/9;
    alert(`${fahrenheit}°F is ${celsius}°C.`);
} else {
    alert("Invalid choice.");
}

