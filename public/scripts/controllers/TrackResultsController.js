console.log("TrackResultsController Sanity Check!");


angular
    .module('Songparsr')
    .controller('TrackResultsController', TrackResultsController);

TrackResultsController.$inject = ['$routeParams', '$location', '$http', "$scope"];

function TrackResultsController ($routeParams, $location, $http, $scope) {
  console.log('TrackResultsController Function Sanity Check!');
  var vm = this;
  var trackName = $routeParams.trackId
  vm.results =
  $http({
    method: 'GET',
    url: 'https://api.spotify.com/v1/search?limit=15&type=track&q=' + trackName
  }).then(function successCallback(response) {
    vm.results = response.data.tracks;
    console.log(vm.results);
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
  function consoleLog () {
    console.log(track)
   }
}
