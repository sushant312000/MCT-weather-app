'use strict'
let weather = {
    apiKey: "7deb6d6d77e4d5caf850f87d002a29e7",
    fetchWeather: function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`).then((Response) => Response.json()).then((data) => this.displayWeather(data));
    },

    displayWeather: function(data){
        const{name} = data;
        const{icon, description} = data.weather[0];
        const{temp, humidity} = data.main;
        const{speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerText = 'Weather in '+ name;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + " °C";
        document.querySelector('.humidity').innerText = "Humidity " + humidity + " %";
        document.querySelector('.wind').innerText = "Wind speed " + speed + " Km/h";

    },

    search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
};

document.getElementById('search-button').addEventListener('click', function(){
    weather.search();
})


 