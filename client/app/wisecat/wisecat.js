angular.module('wisecats.wisecat', [])

.controller('WiseCatController', function ($scope, MakeCats) {

  $scope.data = {};
  $scope.catPic = ''
  $scope.getCatPic = function() {
   MakeCats.getPic()
    .catch(function() {
      MakeCats.getPic();
    })
    .then(function(yay) {
      console.log('yay: ',yay);
      $scope.catPic = yay;
    })
    .catch(function(nooo) {
      throw Error("nooo");
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

  $scope.getCatName = function () {
    MakeCats.getCatName(function (name) {
      $scope.data.catName = name;
    })
  }

  $scope.reloadRoute = function() {
    $scope.getQuote();
    $scope.getCatPic();
    $scope.getCatName();
  }

  $scope.getQuote();
  $scope.getCatPic();
  $scope.getCatName();
});
