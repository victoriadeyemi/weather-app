
var apiKey = "442aafde22061bca4e9fd0a2ffb55aff"
var todayDiv = document.querySelector("#today");
var forecastDiv = document.querySelector("#forecast");
var searchInput = document.querySelector("#search-input");
var searchBtn = document.querySelector("#search-button");
var searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var city = searchInput.value

    console.log(city);
    geoCode(city);
})

function geoCode(city) {
    var geoCodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
    fetch(geoCodeUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            var lat = data[0].lat;
            var lon = data[0].lon;
            currentWeather(lat, lon);
            fiveDayForecast(lat, lon);
        })
}

// function currentWeather(lat, lon){
//     var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
//     fetch(currentWeatherUrl)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data)
//     var name = document.createElement("h2");
//     name.textContent = data.name;
//     var temp = document.createElement("p");
//     temp.textContent = "Temperature: "+data.main.temp;




//     todayDiv.append(name, temp)
//     })
// }


// function fiveDayForecast(lat, lon){
//     var fiveDayForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
//     fetch(fiveDayForecastUrl)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data)
//     })
// }