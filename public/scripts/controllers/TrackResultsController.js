console.log("TrackResultsController Sanity Check!");


angular
    .module('Songparsr')
    .controller('TrackResultsController', TrackResultsController);

TrackResultsController.$inject = ['$http'];

function TrackResultsController ($http) {
  console.log('TrackResultsController Function Sanity Check!');
  var vm = this;
  vm.exampleTrack = {
    trackName: 'Formation',
    artistName: 'Beyoncé',
    albumName: 'Lemonade'
  } ;
}
