const rootURL = 'http://samples.openweathermap.org/data/2.5/weather?appid=9cc92443853f00beabb4db9d55f8af7e';

const fetchWeather = (lat, lon) => {
    const url = `${rootURL}&lat=${lat}&lon=${lon}`;
    
    return fetch(url)
        .then(res => res.json())
        .then(json => ({
            temp: json.main.temp,
            weather: json.weather[0].main
        }));
}

export default fetchWeather;
