angular.module('wisecats', [
  'wisecats.wisecat',
  'wisecats.factories',
  'ngRoute'
])
.config(function ($routeProvider) {
	$httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $routeProvider
    .when('/', {
      templateUrl: 'app/wisecat/wisecat.html',
      controller: 'WiseCatController'
    });
})