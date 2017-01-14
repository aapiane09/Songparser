console.log("IndexController Sanity Check!");


angular.module('Songparsr')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$http'];

function IndexController ($http) {
  console.log('IndexController Sanity Check!');
  var vm = this;
  vm.exampleTrack = {
    trackName: 'Formation',
    artistName: 'Beyoncé',
    albumName: 'Lemonade'
  } ;
}
