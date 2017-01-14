console.log('App.js Sanity Check');

angular
    .module('Songparsr', ['ngRoute', 'ui.materialize'])
    .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ( $routeProvider, $locationProvider ) {
  $routeProvider
    .when('/',{
      controller:'IndexController',
      templateURL:'templates/indextemplate',
      controllerAs: 'indexCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

}
