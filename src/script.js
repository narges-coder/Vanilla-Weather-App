function displayTempwrature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "fdof3aee8t54cb045d2c608a610c47ef";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Lisbon&key=fdof3aee8t54cb045d2c608a610c47ef&units=metric";

axios.get(apiUrl).then(displayTempwrature);
