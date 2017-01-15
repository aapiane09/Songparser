console.log("LyricsController Sanity Check!");


angular
    .module('Songparsr')
    .controller('LyricsController', LyricsController);

LyricsController.$inject = ['$routeParams', '$location', '$http'];

function LyricsController ($routeParams, $location, $http) {
  console.log('LyricsController Function Sanity Check!');
  var vm = this;
  var trackId = $routeParams.id;
  vm.track;
  $http({
    method: 'GET',
    url: 'https://api.spotify.com/v1/tracks/' + trackId
  }).then(function successCallback(response) {
    vm.track = response.data;
    console.log(vm.track.id)
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });


}
