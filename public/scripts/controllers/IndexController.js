console.log("IndexController Sanity Check!");


angular
    .module('Songparsr')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$routeParams', '$location', '$http', "$scope", "$window"];

function IndexController ($routeParams, $location, $http, $scope, $window) {
  console.log('IndexController Function Sanity Check!');
  var vm = this;
  vm.q = { title: "" }
  vm.topTracks;
  $http({
    method: 'GET',
    url: 'https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m/top-tracks?country=US'
  }).then(function successCallback(response) {
    vm.topTracks = response.data.tracks;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  $scope.goToLyrics = function(title) {
    console.log("goToLyrics is working!")
    var track = encodeURIComponent(title);
    $location.path("/results/" + track);
  }

}
