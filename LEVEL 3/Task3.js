function convertTemperature() {
    // Get user input values
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect").value;
  
    // Check if temperature input is a number
    if (isNaN(temperatureInput)) {
      alert("Please enter a valid temperature!");
      return;
    }
  
    // Convert temperature based on selected unit
    var convertedTemperature;
    var convertedUnit;
  
    if (unitSelect === "celsius") {
      convertedTemperature = (temperatureInput - 32) * (5 / 9);
      convertedUnit = "Celsius";
    } else if (unitSelect === "fahrenheit") {
      convertedTemperature = (temperatureInput * (9 / 5)) + 32;
      convertedUnit = "Fahrenheit";
    } else if (unitSelect === "kelvin") {
      convertedTemperature = parseFloat(temperatureInput) + 273.15;
      convertedUnit = "Kelvin";
    }
  
    // Display the converted temperature
    var resultContainer = document.getElementById("resultContainer");
    var convertedTemperatureDisplay = document.getElementById("convertedTemperature");
    convertedTemperatureDisplay.textContent = "Converted Temperature: " + convertedTemperature.toFixed(2) + " " + convertedUnit;
    resultContainer.style.display = "block";
  }
  