const temperature = 23.6;
const windSpeed = 4;

// Calculate the windchill factor//
function calculateWindChill(temp, wind) {
  // Conditions to check if windchill calculation is applicable//
  const isMetric = true; // Set to false for Imperial (English) units//
  const isWindChillApplicable = (isMetric && temp <= 10 && wind > 4.8) || (!isMetric && temp <= 50 && wind > 3);

  if (isWindChillApplicable) {
    // Windchill formula for Metric units (°C)//
    const windChillMetric = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    return isMetric ? windChillMetric.toFixed(1) : "N/A";
  } else {
    return "N/A";
  }
}

// Display the windchill factor in the "Weather" section//
const windChillElement = document.getElementById("windChill");
const windChillFactor = calculateWindChill(temperature, windSpeed);
windChillElement.textContent = `Wind Chill: ${windChillFactor}`;


// DATE AND TIME 
// 
const currentYear = new Date().getFullYear();
document.getElementById('copyright-year').textContent = currentYear;


const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;
