function convertTemperature() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let inputUnit = document.getElementById('inputUnit').value;
    
    let celsius, fahrenheit, kelvin;

    if (isNaN(inputValue)) {
        clearOutputs();
        return;
    }

    switch(inputUnit) {
        case 'C':
            celsius = inputValue;
            fahrenheit = (inputValue * 9/5) + 32;
            kelvin = inputValue + 273.15;
            break;
        case 'F':
            celsius = (inputValue - 32) * 5/9;
            fahrenheit = inputValue;
            kelvin = (inputValue - 32) * 5/9 + 273.15;
            break;
        case 'K':
            celsius = inputValue - 273.15;
            fahrenheit = (inputValue - 273.15) * 9/5 + 32;
            kelvin = inputValue;
            break;
    }

    // Display the output
    document.getElementById('celsiusOutput').innerText = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('fahrenheitOutput').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('kelvinOutput').innerText = `Kelvin: ${kelvin.toFixed(2)} K`;

    // Show the output section
    document.getElementById('output').classList.add('visible');
}

function clearInputs() {
    document.getElementById('inputValue').value = '';
    document.getElementById('inputUnit').value = 'C';
    clearOutputs();
}

function clearOutputs() {
    document.getElementById('celsiusOutput').innerText = '';
    document.getElementById('fahrenheitOutput').innerText = '';
    document.getElementById('kelvinOutput').innerText = '';

    // Hide the output section
    document.getElementById('output').classList.remove('visible');
}
