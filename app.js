let now = new Date()
let dayTime = document.querySelector('#dayTime')
let hours = now.getHours()
let minutes = now.getMinutes()
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Ther', 'Fri', 'Sut']
let day = days[now.getDay()]
dayTime.innerHTML = `${day}, ${hours}:${minutes}`

function displayWeatherCondition(response) {
  document.querySelector('#city').innerHTML = response.data.name
  let temperature = Math.round(response.data.main.temp)
  let precipitation = response.data.main.pressure
  let humidity = response.data.main.humidity
  let wind = Math.round(response.data.wind.speed)
  let description = document.querySelector('#blockFirst')
  description.innerHTML = response.data.weather[0].description
  let temperatureElement = document.querySelector('#temperature')
  temperatureElement.innerHTML = `${temperature}℃`
  let temperaturePrecipitation = document.querySelector(`#precipitation`)
  temperaturePrecipitation.innerHTML = `Pressure: ${precipitation}`
  let temperatureHumidity = document.querySelector(`#humidity`)
  temperatureHumidity.innerHTML = `Humidity: ${humidity}`
  let temperatureWindy = document.querySelector(`#wind`)
  temperatureWindy.innerHTML = `Wind: ${wind} m/c`
  description.innerHTML = response.data.weather[0].description
}

function searchCity(city) {
  let apiKey = 'ab31ed8f52dd8f3f7aa256448f1618c4'
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(displayWeatherCondition)
}

function handleSubmit(event) {
  event.preventDefault()
  let city = document.querySelector('#search-text-input').value
  searchCity(city)
}

let form = document.querySelector('#searchForm')
form.addEventListener('submit', handleSubmit)
