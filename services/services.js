angular
    .module('weather')
    .service('WeatherService', WeatherService);

WeatherService.$inject = ['$http']
function WeatherService($http) {
    
    this.apiKey = '1457871719d1b5bee0194d6deab08bfb';
    this.apiURL = 'https://api.openweathermap.org/data/2.5/weather';

    this.callAPI = function(city, unit, callback, callbackError) {
        const url = `${this.apiURL}?q=${encodeURI(city)}&units=${unit}&appid=${this.apiKey}`;
        console.log(url);
        console.log("Calling the Weather API for city: ", city);
        $http.get(url)
            .then(function(result) {
                console.log(result);
                if(result.status === 200) {
                    const data = result.data;
                    const weatherDetail = {
                        city : data.name,
                        country : data.sys.country,
                        temperature : data.main.temp,
                        unit : unit,
                        windSpeed : data.wind.speed,
                        cloud : data.clouds.all,
                        sunrise : new Date(data.sys.sunrise * 1000),
                        sunset : new Date(data.sys.sunset * 1000)
                     };
                    callback(weatherDetail);
                }
            }, 
            function(result) {
                callbackError(result.data.message);
            });
    }
}