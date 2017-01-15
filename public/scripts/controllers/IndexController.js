console.log("IndexController Sanity Check!");


angular
    .module('Songparsr')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$http'];

function IndexController ($http) {
  console.log('IndexController Function Sanity Check!');
  var vm = this;
  vm.topTracks;
  $http({
    method: 'GET',
    url: 'https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m/top-tracks?country=US'
  }).then(function successCallback(response) {
    vm.topTracks = response.data.tracks;
    console.log(vm.topTracks)
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
}
