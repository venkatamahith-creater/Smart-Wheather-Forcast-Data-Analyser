function generateWeather() {

    // Simulated random weather data
    let temperature = Math.floor(Math.random() * 15) + 20;
    let humidity = Math.floor(Math.random() * 50) + 40;
    let rainfall = Math.floor(Math.random() * 20);
    let wind = Math.floor(Math.random() * 20) + 5;

    document.getElementById("temp").innerHTML = temperature + " °C";
    document.getElementById("humidity").innerHTML = humidity + " %";
    document.getElementById("rainfall").innerHTML = rainfall + " mm";
    document.getElementById("wind").innerHTML = wind + " km/h";

    // Simple analysis logic
    let trend = temperature > 30 ? "High Heat Alert" :
                rainfall > 15 ? "Heavy Rain Expected" :
                "Normal Weather Conditions";

    let risk = (temperature > 32 || rainfall > 18) ? "High Risk" :
               (temperature > 28 || rainfall > 10) ? "Moderate Risk" :
               "Low Risk";

    document.getElementById("analysisData").innerHTML = `
        <li>Average Temperature: ${temperature} °C</li>
        <li>Trend: ${trend}</li>
        <li>Risk Level: ${risk}</li>
    `;
}