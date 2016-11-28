angular.module('shortly.factories', [])

.factory('Images', function ($http) {

  var getImage = function () {
    return $http({
      method: 'GET',
      url: 'http://thecatapi.com/api/images/get'
    })
    .then(function (resp) {
      return resp.body;
    });
  };


  return {
    getImage: getImage,
  };
})

.factory('Quotes', function ($http) {

  var getQuote = function () {
    return $http({
      method: 'GET',
      url: 'http://api.forismatic.com/api/1.0/get?method=getQuote&format=json&lang=en'
    })
    .then(function (resp) {
      return resp.body;
    });
  };


  return {
    getQuote: getQuote,
  };
})
