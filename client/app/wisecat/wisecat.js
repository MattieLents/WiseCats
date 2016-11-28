angular.module('wisecats.wisecat', [])

.controller('WiseCatController', function ($scope, MakeCats) {

  $scope.data = {};

  var getCat = function () {
    MakeCats.getImage()
      .then(function (image) {
        $scope.data.image = image;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  var getQuote = function () {
    MakeCats.getQuote()
      .then(function (quote) {
        $scope.data.quote = quote;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  getCat();
  getQuote()
});
