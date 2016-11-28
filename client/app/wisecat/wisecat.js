angular.module('wisecats.wisecat', [])

.controller('WiseCatController', function ($scope, Links) {

  $scope.data = {};

  var getCat = function () {
    Images.getImage()
      .then(function (data) {
        $scope.data.image = image;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  var getQuote = function () {
    Quotes.getQuote()
      .then(function (quote) {
        $scope.data.quote = [DATAQUOTE];
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  getCat();
  getQuote()
});
