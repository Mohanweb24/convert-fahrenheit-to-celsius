function convertFahrenheitToCelsius(f) {
	// Js temperature function.
	return(5/9) * (f-32);
}

// Input your Fahrenheit.
var input = prompt("Enter in a Fahrenheit temperature & I'll convert it to Celsius");

var display = convertFahrenheitToCelsius(input);

// Alert the result.
alert(display);