console.log("IndexController Sanity Check!")

angular
    .module('Songparsr')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$http', '$routeParams', '$location'];

function IndexController ($http, $routeParams, $location) {
  var vm = this;
  vm.exampleTrack = {
    trackName: 'Formation',
    artistName: 'Beyoncé',
    albumName: 'Lemonade'
  };
}
