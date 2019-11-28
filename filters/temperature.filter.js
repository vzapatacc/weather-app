angular
    .module('weather')
    .filter('temperature', TemperatureFilter); 

function TemperatureFilter() {
    return function(temperature, unit) {
        let value;
        if(unit === 'metric') {
            value = temperature - 273.15;
        } else if(unit === 'imperial') {
            value = (temperature - 273.15) * 9/5 + 32
        } else {
            throw new Error('Invalid unit parameter.');
        }
        return `${value.toFixed(2).toString()} ${unit === 'metric' ? 'C' : 'F'}`;
    }
}