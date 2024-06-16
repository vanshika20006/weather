const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '7a5975758emsh8dfcf805f111e5ap1b758cjsn3299e385342f',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityname.innerHTML = city;
    fetch ('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_speed2.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString();
            sunset.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString();
        })
        .catch(err => console.error(err));
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Delhi");
