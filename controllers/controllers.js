angular
    .module('weather')
    .controller('WeatherController', WeatherController);

WeatherController.$inject = ['WeatherService']
function WeatherController(WeatherService) {
    let vm = this;
    vm.city = 'Cordoba, AR';
    vm.unit = 'metric';
    vm.sortBy = '';
    vm.reverse = false;
    vm.errorMessage = null;
    vm.citiesDetail = [];
    
    vm.submit = function() {
        vm.errorMessage = null;
        WeatherService.callAPI(vm.city.trim(),
        function(cityDetail) {
            vm.citiesDetail.push(cityDetail);
            vm.city = '';
        }, function(errorMessage) {
            vm.errorMessage = errorMessage;
        });  
    }

    vm.sortByHandler = function(field) {
        vm.reverse = (vm.sortBy === field) ? !vm.reverse : true;
        vm.sortBy = field;
    }
}
