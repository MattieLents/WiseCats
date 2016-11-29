angular.module('wisecats.wisecat', [])

.controller('WiseCatController', function ($scope, MakeCats) {

  $scope.data = {};
  $scope.catPic = ''
  $scope.getCatPic = function() {
   MakeCats.getPic()
    .then(function(yay) {
      $scope.catPic = yay;
    })
    .catch(function(nooo) {
      throw Error(nooo);
    });
  }

  $scope.getQuote = function () {
    MakeCats.getQuote()
      .then(function (quoteText) {
        $scope.data.quote = quoteText || "ERROR QUOTES ARE ONLY SPOKEN";
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  $scope.reloadRoute = function() {
    $scope.getQuote();
    $scope.getCatPic();
  }
  $scope.getQuote();
    $scope.getCatPic();
});
