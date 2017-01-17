console.log('App.js Sanity Check');

angular.module('Songparsr', ['ngRoute', 'ui.materialize'])
       .config(config);


  ////////////
  // ROUTES //
  ////////////


  config.$inject = ['$routeProvider', '$locationProvider'];
  function config (  $routeProvider,   $locationProvider  )  {
$routeProvider
  .when('/',{
    controller:'IndexController',
    templateUrl:'templates/indextemplate.html',
    controllerAs: 'indexCtrl'
  })
  .when('/results/:trackId',{
    controller:'TrackResultsController',
    templateUrl:'templates/trackresultstemplate.html',
    controllerAs: 'resultCtrl'
  })
  .when('/lyrics/:id',{
    controller:'LyricsController',
    templateUrl:'templates/lyricstemplate.html',
    controllerAs: 'lyricsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })

  $locationProvider
  .html5Mode({
    enabled: true,
    requireBase: false
  });

}
