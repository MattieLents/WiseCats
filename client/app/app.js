angular.module('wisecats', [
  'wisecats.wisecat',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/wisecat/wisecat.html',
      controller: 'WiseCatController'
    })
})