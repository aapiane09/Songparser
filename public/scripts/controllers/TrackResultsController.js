console.log("TrackResultsController Sanity Check!");


angular
    .module('Songparsr')
    .controller('TrackResultsController', TrackResultsController);

TrackResultsController.$inject = ['$routeParams', '$location', '$http'];

// function TrackResultsController ($routeParams, $location, $http) {
//   console.log('TrackResultsController Function Sanity Check!');
//   var vm = this;
//   var query;
//   var type;
//   $http({
//     method: 'GET',
//     url: 'https://api.spotify.com/v1/search?q=' + query + '&type=' + type
//   }).then(function successCallback(response) {
//     console.log(response.data)
//   }, function errorCallback(response) {
//     console.log('There was an error getting the data', response);
//   });
//
//
// }
