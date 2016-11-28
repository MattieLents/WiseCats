angular.module('wisecats', [
  'wisecats.wisecat',
  'wisecats.factories',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/wisecat/wisecat.html',
      controller: 'WiseCatController'
    });
})